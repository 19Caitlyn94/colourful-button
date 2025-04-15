import React, { useState } from 'react';
import confetti from "https://esm.run/canvas-confetti@1";
import './Button.css';

function Button({ colors = ['gradient', 'red', 'blue', 'green', 'purple'] }) {
  const messages = [
    "Here we go again!",
    "I think I need more colours...",
    "Are you not entertained?",
    "Yay! Ok, stop clicking me now."
  ];
  const maxRotations = messages.length;

  const [colorIndex, setColorIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [message, setMessage] = useState("");

  const resetButton = () => {
    setColorIndex(0);
    setRotation(0);
    setMessage("");
  }

  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    
    if (colorIndex === colors.length - 1) {
      setRotation((prevRotation) => prevRotation + 1);
      setMessage(() => messages[rotation]);
    }

    if (rotation === maxRotations && colorIndex === colors.length - 1) {
      confetti({
        particleCount: 150,
        spread: 60
      });
      resetButton();
    }
  };

  const currentColor = colors[colorIndex];
  const buttonAriaLabel = `Button that changes colour when clicked - Currently ${currentColor}`;

  return (
    <>
      <button 
        className={`button color-${currentColor}`}
        onClick={handleClick}
        aria-label={buttonAriaLabel}
        role="button"
      >
        Click Me
      </button>
      <p>{message}&nbsp;</p> {/* &nbsp; reduces layout shift when message is updated */}
    </>
  );
}

export default Button; 