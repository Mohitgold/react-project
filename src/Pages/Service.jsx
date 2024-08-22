import React, { useState } from "react";
import { Colors } from "../component/Color";

const Service = () => {
  const [dots, setDots] = useState([]);
  const [undo, setUndo] = useState([]);
  //Screen Click , Create dot on click
  const handleClick = (e) => {
    // console.log("clicked");
    const dotInfo = {
      id: Date.now(),
      BgColor: Colors[Math.floor(Math.random() * Colors.length)],
      x: e.clientX,
      y: e.clientY,
    };
    setDots([...dots, dotInfo]);
  };

  //Reset all dots
  const handleReset = () => {
    setDots([]);
  };

  //dots Undo function
  const handleUndo = () => {
    let copy = dots;
    let lastDot = copy.pop();
    setUndo([...undo, lastDot]);
  };

  //dots Redu function
  const handleRedu = () => {
    let unduCopy = undo;
    const lastDot = unduCopy.pop();
    setDots([...dots, lastDot]);
  };
  console.log(dots);
  console.log(undo);
  return (
    <div className="container-fluid page-min-height">
      <div className="row">
        <h1>Circle Task</h1>
        <div className="btns">
          <button disabled={dots.length === 0} onClick={handleReset}>
            Reset
          </button>
          <button disabled={dots.length === 0} onClick={handleUndo}>
            Undo
          </button>
          <button disabled={dots.length === 0} onClick={handleRedu}>
            ReDo
          </button>
        </div>
        <div className="dot-wrapper" onClick={handleClick}>
          {dots.map((items) => {
            const dotStyle = {
              backgroundColor: items.BgColor,
              top: items.y - 170 + "px",
              left: items.x - 10 + "px",
            };
            return (
              <div key={items.id} className="singledot" style={dotStyle}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
