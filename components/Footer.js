// Footer.js
import { Box, Flex, Link, IconButton, Input, Button } from "@chakra-ui/react";
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
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
      {/* Subscription Section */}
      <Flex
        justify={{ base: "center", md: "space-between" }}
        align="center"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        mb={{ base: "6", md: "4" }}
      >
        <Input
          outline="none"
          type="email"
          placeholder="Email to subscribe to our newsletter"
          color="white"
          border="1px solid grey"
          bg="transparent"
          _placeholder={{ color: "white" }}
          borderRadius="md"
          p="2"
          mb={{ base: "2", md: "0" }}
        />
        <Button
          color="black"
          bg="white"
          border="1px solid grey"
          _hover={{ bg: "transparent", color: "white" }}
          borderRadius="md"
          px="4"
        >
          Subscribe
        </Button>
      </Flex>

      {/* Navigation Links */}
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
          <Link href="https://instagram.com/femwellcare?igshid=NzZlODBkYWE4Ng==" target="_blank">
            <IconButton
              icon={<FaInstagram />}
              fontSize="20px"
              mr={2}
              color="white"
              bg="transparent"
              _hover={{ color: "currentColor", bg: "transparent" }}
            />
          </Link>
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
          &copy; {new Date().getFullYear()} FemWellCare. All rights reserved.
        </p>
        <p>Created by</p>
        <Link
          href="https://acodernamedsubhro.web.app/"
          _hover={{ textDecoration: "none", color: "skyblue" }}
          transition="0.3s"
          color="cyan.700"
        >
          ACNS
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
