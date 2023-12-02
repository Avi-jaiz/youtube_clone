import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./index";
import fetchFromAPI from "../utils/FetchFromAPI";
import { demoVidoes } from "../utils/contants";
import DemoCompnent from "./DemoCompnent";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  console.log("vid", videos);
  useEffect(() => {
    const fetch = async () => {
      const res = await fetchFromAPI(`channels?part="snippet"&id=${id}`);
      setChannelDetails(res?.items[0]);

      const res2 = await fetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date`
      );
      setVideos(res2?.items);
    };
    fetch();
  }, [id]);
  return (
    <Box
      minHeight="95vh"
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignContent: "center",
        backgroundColor: "green",
      }}
    >
      <Box
        height={"45vh"}
        sx={{
          background: "#097974",
          display: "flex",
          justifyContent: "center",
          zIndex: "10",
        }}
      >
        <ChannelCard channelDetail={channelDetails} marginTop="350px" />
      </Box>
      <Box
        // sx={{
        //   display: "grid",
        //   padding: "5px",
        //   rowGap: "1rem",
        //   gridTemplateColumns: "repeat(4,400px)",
        //   justifyContent: "center",
        // }}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "0 0 0 25px",
        }}
      >
        {/* {demoVidoes.map((items, index) => (
          <DemoCompnent
            key={index + 1}
            index={index}
            demoChannelTitle={items?.demoChannelTitle}
            channelName={items?.channelName}
          />
        ))} */}

        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
