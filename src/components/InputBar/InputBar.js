import { useState } from "react";
import classNames from "classnames";

function InputBar({ className, type = "text", getValue, onSubmit, ...rest }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    if(value){
      getValue(value);
    }
    
    if(onSubmit){
      onSubmit();
    }
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const finalClassNames = classNames(
    className,
    "border-2 border-black py-3 px-4 rounded-0 focus:outline-none text-lg"
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
