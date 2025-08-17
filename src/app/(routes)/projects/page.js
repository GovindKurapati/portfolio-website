"use client";
import { Flex, Text, Heading, Link, Grid } from "@chakra-ui/react";
import { Card } from "@/components/card";
import { motion } from "framer-motion";
export default async function Projects({ searchParams }) {
  const PROJECTS_DATA = [
    {
      id: 1,
      title: "GenScribe",
      tag: "Development",
      linkUrl: "https://gen-scribe.govind-kurapati.com/",
      imageUrl: "GenScribeSS.png",
    },
    {
      id: 2,
      title: "Developer Docs Chat (RAG)",
      tag: "Development",
      linkUrl: "https://github.com/GovindKurapati/dev_docs_chat",
      imageUrl: "dev-docs-chat.png",
    },
    {
      id: 4,
      title: "ScarletHacks2025 IITC Hackathon",
      tag: "Development",
      linkUrl: "https://www.scarlethacks.com/",
      imageUrl: "scarlet-hacks-design.png",
    },
    {
      id: 5,
      title: "Ticketmaster Clone",
      tag: "Development",
      linkUrl: "https://github.com/GovindKurapati/ticketmaster-clone",
      imageUrl: "ticketmaster-project.png",
    },
    {
      id: 3,
      title: "Old Portfolio",
      tag: "Design",
      linkUrl:
        "https://www.figma.com/design/RhApXpafsdkHZOQ737Wbnq/Portfolio---GK?node-id=0-1&p=f",
      imageUrl: "old-website-design.png",
    },
  ];

  const { filter = "all" } = await searchParams;
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
        Projects
      </Heading>

      <Flex gap={4} my="20px">
        {/* <p>{searchParams.filter}</p> */}

        <Link href="/projects?filter=all" outline={"none"}>
          <Text
            color={filter == "all" ? "tertiary" : "title.100"}
            fontSize={"lg"}
          >
            All
          </Text>
        </Link>
        <Link href="/projects?filter=Design" outline={"none"}>
          <Text
            color={filter == "Design" ? "tertiary" : "title.100"}
            fontSize={"lg"}
          >
            Design
          </Text>
        </Link>
        <Link href="/projects?filter=Development" outline={"none"}>
          <Text
            color={filter == "Development" ? "tertiary" : "title.100"}
            fontSize={"lg"}
          >
            Development
          </Text>
        </Link>
      </Flex>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={"30px"}
        my={"10px"}
        minHeight={"400px"}
      >
        {PROJECTS_DATA.map((item, index) =>
          item.tag == filter || filter == "all" || filter == "" ? (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <Card
                imageUrl={item.imageUrl}
                title={item.title}
                tag={item.tag}
                linkUrl={item.linkUrl}
              />
            </motion.div>
          ) : null
        )}
      </Grid>
    </Flex>
  );
}
