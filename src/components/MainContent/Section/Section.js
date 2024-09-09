import Button from "../../Button/Button";
import Parking from "../../../assets/images/Parking.svg";
import { useNavigate } from "react-router-dom";

function Section() {
  const navigate = useNavigate();
  const handleClickRentOut = () => {
    navigate("/rentout");
  };
  const handleClickFindOut = () => {
    navigate("/findout");
  };

  return (
    <div className="flex justify-center w-full h-full border-2 max-md:h-auto">
      <div className="flex justify-between border-2">
        <div className="flex flex-col items-start justify-center gap-y-6 gap-x-6 size-[600px]">
        
            <div>
              <h1 className="text-5xl font-semibold leading-tight Poppins max-md:text-2xl">
                Experience True <br />
                <span className="transition duration-150 delay-150 text-change text-color-primary hover:text-black">
                  Smart Parking
                </span>
                <br /> With Parking hub
              </h1>
            </div>
            <div className="">
              <p className="text-lg font-normal max-md:text-sm">
                We are parking experts with real-time <br />
                slots availability
              </p>
            </div>
            <div className="flex gap-4 font-semibold text-white Roboto max-md:grid">
              <Button
                onClick={handleClickFindOut}
                className="w-48 transition duration-150 ease-in-out delay-100 border-0 rounded-full bg-color-primary hover:bg-black h-14 max-md:text-sm max-md:h-11 max-md:w-44"
              >
                FIND PARKING
              </Button>
              <Button
                onClick={handleClickRentOut}
                className="transition duration-150 ease-in-out delay-100 bg-black border-0 rounded-full hover:bg-color-primary w-60 max-md:text-sm max-md:w-52"
              >
                RENT OUT PARKING
              </Button>
            </div>
        </div>
        <div className=" size-[600px] max-md:hidden ">
          <img src={Parking} alt="ParkingPNG" className="object-fill" />
        </div>
      </div>
    </div>
  );
}
export default Section;
