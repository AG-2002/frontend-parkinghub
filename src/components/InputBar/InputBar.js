import { useState } from "react";
import classNames from "classnames";


function InputBar({ className, type = "text", getValue, onSubmit, ...rest }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(event.target[0].value);
    if (value) {
      getValue(value);
    }
    if (onSubmit) {
      onSubmit();
    }
    setValue("");
  };

  const finalClassNames = classNames(
    className,
    "border-2 border-black py-3 px-4 rounded-0 focus:outline-none text-lg"
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={type}
        className={finalClassNames}
        placeholder={rest.placeholder}
      />
    </form>
  );
}

export default InputBar;
