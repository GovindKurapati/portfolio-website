"use client";
import { Flex, Heading, Grid } from "@chakra-ui/react";
import { Card } from "@/components/card";
import { motion } from "framer-motion";

export default function Projects() {

  const PROJECTS_DATA = [
    {
      id: 1,
      title: "GenScribe",
      tag: "Development",
      linkUrl: "https://gen-scribe.govind-kurapati.com/",
      imageUrl: "GenScribeSS.png",
      timeline: "2025",
      type: "Full-Stack App",
      techStack: ["NextJS", "Chakra UI", "Gemini", "Firebase", "Google Auth"]
    },
    {
      id: 2,
      title: "Developer Docs Chat (RAG)",
      tag: "Development",
      linkUrl: "https://github.com/GovindKurapati/dev_docs_chat",
      imageUrl: "dev-docs-chat.png",
      timeline: "2025",
      type: "Generative AI Tool",
      techStack: ["Python", "RAG", "LangChain", "Vector DB", "Hugging Face", "Groq", "Gradio"]
    },
    {
      id: 3,
      title: "Job Filter",
      tag: "Development",
      linkUrl:
        "https://github.com/GovindKurapati/Job-Filter",
      imageUrl: "JobFilter.png",
      timeline: "2025",
      type: "Chrome Extension",
      techStack: ["HTML", "CSS", "JavaScript", "Manifest V3", "Local Storage"]
    },
    {
      id: 4,
      title: "ScarletHacks 2025 IITC Hackathon",
      tag: "Development",
      linkUrl: "https://www.scarlethacks.com/",
      imageUrl: "scarlet-hacks-design.png",
      timeline: "2025",
      type: "Hackathon Website",
      techStack: ["React", "Vite", "Chakra UI", "Framer Motion", "React Icons"]
    },
    {
      id: 5,
      title: "Ticketmaster Clone",
      tag: "Development",
      linkUrl: "https://github.com/GovindKurapati/ticketmaster-clone",
      imageUrl: "ticketmaster-project.png",
      timeline: "2024",
      type: "Full-Stack App",
      techStack: ["React", "Chakra UI", "Zustand", "Python", "FastAPI", "PostgreSQL", "SQLModel"]
    },
    {
      id: 6,
      title: "Old Portfolio",
      tag: "Design",
      linkUrl:
        "https://www.figma.com/design/RhApXpafsdkHZOQ737Wbnq/Portfolio---GK?node-id=0-1&p=f",
      imageUrl: "old-website-design.png",
      timeline: "2023",
      type: "UI/UX Design",
      techStack: ["Figma", "Design", "Prototyping", "UI/UX"]
    },
  ];

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

      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap="24px"
        my="40px"
        minHeight="400px"
      >
        {PROJECTS_DATA.map((item, index) =>
        (
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
              timeline={item.timeline}
              type={item.type}
              techStack={item.techStack}
            />
          </motion.div>
        )
        )}
      </Grid>
    </Flex>
  );
}
