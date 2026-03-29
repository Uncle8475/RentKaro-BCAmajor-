# RentKaro: COMPREHENSIVE PROJECT DOCUMENTATION

---

## TITLE PAGE

**Project Name:** RentKaro  
**Subtitle:** Full-Stack Car Rental Management Platform  
**Version:** 1.0  
**Date:** March 2026  
**Team:** Development Team  
**Institution:** BCA Department

---

## TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Project Overview](#project-overview)
3. [System Architecture](#system-architecture)
4. [Technology Stack](#technology-stack)
5. [Database Schema](#database-schema)
6. [Data Flow Diagram](#data-flow-diagram)
7. [User Module Documentation](#user-module-documentation)
8. [Admin Module Documentation](#admin-module-documentation)
9. [Vendor Module Documentation](#vendor-module-documentation)
10. [User Interface Screenshots](#user-interface-screenshots)
11. [API Endpoints](#api-endpoints)
12. [Features & Functionality](#features--functionality)
13. [Installation & Setup](#installation--setup)
14. [Deployment Information](#deployment-information)
15. [Conclusion](#conclusion)

---

## EXECUTIVE SUMMARY

RentKaro is a comprehensive full-stack car rental management platform designed to facilitate seamless vehicle booking, vendor management, and administrative oversight. The platform integrates three distinct user roles (User, Admin, Vendor) with role-based access control, secure authentication, and modern payment processing.

**Key Achievements:**

- Multi-role authentication system with JWT and OAuth
- Real-time booking management system
- Secure payment processing via Razorpay
- Automated email notifications
- Cloud-based image storage via Cloudinary
- Responsive design across all devices
- Production deployment on AWS EC2

---

## PROJECT OVERVIEW

### Objective

To create a scalable, user-friendly car rental platform that enables:

- Users to browse and book vehicles
- Vendors to manage their fleet and receive bookings
- Admins to oversee the entire platform

### Scope

The platform encompasses:

- Complete user management system
- Vehicle discovery and booking workflow
- Payment processing and confirmation
- Admin dashboard for platform management
- Vendor portal for vehicle and order management

### Project Features

- Multi-user authentication system
- Advanced search, filter, and sort capabilities
- JWT-based secure sessions
- Google OAuth integration
- Razorpay payment gateway
- Email notification system
- Image upload and management via Cloudinary
- Responsive UI/UX design

---

## SYSTEM ARCHITECTURE

### Architecture Overview

```
┌─────────────────────────────────────────════─────────────────┐
│                        CLIENT LAYER                           │
│  (React + Redux + Tailwind CSS + Vite)                        │
│  ┌──────────────┬──────────────┬──────────────┐               │
│  │ User Module  │ Admin Module │ Vendor Module│               │
│  └──────────────┴──────────────┴──────────────┘               │
└─────────────────────────────────────┬──────────────────────────┘
                                      │
                    ┌─────────────────▼──────────────────┐
                    │      API GATEWAY / REST API       │
                    │    (Express.js Routes & Auth)     │
                    └─────────────────┬──────────────────┘
                                      │
┌─────────────────────────────────────▼────────────────────────┐
│                     BUSINESS LOGIC LAYER                      │
│  ┌──────────────┬──────────────┬──────────────┐              │
│  │ Controllers  │  Services    │  Middleware  │              │
│  └──────────────┴──────────────┴──────────────┘              │
└─────────────────────────────────────┬────────────────────────┘
                                      │
┌─────────────────────────────────────▼────────────────────────┐
│                      DATA ACCESS LAYER                        │
│  ┌──────────────┬──────────────┬──────────────┐              │
│  │   Models    │  Validators  │  Utilities   │              │
│  └──────────────┴──────────────┴──────────────┘              │
└─────────────────────────────────────┬────────────────────────┘
                                      │
┌─────────────────────────────────────▼────────────────────────┐
│                    EXTERNAL SERVICES                          │
│  ┌──────────────┬──────────────┬──────────────┐              │
│  │  MongoDB     │  Cloudinary  │  Nodemailer  │              │
│  │              │              │ Razorpay     │              │
│  │              │              │ Google OAuth │              │
│  └──────────────┴──────────────┴──────────────┘              │
└──────────────────────────────────────────────────────────────┘
```

### Component Interaction

The application follows an MVC (Model-View-Controller) architecture with clear separation of concerns:

- **Frontend (View)**: React components with Redux state management
- **API Layer (Controller)**: Express.js routes and controllers
- **Business Logic (Service)**: Service layer for complex operations
- **Data Layer (Model)**: MongoDB models and database operations

---

## TECHNOLOGY STACK

### Frontend Technologies

| Component        | Technology      | Purpose                                |
| ---------------- | --------------- | -------------------------------------- |
| Framework        | React 18+       | UI library                             |
| Build Tool       | Vite            | Fast development and production builds |
| State Management | Redux Toolkit   | Global state management                |
| Styling          | Tailwind CSS    | Utility-first CSS framework            |
| UI Components    | Material UI     | Pre-built UI components                |
| Form Validation  | Zod             | Schema validation                      |
| Form Management  | React Hook Form | Efficient form handling                |
| Authentication   | Google OAuth    | Social login                           |
| Payment          | Razorpay        | Payment gateway                        |
| Notifications    | React Toast     | Toast notifications                    |

### Backend Technologies

| Component       | Technology | Purpose                          |
| --------------- | ---------- | -------------------------------- |
| Runtime         | Node.js    | JavaScript runtime               |
| Framework       | Express.js | Web framework                    |
| Database        | MongoDB    | NoSQL database                   |
| Authentication  | JWT        | Secure token-based auth          |
| File Upload     | Multer     | Multipart form data handling     |
| Email           | Nodemailer | Email sending                    |
| Cloud Storage   | Cloudinary | Image storage and CDN            |
| Process Manager | PM2        | Production process management    |
| Reverse Proxy   | Nginx      | Reverse proxy and load balancing |

### DevOps & Deployment

| Component       | Technology | Purpose                |
| --------------- | ---------- | ---------------------- |
| Cloud Platform  | AWS EC2    | Hosting                |
| Reverse Proxy   | Nginx      | Load balancing and SSL |
| DNS Provider    | Cloudflare | DNS and security       |
| Process Manager | PM2        | Application uptime     |

---

## DATABASE SCHEMA

### Place for Database Schema Diagram

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║        [INSERT DATABASE SCHEMA/ER DIAGRAM HERE]                ║
║                                                                ║
║     DIAGRAM SHOULD SHOW:                                       ║
║     • User Collection                                          ║
║     • Vehicle Collection                                       ║
║     • Booking Collection                                       ║
║     • Master Data Collection                                   ║
║     • Relationships between collections                        ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Schema Overview

#### User Collection

```javascript
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String (unique),
  phone: String,
  password: String (hashed),
  role: String (enum: ['user', 'admin', 'vendor']),
  profilePicture: String (Cloudinary URL),
  address: String,
  gstNumber: String (for vendors),
  licenseNumber: String,
  createdAt: Date,
  updatedAt: Date,
  isActive: Boolean,
  isDeleted: Boolean
}
```

#### Vehicle Collection

```javascript
{
  _id: ObjectId,
  vendorId: ObjectId (ref: User),
  model: String,
  category: String,
  images: [String] (Cloudinary URLs),
  pricePerDay: Number,
  registrationNumber: String,
  fuelType: String,
  transmission: String,
  capacity: Number,
  features: [String],
  status: String (enum: ['pending', 'approved', 'rejected', 'active']),
  location: String,
  createdAt: Date,
  updatedAt: Date,
  isDeleted: Boolean
}
```

#### Booking Collection

```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  vehicleId: ObjectId (ref: Vehicle),
  vendorId: ObjectId (ref: User),
  pickupDate: Date,
  dropoffDate: Date,
  pickupLocation: String,
  dropoffLocation: String,
  totalPrice: Number,
  status: String (enum: ['pending', 'confirmed', 'completed', 'cancelled']),
  paymentStatus: String (enum: ['pending', 'paid', 'failed']),
  paymentId: String (Razorpay),
  createdAt: Date,
  updatedAt: Date
}
```

#### Master Data Collection

```javascript
{
  _id: ObjectId,
  type: String (enum: ['location', 'vehicle_category', 'fuel_type', etc.]),
  name: String,
  value: String,
  description: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

---

## DATA FLOW DIAGRAM

### Place for Data Flow Diagram (DFD)

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║        [INSERT DATA FLOW DIAGRAM (DFD) HERE]                   ║
║                                                                ║
║     DIAGRAM SHOULD SHOW:                                       ║
║     • User interactions                                        ║
║     • Data flow between components                             ║
║     • External service integrations                            ║
║     • Database operations                                      ║
║     • Authentication flows                                     ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Key Data Flows

**User Booking Flow:**

1. User searches for vehicles
2. System queries MongoDB for available vehicles
3. User selects vehicle and initiates booking
4. System processes payment via Razorpay
5. Booking record created in database
6. Email notification sent to user and vendor
7. Booking confirmation returned to user

**Vendor Vehicle Upload Flow:**

1. Vendor uploads vehicle details with images
2. Images stored on Cloudinary
3. Vehicle record created with pending status
4. Admin notified for approval
5. Admin approves/rejects vehicle
6. Status updated in database
7. Vendor notified of decision

---

## USER MODULE DOCUMENTATION

### Overview

The User Module enables customers to browse vehicles, make bookings, manage their profiles, and track orders.

### Key Features

#### 1. Vehicle Discovery

- **Search Functionality**: Search by location, model, category
- **Filter Options**: By price range, vehicle type, fuel type, transmission
- **Sort Options**: By price, latest, popularity, availability
- **Advanced Filters**: Rating, features, location radius

#### 2. Vehicle Booking

- **Booking Workflow**:
  1. Select pickup and dropoff dates/locations
  2. View vehicle details and pricing
  3. Proceed to payment
  4. Confirm booking
- **Real-time Availability**: System checks vehicle availability before booking

#### 3. Profile Management

- **View Profile**: Display user information
- **Edit Profile**: Update personal details, address
- **Profile Picture**: Upload and manage avatar
- **Account Settings**: Manage preferences and notifications

#### 4. Order Management

- **View Orders**: List of all bookings (active and past)
- **Order Details**: Booking information, vehicle details, pricing breakdown
- **Order Status**: Track booking status from confirmation to completion
- **Cancel Booking**: Cancel bookings with applicable refunds

#### 5. Authentication

- **Sign Up**: Email/password registration with validation
- **Sign In**: Login with email/password or Google OAuth
- **Password Reset**: Forgot password and reset functionality
- **Session Management**: JWT token-based sessions with refresh tokens

#### 6. Notifications

- **Email Alerts**: Booking confirmation, status updates, reminders
- **In-app Notifications**: Real-time status updates
- **Toast Messages**: Feedback for user actions

---

## ADMIN MODULE DOCUMENTATION

### Overview

The Admin Module provides comprehensive platform management capabilities for system administrators.

### Key Features

#### 1. Dashboard

- **Overview Metrics**:
  - Total bookings (active, completed, cancelled)
  - Total users, vendors, vehicles
  - Revenue statistics
  - Pending approvals count
- **Charts and Insights**: Visual representation of key metrics

#### 2. Booking Management

- **View All Bookings**: Comprehensive list with filters
- **Booking Details**: Complete information about each booking
- **Status Management**: Update booking status
- **Cancellation Handling**: Process cancellations and refunds

#### 3. Vendor Management

- **Vendor Verification**: View vendor details and documents
- **Approve/Reject Vendors**: Manage vendor registration
- **Vendor Removal**: Deactivate or remove vendors from platform
- **Vendor Analytics**: Monitor vendor performance and ratings

#### 4. Vehicle Management

- **Vehicle Approval**: Review and approve vendor-submitted vehicles
- **Vehicle List**: View all vehicles with filters and search
- **Update Details**: Edit vehicle information (if needed)
- **Remove Vehicles**: Deactivate or delete vehicle listings

#### 5. User Management

- **User Directory**: List all users with details
- **User Activity**: Monitor user behavior and booking history
- **Account Management**: Suspend or remove users
- **User Analytics**: Track user engagement metrics

#### 6. Master Data Management

- **Location Management**: Add/edit pickup and dropoff locations
- **Vehicle Categories**: Manage vehicle types and categories
- **Pricing Rules**: Set and manage pricing rules
- **System Settings**: Configure system-wide settings

---

## VENDOR MODULE DOCUMENTATION

### Overview

The Vendor Module allows vehicle owners to list their vehicles, manage bookings, and track revenue.

### Key Features

#### 1. Vendor Registration

- **Sign Up**: Vendor registration with business details
- **Document Upload**: Upload GST certificate, license, vehicle documents
- **Verification**: Admin verification process
- **Account Approval**: Email notification upon approval

#### 2. Vehicle Management

- **Add Vehicles**: Submit vehicle details with images
- **Vehicle Upload**:
  - Model and category selection
  - Upload images (via Cloudinary)
  - Set pricing
  - Add features and specifications
- **Edit Vehicles**: Modify vehicle details
- **Remove Vehicles**: Delist vehicles from platform
- **Approval Status**: Track vehicle approval status

#### 3. Booking Management

- **View Bookings**: List of bookings for vendor's vehicles
- **Booking Details**: Complete information about each booking
- **Order Notifications**: Real-time alerts for new bookings
- **Booking Status Updates**: Mark vehicles as in-use, returned, etc.

#### 4. Dashboard

- **Overview**: Quick statistics
  - Active vehicles
  - Total bookings
  - Upcoming bookings
  - Revenue metrics
- **Revenue Tracking**: Track earnings from each booking
- **Analytics**: Booking trends and popular vehicles

#### 5. Profile Management

- **Vendor Profile**: Display business information
- **Edit Profile**: Update business details
- **Bank Details**: Add/edit payment information for payouts

---

## USER INTERFACE SCREENSHOTS

### Home Page

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║              [INSERT HOMEPAGE SCREENSHOT HERE]                 ║
║                                                                ║
║     Should show:                                               ║
║     • Navigation header with logo and menu                     ║
║     • Hero section with search bar                             ║
║     • Featured vehicles carousel                               ║
║     • Quick filters (location, dates, vehicle type)            ║
║     • Footer with links and information                        ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Vehicle Search & Listing Page

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║       [INSERT VEHICLE SEARCH/LISTING SCREENSHOT HERE]          ║
║                                                                ║
║     Should show:                                               ║
║     • Search filters (price, type, transmission, etc.)         ║
║     • Vehicle grid/list display                                ║
║     • Vehicle cards with images and details                    ║
║     • Pagination controls                                      ║
║     • Sort options                                             ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Vehicle Details Page

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║        [INSERT VEHICLE DETAILS PAGE SCREENSHOT HERE]           ║
║                                                                ║
║     Should show:                                               ║
║     • Vehicle image gallery                                    ║
║     • Vehicle specifications                                   ║
║     • Features list                                            ║
║     • Pricing information                                      ║
║     • Book now button                                          ║
║     • Vendor information                                       ║
║     • Reviews section                                          ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Booking/Checkout Page

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║        [INSERT BOOKING/CHECKOUT PAGE SCREENSHOT HERE]          ║
║                                                                ║
║     Should show:                                               ║
║     • Booking details summary                                  ║
║     • Pickup and dropoff information                           ║
║     • Pricing breakdown                                        ║
║     • Payment options                                          ║
║     • Terms and conditions                                     ║
║     • Confirm booking button                                   ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### User Profile Page

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║         [INSERT USER PROFILE PAGE SCREENSHOT HERE]             ║
║                                                                ║
║     Should show:                                               ║
║     • User information                                         ║
║     • Profile picture                                          ║
║     • Edit profile button                                      ║
║     • Account settings                                         ║
║     • Preferences                                              ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### User Orders/Bookings Page

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║          [INSERT ORDERS PAGE SCREENSHOT HERE]                  ║
║                                                                ║
║     Should show:                                               ║
║     • List of bookings (ongoing, completed, cancelled)         ║
║     • Booking status indicator                                 ║
║     • Vehicle information                                      ║
║     • Dates and locations                                      ║
║     • View details and cancel options                          ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Admin Dashboard

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║          [INSERT ADMIN DASHBOARD SCREENSHOT HERE]              ║
║                                                                ║
║     Should show:                                               ║
║     • Key metrics and statistics                               ║
║     • Charts and graphs                                        ║
║     • Recent activities                                        ║
║     • Quick action buttons                                     ║
║     • Sidebar navigation                                       ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Vendor Dashboard

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║          [INSERT VENDOR DASHBOARD SCREENSHOT HERE]             ║
║                                                                ║
║     Should show:                                               ║
║     • Vehicle management section                               ║
║     • Active bookings                                          ║
║     • Revenue tracking                                         ║
║     • Analytics overview                                       ║
║     • Quick action buttons                                     ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Sign In/Sign Up Pages

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║       [INSERT AUTHENTICATION PAGES SCREENSHOT HERE]            ║
║                                                                ║
║     Should show:                                               ║
║     • Login/registration form                                  ║
║     • Form validation feedback                                 ║
║     • Google OAuth button                                      ║
║     • Forgot password link                                     ║
║     • Sign up/login toggle                                     ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Payment/Razorpay Integration

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║         [INSERT RAZORPAY PAYMENT SCREENSHOT HERE]              ║
║                                                                ║
║     Should show:                                               ║
║     • Payment gateway interface                                ║
║     • Amount and booking details                               ║
║     • Payment confirmation                                     ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

## API ENDPOINTS

### Authentication Endpoints (authRoute.js)

```
POST   /api/auth/signup              - User registration
POST   /api/auth/signin              - User login
POST   /api/auth/logout              - User logout
POST   /api/auth/google-oauth        - Google OAuth authentication
POST   /api/auth/refresh-token       - Refresh JWT token
POST   /api/auth/forgot-password     - Request password reset
POST   /api/auth/reset-password      - Reset password
```

### User Endpoints (userRoute.js)

```
GET    /api/users/profile            - Get user profile
PUT    /api/users/profile            - Update user profile
GET    /api/users/bookings           - Get user's bookings
GET    /api/users/bookings/:id       - Get booking details
POST   /api/users/bookings           - Create booking
PUT    /api/users/bookings/:id       - Update booking
DELETE /api/users/bookings/:id       - Cancel booking
GET    /api/users/vehicles           - Get all vehicles (search/filter)
GET    /api/users/vehicles/:id       - Get vehicle details
POST   /api/users/favorites          - Add vehicle to favorites
GET    /api/users/favorites          - Get favorite vehicles
DELETE /api/users/favorites/:id      - Remove from favorites
```

### Vendor Endpoints (venderRoute.js)

```
POST   /api/vendors/register         - Vendor registration
GET    /api/vendors/profile          - Get vendor profile
PUT    /api/vendors/profile          - Update vendor profile
POST   /api/vendors/vehicles         - Add new vehicle
GET    /api/vendors/vehicles         - Get vendor's vehicles
PUT    /api/vendors/vehicles/:id     - Update vehicle details
DELETE /api/vendors/vehicles/:id     - Remove vehicle
GET    /api/vendors/bookings         - Get vendor's bookings
PUT    /api/vendors/bookings/:id     - Update booking status
GET    /api/vendors/analytics        - Get analytics data
```

### Admin Endpoints (adminRoute.js)

```
GET    /api/admin/dashboard          - Dashboard overview
GET    /api/admin/bookings           - Get all bookings
PUT    /api/admin/bookings/:id       - Update booking
GET    /api/admin/vendors            - Get all vendors
PUT    /api/admin/vendors/:id        - Approve/reject vendor
DELETE /api/admin/vendors/:id        - Remove vendor
GET    /api/admin/vehicles           - Get all vehicles
PUT    /api/admin/vehicles/:id       - Approve/reject vehicle
DELETE /api/admin/vehicles/:id       - Remove vehicle
GET    /api/admin/users              - Get all users
DELETE /api/admin/users/:id          - Remove user
POST   /api/admin/master-data        - Add master data
GET    /api/admin/master-data        - Get master data
```

---

## FEATURES & FUNCTIONALITY

### 1. Authentication & Authorization

- **Multi-role system**: User, Admin, Vendor roles
- **JWT Authentication**: Secure token-based sessions
- **Refresh Tokens**: Long-lived session management
- **Google OAuth**: Social login integration
- **Protected Routes**: Role-based access control
- **Token Validation**: Middleware-based verification

### 2. Vehicle Management

- **Vehicle Browsing**: Search and filter functionality
  - By location, price range, category
  - By fuel type, transmission, capacity
- **Vehicle Details**: Comprehensive information display
  - Images gallery, specifications
  - Features list, pricing, vendor info
- **Vendor Vehicle Upload**: Add vehicles with images via Cloudinary
- **Admin Approval**: Vendor vehicle approval workflow
- **Vehicle Status**: Pending, Approved, Rejected, Active states

### 3. Booking System

- **Search & Filter**: Find available vehicles based on criteria
- **Booking Flow**:
  1. Select vehicle and dates
  2. Confirm pickup/dropoff locations
  3. View pricing breakdown
  4. Proceed to payment
  5. Confirm booking
- **Real-time Availability**: Check vehicle availability before booking
- **Booking Status**: Pending, Confirmed, Completed, Cancelled
- **Booking Cancellation**: Cancel with refund calculation

### 4. Payment Processing

- **Razorpay Integration**: Secure payment gateway
- **Payment Status Tracking**: Pending, Paid, Failed statuses
- **Invoice Generation**: Receipt for completed bookings
- **Refund Processing**: Automated refunds for cancellations

### 5. User Management

- **Profile Management**: View and edit user information
- **Profile Picture**: Upload and manage avatar
- **User History**: Track booking history
- **Preferences**: Manage notification settings
- **Account Deletion**: User account removal option

### 6. Notification System

- **Email Notifications** (Nodemailer):
  - Booking confirmation
  - Booking status updates
  - New vendor bookings (vendor notifications)
  - Password reset emails
  - Admin alerts
- **In-app Notifications**: Toast messages and alerts
- **Real-time Updates**: Status change notifications

### 7. Image Management

- **Cloudinary Integration**:
  - Vehicle image uploads
  - User profile picture uploads
  - Image optimization and CDN delivery
  - Secure image storage

### 8. Admin Dashboard

- **Overview Metrics**: Key statistics and KPIs
- **Booking Analytics**: Booking trends and statistics
- **User Analytics**: User engagement metrics
- **Vendor Management**: Vendor approval and monitoring
- **Revenue Reporting**: Platform revenue tracking
- **System Settings**: Configure platform settings

### 9. Vendor Dashboard

- **Vehicle Management**: Add, edit, delete vehicles
- **Booking Overview**: View all bookings for vendor's vehicles
- **Revenue Tracking**: Earnings and payment status
- **Analytics**: Popular vehicles, booking trends
- **Payout Management**: Track payments and payouts

### 10. Search & Filter

- **Advanced Search**: Multi-criteria search
- **Filtering**: Price range, vehicle type, fuel type, etc.
- **Sorting**: By price, date added, popularity
- **Autocomplete**: Location suggestions
- **Saved Searches**: Save frequently used search criteria

---

## INSTALLATION & SETUP

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas cloud)
- Git

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with the following variables:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# REFRESH_TOKEN_SECRET=your_refresh_token_secret
# CLOUDINARY_NAME=your_cloudinary_name
# CLOUDINARY_API_KEY=your_cloudinary_api_key
# CLOUDINARY_API_SECRET=your_cloudinary_api_secret
# RAZORPAY_KEY_ID=your_razorpay_key
# RAZORPAY_SECRET_KEY=your_razorpay_secret
# NODEMAILER_USER=your_email
# NODEMAILER_PASS=your_email_password
# GOOGLE_CLIENT_ID=your_google_oauth_client_id
# GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
# PORT=5000

# Start development server
npm run dev

# Or start with PM2
pm2 start server.js --name "RentKaro"
```

### Frontend Setup

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Create .env file with the following variables:
# VITE_API_URL=http://localhost:5000/api
# VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
# VITE_RAZORPAY_KEY=your_razorpay_key

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Configuration

**Backend .env Example:**

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/RentKaro
JWT_SECRET=your-super-secret-jwt-secret-key
REFRESH_TOKEN_SECRET=your-super-secret-refresh-token-key
CLOUDINARY_NAME=your_cloudinary_account_name
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
RAZORPAY_KEY_ID=rzp_test_XXXXX
RAZORPAY_SECRET_KEY=your-razorpay-secret
NODEMAILER_USER=your-email@gmail.com
NODEMAILER_PASS=your-app-password
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
PORT=5000
NODE_ENV=development
```

**Frontend .env Example:**

```
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_RAZORPAY_KEY=rzp_test_XXXXX
```

---

## DEPLOYMENT INFORMATION

### Deployment Architecture

```
┌─────────────────────────────────────────┐
│          AWS EC2 Instance               │
│ ┌───────────────────────────────────┐   │
│ │  Nginx (Reverse Proxy / LB)       │   │
│ │  • SSL/TLS Termination            │   │
│ │  • Load Balancing                 │   │
│ │  • Static File Serving            │   │
│ └───────────┬───────────────────────┘   │
│             │                           │
│ ┌───────────▼──────────┬────────────┐   │
│ │ PM2 Process Manager  │ Frontend   │   │
│ │ • Backend API        │ Build      │   │
│ │ • Auto-restart       │ (Static)   │   │
│ │ • Clustering         │            │   │
│ └──────────────────────┴────────────┘   │
└─────────────────────────────────────────┘
         │
    ┌────▼─────────┐
    │  Cloudflare  │
    │  DNS / CDN   │
    └──────────────┘
```

### Deployment Steps

#### 1. AWS EC2 Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Install MongoDB client tools (optional)
sudo apt install -y mongodb-tools
```

#### 2. Application Deployment

```bash
# Clone repository
git clone https://github.com/jeevan-aj/RentKaro.git
cd RentKaro

# Install backend dependencies
cd backend
npm install
npm run dev

# Install frontend and build
cd ../client
npm install
npm run dev
```

#### 3. Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    # Frontend
    location / {
        root /path/to/client/dist;
        try_files $uri $uri/ /index.html;
    }

    # API Proxy
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 4. SSL Certificate (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com
```

#### 5. Database Backups

```bash
# Automated MongoDB backup script
0 2 * * * mongodump --uri="mongodb+srv://..." --out /backups/$(date +\%Y\%m\%d)
```

### Performance Optimization

- **CDN Integration**: Cloudflare for static assets
- **Image Optimization**: Cloudinary image compression
- **Database Indexing**: Optimized MongoDB queries
- **Redis Caching** (optional): For session and frequently accessed data
- **PM2 Clustering**: Multi-process Node.js handling

### Monitoring & Maintenance

- **PM2 Monitoring**: `pm2 monit` for process monitoring
- **Nginx Logs**: Monitor access and error logs
- **MongoDB Performance**: Monitor query performance
- **Uptime Monitoring**: Use services like Uptime Robot
- **Error Tracking**: Consider Sentry or similar

---

## CONCLUSION

RentKaro represents a comprehensive, production-ready car rental management platform that demonstrates:

✅ **Modern Full-Stack Development**: React, Node.js, MongoDB with best practices
✅ **Security**: JWT authentication, role-based access, secure payment processing
✅ **Scalability**: MVC architecture, microservice-ready design
✅ **User Experience**: Intuitive UI with Tailwind CSS and Material UI
✅ **Integration**: Third-party services (Razorpay, Cloudinary, Nodemailer, OAuth)
✅ **Deployment**: Production-ready deployment on AWS with Nginx and PM2

### Future Enhancements

- **Mobile App**: React Native or Flutter mobile application
- **Analytics**: Advanced analytics dashboard with AI insights
- **AI Features**: Smart recommendations, dynamic pricing
- **Real-time**: WebSocket integration for live notifications
- **Machine Learning**: Predictive pricing and demand forecasting
- **Microservices**: Migration to microservices architecture

### Team & Acknowledgments

- **Project Lead**: [Your Name]
- **Development Team**: [Team Members]
- **Institution**: BCA Department
- **Supervisor**: [Supervisor Name]

---

## APPENDIX

### A. File Structure

```
RentKaro/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── adminControllers/
│   │   ├── userControllers/
│   │   └── vendorControllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
└── README.md
```

### B. Glossary

- **JWT**: JSON Web Token
- **OAuth**: Open Authorization
- **API**: Application Programming Interface
- **MVC**: Model-View-Controller
- **CRUD**: Create, Read, Update, Delete
- **DFD**: Data Flow Diagram
- **ER**: Entity-Relationship
- **SSL**: Secure Socket Layer
- **CDN**: Content Delivery Network

### C. References

- MongoDB Documentation: https://docs.mongodb.com/
- Express.js Guide: https://expressjs.com/
- React Documentation: https://react.dev/
- Redux Documentation: https://redux.js.org/
- Tailwind CSS: https://tailwindcss.com/
- Razorpay Documentation: https://razorpay.com/docs/
- Cloudinary Documentation: https://cloudinary.com/documentation
- Nodemailer Documentation: https://nodemailer.com/

---

**Document Version**: 1.0  
**Last Updated**: March 29, 2026  
**Status**: Final

---

_This documentation is comprehensive and ready for PDF conversion using tools like Pandoc, wkhtmltopdf, or online converters._
