import { FaUserAstronaut } from "react-icons/fa6";
import InputBar from "../InputBar/InputBar";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";
import Sidebar from "./Sidebar/Sidebar";
import { HiOutlineMenu } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { useState,} from "react";

function NavBar() {

  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(false);


  return (
      <nav className="w-screen border-b-2">
        <div className="flex justify-between h-20 max-md:h-16">
          <div className="relative flex items-center gap-x-4">
            <div className="ml-2 md:hidden">
              <HiOutlineMenu size={25} onClick={() => setClick(!click)}/>
            </div>
            {click && (
              <div className="w-[290px] h-screen bg-orange-200 absolute top-0 flex flex-col items-center gap-y-6">
              <div className="relative flex w-full h-16 border-b-2">
                <HiOutlineMenu size={25} onClick={() => setClick(!click)} className="mt-5 ml-2"/>
              </div>
           
              <div className="relative flex flex-col justify-around w-full h-24">
              <Sidebar className="" />
            </div>   
            </div>
            )}
            <div className="px-4" >
              <Link to="/">
                <Logo className={"text-4xl max-md:text-[20px]"} />
              </Link>
            </div>
          </div>
          <div className="py-2 max-md:hidden">
            <InputBar
              type={"text"}
              placeholder={"Search location..."}
              
            />
          </div>
          
          <div className="flex items-center mr-4 gap-x-8">
            <div className="md:hidden">
              <IoSearch size={25} className="" onClick={() => setSearch(!search)} />
            </div>
            {search && (
              <div className="absolute h-fit w-fit right-20 top-12"> 
            <InputBar
              type={"text"}
              placeholder={"Search location..."}
              className={"w-[250px] "}
            />
            </div>
          )}

            <div className="flex gap-x-2 max-md:hidden max-md:left-2 max-md:top-16 max-md:w-[200px] max-md:border max-md:border-black max-md:py-4 max-md:flex-col max-md:gap-y-4">
              <Sidebar />
            </div>
            <div className="p-2 transition duration-200 ease-in-out delay-200 border-2 border-black group hover:bg-black hover:text-white">
              <Link to="/login">
                <FaUserAstronaut className="icon hover:group" size={25} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
}
export default NavBar;
