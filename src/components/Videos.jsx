import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap={"wrap"} justifyContent="start" gap={2} >
      {videos.map((items, index) => (
        <Box key={index} >
          {items.id.channelId && <ChannelCard channelDetail={items} />}

          {items.id.videoId && <VideoCard video={items} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
