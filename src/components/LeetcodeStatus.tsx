import type { NextPage } from "next";
import React from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

const endpoint = "https://leetcode-stats-api.herokuapp.com/oguzkaganeren";

const LeetcodeStatus: NextPage = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      axios.get(endpoint).then((response) => {
        setData(response.data);
      });
    }, []);
  
    if (!data) return <Spinner />;
  return (
    <>
      Leetcode {" "}
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data!.totalSolved
      } solved
    </>
  );
};
export default LeetcodeStatus;
