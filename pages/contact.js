// ContactUs.js
import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});
const SubNavbar = dynamic(() => import("@/components/SubNavbar"), {
  ssr: false,
});

const ContactUs = () => {
  const [locationDetails, setLocationDetails] = useState(null);

  useEffect(() => {
    const getLocationDetails = async () => {
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=22.573210+88.352320&key=85f3fbc56fc74f0c9fe9e5549abfc1c5`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch location details");
        }

        const data = await response.json();
        const { results } = data;

        if (results && results.length > 0) {
          const { formatted, geometry } = results[0];
          setLocationDetails({ formatted, geometry });

          // Call createMap function with the obtained coordinates
          createMap(geometry.lat, geometry.lng);
        } else {
          throw new Error("Location details not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getLocationDetails();
  }, []);

  const createMap = (latitude, longitude) => {
    // Check if we're on the client side before creating the map
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      const map = L.map("map").setView([latitude, longitude], 15);

      L.marker([latitude, longitude]).addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);
    }
  };

  return (
    <Box scrollBehaviour="smooth" overflowX="hidden">
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
                  textAlign="center"
                  ml={2}
                >
                  4 Amartalla Lane Kolkata 700001 Bura Bazar
                </Text>
              </Flex>
              <Flex align="center" mb={2}>
                <FaPhone />
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="200"
                  ml={2}
                >
                  +91 9836 6724 48
                </Text>
              </Flex>
              <Flex align="center">
                <FaEnvelope />
                <Link
                  href="mailto:femwellcare@gmail.com"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="200"
                  ml={2}
                >
                  femwellcare@gmail.com
                </Link>
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
            href="https://instagram.com/femwellcare?igshid=NzZlODBkYWE4Ng=="
            isExternal
            mx={2}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="200"
            color="#d52b79"
            _hover={{ color: "black" }}
          >
            <FaInstagram />
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
        {/* Location Map */}
        <Box height="400px" width="80%" mt={8} mx="auto" overflow="hidden">
          <Box
            id="map"
            style={{ width: "100%", height: "100%", position: "relative" }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactUs;
