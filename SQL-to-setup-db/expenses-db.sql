-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 17, 2022 at 02:27 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `expenses-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_name`
--

CREATE TABLE `category_name` (
  `id` int(255) UNSIGNED NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category_name`
--

INSERT INTO `category_name` (`id`, `category_name`) VALUES
(1, 'Їжа'),
(2, 'Розваги'),
(3, 'Оренда'),
(4, 'Одяг'),
(5, 'Догляд за собою'),
(6, 'Розхідники');

-- --------------------------------------------------------

--
-- Table structure for table `expeneses`
--

CREATE TABLE `expeneses` (
  `id` int(255) UNSIGNED NOT NULL,
  `category_name_id` int(255) UNSIGNED NOT NULL,
  `user_id` int(255) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `expense` decimal(65,0) NOT NULL,
  `comment` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `expeneses`
--

INSERT INTO `expeneses` (`id`, `category_name_id`, `user_id`, `date`, `expense`, `comment`) VALUES
(1, 3, 1, '2022-08-07', '4000', 'Заплатив оренду'),
(2, 1, 1, '2022-08-05', '500', 'Хліб, молоко, яйця, цибуля, картопля, м\'ясо'),
(3, 5, 1, '2022-08-05', '800', 'Стрижка, лосьйон після гоління, гель для душу, дезодорант'),
(4, 2, 1, '2022-08-03', '600', 'Аквапарк'),
(5, 3, 2, '2022-08-05', '3500', 'Заплатив оренду'),
(6, 4, 2, '2022-08-08', '1500', 'Джинси, сорочка'),
(9, 3, 4, '2022-07-05', '1000', 'bought some lame'),
(10, 3, 3, '2022-10-10', '2000', 'added from category');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(255) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`) VALUES
(1, 'Stan Marsh'),
(2, 'Kyle Broflowski'),
(3, 'Eric Cartman'),
(4, 'Kenny McCormick');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_name`
--
ALTER TABLE `category_name`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expeneses`
--
ALTER TABLE `expeneses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `category_name_id` (`category_name_id`) USING BTREE;

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_name`
--
ALTER TABLE `category_name`
  MODIFY `id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `expeneses`
--
ALTER TABLE `expeneses`
  MODIFY `id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `expeneses`
--
ALTER TABLE `expeneses`
  ADD CONSTRAINT `expeneses_ibfk_1` FOREIGN KEY (`category_name_id`) REFERENCES `category_name` (`id`),
  ADD CONSTRAINT `expeneses_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
