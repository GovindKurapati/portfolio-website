import { Flex, Text, Heading, Box, VStack, Icon, Link } from "@chakra-ui/react";

import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";

export default function Portfolio() {
  return (
    <Flex w="100%" direction={"column"} position={"relative"}>
      <Heading
        size={"4xl"}
        mb="30px"
        _after={{
          content: '""',
          position: "absolute",
          left: "0",
          top: "55px",
          height: "5px",
          width: "40px",
          backgroundColor: "tertiary",
          borderRadius: "3px",
        }}
      >
        Portfolio
      </Heading>
    </Flex>
  );
}
