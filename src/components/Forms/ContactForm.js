import contact from "../../images/Contact us-amico.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import "./ContactForm.css";
import { useState } from "react";

function ContactForm() {
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue({
      name: "",
      phone: "",
      email: "",
      query: "",
    });
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="border flex justify-center items-center shadow-2xl rounded-3xl h-4/5 w-3/4 bg-orange-200 ">
        <div className="rounded-3xl flex flex-col justify-evenly items-center h-full w-1/2 ">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-white ">Get In Touch</h1>
            <div className="card bg-orange-100 flex justify-center items-center gap-x-5 p-4 h-fit w-fit rounded-2xl">
              <div className="socialContainer containerOne">
                <FaInstagram size={24} className="socialSvg text-white" />
              </div>
              <div className="socialContainer containerTwo">
                <FaFacebook size={24} className="socialSvg text-white" />
              </div>
              <div className="socialContainer containerThree">
                <FaXTwitter size={24} className="socialSvg text-white" />
              </div>
              <div className="socialContainer containerFour ">
                <FaWhatsapp size={24} className="socialSvg text-white" />
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" border  flex flex-col justify-evenly items-center h-3/4 w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={value.name}
              className="px-4 py-3 text-xl rounded-lg w-4/5 bg-orange-100"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={value.phone}
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
            <textarea
              type="text"
              name="query"
              placeholder="Write your query..."
              onChange={handleChange}
              value={value.query}
              className=" px-4 py-3 text-xl rounded-lg w-4/5 bg-orange-100"
            />
            <button
              type="submit"
              className="rounded-full px-4 py-2 w-2/3 text-xl bg-orange-400"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="h-full w-1/2 rounded-l-3xl flex justify-center items-center ">
          <img src={contact} alt="contact" className="h-5/6" />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
