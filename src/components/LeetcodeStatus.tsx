import type { NextPage } from "next";
import React from "react";
import axios from "axios";

const endpoint = "https://leetcode-stats-api.herokuapp.com/oguzkaganeren";

const LeetcodeStatus: NextPage = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      axios.get(endpoint).then((response) => {
        setData(response.data);
      });
    }, []);
  
    if (!data) return null;
  return (
    <div>
      Leetcode {" "}
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data!.totalSolved
      } solved
    </div>
  );
};
export default LeetcodeStatus;
