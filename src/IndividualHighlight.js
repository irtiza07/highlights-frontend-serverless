import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function IndividualHighlight({ highlight }) {
  return (
    <Grid item xs={3}>
      <Card style={{ width: "20vw", margin: "2vw" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={highlight.sourcePicture}
            title={highlight.sourceTitle}
          />
          <CardContent style={{ height: "25vw" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {highlight.sourceTitle}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {highlight.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read More
          </Button>
          <Button size="small" color="primary">
            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href={highlight.sourceURL}
            >
              Original Website
            </a>
          </Button>
          <Typography variant="subtitle2">{highlight.sourceDomain}</Typography>
          <Typography variant="subtitle2">#{highlight.tag}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
