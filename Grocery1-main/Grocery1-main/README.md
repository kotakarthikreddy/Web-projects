# 🛒 GreenOcery - Online Grocery Store

## 📝 Project Overview
**GreenOcery** is a web-based application designed to facilitate online grocery shopping. Built using **PHP** and **MySQL**, it provides a user-friendly interface for customers to browse products, view details, manage their cart, and place orders. It also features a comprehensive **Admin Panel** for managing inventory and orders.

## ✨ Key Features
*   **User Authentication**: Secure login and registration system.
*   **Product Catalog**: browse a wide range of grocery items with images and prices.
*   **Shopping Cart**: Add items, view cart summary, and checkout.
*   **Admin Dashboard**: Manage products, stocks, and view orders (located in `Admin/` folder).
*   **Notifications**: Notice board for announcements (`noticeBoard.php`).
*   **Stock Management**: Visual indicators for out-of-stock items.

## 📂 Folder Structure
```text
.
├── 📂 Admin/           # Admin dashboard files
├── 📂 css/             # Stylesheets (Bootstrap, custom CSS)
├── 📂 fonts/           # Font assets
├── 📂 footer/          # Footer component
├── 📂 header/          # Header/Navbar component
├── 📂 images/          # Product and UI images
├── 📂 js/              # JavaScript files (jQuery, Bootstrap)
├── 📂 vendor/          # Third-party libraries
├── 📄 grocery_store.sql # Database schema and dump
├── 📄 index.html       # Redirect to index.php
├── 📄 index.php        # Main Homepage
├── 📄 login.php        # User login page
├── 📄 register.php     # User registration page
├── 📄 viewCart.php     # Shopping cart view
└── 📄 README.md        # Project documentation
```

## 🛠️ Prerequisites & Setup
To run this project locally, you need a local web server environment like **XAMPP**, **WAMP**, or **MAMP**.

1.  **Install XAMPP/WAMP**: Download and install a PHP local server.
2.  **Clone/Download**: Place the project folder into your `htdocs` (for XAMPP) or `www` (for WAMP) directory.
3.  **Database Setup**:
    *   Open phpMyAdmin (`http://localhost/phpmyadmin`).
    *   Create a new database named `grocery_store`.
    *   Import the `grocery_store.sql` file provided in the project root.
4.  **Configuration**:
    *   Verify database connection settings in `index.php` (and other php files if necessary):
        ```php
        $con=mysqli_connect("localhost","root","","grocery_store");
        ```

## 🚀 Usage
1.  Start Apache and MySQL modules in your XAMPP/WAMP control panel.
2.  Open your browser and navigate to:
    `http://localhost/Grocery1-main/Grocery1-main/index.php`
    *(Adjust path based on your folder structure in `htdocs`)*
3.  Register a new account or log in to start shopping.

## 💻 Tech Stack
*   **Frontend**: HTML5, CSS3, Bootstrap, JavaScript/jQuery
*   **Backend**: PHP
*   **Database**: MySQL
