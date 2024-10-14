import React, { useState, useEffect } from "react";
import "../styles/scrollToTopButton.css"; // We'll create a CSS file for styling

const ScrollToTopButton = ({ isLoaded }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("hero");

      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;

        if (window.scrollY > heroHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    if (isLoaded) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoaded]); // Only add scroll listener after content is loaded

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
