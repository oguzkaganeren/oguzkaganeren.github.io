import type { NextPage } from "next";
import React from "react";
import { Box, chakra, Text, VStack, HStack, Tag } from "@chakra-ui/react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Agito",
    role: "Full Stack Developer",
    period: "07/2023 – Present",
    description:
      "Enterprise insurance platforms for carriers including Zurich, Vakıf Emeklilik, Türkiye Hayat Emeklilik, and Cardif. Java, JSF, Oracle WebLogic, React, Angular, Flutter.",
  },
  {
    company: "Huawei",
    role: "Java Developer",
    period: "11/2022 – 07/2023",
    description:
      "Petal Maps Backend Team; service layer for map campaigns and icon rendering; Kafka-based messaging; Spring Boot, Spring Security.",
  },
  {
    company: "Davon Tech.",
    role: "Java Developer",
    period: "02/2020 – 08/2022",
    description:
      "Healthcare inventory management application, front-end and back-end contributions.",
  },
];

const Experience: NextPage = () => {
  return (
    <Box w="full">
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
        Experience
      </chakra.h3>
      <VStack spacing={4} align="stretch">
        {experiences.map((item) => (
          <Box
            key={item.company}
            p="5"
            borderWidth="1px"
            rounded="md"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
          >
            <HStack justify="space-between" flexWrap="wrap" mb={1}>
              <Text fontWeight="bold">
                {item.company} — {item.role}
              </Text>
              <Tag colorScheme="teal">{item.period}</Tag>
            </HStack>
            <Text
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              {item.description}
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};
export default Experience;
