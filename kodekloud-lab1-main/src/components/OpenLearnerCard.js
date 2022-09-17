import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function OpenLearnerCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/kodekloud-logo-vector.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          John Peter
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I am learning open source with KodeKloud and my favourite Open Source License is MIT
          license.
        </Typography>
      </CardContent>
    </Card>
  );
}
