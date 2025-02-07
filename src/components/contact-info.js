import { Flex, VStack, Text, Link, Icon, Grid } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";

export const ContactInfo = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr",
        xl: "1fr",
      }}
      gap="30px"
      maxWidth={"max-content"}
      flexWrap={"wrap"}
      w="100%"
    >
      <Flex gap={"16px"}>
        <Flex
          fontSize={"25px"}
          borderRadius={"15px"}
          color={"tertiary"}
          width={"45px"}
          height={"45px"}
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
          position="relative"
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
        >
          <LuMapPin size={"18px"} />
        </Flex>
        <VStack align={"start"} gap="0px" justifyContent={"center"}>
          <Text
            textTransform={"uppercase"}
            fontSize={"12px"}
            fontWeight={"500"}
            color={"title.100"}
          >
            Location
          </Text>
          <Text fontSize={"16px"}>Chicago, Illinois</Text>
        </VStack>
      </Flex>
      <Link
        href="mailto:kgovindrarg@gmail.com"
        _hover={{ textDecoration: "none" }}
        className="group"
      >
        <Flex gap={"16px"}>
          <Flex
            fontSize={"25px"}
            borderRadius={"15px"}
            color={"tertiary"}
            width={"45px"}
            height={"45px"}
            justifyContent={"center"}
            alignItems={"center"}
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
            position="relative"
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
            _groupHover={{
              _before: {
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
              },
            }}
          >
            <LuMail size={"18px"} />
          </Flex>
          <VStack
            align={"start"}
            overflow={"hidden"}
            gap="0px"
            justifyContent={"center"}
          >
            <Text
              textTransform={"uppercase"}
              fontSize={"12px"}
              fontWeight={"500"}
              color={"title.100"}
            >
              Email
            </Text>

            <Text
              color={"title.100"}
              overflow={"hidden"}
              fontSize={"16px"}
              _groupHover={{ color: "tertiary" }}
            >
              kgovindrarg@gmail.com
            </Text>
          </VStack>
        </Flex>
      </Link>
      <Link
        href="https://www.linkedin.com/in/govind-kurapati"
        _hover={{ textDecoration: "none" }}
        target="_blank"
        className="group"
      >
        <Flex gap={"16px"}>
          <Flex
            fontSize={"25px"}
            borderRadius={"15px"}
            color={"tertiary"}
            width={"45px"}
            height={"45px"}
            justifyContent={"center"}
            alignItems={"center"}
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
            position="relative"
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
            _groupHover={{
              _before: {
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
              },
            }}
          >
            <LuLinkedin size={"18px"} />
          </Flex>
          <VStack align={"start"} gap="0px" justifyContent={"center"}>
            <Text
              textTransform={"uppercase"}
              fontSize={"12px"}
              fontWeight={"500"}
              color={"title.100"}
            >
              LinkedIn
            </Text>
            <Text
              color={"title.100"}
              fontSize={"16px"}
              _groupHover={{ color: "tertiary" }}
            >
              Govind Kurapati
            </Text>
          </VStack>
        </Flex>
      </Link>
      <Link
        href="https://github.com/GovindKurapati"
        _hover={{ textDecoration: "none" }}
        target="_blank"
        className="group"
      >
        <Flex gap={"16px"}>
          <Flex
            fontSize={"25px"}
            borderRadius={"15px"}
            color={"tertiary"}
            width={"45px"}
            height={"45px"}
            justifyContent={"center"}
            alignItems={"center"}
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
            position="relative"
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
            _groupHover={{
              _before: {
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
              },
            }}
          >
            <FiGithub size={"18px"} />
          </Flex>
          <VStack align={"start"} gap="0px" justifyContent={"center"}>
            <Text
              textTransform={"uppercase"}
              fontSize={"12px"}
              fontWeight={"500"}
              color={"title.100"}
            >
              GitHub
            </Text>
            <Text
              color={"title.100"}
              fontSize={"16px"}
              _groupHover={{ color: "tertiary" }}
            >
              GovindKurapati
            </Text>
            {/* <LuExternalLink /> */}

            {/* <Icon
              as={LuExternalLink}
              opacity={0}
              transition="opacity 0.2s"
              _groupHover={{ opacity: 1 }}
            /> */}
          </VStack>
        </Flex>
      </Link>
    </Grid>
  );
};
