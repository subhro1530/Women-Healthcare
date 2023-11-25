// Footer.js
import { Box, Flex, Link, IconButton } from "@chakra-ui/react";
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg="black"
      color="white"
      py="4"
      px={{ base: "4", md: "10" }}
      textAlign="center"
    >
      <Flex justify="space-between" align="center" flexWrap="wrap">
        <Link
          href="/"
          mr={4}
          _hover={{ textDecoration: "none", color: "teal.300" }}
          transition="0.3s"
        >
          <Flex align="center">
            <IconButton
              icon={<FaHome />}
              fontSize="20px"
              mr={2}
              color="white"
              bg="transparent"
              _hover={{ color: "currentColor", bg: "transparent" }}
            />
            Home
          </Flex>
        </Link>

        <Link
          href="/about"
          mr={4}
          _hover={{ textDecoration: "none", color: "teal.300" }}
          transition="0.3s"
        >
          <Flex align="center">
            <IconButton
              icon={<FaInfoCircle />}
              fontSize="20px"
              mr={2}
              color="white"
              bg="transparent"
              _hover={{ color: "currentColor", bg: "transparent" }}
            />
            About Us
          </Flex>
        </Link>

        <Link
          href="/contact"
          mr={4}
          _hover={{ textDecoration: "none", color: "teal.300" }}
          transition="0.3s"
        >
          <Flex align="center">
            <IconButton
              icon={<FaPhone />}
              fontSize="20px"
              mr={2}
              color="white"
              bg="transparent"
              _hover={{ color: "currentColor", bg: "transparent" }}
            />
            Contact Us
          </Flex>
        </Link>

        {/* Add your social media links here */}
        <Flex align="center">
          <IconButton
            icon={<FaTwitter />}
            fontSize="20px"
            mr={2}
            color="white"
            bg="transparent"
            _hover={{ color: "currentColor", bg: "transparent" }}
          />
          <IconButton
            icon={<FaFacebook />}
            fontSize="20px"
            mr={2}
            color="white"
            bg="transparent"
            _hover={{ color: "currentColor", bg: "transparent" }}
          />
          <IconButton
            icon={<FaLinkedin />}
            fontSize="20px"
            color="white"
            bg="transparent"
            _hover={{ color: "currentColor", bg: "transparent" }}
          />
        </Flex>
      </Flex>

      <Box mt="4">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <p>Created by</p>
        <Link
          href="https://acodernamedsubhro.web.app/"
          _hover={{ textDecoration: "none", color: "teal.300" }}
          transition="0.3s"
        >
          ACNS
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
