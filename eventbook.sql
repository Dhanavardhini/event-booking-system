-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3310
-- Generation Time: Feb 17, 2025 at 01:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `enterbook`
--

CREATE TABLE `enterbook` (
  `id` int(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `event` varchar(200) NOT NULL,
  `tickets` varchar(200) NOT NULL,
  `event_date` varchar(150) NOT NULL,
  `time` varchar(100) NOT NULL,
  `payment` varchar(100) NOT NULL,
  `price` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enterbook`
--

INSERT INTO `enterbook` (`id`, `name`, `email`, `phone`, `event`, `tickets`, `event_date`, `time`, `payment`, `price`, `status`) VALUES
(2, 'akshaya', 'akshu@gmail.com', '9159783990', 'musicshow', '1', '22/1/2025', '12.30', 'cash', '1200', 'approved'),
(3, 'Monika', 'kanmani@gmail.com', '7890654326', 'musicshow', '1', '2024-03-02', '23:05', 'cash', '1000', 'Pending'),
(4, 'makesh', 'makesh@gmail.com', '7890654326', 'Music Show', '2', '2025-02-05', '02:05', 'cash', '1440', 'approved');

-- --------------------------------------------------------

--
-- Table structure for table `eventsimg`
--

CREATE TABLE `eventsimg` (
  `id` int(11) NOT NULL,
  `event_type` varchar(100) NOT NULL,
  `event_date` varchar(100) NOT NULL,
  `price` varchar(250) NOT NULL,
  `event_status` varchar(200) NOT NULL,
  `file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eventsimg`
--

INSERT INTO `eventsimg` (`id`, `event_type`, `event_date`, `price`, `event_status`, `file`) VALUES
(1, 'Music Show', '2025-01-05', '720', 'Upcoming', '../upload/67a08e79931c7-mu.jpeg'),
(2, 'Fasion Show', '2025-04-07', '550', 'Upcoming', '../upload/67a08f857ee16-fa.jpeg'),
(4, 'Comedy Show', '2025-05-02', '1000', 'Upcoming', '../upload/67a0947000f8b-com.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `funbook`
--

CREATE TABLE `funbook` (
  `id` int(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `event` varchar(200) NOT NULL,
  `tickets` varchar(200) NOT NULL,
  `event_date` varchar(200) NOT NULL,
  `time` varchar(155) NOT NULL,
  `payment` varchar(155) NOT NULL,
  `price` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `funbook`
--

INSERT INTO `funbook` (`id`, `name`, `email`, `phone`, `event`, `tickets`, `event_date`, `time`, `payment`, `price`, `status`) VALUES
(1, 'harish', 'harisc@gmail.com', '9159783990', 'musicshow', '1', '22/1/2025', '12.30', 'cash', '1200', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `funimg`
--

CREATE TABLE `funimg` (
  `id` int(200) NOT NULL,
  `event_type` varchar(200) NOT NULL,
  `event_date` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `event_status` varchar(200) NOT NULL,
  `file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `funimg`
--

INSERT INTO `funimg` (`id`, `event_type`, `event_date`, `price`, `event_status`, `file`) VALUES
(1, 'Wedding Reception', '2025-04-01', '5000', 'Upcoming', '../upload/67a0a7e65f5fb-w1.jpeg'),
(2, 'Birthday Party', '2025-06-10', '5000', 'Upcoming', '../upload/67a0a83c4c4a8-w2.jpeg'),
(4, 'Anniversary Celebration', '2025-05-02', '15500', 'Upcoming', '../upload/67a0aa1ae13dd-w3.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `username` varchar(150) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`username`, `email`, `password`) VALUES
('akshu', 'akshu@gmail.com', '123456'),
('haris', 'haric@gmail.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `enterbook`
--
ALTER TABLE `enterbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eventsimg`
--
ALTER TABLE `eventsimg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `funbook`
--
ALTER TABLE `funbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `funimg`
--
ALTER TABLE `funimg`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `enterbook`
--
ALTER TABLE `enterbook`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `eventsimg`
--
ALTER TABLE `eventsimg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `funbook`
--
ALTER TABLE `funbook`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `funimg`
--
ALTER TABLE `funimg`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
