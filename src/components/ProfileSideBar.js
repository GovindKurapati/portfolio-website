"use client";
import {
  Badge,
  Flex,
  Text,
  Link,
  Separator,
  Button,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ContactInfo } from "./contact-info";
import { LuFile } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";

export const ProfileSideBar = () => {
  const defaultState = useBreakpointValue({ base: false, md: true });

  const [toggleContactInfoSection, setToggleContactInfoSection] =
    useState(defaultState ?? false);

  useEffect(() => {
    if (typeof defaultState === "boolean") {
      setToggleContactInfoSection(defaultState);
    }
  }, [defaultState]);

  const toggleContactInfo = () => {
    setToggleContactInfoSection(!toggleContactInfoSection);
  };
  return (
    <Flex
      w={{ base: "90%", xl: "27%" }}
      backgroundColor={"primary"}
      direction={"column"}
      position={{ base: "relative", md: "sticky" }}
      top={"60px"}
      maxHeight={"max-content"}
      alignItems={{ base: "flex-start", xl: "center" }}
      padding={"60px 30px 30px 30px"}
      borderRadius={"20px"}
      marginBottom={"0px"}
      border="1px solid"
      borderColor={"borderColor"}
      mb={{ base: "60px", xl: "0px" }}
    >
      <Button
        display={{ base: "block", xl: "none" }}
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
        position="absolute"
        top="0"
        right="0"
        borderRadius={"0 20px 0 10px"}
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
        onClick={toggleContactInfo}
        borderColor={"tertiary"}
        _hover={{ bg: "tertiary", color: "primary" }}
      >
        <Flex display={{ base: "block", sm: "block", md: "none" }}>
          <FaChevronDown />
        </Flex>
        <Text display={{ base: "none", sm: "none", md: "block", xl: "none" }}>
          Show contacts
        </Text>
      </Button>
      <Flex
        direction={{ base: "row", sm: "row", xl: "column" }}
        alignItems={"center"}
        justifyItems={"center"}
        gap="20px"
      >
        <Flex
          backgroundColor={"secondary"}
          borderRadius="30px"
          width={{ base: "100px", sm: "150px" }}
          height={{ base: "100px", sm: "150px" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            src="/profile-pic.jpg"
            width={{ base: "100px", sm: "150px" }}
            height={{ base: "100px", sm: "150px" }}
            borderRadius="20px"
            alt="Govind Kurapati"
            objectFit={"cover"}
          />
        </Flex>
        <Flex
          direction={"column"}
          alignItems={{ base: "flex-start", xl: "center" }}
          gap={"15px"}
        >
          <Text fontSize={{ base: "20px", sm: "26px" }} fontWeight={"500"}>
            Govind Kurapati
          </Text>
          <Flex
            padding="5px 15px"
            backgroundColor="secondary"
            borderRadius="10px"
            fontSize={"14px"}
            display={{ base: "none", sm: "flex" }}
          >
            <Text>Full Stack Developer</Text>
          </Flex>
          <Link
            href="https://drive.google.com/file/d/1cwBvjeXHVHegDxyZLTyV_f4zuqJFBbZX/view?usp=sharing"
            target="_blank"
          >
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
              borderColor={"tertiary"}
              _hover={{ bg: "tertiary", color: "primary" }}
            >
              <LuFile />
              Resume
            </Button>
          </Link>
        </Flex>
      </Flex>

      {toggleContactInfoSection && (
        // <Separator margin={"30px"} colorPalette={"#d6d6d6"} size={"xs"} />
        <Box
          backgroundColor={"borderColor"}
          margin={"30px"}
          height={"1px"}
          w={"100%"}
        />
      )}

      {toggleContactInfoSection && <ContactInfo />}
    </Flex>
  );
};
