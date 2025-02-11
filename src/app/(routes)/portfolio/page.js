import {
  Flex,
  Text,
  Heading,
  Box,
  VStack,
  Icon,
  Link,
  Grid,
} from "@chakra-ui/react";

import { BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import { Card } from "@/components/card";

export default async function Portfolio({ searchParams }) {
  const PORTFOLIO_DATA = [
    {
      id: 1,
      title: "Personal Website",
      tag: "Development",
      linkUrl: "https://govind-kurapati.vercel.app",
      imageUrl: "personal-website.png",
    },
    {
      id: 2,
      title: "Old Personal Website",
      tag: "Design",
      linkUrl:
        "https://www.figma.com/design/RhApXpafsdkHZOQ737Wbnq/Portfolio---GK?node-id=0-1&p=f",
      imageUrl: "old-website-design.png",
    },
    {
      id: 3,
      title: "ScarletHacks2025 IITC Hackathon",
      tag: "Development",
      linkUrl: "https://www.scarlethacks.com/",
      imageUrl: "scarlet-hacks-design.png",
    },
    {
      id: 4,
      title: "Ticketmaster Clone",
      tag: "Development",
      linkUrl: "https://github.com/GovindKurapati/ticketmaster-clone",
      imageUrl: "ticketmaster-project.png",
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
        Portfolio
      </Heading>

      <Flex gap={4} my="20px">
        {/* <p>{searchParams.filter}</p> */}

        <Link href="/portfolio?filter=all" outline={"none"}>
          <Text
            color={filter == "all" ? "tertiary" : "title.100"}
            fontSize={"lg"}
          >
            All
          </Text>
        </Link>
        <Link href="/portfolio?filter=Design" outline={"none"}>
          <Text
            color={filter == "Design" ? "tertiary" : "title.100"}
            fontSize={"lg"}
          >
            Design
          </Text>
        </Link>
        <Link href="/portfolio?filter=Development" outline={"none"}>
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
      >
        {PORTFOLIO_DATA.map((item) =>
          item.tag == filter || filter == "all" || filter == "" ? (
            <Card
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              tag={item.tag}
              linkUrl={item.linkUrl}
            />
          ) : null
        )}
      </Grid>
    </Flex>
  );
}
