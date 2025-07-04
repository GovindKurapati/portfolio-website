import { Text, Flex, Image, Link } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

export const Card = ({
  imageUrl,
  width,
  height,
  altText,
  title,
  tag,
  linkUrl,
}) => {
  return (
    <Link
      as={NextLink}
      href={linkUrl}
      isExternal
      target="_blank"
      outline={"none"}
      width={"100%"}
    >
      <Flex
        direction={"column"}
        maxHeight={"300px"}
        gap="10px"
        className="group"
        width={"100%"}
      >
        <Flex
          justify="center"
          align="center"
          height={"300px"}
          overflow="hidden"
          borderRadius="20px"
          direction={"column"}
        >
          <Image
            src={imageUrl}
            alt="Hover Scale Demo"
            w="100%"
            h="100%"
            objectFit="cover"
            transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            _groupHover={{
              transform: "scale(1.1)",
              cursor: "pointer",
            }}
          />
        </Flex>
        <Flex ml="10px" mt="5px" direction={"column"}>
          <Text
            _groupHover={{
              color: "tertiary",
              cursor: "pointer",
            }}
            fontWeight={"600"}
            fontSize={"lg"}
            color={"title.100"}
          >
            {title}
          </Text>
          <Text color={"title.100"}>{tag}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};
