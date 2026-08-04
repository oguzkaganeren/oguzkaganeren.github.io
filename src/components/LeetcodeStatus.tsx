import type { NextPage } from "next";
import React from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

const endpoint = "https://leetcode-api-faisalshohag.vercel.app/oguzkaganeren";

type LeetcodeData = {
  totalSolved: number;
};

const LeetcodeStatus: NextPage = () => {
  const [data, setData] = React.useState<LeetcodeData | null>(null);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(endpoint, { timeout: 8000 })
      .then((response) => {
        if (typeof response.data?.totalSolved === "number") {
          setData(response.data);
        } else {
          setFailed(true);
        }
      })
      .catch(() => {
        setFailed(true);
      });
  }, []);

  if (failed) return <>Leetcode profile</>;
  if (!data) return <Spinner size="sm" />;
  return (
    <>
      Leetcode {data.totalSolved} solved
    </>
  );
};
export default LeetcodeStatus;
