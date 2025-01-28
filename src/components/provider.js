"use client";

import { ColorModeProvider } from "@/components/color-mode";
import customTheme from "@/lib/styles/theme";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export function Provider({ children }) {
  return (
    <ChakraProvider value={customTheme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}
