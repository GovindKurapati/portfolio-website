"use client";
import { Grid } from "@chakra-ui/react";
import { Card } from "@/components/card";

export default function FeaturedProjects() {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={"24px"}
      my={"6"}
    >
      <Card
        imageUrl="GenScribeSS.png"
        title="GenScribe"
        tag="Development"
        linkUrl="https://gen-scribe.govind-kurapati.com/"
        timeline="2025"
        type="Full-Stack App"
        techStack={["Next.js", "Chakra UI", "Gemini API", "Firebase", "TipTap"]}
      />
      <Card
        imageUrl="dev-docs-chat.png"
        title="Developer Docs Chat (RAG)"
        tag="Development"
        linkUrl="https://github.com/GovindKurapati/dev_docs_chat"
        timeline="2025"
        type="Generative AI Tool"
        techStack={["Python", "RAG", "LangChain", "ChromaDB", "Groq", "Gradio"]}
      />
    </Grid>
  );
}

