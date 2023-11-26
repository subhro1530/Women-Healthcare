// SubNavbar.js
import { Box, Flex, Link, useDisclosure } from "@chakra-ui/react";

const SubNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="black"
      color="white"
      padding="2"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Flex justify="space-around" align="center" w="100%">
        <Link
          href="#"
          onClick={onToggle}
          fontSize="sm"
          _hover={{ color: "pink" }}
          transition="color 0.3s"
        >
          Healthy Living
        </Link>
        <Link
          href="#"
          onClick={onToggle}
          fontSize="sm"
          _hover={{ color: "pink" }}
          transition="color 0.3s"
        >
          Healthy Teens
        </Link>
        <Link
          href="#"
          onClick={onToggle}
          fontSize="sm"
          _hover={{ color: "pink" }}
          transition="color 0.3s"
        >
          Healthy Agency
        </Link>
        <Link
          href="#"
          onClick={onToggle}
          fontSize="sm"
          _hover={{ color: "pink" }}
          transition="color 0.3s"
        >
          Pregnancy
        </Link>
        <Link
          href="#"
          onClick={onToggle}
          fontSize="sm"
          _hover={{ color: "pink" }}
          transition="color 0.3s"
        >
          Topics A-Z
        </Link>
      </Flex>

      {/* Mobile slide effect */}
      {isOpen && (
        <Flex direction="column" align="center">
          <Link
            href="#"
            fontSize="sm"
            paddingY="2"
            _hover={{ color: "pink" }}
            transition="color 0.3s"
          >
            Healthy Living
          </Link>
          <Link
            href="#"
            fontSize="sm"
            paddingY="2"
            _hover={{ color: "pink" }}
            transition="color 0.3s"
          >
            Healthy Teens
          </Link>
          <Link
            href="#"
            fontSize="sm"
            paddingY="2"
            _hover={{ color: "pink" }}
            transition="color 0.3s"
          >
            Healthy Agency
          </Link>
          <Link
            href="#"
            fontSize="sm"
            paddingY="2"
            _hover={{ color: "pink" }}
            transition="color 0.3s"
          >
            Pregnancy
          </Link>
          <Link
            href="#"
            fontSize="sm"
            paddingY="2"
            _hover={{ color: "pink" }}
            transition="color 0.3s"
          >
            Topics A-Z
          </Link>
        </Flex>
      )}
    </Box>
  );
};

export default SubNavbar;
