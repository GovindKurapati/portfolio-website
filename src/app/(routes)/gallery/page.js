"use client";
import {
  Flex,
  Text,
  Heading,
  Box,
  SimpleGrid,
  Imag,
  HStack,
  Button,
  Image,
  Icon,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import NextImage from "next/image";
import { AiOutlineEye } from "react-icons/ai";

export default function Gallery() {
  const categories = [
    { src: "/gallery/aws-saa-cert.jpg", category: "Certifications" },
    { src: "/gallery/azure-az-100-cert.jpg", category: "Certifications" },
    { src: "/gallery/lco-cert.jpeg", category: "Certifications" },
    { src: "/gallery/udemy-web-dev.jpg", category: "Certifications" },
    // { src: "/gallery/hack1.jpg", category: "Hackathons" },
    // { src: "/gallery/hack2.jpg", category: "Hackathons" },
    // { src: "/gallery/extra1.jpg", category: "Extracurriculars" },
    // { src: "/gallery/extra2.jpg", category: "Extracurriculars" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory == "All"
      ? categories
      : categories.filter((img) => img.category == selectedCategory);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);

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

      {/* <Box maxW="6xl" mx="auto" p={5}> */}
      {/* Category Buttons */}
      {/* <HStack spacing={4} mb={5} justify="center">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            colorScheme={selectedCategory == category ? "blue" : "gray"}
            variant={selectedCategory == category ? "solid" : "outline"}
          >
            {category.category}
          </Button>
        ))}
      </HStack> */}

      {/* Image Grid */}
      {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2} gap={4}>
        {filteredImages.map((img, index) => (
          <Box key={index} borderRadius="0px" overflow="hidden" boxShadow="md">
            <Image asChild>
              <NextImage src={img.src} alt={img.category} />
            </Image>
          </Box>
        ))}
      </SimpleGrid> */}

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2} gap={4}>
        {filteredImages.map((img, index) => (
          <Box
            key={index}
            borderRadius="0px"
            overflow="hidden"
            boxShadow="md"
            position="relative"
            _hover={{
              "& .overlay": {
                opacity: 1,
              },
            }}
          >
            <Box
              position="relative"
              width="100%"
              height="0"
              paddingBottom="75%"
            >
              <NextImage
                src={img.src}
                alt={img.category}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            {/* Hover Overlay */}
            <Flex
              className="overlay"
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="blackAlpha.400"
              backdropFilter="blur(4px)"
              opacity={0}
              transition="opacity 0.2s"
              cursor="pointer"
              justifyContent="center"
              alignItems="center"
              onClick={() => {
                setOpen(true);
              }}
            >
              <Box backgroundColor={"secondary"} p={3} borderRadius={"10px"}>
                <Icon boxSize={7} color={"tertiary"}>
                  <AiOutlineEye />
                </Icon>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      {/* </Box> */}
      {/* <Portal>
        <DialogRoot
          lazyMount
          open={"true"}
          onOpenChange={(e) => setOpen(e.open)}
        >
          <DialogTrigger asChild>
            <Button
              variant="outline"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Open
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
            </DialogHeader>
            <DialogBody></DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
              <Button>Save</Button>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>
      </Portal> */}
    </Flex>
  );
}
