// components/SignIn.js
import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  IconButton,
  InputGroup,
  InputRightElement,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <Box scrollBehaviour="smooth">
      <Head>
        <title>Sign In | FemWellCare</title>
        <meta name="description" content="Your app description here" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@400;700&display=swap"
        />
      </Head>
      <Navbar />
      <Box
        bgColor="black"
        width="100vw"
        display="flex"
        bgImage="https://wallpapercave.com/wp/wp3413981.jpg"
        bgSize="cover"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          textAlign="center"
          bgColor="rgb(0,0,0,.7)"
          margin="50px 0"
          pt={10}
          pr={10}
          pl={10}
          pb={20}
          width="80vw"
          display="flex"
          flexDirection="column"
        >
          <Heading
            as="h2"
            size="xl"
            fontWeight={200}
            fontSize="50px"
            mt={20}
            color="white"
            mb={10}
          >
            Sign In
          </Heading>

          {/* Google Login Button */}
          <Box
            display="flex"
            border="1px solid cyan"
            borderRadius={50}
            width={{ base: "15%", md: "20%" }}
            overflow="hidden"
            alignItems="center"
            mb={10}
            padding="5px 10px"
            justifyContent="center"
            cursor="pointer"
            transition=".2s ease-in-out"
            _hover={{ bgColor: "cyan" }}
          >
            <Image height={20} width={20} src="/gicon.png" alt="Google"></Image>
            <Button
              bgColor="transparent"
              color="white"
              display={{ base: "none", md: "block" }}
              // mb={4}
              _hover={{ bgColor: "transparent" }}
            >
              Sign In with Google
            </Button>
          </Box>

          {/* Username Input */}
          <Input
            color="white"
            type="text"
            placeholder="Username"
            mb={4}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password Input */}
          <InputGroup mb={4}>
            <Input
              color="white"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              pr="4.5rem"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                aria-label={showPassword ? "Hide password" : "Show password"}
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                h="1.75rem"
                size="sm"
                color="white"
                backgroundColor="transparent"
                _hover={{ color: "black", backgroundColor: "white" }}
              />
            </InputRightElement>
          </InputGroup>

          {/* Terms and Conditions Checkbox */}
          <Checkbox
            colorScheme="teal"
            isChecked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
            mb={4}
            color="white"
          >
            Remember Me
          </Checkbox>

          {/* SignIn Button */}
          <Button colorScheme="teal" mb={4}>
            Sign In
          </Button>
          <Box color="white">
            Don&apos;t have an account?{" "}
            <Link href="/signin" style={{ color: "cyan" }}>
              Sign Up
            </Link>
            .
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default SignIn;
