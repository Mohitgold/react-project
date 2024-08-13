import React, { useState } from "react";

import Slider from "../component/Slider";
import Content from "../component/Content";

const Main = ({ handleCartCount }) => {
  return (
    <>
      <Slider />
      <Content handleCartCount={handleCartCount} />
    </>
  );
};

export default Main;
