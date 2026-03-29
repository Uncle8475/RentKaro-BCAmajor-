import mongoose from "mongoose";
import User from "./models/userModel.js";

const createAdmin = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/BCAmajor");

    // Delete existing admin
    await User.deleteOne({ email: "admin@rentaride.com" });
    console.log("Deleted existing admin (if any)");

    // Create new admin
    const admin = new User({
      username: "admin",
      email: "admin@rentaride.com",
      password: "$2a$10$/xJpXythiEtCvYKqYQ06huEMo5BeVh2/En0oCtqrTZcAigi58Su9C", // admin@123
      isAdmin: true,
      isUser: false,
      isVendor: false,
    });

    await admin.save();
    console.log("✅ Admin recreated successfully!");
    console.log("Email: admin@rentaride.com");
    console.log("Password: admin@123");
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createAdmin();
