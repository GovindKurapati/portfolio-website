"use client";
import { use, useEffect, useState } from "react";
import { Box, Flex, Text, Image, Link, Icon, Skeleton } from "@chakra-ui/react";
import { SiLiteral } from "react-icons/si";

export default function RecentlyRead() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/api/literal-club")
      .then((res) => res.json())
      .then((data) => setBook(data));
    console.log("book", book);
  }, []);

  if (!book) return <Skeleton height="125px" />;

  return (
    <Flex
      position="relative"
      overflow={"hidden"}
      borderRadius="20px"
      justify={"center"}
      zIndex={0}
      p={4}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={"secondary"}
        bgSize="cover"
        bgPosition="center"
        transform="scale(1.2)"
        opacity={0.3}
        sx={{
          "@keyframes spin": {
            "0%": { transform: "rotate(0deg) scale(1.2)" },
            "100%": { transform: "rotate(360deg) scale(1.2)" },
          },
          animation: "spin 10s linear infinite",
        }}
        // borderRadius={"50%"}
        // _hover={{
        //   bgImage: `url(${song.image})`,
        //   filter: "blur(12px)",
        // }}
        zIndex={-1}
      />
      <Link
        href={book.url}
        target="_blank"
        rel="noopener noreferrer"
        w={"100%"}
        outline={"none"}
        zIndex={1}
      >
        <Flex align="center" gap={4}>
          <Box position="relative" minW="70px" minH="70px" h="70px">
            <Image
              src={book.image}
              alt="You Can Win"
              borderRadius="lg"
              w="100%"
              h="100%"
              objectFit="cover"
              bg="gray.50"
            />
          </Box>

          <Flex direction="column">
            <Box>
              <Text
                color="title.100"
                fontSize="sm"
                letterSpacing="wide"
                display={"inline-block"}
                mr={2}
              >
                LAST READ
              </Text>
              <Icon color="title.100" boxSize={6}>
                <SiLiteral />
              </Icon>
            </Box>
            <Box overflow="hidden" position="relative" width="300px">
              <Text
                fontSize="md"
                fontWeight="semibold"
                whiteSpace="nowrap"
                position="relative"
                sx={{
                  "@keyframes slideText": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                  },
                  animation: "slideText 15s linear infinite",
                  "&:hover": {
                    animationPlayState: "paused",
                  },
                }}
              >
                {book.title}
              </Text>
              <Text
                color="title.100"
                fontSize="sm"
                nooflines={1}
                whiteSpace="nowrap"
                overflow={"hidden"}
                textOverflow={"ellipsis"}
                w={"80%"}
              >
                {book.author}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}
