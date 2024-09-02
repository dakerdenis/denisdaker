import React from "react";
import "../styles/soft.css";
import dot from "../assets/dot.svg";
import SoftElement from "./soft/SoftElement";
import SoftPlaceholder from "./soft/SoftPlaceholder";

const Soft = () => {
  const softData = [
    { name: "Figma",image:'soft1.png', percentage: 100, rating: 10 },
    { name: "Canva",image:'soft2.png', percentage: 100, rating: 10 },
    { name: "Postman",image:'soft3.png', percentage: 90, rating: 9 },
    { name: "Git",image:'soft7.png', percentage: 80, rating: 8 },
    { name: "WinSCP",image:'soft5.png', percentage: 70, rating: 7 },
    { name: "Photoshop",image:'soft6.png', percentage: 60, rating: 6 },
    { name: "Docker",image:'soft4.png', percentage: 50, rating: 5},
    { name: "Composer",image:'soft8.png', percentage: 30, rating: 3 },
  ];

  return (
    <section id="soft">
      <div className="soft__container">
        <div className="soft__name">
          <p>Soft</p>
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
