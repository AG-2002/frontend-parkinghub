import security from "../../assets/images/Secure data-bro.svg";
import { useState } from "react";

function ResetPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex items-center justify-center w-3/5 shadow-2xl h-3/5 rounded-3xl">
        <div className="w-1/2 h-full overflow-hidden rounded-3xl">
          <div className="relative z-10 bg-orange-300 rounded-full  h-60 w-60 right-16 bottom-24"></div>
          <div className="relative w-4/5 bg-orange-300 rounded-full  h-4/5 z-999 left-24 bottom-44 backdrop-filter backdrop-blur-sm bg-opacity-80">
            <img src={security} alt="security" className="w-full h-full" />
          </div>
          <div className="relative z-10 bg-orange-300 rounded-full h-52 w-52 right-16 bottom-64"></div>
        </div>
        <div className="flex flex-col items-center w-1/2 h-full overflow-hidden justify-evenly rounded-3xl">
          <div className="relative w-1/4 bg-orange-300 rounded-full h-1/4 left-64 bottom-12"></div>
          <div>
            <h1 className="mb-10 text-3xl font-semibold">
              Forget Your Password?
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-3/5 bg-orange-300 h-2/6 gap-y-10 backdrop-filter backdrop-blur-sm bg-opacity-80 rounded-3xl"
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-4/5 px-4 py-3 text-xl bg-orange-100 rounded-lg"
            />
            <button
              type="submit"
              className="w-3/5 px-2 py-2 text-xl bg-orange-400 rounded-full"
            >
              Reset Password
            </button>
          </form>
          <div className="relative w-1/3 bg-orange-300 rounded-full h-1/3 left-64 top-16"></div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
