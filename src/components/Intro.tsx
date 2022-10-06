import type { NextPage } from "next";
import React from "react";
import {
  Box,
  Button,
  Heading,
  Flex,
  LinkBox,
  LinkOverlay,
  Wrap,
  WrapItem,
  VStack,
  chakra,
  SimpleGrid,
  Text,
  Tag,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import MediumArticles from "./MediumArticles";
const Intro: NextPage = () => {
  return (
    <Flex
      bg="#edf3f8"
      maxW="1200px"
      mx="auto"
      _dark={{
        bg: "#3e3e3e",
      }}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            lg: 2,
          }}
          spacingY={{
            base: 10,
            lg: 32,
          }}
          spacingX={{
            base: 10,
            lg: 24,
          }}
        >
          <Box>
            <chakra.h2
              mb={3}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              textAlign={{
                base: "center",
                sm: "left",
              }}
              _light={{
                color: "black",
              }}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Hi, I am Oğuz!
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.500",
              }}
            >
              Accomplished and highly-organized full stack developer with a
              bachelor's level in computer engineering.
            </chakra.p>
            <chakra.h3
              mb={3}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              textAlign={{
                base: "center",
                sm: "left",
              }}
              _light={{
                color: "black",
              }}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Tech Stack
            </chakra.h3>
            <Wrap spacing={4} mb={6}>
              <WrapItem>
                <Link href={"https://www.java.com/"}>
                  <Button colorScheme="teal" variant="outline">
                    Java
                  </Button>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href={"https://www.postgresql.org/docs/9.6/plpgsql.html"}>
                  <Button colorScheme="teal" variant="outline">
                    PL/pgSQL
                  </Button>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href={"https://www.typescriptlang.org/"}>
                  <Button colorScheme="teal" variant="outline">
                    Typescript
                  </Button>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href={"https://www.javascript.com/"}>
                  <Button colorScheme="teal" variant="outline">
                    Javascript
                  </Button>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href={"https://reactjs.org/"}>
                  <Button colorScheme="teal" variant="outline">
                    React
                  </Button>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href={"https://reactnative.dev/"}>
                  <Button colorScheme="teal" variant="outline">
                    React-Native
                  </Button>
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href="https://docs.github.com/en/actions">
                  <Button colorScheme="teal" variant="outline">
                    CI/CD - Github Actions
                  </Button>
                </Link>
              </WrapItem>
            </Wrap>
            <chakra.h3
              mb={3}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              textAlign={{
                base: "center",
                sm: "left",
              }}
              _light={{
                color: "black",
              }}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Project I am actively working on
            </chakra.h3>
            <HStack>
              <LinkBox
                as="article"
                maxW="sm"
                p="5"
                borderWidth="1px"
                rounded="md"
              >
                <Wrap>
                  <Tag>react</Tag>
                  <Tag>tauri</Tag>
                </Wrap>

                <Heading size="md" my="2">
                  <LinkOverlay href="https://github.com/oguzkaganeren/manjaro-starter">
                    Manjaro Starter
                  </LinkOverlay>
                </Heading>
                <Text>
                  A tool providing access to documentation and support for new
                  Manjaro users.
                </Text>
              </LinkBox>

              <LinkBox
                as="article"
                maxW="sm"
                p="5"
                borderWidth="1px"
                rounded="md"
              >
                <Wrap>
                  <Tag>react-native</Tag>
                </Wrap>

                <Heading size="md" my="2">
                  <LinkOverlay href="https://play.google.com/store/apps/details?id=com.manjaro.manjarohome">
                    Manjaro News
                  </LinkOverlay>
                </Heading>
                <Text>A application providing get to news about manjaro.</Text>
              </LinkBox>
            </HStack>
          </Box>
          <VStack
            direction="column"
            flexGrow={1}
            spacing={5}
            alignItems="start"
          >
            <MediumArticles />
          </VStack>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
export default Intro;
