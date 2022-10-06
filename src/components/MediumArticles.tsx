import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";

const MediumArticles: NextPage = () => {
  const [avatar, setAvatar] = useState();
  const [profileLink, setProfileLink] = useState();
  const [articles, setArticles] = useState([]);
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oguzkaganeren";
  useEffect(() => {
    fetch(mediumURL)
      .then((res) => res.json())
      .then((data) => {
        // create two-dimensional array with 3 elements per inner array
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0);
        setAvatar(avatar);
        setProfileLink(profileLink);
        setArticles(posts);
        console.log(posts);
      });
  }, []);
  return (
    <>
      <chakra.h3
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
        fontSize="2xl"
        textTransform="uppercase"
      >
        My Medium Articles
      </chakra.h3>
      {articles.map((row, i) => (
        <Box
          maxW="md"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="lg"
          rounded="lg"
        >
          <Box px={4} py={2}>
            <chakra.h3
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
              fontSize="1xl"
              textTransform="uppercase"
            >
              {row.title}
            </chakra.h3>
            <chakra.p
              mt={1}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
              noOfLines={[1, 2, 3]}
            >
              <div dangerouslySetInnerHTML={{ __html: row.content }} />
            </chakra.p>
          </Box>

          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            bg="gray.900"
            roundedBottom="lg"
          >
            <Link href={row.link} target="_blank">
              <chakra.button
                px={2}
                py={1}
                bg="white"
                fontSize="xs"
                color="gray.900"
                fontWeight="bold"
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: "gray.200",
                }}
                _focus={{
                  bg: "gray.400",
                }}
              >
                Read more
              </chakra.button>
            </Link>
          </Flex>
        </Box>
      ))}
    </>
  );
};
export default MediumArticles;
