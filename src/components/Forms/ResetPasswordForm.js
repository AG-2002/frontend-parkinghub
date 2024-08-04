import security from "../../images/Secure data-bro.svg";
import { useState } from "react";

function ResetPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex justify-center items-center shadow-2xl h-3/5 w-3/5 rounded-3xl">
        <div className="h-full w-1/2 rounded-3xl overflow-hidden">
          <div className=" h-60 w-60 bg-orange-300 rounded-full relative z-10 right-16 bottom-24"></div>
          <div className=" h-4/5 w-4/5 rounded-full relative z-999 left-24 bottom-44 bg-orange-300 backdrop-filter backdrop-blur-sm bg-opacity-80">
            <img src={security} alt="security" className="h-full w-full" />
          </div>
          <div className="h-52 w-52 bg-orange-300 rounded-full relative z-10 right-16 bottom-64"></div>
        </div>
        <div className="flex flex-col justify-evenly items-center h-full w-1/2 rounded-3xl overflow-hidden">
          <div className="h-1/4 w-1/4 bg-orange-300 rounded-full relative left-64 bottom-12"></div>
          <div>
            <h1 className="font-semibold text-3xl mb-10">
              Forget Your Password?
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center h-2/6 w-3/5 gap-y-10 bg-orange-300 backdrop-filter backdrop-blur-sm bg-opacity-80 rounded-3xl"
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="px-4 py-3 text-xl rounded-lg w-4/5 bg-orange-100"
            />
            <button
              type="submit"
              className="rounded-full px-2 py-2 w-3/5 text-xl bg-orange-400"
            >
              Reset Password
            </button>
          </form>
          <div className="h-1/3 w-1/3 bg-orange-300 rounded-full relative left-64 top-16"></div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
