import { useState } from "react";
import classNames from "classnames";

function InputBar({ className, type, getValue, onSubmit, ...rest }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getValue(value);
    onSubmit();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const finalClassNames = classNames(
    className,
    "border border-2 border-black p-4 rounded-0 focus:outline-none text-lg"
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={value}
        type={type}
        className={finalClassNames}
        placeholder={rest.placeholder}
      />
    </form>
  );
}

export default InputBar;
