import Logo from "../Logo/Logo";
import blue from "../../assets/images/blue.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [value, setValue] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue({ username: "", password: "" });
  };

  return (
    <div className="w-screen h-screen lg:flex lg:justify-center lg:items-center">
      <div className="w-full h-full lg:h-3/5 lg:w-3/6 lg:flex lg:shadow-2xl lg:rounded-3xl ">
        <div className="relative flex justify-center h-2/5 lg:h-full lg:w-1/2 md:bg-color-primary lg:static lg:rounded-l-3xl lg:flex-col lg:items-center lg:justify-evenly">
          <Logo className="absolute text-xl top-4 md:text-3xl md:top-1 lg:text-5xl lg:static lg:w-5/6 lg:h-fit lg:px-10" />
          <img src={blue} alt="logo" className="w-full h-full lg:w-5/6 lg:h-4/6 "/>
        </div>

        <div className="flex flex-col items-center h-3/5 lg:h-full lg:w-1/2 lg:rounded-r-3xl justify-evenly">
          <div className="flex flex-col items-center justify-between w-5/6 h-1/5">
            <h1 className="text-2xl font-semibold text-amber-500 md:text-3xl lg:text-4xl">Welcome</h1>
            <h1 className="text-2xl font-semibold text-blue-500 md:text-3xl lg:text-4xl">User Login</h1>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-5/6 justify-evenly gap-y-4 h-4/6 ">
            
              <input
                type="text"
                name="username"
                placeholder="Email or username"
                className="bg-[#93c5fd47] placeholder:text-blue-500 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 px-3 py-3 "
                onChange={handleChange}
                value={value.username}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                className="bg-[#93c5fd47] placeholder:text-blue-500 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 px-3 py-3"
                onChange={handleChange}
                value={value.password}
              />
            <Link to="/forgetpassword" className="text-blue-600 visited:text-purple-600 hover:underline">Forgot password?</Link>
            <button
              type="submit"
              className="py-3 text-white bg-blue-500 rounded-full active:bg-blue-600"
            >
              LOG IN
            </button>
            <Link to="/registration" className="text-blue-600 visited:text-purple-600 hover:underline">Create account</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
