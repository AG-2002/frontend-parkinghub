import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Logo from "../Logo/Logo";
import gps from "../../assets/images/GPS navigator-bro.svg";
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
    <div className="flex items-center justify-center h-screen ">
      <div className="flex items-center justify-center w-3/4 border shadow-2xl rounded-3xl h-4/5 ">
        <div className="flex flex-col items-center w-1/2 h-full rounded-l-3xl ">
          <Logo className="relative text-6xl top-9 " />
          <img src={gps} alt="gps" className="h-5/6" />
        </div>
        <div className="flex flex-col items-center w-1/2 h-full justify-evenly rounded-r-3xl">
          <div>
            <h1 className="text-3xl font-semibold">Register an account</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-1/2 justify-evenly h-3/4 rounded-3xl"
          >
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              onChange={handleChange}
              value={value.username}
              className="w-4/5 px-4 py-3 text-xl bg-orange-100 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={value.email}
              className="w-4/5 px-4 py-3 text-xl bg-orange-100 rounded-lg"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={value.password}
              className="w-4/5 px-4 py-3 text-xl bg-orange-100 rounded-lg"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={value.confirmPassword}
              className="w-4/5 px-4 py-3 text-xl bg-orange-100 rounded-lg "
            />
            <div className="flex w-1/2 mr-24 justify-evenly">
              <input type="checkbox" id="checkbox" name="checkbox" required />
              <label htmlFor="checkbox">Terms & Conditions</label>
            </div>

            <button
              type="submit"
              className="w-2/3 px-4 py-2 text-xl bg-orange-400 rounded-full"
            >
              Register
            </button>
            <div className="flex w-2/3 px-4 py-2  justify-evenly">
              <FcGoogle size={28} />
              <FaFacebook size={28} color="#0866ff" />
            </div>
            <div className="text-orange-400 underline">
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
