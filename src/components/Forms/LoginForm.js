import Logo from "../Logo/Logo";
import blue from "../../images/blue.svg";
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
    <div className="flex justify-center items-center h-screen ">
      <div className="border flex justify-center items-center h-3/5 w-2/4 shadow-2xl rounded-3xl">
        <div className="h-full w-1/2 rounded-l-3xl bg-[#ffa31a] flex flex-col items-center ">
          <Logo className="text-6xl relative top-9 " />
          <img src={blue} alt="logo" />
        </div>
        <div className="flex flex-col justify-evenly items-center h-full w-1/2 rounded-r-3xl">
          <div>
            <h1 className="font-semibold text-5xl text-amber-500">Welcome</h1>
          </div>
          <div>
            <h1 className="font-semibold text-3xl text-blue-500">User Login</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-evenly items-center h-1/2 w-2/3"
          >
            <input
              type="text"
              name="username"
              placeholder="Email or username"
              className="bg-[#93c5fd47] placeholder:text-blue-500 px-4 py-3 text-xl rounded-lg w-4/5"
              onChange={handleChange}
              value={value.username}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="bg-[#93c5fd47] placeholder:text-blue-500 px-4 py-3 text-xl rounded-lg w-4/5"
              onChange={handleChange}
              value={value.password}
            />
            <div className="text-blue-500 underline">
              <Link to="/forgetpassword">Forgot password?</Link>
            </div>
            <button
              type="submit"
              className="rounded-full px-4 py-2 w-2/3 text-xl bg-blue-400 text-white"
            >
              LOG IN
            </button>
            <div className="text-blue-500 underline">
              <Link to="/registration">Create account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
