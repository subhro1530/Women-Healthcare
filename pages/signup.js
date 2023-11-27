// components/SignUp.js
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
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Head from "next/head";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Head>
        <title>Sign Up | FemWellCare</title>
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
            Sign Up
          </Heading>

          {/* Google Login Button */}
          <Box
            display="flex"
            border="1px solid cyan"
            borderRadius={50}
            width="20%"
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
              // mb={4}
              _hover={{ bgColor: "transparent" }}
            >
              Sign Up with Google
            </Button>
          </Box>

          {/* Email Input */}
          <Input
            color="white"
            type="email"
            placeholder="Email"
            mb={4}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

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

          {/* Confirm Password Input */}
          <Input
            color="white"
            type="password"
            placeholder="Confirm Password"
            mb={4}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Terms and Conditions Checkbox */}
          <Checkbox
            colorScheme="teal"
            isChecked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
            mb={4}
            color="white"
          >
            I accept the terms and conditions
          </Checkbox>

          {/* SignUp Button */}
          <Button colorScheme="teal" mb={4}>
            Sign Up
          </Button>
          <Box color="white">
            Already have an account?{" "}
            <Link href="/signin" style={{ color: "cyan" }}>
              Log In
            </Link>
            .
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SignUp;
