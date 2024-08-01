import React, { useState, useEffect, useRef } from "react";

const SoftElement = ({ name, image, percentage, rating }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const ratingRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = () => {
            if (start <= rating) {
              setCurrentRating(start);
              start++;
              setTimeout(increment, 300); // Adjust speed as needed
            }
          };
          increment();
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (ratingRef.current) {
      observer.observe(ratingRef.current);
    }

    return () => {
      if (ratingRef.current) {
        observer.unobserve(ratingRef.current);
      }
    };
  }, [rating]);

  return (
    <div className="soft__element__container" ref={ratingRef}>
      <div className="soft__element__percentage">{percentage}%</div>
      <div className="soft__element__name">
        <img src={require(`../../assets/soft/${image}`)} alt={name} />
        {name}
      </div>

      <div className="soft__element__rating">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className={`soft__rating__block ${
              index < currentRating ? "filled" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SoftElement;
