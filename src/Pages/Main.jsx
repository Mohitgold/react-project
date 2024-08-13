import React, { useState } from "react";

import Slider from "../component/Slider";
import Content from "../component/Content";

const Main = ({ handleCartCount, cartcount, modalShow, closeModal }) => {
  return (
    <>
      <Slider />
      <Content
        handleCartCount={handleCartCount}
        cartcount={cartcount}
        modalShow={modalShow}
        closeModal={closeModal}
      />
    </>
  );
};

export default Main;
