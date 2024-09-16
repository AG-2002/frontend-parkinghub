import Button from "../../Button/Button";
import Parking from "../../../assets/images/Parking.svg";
import { useNavigate } from "react-router-dom";
import hero from "../../../assets/Animation/hero.gif";

function Section() {
  const navigate = useNavigate();
  const handleClickRentOut = () => {
    navigate("/rentout");
  };
  const handleClickFindOut = () => {
    navigate("/findout");
  };

  return (
    <section className="w-full border-2 border-red-500 h-4/6 md:flex md:justify-center md:h-4/5 md:items-center">
      <div className="flex flex-col w-full h-full gap-y-2 md:flex-row md:w-9/12 md:h-4/5 ">
        <div className="w-full md:hidden h-2/5">
          <img src={hero} alt="Hero Animation" className="object-cover w-full h-full" />
        </div>

        <div className="flex flex-col w-full px-4 justify-evenly h-3/5 md:w-1/2 md:h-full md:justify-center md:gap-y-8">
          <div className=" md:flex md:justify-center md:items-center h-2/6">
            <h1 className="grid h-full text-2xl font-semibold Poppins md:text-3xl lg:text-5xl ">
              <span className="lg:leading-tight">
                Experience True <br />
                <span className="transition duration-150 delay-150 text-color-primary hover:text-black">
                  Smart Parking
                </span>
                <br /> With Parking hub
              </span>
            </h1>
          </div>

          <div className=" md:flex md:justify-center">
            <p className="text-lg lg:px-4 text-pretty md:text-xl lg:w-4/6">
              We are parking experts with real-time slots availability
            </p>
          </div>

          <div className="flex text-white lg:py-4 Roboto gap-x-4 md:justify-center lg:gap-x-8">
            <Button
              onClick={handleClickFindOut}
              className="text-sm transition duration-150 ease-in-out delay-100 border-0 rounded-full bg-color-primary hover:bg-black lg:text-lg lg:px-8 lg:py-4"
            >
              FIND PARKING
            </Button>
            <Button
              onClick={handleClickRentOut}
              className="text-sm transition duration-150 ease-in-out delay-100 bg-black border-0 rounded-full hover:bg-color-primary lg:text-lg lg:px-8 lg:py-4"
            >
              RENT OUT PARKING
            </Button>
          </div>
        </div>

        <div className="w-1/2 max-md:hidden md:h-full ">
          <img src={Parking} alt="ParkingPNG" className="object-fill w-full h-full" />
        </div>
      </div>
    </section>
  );
}
export default Section;
