import React from "react";

const StackElement = ({ name, percentage, rating }) => {
  return (
    <div className="stack__element__container">
      <div className="stack__element__background">

      </div>

      <div className="stack__element__data">
      <div className="stack__element__percentage">{percentage}%</div>
        <div className="stack__element__name">{name}</div>

        <div className="stack__element__raiting">
          {Array.from({ length: 10 }, (_, index) => (
            <div
              key={index}
              className={`stack__rating__block ${
                index < rating ? "filled" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackElement;
