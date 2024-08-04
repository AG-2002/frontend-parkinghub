import { FaUserAstronaut } from "react-icons/fa6";
import Button from "../Button/Button";
import InputBar from "../InputBar/InputBar";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const handleClickContactForm = () => {
    navigate("/contact");
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-white flex justify-center items-center border border-black py-2 gap-52">
      {/* <div className="flex justify-center items-center border border-black py-2 gap-52"> */}
      <div className="ml-12 border border-black">
        <Link to="/">
          <Logo className={"text-4xl"} />
        </Link>
      </div>
      <div className="ml-60">
        <InputBar type={"text"} placeholder={"Search location..."} />
      </div>
      <div className="flex items-center mr-20">
        <div className="mr-4">
          <ul className="flex text-xl">
            <li className="mx-8 hover:text-[#ffa31a] transition delay-150 duration-150">
              <Link to="/about">About Hub</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button
            onClick={handleClickContactForm}
            className={
              "bg-black text-white hover:bg-[#ffa31a] transition delay-100 duration-150 ease-in-out border border-0"
            }
          >
            Get In Touch
          </Button>
        </div>
        <div className="ml-6 border border-2 border-black hover:bg-black hover:text-white transition delay-200 duration-200 ease-in-out p-2">
          <Link to="/login">
            <FaUserAstronaut className="icon" size={32} />
          </Link>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}
export default NavBar;
