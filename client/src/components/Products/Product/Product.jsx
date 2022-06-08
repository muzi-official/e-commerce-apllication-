import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import useStyles from "./styles";
import Rating from "../../ProductRating/Rating";

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <>
      <NavLink className={classes.linkButton} to={`/product/${product._id}`}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={product.image1}
            title="img title"
          />
          <CardContent>
            <div className={classes.cardContent}>
              <Typography gutterBottom variant="h6" component="h2">
                {product.name}
              </Typography>
            </div>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {product.title}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardActions}>
            <Typography gutterBottom variant="body1" component="p">
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
              <span style={{ fontWeight: "bold" }}>$ {product.price}</span>
            </Typography>
          </CardActions>
        </Card>
      </NavLink>
    </>
  );
};

export default Product;
