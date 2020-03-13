-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-03-2020 a las 22:37:50
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mascotas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id_ciudad` int(11) NOT NULL,
  `latitud` int(11) NOT NULL,
  `longitud` int(11) NOT NULL,
  `c_postal` int(7) NOT NULL,
  `provincia` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `poblacion` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id_ciudad`, `latitud`, `longitud`, `c_postal`, `provincia`, `poblacion`) VALUES
(1, 0, 0, 0, 'Álava', ''),
(2, 0, 0, 0, 'Albacete', ''),
(3, 0, 0, 0, 'Alicante', ''),
(4, 0, 0, 0, 'Almería', ''),
(5, 0, 0, 0, 'Ávila', ''),
(6, 0, 0, 0, 'Badajoz', ''),
(7, 0, 0, 0, 'Baleares (Illes)', ''),
(8, 0, 0, 0, 'Barcelona', ''),
(9, 0, 0, 0, 'Burgos', ''),
(10, 0, 0, 0, 'Cáceres', ''),
(11, 0, 0, 0, 'Cádiz', ''),
(12, 0, 0, 0, 'Castellón', ''),
(13, 0, 0, 0, 'Ciudad Real', ''),
(14, 0, 0, 0, 'Córdoba', ''),
(15, 0, 0, 0, 'A Coruña', ''),
(16, 0, 0, 0, 'Cuenca', ''),
(17, 0, 0, 0, 'Girona', ''),
(18, 0, 0, 0, 'Granada', ''),
(19, 0, 0, 0, 'Guadalajara', ''),
(20, 0, 0, 0, 'Guipúzcoa', ''),
(21, 0, 0, 0, 'Huelva', ''),
(22, 0, 0, 0, 'Huesca', ''),
(23, 0, 0, 0, 'Jaén', ''),
(24, 0, 0, 0, 'León', ''),
(25, 0, 0, 0, 'Lleida', ''),
(26, 0, 0, 0, 'La Rioja', ''),
(27, 0, 0, 0, 'Lugo', ''),
(28, 0, 0, 0, 'Madrid', ''),
(29, 0, 0, 0, 'Málaga', ''),
(30, 0, 0, 0, 'Murcia', ''),
(31, 0, 0, 0, 'Navarra', ''),
(32, 0, 0, 0, 'Ourense', ''),
(33, 0, 0, 0, 'Asturias', ''),
(34, 0, 0, 0, 'Palencia', ''),
(35, 0, 0, 0, 'Las Palmas', ''),
(36, 0, 0, 0, 'Pontevedra', ''),
(37, 0, 0, 0, 'Salamanca', ''),
(38, 0, 0, 0, 'Santa Cruz de Tenerife', ''),
(39, 0, 0, 0, 'Cantabria', ''),
(40, 0, 0, 0, 'Segovia', ''),
(41, 0, 0, 0, 'Sevilla', ''),
(42, 0, 0, 0, 'Soria', ''),
(43, 0, 0, 0, 'Tarragona', ''),
(44, 0, 0, 0, 'Teruel', ''),
(45, 0, 0, 0, 'Toledo', ''),
(46, 0, 0, 0, 'Valencia', ''),
(47, 0, 0, 0, 'Valladolid', ''),
(48, 0, 0, 0, 'Vizcaya', ''),
(49, 0, 0, 0, 'Zamora', ''),
(50, 0, 0, 0, 'Zaragoza', ''),
(51, 0, 0, 0, 'Ceuta', ''),
(52, 0, 0, 0, 'Melilla', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentariossitios`
--

CREATE TABLE `comentariossitios` (
  `id_comentario` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `texto` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `id_sitio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consejos`
--

CREATE TABLE `consejos` (
  `id_consejo` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `id_tipoconsejo` int(11) NOT NULL,
  `descripcion` varchar(5000) COLLATE utf8_spanish_ci NOT NULL,
  `comentarios` varchar(5000) COLLATE utf8_spanish_ci NOT NULL,
  `foto` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sitios`
--

CREATE TABLE `sitios` (
  `id_sitio` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(5000) COLLATE utf8_spanish_ci NOT NULL,
  `foto` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `precio` int(100) NOT NULL,
  `capacidad` int(100) NOT NULL,
  `valoracion` int(100) NOT NULL,
  `id_comentario` int(11) DEFAULT NULL,
  `telefono` int(12) NOT NULL,
  `web` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `id_ciudad` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `sitios`
--

INSERT INTO `sitios` (`id_sitio`, `nombre`, `descripcion`, `foto`, `precio`, `capacidad`, `valoracion`, `id_comentario`, `telefono`, `web`, `id_ciudad`, `id_usuario`, `id_tipo`) VALUES
(1, 'ManuAndFriends', 'Camping muy comodo con piscina', '', 20, 50, 0, NULL, 666970846, 'www.mmfive.com', 13, 2, 5),
(2, 'Ejemplo apartamento', 'es un ejemplo de un apartamento', '', 49, 6, 0, NULL, 65656565, 'www.hinojosafive.com', 39, 3, 4),
(3, 'ejemplo spartamnto', 'sdfsds', '', 49, 6, 5, NULL, 45545454, 'www.hinojosafive.com', 20, 3, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiposconsejos`
--

CREATE TABLE `tiposconsejos` (
  `id_tipoconsejo` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipositios`
--

CREATE TABLE `tipositios` (
  `id_tipositio` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipositios`
--

INSERT INTO `tipositios` (`id_tipositio`, `nombre`) VALUES
(1, 'Hotel'),
(2, 'Playa'),
(3, 'Parque '),
(4, 'Apartamento'),
(5, 'Camping'),
(6, 'Restaurante'),
(7, 'Tienda de animales'),
(8, 'Veterinario'),
(9, 'Rutas de senderismo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` int(11) NOT NULL,
  `f_nac` date NOT NULL,
  `tipo_usuario` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellidos`, `password`, `email`, `telefono`, `f_nac`, `tipo_usuario`) VALUES
(1, 'angel', 'plaza', '1234', 'angel@gmail.com', 666666666, '2020-02-12', 'admin'),
(2, 'Alvaro', 'Ramirez', '1234', 'alvaro@gmail.com', 656565656, '2020-03-04', ''),
(3, 'Carlos', 'Lopez', '1234', 'Carlos@gmail.com', 543654213, '2020-03-28', ''),
(4, 'Raul', 'jimenez', '1234', 'raul@gmail.com', 545454545, '2020-03-25', ''),
(11, '', '', '', '', 0, '0000-00-00', ''),
(12, '', '', '', '', 0, '0000-00-00', ''),
(13, '', '', '', '', 0, '0000-00-00', ''),
(14, '', '', '', '', 0, '0000-00-00', ''),
(15, '', '', '', '', 0, '0000-00-00', ''),
(16, '', '', '', '', 0, '0000-00-00', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id_ciudad`);

--
-- Indices de la tabla `comentariossitios`
--
ALTER TABLE `comentariossitios`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Indices de la tabla `consejos`
--
ALTER TABLE `consejos`
  ADD PRIMARY KEY (`id_consejo`),
  ADD KEY `usuarioconsejo` (`id_usuario`),
  ADD KEY `tipoconsejo` (`id_tipoconsejo`);

--
-- Indices de la tabla `sitios`
--
ALTER TABLE `sitios`
  ADD PRIMARY KEY (`id_sitio`),
  ADD KEY `usuariositio` (`id_usuario`),
  ADD KEY `sitiociudad` (`id_ciudad`),
  ADD KEY `tipositios` (`id_tipo`),
  ADD KEY `comentariossitio` (`id_comentario`);

--
-- Indices de la tabla `tiposconsejos`
--
ALTER TABLE `tiposconsejos`
  ADD PRIMARY KEY (`id_tipoconsejo`);

--
-- Indices de la tabla `tipositios`
--
ALTER TABLE `tipositios`
  ADD PRIMARY KEY (`id_tipositio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id_ciudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `comentariossitios`
--
ALTER TABLE `comentariossitios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `consejos`
--
ALTER TABLE `consejos`
  MODIFY `id_consejo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sitios`
--
ALTER TABLE `sitios`
  MODIFY `id_sitio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tiposconsejos`
--
ALTER TABLE `tiposconsejos`
  MODIFY `id_tipoconsejo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipositios`
--
ALTER TABLE `tipositios`
  MODIFY `id_tipositio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `consejos`
--
ALTER TABLE `consejos`
  ADD CONSTRAINT `tipoconsejo` FOREIGN KEY (`id_tipoconsejo`) REFERENCES `tiposconsejos` (`id_tipoconsejo`),
  ADD CONSTRAINT `usuarioconsejo` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sitios`
--
ALTER TABLE `sitios`
  ADD CONSTRAINT `comentariossitio` FOREIGN KEY (`id_comentario`) REFERENCES `comentariossitios` (`id_comentario`),
  ADD CONSTRAINT `sitiociudad` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudades` (`id_ciudad`),
  ADD CONSTRAINT `tipositios` FOREIGN KEY (`id_tipo`) REFERENCES `tipositios` (`id_tipositio`),
  ADD CONSTRAINT `usuariositio` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
