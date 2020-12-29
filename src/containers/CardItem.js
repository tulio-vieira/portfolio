import * as React from "react";

const CardItem = ({ name, url, style, key }) => (
  <div
    key={key}
    style={{
      width: 375,
      height: 208,
      background: "#000",
      color: "#fff",
      borderRadius: 5,
      textAlign: "center",
      overflow: 'hidden',
      ...style
    }}
  >
    <img
      style={{ height: '100%', width: "100%" }}
      src={url}
      alt={name}
    />
  </div>
);

export default CardItem;
