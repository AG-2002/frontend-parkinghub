import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Logo from "../Logo/Logo";
import gps from "../../images/GPS navigator-bro.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../Services/user-api";

function RegistrationForm() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    createUser(value);

    setValue({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border flex justify-center items-center shadow-2xl rounded-3xl h-4/5 w-3/4 ">
        <div className="h-full w-1/2 rounded-l-3xl flex flex-col items-center ">
          <Logo className="text-6xl relative top-9 " />
          <img src={gps} alt="gps" className="h-5/6" />
        </div>
        <div className="flex flex-col justify-evenly items-center h-full w-1/2 rounded-r-3xl">
          <div>
            <h1 className="font-semibold text-3xl">Register an account</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-evenly items-center h-3/4 w-1/2 rounded-3xl"
          >
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              onChange={handleChange}
              value={value.username}
              className="px-4 py-3 text-xl rounded-lg w-4/5 bg-orange-100"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={value.email}
              className="px-4 py-3 text-xl rounded-lg w-4/5 bg-orange-100"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={value.password}
              className="px-4 py-3 text-xl rounded-lg w-4/5 bg-orange-100"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={value.confirmPassword}
              className=" px-4 py-3 text-xl rounded-lg w-4/5 bg-orange-100"
            />
            <div className="flex justify-evenly w-1/2 mr-24">
              <input type="checkbox" id="checkbox" name="checkbox" required />
              <label htmlFor="checkbox">Terms & Conditions</label>
            </div>

            <button
              type="submit"
              className="rounded-full px-4 py-2 w-2/3 text-xl bg-orange-400"
            >
              Register
            </button>
            <div className=" flex justify-evenly px-4 py-2 w-2/3 ">
              <FcGoogle size={28} />
              <FaFacebook size={28} color="#0866ff" />
            </div>
            <div className="underline text-orange-400">
              <Link to="/login">
                Already have an account? <span>Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
