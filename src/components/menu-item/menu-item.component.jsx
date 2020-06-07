import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div style={{ backgroundImage: `url(${imageUrl})` }} className={`${size} menu-item`}>
    <div className="content">
      <h1>{title}</h1>
      <span>Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
