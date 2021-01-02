import * as React from "react";
import LazyGif from "../../LazyGif/LazyGif";
import classes from './CardItem.module.css';

const CardItem = ({ name, url, style, onClick }) => (
  <div
    onClick={onClick}
    className={classes.CardItem}
    style={style} >
    <img
      className={classes.image}
      src={url}
      alt={name} />
  </div>
);

export default CardItem;
