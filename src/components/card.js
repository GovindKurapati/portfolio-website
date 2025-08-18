import { Text, Flex, Image, Link, Box, Badge } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";

export const Card = ({
  imageUrl,
  width,
  height,
  altText,
  title,
  tag,
  linkUrl,
  timeline,
  type,
  techStack = [],
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Link
        as={NextLink}
        href={linkUrl}
        isExternal
        target="_blank"
        outline={"none"}
        width={"100%"}
        _hover={{ textDecoration: "none" }}
      >
        <Flex
          direction={"column"}
          bg="secondary"
          borderRadius="12px"
          overflow="hidden"
          boxShadow="0 4px 12px rgba(0,0,0,0.4)"
          transition="all 0.3s ease"
          _hover={{
            boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
          }}
          className="group"
          width={"100%"}
        >
          {/* Preview Image with Device Mockup */}
          <Box
            position="relative"
            width="100%"
            height="0"
            paddingBottom="56.25%" // 16:9 aspect ratio
            overflow="hidden"
            bg="secondary"
          >
            <Image
              src={imageUrl}
              alt={altText || title}
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              objectFit="cover"
              transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            />
            {/* Device Mockup Overlay */}
            <Box
              position="absolute"
              top="8px"
              right="8px"
              width="24px"
              height="24px"
              borderRadius="4px"
              bg="rgba(0,0,0,0.7)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="12px"
              color="white"
            >
              {tag === "Development" ? "💻" : "🎨"}
            </Box>
          </Box>

          {/* Meta Information */}
          <Flex
            px="20px"
            pt="16px"
            gap="12px"
            alignItems="center"
          >
            {timeline && (
              <Text
                fontSize="12px"
                color="title.100"
                fontWeight="400"
              >
                {timeline}
              </Text>
            )}
            {type && (
              <Text
                fontSize="12px"
                color="title.100"
                fontWeight="400"
                textTransform="uppercase"
                letterSpacing="0.5px"
              >
                {type}
              </Text>
            )}
          </Flex>

          {/* Title */}
          <Box px="20px" pt="8px">
            <Text
              fontSize="20px"
              fontWeight="600"
              color="title.100"
              _groupHover={{
                color: "tertiary",
              }}
              transition="color 0.2s ease"
            >
              {title}
            </Text>
          </Box>

          {/* Tech Stack */}
          <Flex
            px="20px"
            pt="16px"
            pb="20px"
            gap="8px"
            flexWrap="wrap"
          >
            {techStack.length > 0 ? (
              techStack.map((tech, index) => (
                <Badge
                  key={index}
                  bg="primary"
                  color="title.100"
                  border="1px solid primary"
                  borderRadius="8px"
                  px="10px"
                  py="6px"
                  fontSize="12px"
                  fontWeight="400"
                >
                  {tech}
                </Badge>
              ))
            ) : (
              <Badge
                bg="#222222"
                color="#FFFFFF"
                border="1px solid #333333"
                borderRadius="8px"
                px="10px"
                py="6px"
                fontSize="12px"
                fontWeight="400"
              >
                {tag}
              </Badge>
            )}
          </Flex>
        </Flex>
      </Link>
    </motion.div>
  );
};
