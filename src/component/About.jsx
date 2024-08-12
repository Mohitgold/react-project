import React, { useEffect, useState } from "react";
import AccordianData from "./AccordianData";
import { TiArrowSortedUp } from "react-icons/ti";

import { TiArrowSortedDown } from "react-icons/ti";

const About = () => {
  //Accordian
  const [accinfo, setAccinfo] = useState([]);
  // Track open accordion index
  const [openIndex, setOpenIndex] = useState(null);
  // Set state on component mount
  useEffect(() => {
    setAccinfo(AccordianData);
  }, []);
  const toggleAccrd = (index) => {
    // setOpenIndex(openIndex === index ? null : index);
    setOpenIndex(index);
    // console.log(index);
  };

  const [inputVal, setInputVal] = useState();
  const [inputValTwo, setInputValTwo] = useState();
  const [selectVal, setSelectVal] = useState("");
  const [result, setResult] = useState(null);

  const getInputVal = (e) => {
    setInputVal(e.target.value);
  };
  const getInputValTwo = (e) => {
    setInputValTwo(e.target.value);
  };

  const getSelectValue = (e) => {
    const selectedValue = e.target.value;
    setSelectVal(selectedValue);

    // Convert inputs to numbers
    const num1 = parseFloat(inputVal);
    const num2 = parseFloat(inputValTwo);

    let res = null;
    switch (selectedValue) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      case "%":
        res = num1 % num2;
        break;
      default:
        res = null;
    }

    setResult(res);
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Calculator</h1>
        <div id="wrapper">
          <input
            type="text"
            onChange={getInputVal}
            value={inputVal}
            placeholder="Enter Number 1"
            id="num1"
          />
          <input
            type="text"
            placeholder="Enter Number 2"
            id="num2"
            value={inputValTwo}
            onChange={getInputValTwo}
          />
          <select name="" id="" onChange={getSelectValue} value={selectVal}>
            <option value="" selected disabled>
              Operation
            </option>
            <option value="+">Addition</option>
            <option value="-">Subtraction</option>
            <option value="/">Division</option>
            <option value="*">Multiplication</option>
            <option value="%">Modulus</option>
          </select>

          <p></p>
        </div>
        <p>Result: {result !== null ? result : ""}</p>
      </div>

      <div className="row">
        <div className="accord-wrapper">
          <section className="c-faqs">
            <header className="c-faqs__header">
              <h1 className="c-faqs__title">FAQs</h1>
            </header>

            {accinfo.map((item, index) => (
              <div className="c-faqs__items" key={index}>
                <div className="c-faqs__item">
                  <div
                    className="c-faqs__item-question"
                    onClick={() => toggleAccrd(index)}
                  >
                    {item.heading}
                    <span>
                      {openIndex === index ? (
                        <TiArrowSortedUp />
                      ) : (
                        <TiArrowSortedDown />
                      )}
                    </span>
                  </div>

                  <p
                    className={`c-faqs__item-answer ${
                      openIndex === index ? "c-faqs__item-answer-show" : ""
                    }`}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
