"use client";
import { Flex, Heading, Box, SimpleGrid, Icon } from "@chakra-ui/react";
import { useState } from "react";
import NextImage from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import CustomModal from "@/components/CustomModal";
import { motion } from "framer-motion";
export default function Gallery() {
  const categories = [
    { id: "1", src: "/gallery/aws-saa-cert.jpg", category: "Certifications" },
    {
      id: "2",
      src: "/gallery/azure-az-100-cert.jpg",
      category: "Certifications",
    },
    { id: "3", src: "/gallery/lco-cert.jpeg", category: "Certifications" },
    { id: "4", src: "/gallery/udemy-web-dev.jpg", category: "Certifications" },
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

  const [open, setOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

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

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={2}
        gap={6}
        mt={4}
      >
        {filteredImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
          >
            <Box
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
                  openModal();
                  setModalImageUrl(img.src);
                }}
                display={{ base: "none", md: "flex" }}
              >
                <Box backgroundColor={"secondary"} p={3} borderRadius={"10px"}>
                  <Icon boxSize={7} color={"tertiary"}>
                    <AiOutlineEye />
                  </Icon>
                </Box>
              </Flex>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
      <Box display={{ base: "none", md: "block" }}>
        <CustomModal isOpen={isModalOpen} onClose={closeModal}>
          <Box position="relative" width="100%" height="0" paddingBottom="75%">
            <NextImage
              src={modalImageUrl}
              alt="certification"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </CustomModal>
      </Box>
    </Flex>
  );
}
