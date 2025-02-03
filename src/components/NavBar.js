"use client";

import { Flex, Link, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();
  const navItems = [
    { path: "/", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/gallery", label: "Gallery" },
  ];

  return (
    <Flex
      position={"fixed"}
      bottom={0}
      left={0}
      gap={4}
      padding={4}
      justifyContent={"space-around"}
      alignItems={"center"}
      w="100%"
      zIndex={10}
      bg="secondary"
      backdropFilter="blur(10px)"
      border="1px solid var(--jet)"
      borderRadius="12px 12px 0 0"
      boxShadow="var(--shadow-4)"
      display={{ base: "flex", lg: "none" }}
    >
      {navItems.map((item) => (
        <Link key={item.path} href={item.path}>
          <Text
            color={pathname == item.path ? "tertiary" : "title.100"}
            fontWeight={"700"}
          >
            {item.label}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};
