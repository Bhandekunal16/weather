import React from "react";
import color from "./color";

const style = {
  color: color.ORANGE,
  background: color.WHITE,
};

const Header = () => {
  return (
    <div>
      <h1 style={style}>title</h1>
    </div>
  );
};

export default Header;
