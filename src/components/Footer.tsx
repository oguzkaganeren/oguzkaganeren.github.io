import type { NextPage } from "next";
import React from "react";
import {
  chakra,
  Flex,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Footer: NextPage = () => {
    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <Flex
      w="full"
      maxW="1200px"
      mx="auto"
      as="footer"
      flexDir={{
        base: "column",
        sm: "row",
      }}
      align="center"
      justify="space-between"
      px="6"
      py="4"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
    >
      <chakra.p
        py={{
          base: "2",
          sm: "0",
        }}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        All rights reserved
      </chakra.p>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        ml={{
          base: "0",
          md: "3",
        }}
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
};
export default Footer;
