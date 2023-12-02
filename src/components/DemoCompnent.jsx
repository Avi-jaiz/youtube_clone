import React from "react";
import { Card, Box, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const DemoCompnent = ({
  demoThumbnailUrl,
  demoChannelTitle,
  channelName,
  index,
}) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <h2>Vidoe no {index + 1}</h2>
      <Link to="/">
        <CardMedia
          image={demoThumbnailUrl}
          alt={demoThumbnailUrl}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          {demoChannelTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DemoCompnent;
