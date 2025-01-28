// components/IconWrapper.tsx
"use client";
import { Icon } from "@chakra-ui/react";

export default function IconWrapper({ icon: IconComponent, ...props }) {
  return <Icon as={IconComponent} {...props} />;
}
