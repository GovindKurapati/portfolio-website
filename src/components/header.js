"use client";
import { ColorModeButton } from "@/components/color-mode";
import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href, isActive }) => {
  return (
    <Link
      as={NextLink}
      href={href}
      px={4}
      py={2}
      rounded="md"
      color={isActive ? "tertiary" : "gray.300"}
      _hover={{
        textDecoration: "none",
        color: "tertiary",
        outline: "none",
      }}
      transition="color 0.2s ease"
      fontSize="md"
      fontWeight={isActive ? "600" : "500"}
      borderRadius={"none"}
      outline={"none"}
    >
      {children}
    </Link>
  );
};
export const Header = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    console.log("from is active", path);
    return pathname === path;
  };

  return (
    <Flex
      align="center"
      position={"absolute"}
      as="nav"
      zIndex={10}
      bg="secondary"
      backdropFilter="blur(10px)"
      border={"1px solid"}
      borderColor={"borderColor"}
      right={"-1px"}
      top={"-1px"}
      padding={"10px"}
      borderRadius={"0px 20px 0px 20px"}
      display={{ base: "none", lg: "flex" }}
    >
      {/* <Box marginLeft="auto">
        <ColorModeButton />
      </Box> */}
      <Flex gap={4} borderRadius={"0px 20px 0px 20px"}>
        <NavLink href="/" isActive={isActive("/")}>
          About
        </NavLink>
        <NavLink href="/resume" isActive={isActive("/resume")}>
          Resume
        </NavLink>
        <NavLink href="/portfolio" isActive={isActive("/portfolio")}>
          Portfolio
        </NavLink>
        {/* <NavLink href="/blog" isActive={isActive("/blog")}>
          Blog
        </NavLink> */}
        <NavLink href="/gallery" isActive={isActive("/gallery")}>
          Gallery
        </NavLink>
      </Flex>
    </Flex>
  );
};
