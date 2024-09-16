import Logo from "../Logo/Logo";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" bg-[#2C3E50]">
     <div className="">
     <div className="">
        <Logo />
        <p className="">
          ParkingHub is a smart parking and mobility solutions firm that designs
          solutions to manage parking spaces and eliminate the pain that vehicle
          owners face every day when parking in their city.
        </p>
      </div>

      <div className="">
        <h6 className="">ADDRESS LIST</h6>
        <FaLocationDot />
        <div>L-block Sangam Vihar New Delhi 110080</div>
        <FaPhone />
        <div>+91 9560875675</div>
        <HiOutlineMailOpen  />
        <div>contact@parkinghub.com</div>
      </div>

      <div className="">
        <h3 className="">SOCIAL NETWORKS</h3>

        <a href="https://valetez.com">
          <IoLogoInstagram />
        </a>

        <a href="https://valetez.com">@parking hub app</a>

        <a href="https://valetez.com">
          <FaLinkedinIn />
        </a>

        <a href="https://valetez.com">@parkingHub-services-pvt-ltd</a>

        <a href="https://valetez.com">
          <FaXTwitter />
        </a>

        <a href="https://valetez.com">@parkingHub</a>
      </div>
     </div>
    </footer>
  );
}

export default Footer;
