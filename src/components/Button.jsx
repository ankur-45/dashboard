import React from "react";

const Button = ({ color, bgColor, text, size, borderRadius }) => {
  return (
    <button
      type="button"
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      style={{ color, backgroundColor: bgColor, borderRadius }}
    >
      {text}
    </button>
  );
};

export default Button;
