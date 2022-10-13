import type { NextPage } from "next";
import React from "react";
import { chakra, Flex, Icon } from "@chakra-ui/react";
import { useQuery } from "react-query";
import axios from "axios";

const endpoint = "https://leetcode.com/graphql";
const STATUS_QUERY = `
  {
    matchedUser(username: "oguzkaganeren") {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
  }
`;
const LeetcodeStatus: NextPage = () => {
  const { data, isLoading, error } = useQuery("matchedUser", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: STATUS_QUERY,
      },
    }).then((response) => {
      console.log(response);
      response.data.data;
    });
  });
  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
     Leetcode submission count: {data.matchedUser.submitStats.acSubmissionNum[0].count}
    </div>
  );
};
export default LeetcodeStatus;
