import { Badge, Flex, Text, Box, Separator, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ContactInfo } from "./contact-info";
import { LuFile } from "react-icons/lu";

export const ProfileSideBar = () => {
  return (
    <Flex
      w={{ base: "90%", xl: "27%" }}
      backgroundColor={"primary"}
      direction={"column"}
      position={{ base: "relative", xl: "sticky" }}
      top={"60px"}
      maxHeight={"max-content"}
      alignItems={{ base: "flex-start", xl: "center" }}
      padding={"60px 30px 30px 30px"}
      borderRadius={"20px"}
      marginBottom={"0px"}
      border="1px solid"
      borderColor={"borderColor"}
      height={"max-content"}
      mb={{ base: "60px", xl: "0px" }}
    >
      <Flex
        direction={{ base: "row", xl: "column" }}
        alignItems={"center"}
        gap="20px"
      >
        <Flex
          backgroundColor={"secondary"}
          borderRadius="30px"
          width="150px"
          height={"150px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            src="/profile-pic1_enhanced.png"
            width="110px"
            height="110px"
            borderRadius="30px"
            alt="Govind Kurapati"
            objectFit={"contain"}
          />
        </Flex>
        <Flex
          direction={"column"}
          alignItems={{ base: "flex-start", xl: "center" }}
          gap={"15px"}
        >
          <Text fontSize={"26px"} fontWeight={"500"}>
            Govind Kurapati
          </Text>
          <Flex
            padding="5px 15px"
            backgroundColor="secondary"
            borderRadius="10px"
            fontSize={"14px"}
          >
            <Text>Full Stack Developer</Text>
          </Flex>
          <Button
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
            position="relative"
            borderRadius={"10px"}
            _before={{
              content: '""',
              position: "absolute",
              top: "-1px",
              left: "-1px",
              right: "-1px",
              bottom: "-1px",
              borderRadius: "inherit",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
            }}
            variant={"outline"}
            color={"tertiary"}
          >
            <LuFile />
            Resume
          </Button>
        </Flex>
      </Flex>

      <Separator margin={"30px"} colorPalette={"#383838"} size={"md"} />

      <ContactInfo />
    </Flex>
  );
};
