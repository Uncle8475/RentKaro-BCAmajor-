import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
import User from "../models/userModel.js";
import { refreshToken } from "../controllers/authController.js";

export const verifyToken = async (req, res, next) => {
  // Check cookies first (for vendor signings with httpOnly cookies)
  let accessToken = req.cookies?.access_token;
  let refreshToken = req.cookies?.refresh_token;

  // If no cookies, check Authorization header
  if (!accessToken && req.headers.authorization) {
    const authHeader = req.headers.authorization.split(" ")[1];
    if (authHeader) {
      const tokens = authHeader.split(",");
      refreshToken = tokens[0];
      accessToken = tokens[1];
    }
  }

  // If still no token, return error
  if (!accessToken && !refreshToken) {
    return next(errorHandler(403, "No authentication token provided"));
  }

  if (!accessToken) {
    if (!refreshToken) {
      return next(errorHandler(401, "You are not authenticated"));
    }

    try {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
      const user = await User.findById(decoded.id);

      if (!user) return next(errorHandler(403, "Invalid refresh token"));

      if (user.refreshToken !== refreshToken)
        return next(errorHandler(403, "Invalid refresh token"));

      const newAccessToken = jwt.sign(
        { id: user._id },
        process.env.ACCESS_TOKEN,
        { expiresIn: "15m" },
      );
      const newRefreshToken = jwt.sign(
        { id: user._id },
        process.env.REFRESH_TOKEN,
        { expiresIn: "7d" },
      );

      // Update the refresh token in the database for the user
      await User.updateOne(
        { _id: user._id },
        { refreshToken: newRefreshToken },
      );

      req.user = decoded.id;
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  } else {
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
      req.user = decoded.id;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        if (!refreshToken) {
          return next(errorHandler(401, "You are not authenticated"));
        }
      } else {
        next(errorHandler(403, "Token is not valid"));
      }
    }
  }
};
