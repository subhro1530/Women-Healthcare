// Navbar.js
import { useState } from "react";
import {
  Flex,
  Box,
  Image,
  Link,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import NextLink from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding=".75rem"
      bg="white"
      color="black"
    >
      <Flex align="center" mr={5}>
        <Image src="/logo.png" alt="Logo" boxSize="40px" />
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        cursor="pointer"
      >
        <IconButton
          icon={<FaBars />}
          variant="outline"
          colorScheme="teal"
          aria-label="Mobile Menu"
        />
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        gap={5}
        padding="0px 20px"
      >
        <NextLink href="/" passHref>
          <Link
            mr={2}
            _hover={{ textDecoration: "none", color: "teal.300" }}
            transition="0.3s"
            fontSize={19}
            fontWeight={600}
          >
            Home
          </Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link
            mr={2}
            _hover={{ textDecoration: "none", color: "teal.300" }}
            transition="0.3s"
            fontSize={19}
            fontWeight={600}
          >
            About
          </Link>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Link
            mr={4}
            _hover={{ textDecoration: "none", color: "teal.300" }}
            transition="0.3s"
            fontSize={19}
            fontWeight={600}
          >
            Contact Us
          </Link>
        </NextLink>
      </Box>

      <Box display={{ base: "none", md: "flex" }}>
        <Button colorScheme="teal" mr={2}>
          Log In
        </Button>
        <Button colorScheme="teal" bg="black">
          {" "}
          {/* Add bg="black" here */}
          Sign Up
        </Button>
      </Box>

      {/* Sidebar for mobile view */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box gap={3} display="flex" flexDirection="column">
              <NextLink href="/" passHref>
                <Link
                  mb={2}
                  onClick={onClose}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                  transition="0.3s"
                  fontWeight={600}
                >
                  Home
                </Link>
              </NextLink>
              <NextLink href="/about" passHref>
                <Link
                  mb={2}
                  onClick={onClose}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                  transition="0.3s"
                  fontWeight={600}
                >
                  About
                </Link>
              </NextLink>
              <NextLink href="/contact" passHref>
                <Link
                  mb={2}
                  onClick={onClose}
                  _hover={{ textDecoration: "none", color: "teal.300" }}
                  transition="0.3s"
                  fontWeight={600} 
                >
                  Contact Us
                </Link>
              </NextLink>
              <Button
                colorScheme="teal"
                mb={2}
                onClick={onClose}
                _hover={{ textDecoration: "none", color: "teal.300" }}
                transition="0.3s"
                fontWeight={600}
              >
                Log In
              </Button>
              <Button
                colorScheme="teal"
                onClick={onClose}
                _hover={{ textDecoration: "none", color: "teal.300" }}
                transition="0.3s"
                fontWeight={600}
                bg="black"
              >
                Sign Up
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
