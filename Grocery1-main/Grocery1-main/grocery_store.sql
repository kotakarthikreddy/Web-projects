-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2019 at 12:14 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grocery_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(10) NOT NULL,
  `userId` int(10) NOT NULL,
  `itemId` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `qty` int(10) NOT NULL,
  `amt` int(10) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `userId`, `itemId`, `name`, `qty`, `amt`, `date`) VALUES
(1, 3, 4, 'Kadak Chilli Powder 35gm', 1, 40, '2019-04-16 09:27:07'),
(2, 3, 1, 'Desi Garam Masala 50gm', 1, 45, '2019-04-16 09:27:07'),
(4, 2, 1, 'Desi Garam Masala 50gm', 1, 45, '2019-04-16 09:33:57'),
(5, 2, 5, 'Tide Pods 1Kg ', 1, 105, '2019-04-16 09:33:57'),
(6, 2, 2, 'Dant Kanti Tooth Paste 45gm', 2, 70, '2019-04-16 09:33:57');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(10) NOT NULL,
  `itemId` int(10) NOT NULL,
  `userId` int(10) NOT NULL,
  `amt` int(10) NOT NULL,
  `qty` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(8) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `category` varchar(225) NOT NULL,
  `description` varchar(255) NOT NULL,
  `stocks` varchar(255) NOT NULL,
  `ratings` int(8) NOT NULL,
  `img` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `price`, `category`, `description`, `stocks`, `ratings`, `img`, `brand`) VALUES
(1, 'Desi Garam Masala 50gm', '45', 'Source1', '\r\nHow To Write Product Descriptions To Grow Sales [Samples Below + Updated in 2019]\r\n\r\n\r\nGET THE PRINT VERSION\r\n\r\nTired of scrolling? Download a PDF version for easier offline reading and sharing with coworkers. \r\nDOWNLOAD PDF\r\n\r\nEcommerce managers and on', '29', 8, 'images/garam_masala.jpg', 'MDH'),
(2, 'Dant Kanti Tooth Paste 45gm', '35', 'Source1', '\r\nHow To Write Product Descriptions To Grow Sales [Samples Below + Updated in 2019]\r\n\r\n\r\nGET THE PRINT VERSION\r\n\r\nTired of scrolling? Download a PDF version for easier offline reading and sharing with coworkers. \r\nDOWNLOAD PDF\r\n\r\nEcommerce managers and on', '0', 9, 'images/dant_kanti.png', 'Patanjli'),
(3, 'Bournvita 1kg', '95', 'Source2', '\r\nHow To Write Product Descriptions To Grow Sales [Samples Below + Updated in 2019]\r\n\r\n\r\nGET THE PRINT VERSION\r\n\r\nTired of scrolling? Download a PDF version for easier offline reading and sharing with coworkers. \r\nDOWNLOAD PDF\r\n\r\nEcommerce managers and on', '1', 4, 'images/bournvita.jpg', 'Cadbury'),
(4, 'Kadak Chilli Powder 35gm', '40', 'Source2', '\r\nHow To Write Product Descriptions To Grow Sales [Samples Below + Updated in 2019]\r\n\r\n\r\nGET THE PRINT VERSION\r\n\r\nTired of scrolling? Download a PDF version for easier offline reading and sharing with coworkers. \r\nDOWNLOAD PDF\r\n\r\nEcommerce managers and on', '45', 10, 'images/powder.jpg', 'Sanjay Da Super Star'),
(5, 'Tide Pods 1Kg ', '105', 'Source1', '\r\nHow To Write Product Descriptions To Grow Sales [Samples Below + Updated in 2019]\r\n\r\n\r\nGET THE PRINT VERSION\r\n\r\nTired of scrolling? Download a PDF version for easier offline reading and sharing with coworkers. \r\nDOWNLOAD PDF\r\n\r\nEcommerce managers and on', '15', 8, 'images/tide.jpg', 'Tide');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `isBan` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `username`, `password`, `isAdmin`, `isBan`) VALUES
(1, 'admin', 'admin@admin.com', 'admin', 'admin', 1, 0),
(2, 'tester', 'test@test.com', 'tester', 'tester', 0, 0),
(3, 'normal', 'normal@normal.com', 'normal', 'normal', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
