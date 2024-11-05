import React, { forwardRef } from "react";
import classNames from "classnames";

const Input = forwardRef(({ onChange, className, name, error,type, isTouched, ...props }, ref) => {
  return (
    <div className="flex flex-col">
      <p className="w-full text-xs mb-0.5 text-left text-red-400">
        {error[name]?.message}
      </p>
      <input
        ref={ref}  // Attach the forwarded ref here
        className={classNames(
          "px-4 py-2 bg-slate-100 rounded-md md:w-full border",
          error[name] ? "border-red-500" : "","focus:outline-none",
          !error[name] && isTouched ? "border-green-500" : "", // Green border on valid
          !error[name] && !isTouched ? "border-gray-300" : "", // Default border if untouched
          className
        )}
        {...props}
        onChange={onChange}
        name={name}
        type={type}
      />
    </div>
  );
});

export default Input;
