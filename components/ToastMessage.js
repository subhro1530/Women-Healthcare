// components/ToastMessage.js
import { Box, CloseButton } from "@chakra-ui/react";

const ToastMessage = ({ message, onClose }) => {
  return (
    <Box
      //   position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="999"
      bgColor="black"
      color="white"
      fontSize="18px"
      fontWeight="normal"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box padding="20px 50px">{message}</Box>
      <CloseButton onClick={onClose} />
    </Box>
  );
};

export default ToastMessage;
