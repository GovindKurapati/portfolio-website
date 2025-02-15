import React, { useEffect } from "react";
import { Box, Flex, Button, Icon, IconButton } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

const CustomModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundColor="rgba(0, 0, 0, 0.5)"
      zIndex="9999"
      onClick={onClose}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100%"
        direction={"column"}
      >
        <Box
          backgroundColor="secondary"
          padding="20px"
          borderRadius="md"
          maxWidth="600px"
          width="90%"
          onClick={(e) => e.stopPropagation()}
          position={"relative"}
        >
          <Box p={3} borderRadius={"10px"}>
            <Button
              onClick={onClose}
              position="absolute"
              right={5}
              top={4}
              size={"md"}
              backgroundColor={"primary"}
            >
              <Icon boxSize={6} color={"tertiary"}>
                <IoClose />
              </Icon>
            </Button>
          </Box>
          <Box mt="6"></Box>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default CustomModal;
