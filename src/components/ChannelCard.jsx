import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/contants";
import DEMOPIC from "../utils/assets/context.png";

const ChannelCard = ({ channelDetail, marginTop }) => {
  console.log("hello", channelDetail);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || DEMOPIC}
            alt={channelDetail?.snippet?.title || "demo Title"}
            sx={{
              borderRadius: "50%",
              height: "15rem",
              weight: "180px",
              width: "15rem",
              mb: 2,
              border: "1px solid #e3e3ee3",
            }}
          />
          <Typography>
            {channelDetail?.snippet?.title}

            <CheckCircle sx={{ fontSize: 12, color: "grey", ml: "5px" }} />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
