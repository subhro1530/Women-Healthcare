// components/HeroSection.js
import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      bgImage="url('https://wallpaperaccess.com/full/1586337.jpg')" // Replace with the actual URL of your background image
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      width="100vw"
      //   height="84vh" // Set the desired height
      position="relative"
      padding="15vh 0"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        height="100%"
        maxWidth="1200px"
        mx="auto"
        p={{ base: "4", md: "8" }}
        textAlign={{ base: "center", md: "left" }}
        color="black"
        borderRadius="md"
      >
        <Box flex="1" mb={{ base: "4", md: "0" }}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "7xl" }} // Increased font size for lg (desktop) mode
            mb="4"
            fontWeight="bold"
            width={{ base: "80vw", md: "40vw" }} // Adjusted width for mobile and desktop
            bgGradient="linear(to-r, red, black)" // Added linear gradient
            bgClip="text"
          >
            Your Women's Health Journey Starts Here
          </Heading>
          <Box
            fontSize="16px"
            color="teal.900"
            width={{ base: "80vw", md: "40vw" }} // Adjusted width for mobile and desktop
            mb={3}
            bgGradient="linear(to-r, black, red)" // Added linear gradient
            bgClip="text"
          >
            Connect with a women's health doctor whenever you need. You can
            discuss issues in women's health like obstetrics, gynaecology,
            OBGYN, or reproductive concerns. With telemedicine, women's health
            services are available to you 24/7.
          </Box>
          <Button
            bg="black"
            color="white"
            border="1px solid black"
            transition="0.3s"
            _hover={{
              color: "black",
              bg: "#e1e3e8",
              border: "1px solid black",
            }}
          >
            Explore
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
