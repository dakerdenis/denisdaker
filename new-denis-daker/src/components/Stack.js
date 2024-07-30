import React from "react";

import "../styles/stack.css";

import dot from "../assets/dot.svg";

import StackElement from "./stacks/StackElement";
const Stack = () => {
  return (
    <section id="stack">
      <div className="stack__container">
        <div className="stack__name">
          <p>Stack</p>
          <span>
            <img src={dot} alt="" />
          </span>
        </div>


          <div className="stack__elements__wrapper">
                      <StackElement/>
                      <StackElement/>
                      <StackElement/>
                      <StackElement/>
                      <StackElement/>

          </div>
      </div>
    </section>
  );
};

export default Stack;
