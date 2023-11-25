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
      padding=".75rem 2rem"
      bg="white"
      color="black"
      boxShadow="5px 5px 5px 10px rgba(0,0,0,.8)"
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
            fontSize={16}
          >
            Home
          </Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link
            mr={2}
            _hover={{ textDecoration: "none", color: "teal.300" }}
            transition="0.3s"
            fontSize={16}
          >
            About
          </Link>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Link
            mr={4}
            _hover={{ textDecoration: "none", color: "teal.300" }}
            transition="0.3s"
            fontSize={16}
          >
            Contact Us
          </Link>
        </NextLink>
      </Box>

      <Box gap={2} display={{ base: "none", md: "flex" }}>
        <NextLink href="/signin" passHref>
          <Link>
            <Button colorScheme="teal" bg="black">
              Log In
            </Button>
          </Link>
        </NextLink>
        <NextLink href="/signup" passHref>
          <Link>
            <Button colorScheme="teal" bg="black">
              Sign Up
            </Button>
          </Link>
        </NextLink>
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
                >
                  Contact Us
                </Link>
              </NextLink>
            </Box>
            <Box gap={2} mt="5">
              <Button
                colorScheme="teal"
                onClick={onClose}
                _hover={{ textDecoration: "none", color: "teal.300" }}
                transition="0.3s"
                mr={3}
              >
                Log In
              </Button>
              <NextLink href="/signin" passHref>
                <Link>
                  <Button
                    colorScheme="teal"
                    onClick={onClose}
                    _hover={{ textDecoration: "none", color: "teal.300" }}
                    transition="0.3s"
                    bg="black"
                  >
                    Sign Up
                  </Button>
                </Link>
              </NextLink>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
