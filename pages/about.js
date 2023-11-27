// About.js
import React from "react";
import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});
const SubNavbar = dynamic(() => import("@/components/SubNavbar"), {
  ssr: false,
});

const About = () => { 
  return (
    <Box scrollBehaviour="smooth" overflowX="hidden">
      <Head>
        <title>About Us | FemWellCare</title>
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
        {/* Flex for mobile responsiveness */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "initial" }}
        >
          {/* Image at the top */}
          <Image
            src="/2.png"
            alt="About Image"
            boxSize={{ base: "100%", md: "57%" }}
            mb={{ base: 6, md: 0 }}
            borderRadius={20}
            boxShadow="5px 5px 10px 10px rgba(0,0,0,.2)"
          />

          {/* Text on the right */}
          <Box ml={{ md: 8 }} mb={{ base: 8, md: 0 }}>
            {/* Heading */}
            <Heading
              mb={6}
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight={300}
              color="#d62b7a"
            >
              About Us
            </Heading>

            {/* Paragraph */}
            <Text mb={6} fontSize="lg">
              FemWellCare is dedicated to advancing women&apos;s health through
              comprehensive and personalized healthcare solutions. Our
              commitment lies in promoting holistic well-being and ensuring
              access to essential services tailored for every stage of a
              woman&apos;s life. Trust us to be your partner in health and
              empowerment.
            </Text>

            {/* Question */}
            <Text fontStyle="italic" fontSize="24px" mb={4} color="#d62b7a">
              Why did we build a healthcare app?
            </Text>

            {/* Answer */}
            <Text mb={6} fontSize="lg">
              Women&apos;s healthcare is rooted in essential values that
              prioritize holistic well-being, inclusivity, and empowerment.
              Central to this care is respect for autonomy, ensuring women have
              agency in decisions about their bodies and health choices.
              Compassion forms another cornerstone, acknowledging the emotional
              and physical intricacies of women&apos;s health experiences.
            </Text>
            <Text mb={6} fontSize="lg">
              Equality stands as a fundamental value, advocating for fair and
              unbiased access to healthcare, irrespective of race, ethnicity,
              socioeconomic status, or gender identity. Education and
              empowerment empower women to make informed decisions about their
              health, fostering a sense of ownership and active participation in
              their care.
            </Text>
            <Text mb={6} fontSize="lg">
              Moreover, dignity and confidentiality are upheld, providing a safe
              and respectful environment where women feel heard, valued, and
              supported throughout their healthcare journey.
            </Text>

            {/* Additional Text */}
            <Text mb={6} fontSize="lg">
              Dedicated to caring for women throughout their lifetime,
              Women&apos;s Health Care provides comprehensive, quality
              obstetrical and gynecological care with the warmth,
              responsiveness, and accessibility of a community-based practice.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
