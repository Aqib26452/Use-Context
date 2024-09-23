import React from "react";

const Inputs = ({
  style,
  placeholder,
  type,
  className,
  id,
  value,
  required,
  onChange,
}) => {
  return (
    <div>
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        style={style}
        placeholder={placeholder}
        className={className}
        required={required}
      />
    </div>
  );
};

export default Inputs;
