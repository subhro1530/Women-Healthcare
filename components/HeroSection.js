// components/HeroSection.js
import { Box, Flex, Heading, Button, keyframes } from "@chakra-ui/react";
import Image from "next/image";

const moveImage = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const HeroSection = () => {
  const imageStyles = {
    width: { base: "80vw", md: "80%" },
    height: { base: "150px", md: "300px" },
    objectFit: "cover",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transform: "translate(0, 0)",
    transition: "transform 1s ease",
    animation: `${moveImage} 3s infinite`,
  };
  return (
    <Box
      bgImage="url('https://4kwallpapers.com/images/wallpapers/samsung-galaxy-note10-bubble-pink-stock-android-10-2560x1080-732.jpg')" // Replace with the actual URL of your background image
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      width="100vw"
      //   height="84vh" // Set the desi#d62a7a height
      position="relative"
      padding="14vh 0"
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
            bgGradient="linear(45deg, #d62a7a, cyan.700)" // Added linear gradient
            bgClip="text"
          >
            Your Women&apos;s Health Journey Starts Here
          </Heading>
          <Box
            fontSize="16px"
            color="teal.900"
            width={{ base: "80vw", md: "35vw" }} // Adjusted width for mobile and desktop
            mb={3}
            bgGradient="linear(45deg, cyan.700, #d62a7a)" // Added linear gradient
            bgClip="text"
          >
            Connect with a women&apos;s health doctor whenever you need. You can
            discuss issues in women&apos;s health like obstetrics, gynaecology,
            OBGYN, or reproductive concerns. With telemedicine, women&apos;s
            health services are available to you 24/7.
          </Box>
          <Button
            backgroundImage="linear(45deg, cyan.700, #d62a7a)"
            color="white"
            bgColor="blue"
            transition="0.3s"
            _hover={{
              color: "white",
              bg: "linear(40deg, #d62a7a,cyan.700)",
              border: "none",
              transform: "scale(1.1)",
            }}
          >
            Explore
          </Button>
        </Box>
        <Box boxShadow="10px 10px 20px 10px rgba(0,0,0,.4)">
          <Image
            src="/hero_pic.jpg"
            height={400}
            width={600}
            style={{
              ...imageStyles,
              animation: `${moveImage} 3s infinite`,
            }}
            alt="Hero Image"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
