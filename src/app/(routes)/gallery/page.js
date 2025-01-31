import { Flex, Text, Heading } from "@chakra-ui/react";
export default function Gallery() {
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
        Gallery
      </Heading>
      <Text>🚧 WIP 🚧</Text>
    </Flex>
  );
}
