import React from "react";
import "../styles/stack.css";
import dot from "../assets/dot.svg";
import StackElement from "./stacks/StackElement";
import StackPlaceholder from "./stacks/StackPlaceholder";



import polygon1 from "../assets/stack/poligon1.svg";
import polygon2 from "../assets/stack/poligon2.svg";
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
        {/**name**/}
        <div className="stack__name">
          <p>Stack</p>
          <span>
            <img src={dot} alt="" />
          </span>
        </div>
        {/**Content**/}
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
        {/**polygons**/}


        <div className="stack__polygon stack__polygon1">
            <img src={polygon1} alt="" />
        </div>
        <div className="stack__polygon stack__polygon2">
            <img src={polygon2} alt="" />
        </div>

      </div>
    </section>
  );
};

export default Stack;
