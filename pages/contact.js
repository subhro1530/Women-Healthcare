// ContactUs.js
import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Flex, Image, Link } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Footer from "@/components/Footer";
import {
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const ContactUs = () => {
  const [locationDetails, setLocationDetails] = useState(null);

  useEffect(() => {
    const getLocationDetails = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=Delhi,India&key=85f3fbc56fc74f0c9fe9e5549abfc1c5`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch location details");
        }

        const data = await response.json();
        const { results } = data;

        if (results && results.length > 0) {
          const { formatted, geometry } = results[0];
          setLocationDetails({ formatted, geometry });
        } else {
          throw new Error("Location details not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getLocationDetails();
  }, []);

  return (
    <>
      <Head>
        <title>Contact Us | FemWellCare</title>
        <meta name="description" content="Your app description here" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@300&display=swap"
        />
      </Head>
      <Navbar />
      <SubNavbar />
      <Box p={8} minH="100vh">
        <Heading
          mb={4}
          textAlign="center"
          color="#d52b79"
          fontWeight="200"
          fontSize={{ base: "3xl", md: "4xl" }}
        >
          Contact Us
        </Heading>

        {/* Contact Information */}
        <Flex
          justify="center"
          align="center"
          direction="column"
          mb={8}
          color="black"
        >
          {locationDetails && (
            <>
              <Flex align="center" mb={2}>
                <FaMapMarker />
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="200"
                  ml={2}
                >
                  {locationDetails.formatted}
                </Text>
              </Flex>
              <Flex align="center" mb={2}>
                <FaPhone />
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="200"
                  ml={2}
                >
                  +91 123 456 7890
                </Text>
              </Flex>
              <Flex align="center">
                <FaEnvelope />
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="200"
                  ml={2}
                >
                  info@femwellcare.com
                </Text>
              </Flex>
            </>
          )}
        </Flex>

        {/* Social Media Links */}
        <Flex justify="center" align="center">
          <Link
            href="#"
            isExternal
            mx={2}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="200"
            color="#d52b79"
            _hover={{ color: "black" }}
          >
            <FaTwitter />
          </Link>
          <Link
            href="#"
            isExternal
            mx={2}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="200"
            color="#d52b79"
            _hover={{ color: "black" }}
          >
            <FaFacebook />
          </Link>
          <Link
            href="#"
            isExternal
            mx={2}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="200"
            color="#d52b79"
            _hover={{ color: "black" }}
          >
            <FaLinkedin />
          </Link>
        </Flex>

        {/* Location Map Image */}
        {locationDetails && (
          <Flex justify="center" mt={8}>
            <Image
              src={`https://via.placeholder.com/600x400?text=Map+Image`} // Placeholder image, replace with your map image
              alt="Delhi Map"
              boxSize={{ base: "80%", md: "70%" }}
            />
          </Flex>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;
