// Clinical.js
import React from "react";
import { Box, Button, Image, Flex, ToastMessage } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import { useState } from "react";
import Footer from "@/components/Footer";

const Clinical = () => {
  return (
    <>
      <Head>
        <title>Clinical | FemWellCare</title>
        <meta name="description" content="Your app description here" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@400;700&display=swap"
        />
      </Head>
      <Navbar />
      <SubNavbar />
      <Box p={8}>
        <Flex justify="center" flexDirection={{base:"column",md:"row"}} align="center">
          {/* Image on the left */}
          <Image src="/1.png" alt="Clinical Image" boxSize="300px" mr={8} />

          {/* Button on the right */}
          <Button colorScheme="teal" size="lg" mt={10}>
            Where Patients and Doctors Connect
          </Button>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Clinical;
