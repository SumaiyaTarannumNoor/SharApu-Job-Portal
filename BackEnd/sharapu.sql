-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2025 at 11:48 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sharapu`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `hashed_password` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `is_verified` tinyint(1) DEFAULT NULL,
  `how_to_use` enum('PARTICIPATE_IN_WORK','APPLY_FOR_JOB') DEFAULT NULL,
  `about_registration` enum('INDIVIDUAL','CORPORATION') DEFAULT NULL,
  `agreed_to_terms` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `hashed_password`, `is_active`, `is_verified`, `how_to_use`, `about_registration`, `agreed_to_terms`) VALUES
(1, 'user@example.com', 'string', '$2b$12$jNHqrGC4xhrEoAxPvjhptufsLj86bnhZ03.d75Y2NMdA1GrNQQXha', 1, 0, '', 'INDIVIDUAL', 1),
(5, 'user1@example.com', 'string1', '$2b$12$xWbmAE1/XaHxmkfe2C8Sf.OicwLV7oyTPn6GYEx8vGEAiHNr4UDLy', 1, 0, 'PARTICIPATE_IN_WORK', 'INDIVIDUAL', 1),
(6, 'user3@example.com', 'string12', '$2b$12$Z1rJfeWotWft4j8YKig/ouW3VGStDj6RNwckgrO8iEIbIRAnvAyTK', 1, 0, 'PARTICIPATE_IN_WORK', 'INDIVIDUAL', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ix_users_username` (`username`),
  ADD UNIQUE KEY `ix_users_email` (`email`),
  ADD KEY `ix_users_id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
