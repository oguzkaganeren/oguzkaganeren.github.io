import type { NextPage } from "next";
import React from "react";
import { chakra, Flex, Icon } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import personal from "./../data/personal.json";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import LeetcodeStatus from "./LeetcodeStatus";

const queryClient = new QueryClient();
const Footer: NextPage = () => {
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
      <chakra.a
        href="#"
        fontSize="xl"
        fontWeight="bold"
        color="gray.600"
        _dark={{
          color: "white",
          _hover: {
            color: "gray.300",
          },
        }}
        _hover={{
          color: "gray.700",
        }}
      >
        <QueryClientProvider client={queryClient}>
          <LeetcodeStatus/>
        </QueryClientProvider>
      </chakra.a>

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

      <Flex mx="-2">
        <chakra.a
          target={"_blank"}
          href={personal.github}
          mx="2"
          color="gray.600"
          _dark={{
            color: "gray.300",
            _hover: {
              color: "gray.400",
            },
          }}
          _hover={{
            color: "gray.500",
          }}
          aria-label="Github"
        >
          <Icon as={BsGithub} mt={1} />
        </chakra.a>
        <chakra.a
          target={"_blank"}
          href={personal.linkedin}
          mx="2"
          color="gray.600"
          _dark={{
            color: "gray.300",
            _hover: {
              color: "gray.400",
            },
          }}
          _hover={{
            color: "gray.500",
          }}
          aria-label="Linkedin"
        >
          <Icon as={BsLinkedin} mt={1} />
        </chakra.a>
        <chakra.a
          target={"_blank"}
          href={personal.medium}
          mx="2"
          color="gray.600"
          _dark={{
            color: "gray.300",
            _hover: {
              color: "gray.400",
            },
          }}
          _hover={{
            color: "gray.500",
          }}
          aria-label="Medium"
        >
          <Icon as={BsMedium} mt={1} />
        </chakra.a>
      </Flex>
    </Flex>
  );
};
export default Footer;
