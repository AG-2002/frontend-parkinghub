import contact from "../../assets/images/Contact us-amico.svg"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import "../../styles/ContactForm.css";
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
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-3/4 bg-orange-200 border shadow-2xl rounded-3xl h-4/5 max-md:max-w-sm">
        <div className="flex flex-col items-center w-1/2 h-full rounded-3xl justify-evenly max-md:w-auto ">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-white max-md:text-2xl">Get In Touch</h1>
            <div className="flex items-center justify-center p-4 bg-orange-100 card gap-x-5 h-fit w-fit rounded-2xl max-md:p-2 ">
              <div className="socialContainer containerOne max-md:w-6 max-md:h-6 max-lg:w-9 max-lg:h-9">
                <FaInstagram size={24} className="text-white socialSvg "/>
              </div>
              <div className="socialContainer containerTwo max-md:w-6 max-md:h-6 ">
                <FaFacebook size={24} className="text-white socialSvg" />
              </div>
              <div className="socialContainer containerThree max-md:w-6 max-md:h-6 ">
                <FaXTwitter size={24} className="text-white socialSvg" />
              </div>
              <div className="socialContainer containerFour max-md:w-6 max-md:h-6 ">
                <FaWhatsapp size={24} className="text-white socialSvg" />
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-1/2 justify-evenly h-3/4 max-md:w-11/12"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={value.name}
              className="w-4/5 px-4 py-3 text-xl bg-orange-100 rounded-lg max-md:"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={value.phone}
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
            <textarea
              type="text"
              name="query"
              placeholder="Write your query..."
              onChange={handleChange}
              value={value.query}
              className="w-4/5 px-4 py-3 text-xl bg-orange-100 rounded-lg "
            />
            <button
              type="submit"
              className="w-2/3 px-4 py-2 text-xl bg-orange-400 rounded-full hover:bg-orange-500"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center w-1/2 h-full rounded-l-3xl max-md:hidden">
          <img src={contact} alt="contact" className="h-5/6" />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
