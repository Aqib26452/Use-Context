import React from "react";

const Button = ({ style, className, btnTitle, type }) => {
  return (
    <div>
      <button style={style} className={className} type={type}>
        {btnTitle}
      </button>
    </div>
  );
};

export default Button;
