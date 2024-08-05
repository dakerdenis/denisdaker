import React from "react";
import "../styles/soft.css";
import dot from "../assets/dot.svg";
import SoftElement from "./soft/SoftElement";
import SoftPlaceholder from "./soft/SoftPlaceholder";

const Soft = () => {
  const softData = [
    { name: "HTML/CSS",image:'soft1.png', percentage: 70, rating: 7 },
    { name: "React JS",image:'soft1.png', percentage: 50, rating: 5 },
    { name: "JavaScript",image:'soft1.png', percentage: 90, rating: 9 },
    { name: "Java",image:'soft1.png', percentage: 30, rating: 3 },
    { name: "Python",image:'soft1.png', percentage: 80, rating: 8 },
  ];

  return (
    <section id="soft">
      <div className="soft__container">
        <div className="soft__name">
          <p>Stack</p>
            <img src={dot} alt="" />
        </div>

        <div className="soft__elements__wrapper">
          {softData.map((item, index) => (
            <>
              <SoftElement
                key={item.name} // Use unique key based on item name
                image={item.image}
                name={item.name}
                percentage={item.percentage}
                rating={item.rating}
              />
              {index === 0 && <SoftPlaceholder key="placeholder" />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soft;
