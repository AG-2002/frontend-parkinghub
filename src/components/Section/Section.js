import Button from "../Button/Button";
import "./Section.css";
import Parking from "../../images/Parking.svg";
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
    <div className="main flex w-full h-screen mt-24 border border-0">
      <div className="primary w-[50vw] flex flex-col justify-center items-center border border-0">
        <div className="border border-0 ">
          <h1 className="poppins-regular text-5xl font-bold mb-16 ">
            EXPERIENCE TRUE <br />
            <span className="text-change text-[#ffa31a] hover:text-black transition delay-150 duration-150">
              SMART PARKING
            </span>
            <br /> WITH Parking hub
          </h1>
          <p className="poppins-regular text-lg font-normal mb-10">
            We are parking experts with real-time <br />
            slots availability
          </p>
        </div>
        <div className="btn text-white border border-0 mb-24 ">
          <Button
            onClick={handleClickFindOut}
            className="btn-one bg-[#ffa31a] border border-0 rounded-full hover:bg-black transition delay-100 duration-150 ease-in-out text-sm w-48 py-5"
          >
            FIND PARKING
          </Button>
          <Button
            onClick={handleClickRentOut}
            className="btn-two bg-black border border-0 rounded-full hover:bg-[#ffa31a] transition delay-100 duration-150 ease-in-out ml-8 text-sm w-60 py-5"
          >
            RENT OUT PARKING
          </Button>
        </div>
      </div>
      <div className="secondary w-[50vw] border border-0">
        <img src={Parking} alt="ParkingPNG" className="h-4/5" />
      </div>
    </div>
  );
}
export default Section;
