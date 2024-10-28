import React from "react";
import classNames from "classnames";

function Input({ onChange, className, ...props }) {
  return (
    <input
      className={classNames(
        " px-4 py-2 border focus:outline-blue-500 group",
        className
      )}
      {...props}
      onChange={onChange}
    />
  );
}

export default Input;
