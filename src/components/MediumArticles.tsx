import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Box, Flex, Stack, Link, chakra, Skeleton, HStack, VStack } from "@chakra-ui/react";

const MediumArticles: NextPage = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oguzkaganeren";
  useEffect(() => {
    fetch(mediumURL)
      .then((res) => res.json())
      .then((data) => {
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(
          (item: {
            categories: string | any[];
            title: string;
            content: string;
          }) => item.categories.length > 0
        );
        setArticles(posts);
      });
  }, []);
  if (!articles)
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  return (
    <VStack>
      {articles.map((row, i) => (
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          maxW="xl"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <chakra.span
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              {row.pubDate}
            </chakra.span>
            <Link
              px={3}
              py={1}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{
                bg: "gray.500",
              }}
            >
              {row.categories[0]}
            </Link>
          </Flex>

          <Box mt={2}>
            <Link
              fontSize="2xl"
              color="gray.700"
              _dark={{
                color: "white",
              }}
              fontWeight="700"
              _hover={{
                color: "gray.600",
                _dark: {
                  color: "gray.200",
                },
                textDecor: "underline",
              }}
              href={row.link}
            >
              {row.title}
            </Link>
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
              noOfLines={[1, 2, 3]}
            >
              <div dangerouslySetInnerHTML={{ __html: row.content }} />
            </chakra.p>
          </Box>

          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Link
              color="brand.600"
              href={row.link}
              target="_blank"
              _dark={{
                color: "brand.400",
              }}
              _hover={{
                textDecor: "underline",
              }}
            >
              Read more
            </Link>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
};
export default MediumArticles;
