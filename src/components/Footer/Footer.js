import Logo from "../Logo/Logo";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex justify-center items-center h-[50vh] w-full bg-[#f0f0f0] backdrop-filter backdrop-blur-3xl bg-opacity-50 ">
      <div className="flex justify-around items-center h-4/5 w-5/6 text-lg">
        <div className="h-auto p-8 bg-[#f0f0f0] rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-80">
          <div>
            <Logo className="text-2xl" />
          </div>
          <div className="w-[300px]">
            <p className="leading-loose text-sm ">
              ParkingHub is a smart parking and mobility solutions firm that
              designs solutions to manage parking spaces and eliminate the pain
              that vehicle owners face every day when parking in their city.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 p-8 bg-[#f0f0f0] rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-80">
          <div>
            <h6 className="font-semibold mr-3">ADDRESS LIST</h6>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-start gap-x-5">
              <div>
                <FaLocationDot size={24} />
              </div>
              <div>L-block Sangam Vihar New Delhi 110080</div>
            </div>
            <div className="flex items-center gap-x-5">
              <div>
                <FaPhone size={24} />
              </div>
              <div>+91 9560875675</div>
            </div>
            <div className="flex items-center gap-x-5">
              <div>
                <HiOutlineMailOpen size={24} />
              </div>
              <div>contact@parkinghub.com</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 p-8 bg-[#f0f0f0] rounded-3xl backdrop-filter backdrop-blur-sm bg-opacity-80 ">
          <div>
            <h3 className="font-semibold ">SOCIAL NETWORKS</h3>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex hover:text-[#ffa31a] transition delay-150 duration-150 gap-x-5">
              <div>
                <a href="https://valetez.com">
                  <IoLogoInstagram size={26} className="text-black " />
                </a>
              </div>
              <div>
                <a href="https://valetez.com">@parking hub app</a>
              </div>
            </div>
            <div className="flex hover:text-[#ffa31a] transition delay-150 duration-150 gap-x-5">
              <div>
                <a href="https://valetez.com">
                  <FaLinkedinIn size={24} className="text-black" />
                </a>
              </div>
              <div>
                <a href="https://valetez.com">@parkingHub-services-pvt-ltd</a>
              </div>
            </div>
            <div className="flex hover:text-[#ffa31a] transition delay-150 duration-150 gap-x-5">
              <div>
                <a href="https://valetez.com">
                  <FaXTwitter size={24} className="text-black " />
                </a>
              </div>
              <div>
                <a href="https://valetez.com">@parkingHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
