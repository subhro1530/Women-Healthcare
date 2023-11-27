// SubNavbar.js
import { Box, Flex, Link, useDisclosure, IconButton } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

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
        {/* Mobile arrow icon */}
        <IconButton
          icon={<FiChevronDown />}
          fontSize="20px"
          onClick={onToggle}
          aria-label="Toggle Mobile Menu"
          variant="ghost"
          display={{ base: "block", md: "none" }}
        />
        {/* Desktop links */}
        <Link
          href="#"
          fontSize="sm"
          _hover={{ color: "pink" }}
          transition="color 0.3s"
          display={{ base: "none", md: "block" }}
        >
          Healthy Living
        </Link>
        <Link
          href="#"
          fontSize="sm"
          _hover={{ color: "pink" }}
          transition="color 0.3s"
          display={{ base: "none", md: "block" }}
        >
          Healthy Teens
        </Link>
        <Link
          href="#"
          fontSize="sm"
          _hover={{ color: "pink" }}
          transition="color 0.3s"
          display={{ base: "none", md: "block" }}
        >
          Healthy Agency
        </Link>
        <Link
          href="#"
          fontSize="sm"
          _hover={{ color: "pink" }}
          transition="color 0.3s"
          display={{ base: "none", md: "block" }}
        >
          Pregnancy
        </Link>
        <Link
          href="#"
          fontSize="sm"
          _hover={{ color: "pink" }}
          transition="color 0.3s"
          display={{ base: "none", md: "block" }}
        >
          Topics A-Z
        </Link>
      </Flex>

      {/* Mobile slide effect */}
      {isOpen && (
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          justifyContent="center"
        >
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
