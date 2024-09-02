import React from "react";
import "../styles/stack.css";
import dot from "../assets/dot.svg";
import StackElement from "./stacks/StackElement";
import StackPlaceholder from "./stacks/StackPlaceholder";

const Stack = () => {
  const stackData = [
    { name: "HTML/CSS", percentage: 100, rating: 10 },
    { name: "JavaScript", percentage: 90, rating: 9 },
    { name: "PHP", percentage: 80, rating: 8 },
    { name: "Laravel", percentage: 70, rating: 7 },
    { name: "Nginx", percentage: 60, rating: 6 },
  ];

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
          {stackData.map((item, index) => (
            <>
              <StackElement
                key={item.name} // Use unique key based on item name
                name={item.name}
                percentage={item.percentage}
                rating={item.rating}
              />
              {index === 0 && <StackPlaceholder key="placeholder" />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
