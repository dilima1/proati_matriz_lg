-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: localhost    Database: peopleslagoacarro
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `people`
--

DROP TABLE IF EXISTS `people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `people` (
  `idpeople` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `idade` varchar(45) NOT NULL,
  `membro` varchar(45) NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `bairro` varchar(45) NOT NULL,
  `fone` varchar(45) DEFAULT NULL,
  `celular` varchar(45) DEFAULT NULL,
  `renda` varchar(45) NOT NULL,
  `trabalha` varchar(45) NOT NULL,
  `estadoCivil` varchar(45) NOT NULL,
  `acompanhante` varchar(45) NOT NULL,
  `tipoSanguineo` varchar(45) DEFAULT NULL,
  `fatorRH` varchar(45) DEFAULT NULL,
  `alergias` varchar(45) NOT NULL,
  `pressaoAlta` varchar(45) NOT NULL,
  `diabetes` varchar(45) NOT NULL,
  `medicacaoContinua` varchar(45) NOT NULL,
  `cartaoSUS` varchar(45) NOT NULL,
  `nascimento` varchar(45) DEFAULT NULL,
  `cartaoMembro` varchar(45) NOT NULL,
  PRIMARY KEY (`idpeople`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `people`
--

LOCK TABLES `people` WRITE;
/*!40000 ALTER TABLE `people` DISABLE KEYS */;
INSERT INTO `people` VALUES (13,'Crislayne Barbosa de santana LIma','30','SIM','Rua Projetada','Campo Grande','9 96511015','9 96551015','SIM','SIM','casado','Esposa Cris','B+','teste','Poeira','Não','Não','Não','123456789','1991-11-16','123456789'),(17,'Edilson Correia de Lima Filho','30','SIM','res','Campo Grande','56456456','9 96551015','SIM','SIM','casado','Esposa Cris','B-','fatorRH','Poeira','pressao','diabetes','medica','cartaoSUS','1991-11-16','123456'),(18,'Juliana','33','SIM','Rua Projetada','bairro','9 96511015','546456','SIM','SIM','casado','esposo','B+','sdfdsf','Poeira','Não','Não','sdfsdf','cartaoSUS','6668-11-16','123456'),(19,'Juliana','33','SIM','Rua Projetada','bairro','9 96511015','546456','SIM','SIM','casado','esposo','B+','sdfdsf','Poeira','Não','Não','sdfsdf','cartaoSUS','6668-11-16','123456');
/*!40000 ALTER TABLE `people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'peopleslagoacarro'
--

--
-- Dumping routines for database 'peopleslagoacarro'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-18 20:38:04
