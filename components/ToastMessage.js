// components/ToastMessage.js
import { Box, CloseButton } from "@chakra-ui/react";

const ToastMessage = ({ message, onClose }) => {
  return (
    <Box
      top="0"
      left="0"
      width="100%"
      zIndex="999"
      bgColor="#d62a7a"
      color="white"
      fontSize="17px"
      fontWeight="normal"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box padding="10px 50px">{message}</Box>
      <CloseButton onClick={onClose} />
    </Box>
  );
};

export default ToastMessage;
