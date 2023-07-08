import type { NextPage } from "next";
import React from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  VStack,
  chakra,
  useColorModeValue,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { FaHeart, } from "react-icons/fa";
import {  AiOutlineMenu } from "react-icons/ai";
import personal from "./../data/personal.json";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
const Header: NextPage = () => {
  const mobileNav = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  const height = 50;
  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const SponsorButton = (
    <Box
      display={{
        base: "none",
        md: "flex",
      }}
      alignItems="center"
      as="a"
      aria-label="Sponsor"
      href={personal.sponsor}
      target="_blank"
      rel="noopener noreferrer"
      bg="gray.50"
      borderWidth="1px"
      borderColor="gray.200"
      px="1em"
      minH="36px"
      rounded="md"
      fontSize="sm"
      color="gray.800"
      outline="0"
      transition="all 0.3s"
      _hover={{
        bg: "gray.100",
        borderColor: "gray.300",
      }}
      _active={{
        borderColor: "gray.200",
      }}
      _focus={{
        boxShadow: "outline",
      }}
      ml={5}
    >
      <Icon as={FaHeart} w="4" h="4" color="red.500" mr="2" />
      <Box as="strong" lineHeight="inherit" fontWeight="semibold">
        Sponsor
      </Box>
    </Box>
  );
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Link href={personal.sponsor}>
        <Button w="full" variant="ghost" leftIcon={<FaHeart />}>
          Sponsor
        </Button>
      </Link>
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
    </VStack>
  );
  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Avatar
                    name="Oğuz Kağan EREN"
                    bg="green.500"
                    src="/photo.jpg"
                  />
                </HStack>
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
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

              {SponsorButton}
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  );
};
export default Header;
