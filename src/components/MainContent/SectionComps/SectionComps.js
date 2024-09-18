import driving from "../../../assets/images/driving.svg";
import ImgCardData from "./CardData/ImgCardData";
import SectionCardData from "./CardData/SectionCardData";
import ImgsCardData from "./CardData/ImgsCardData";

function SectionComps() {
  return (
    <section className="w-full h-11/12">
      <div className="flex flex-col w-full h-full py-2 gap-y-10 justify-evenly md:items-center md:gap-y-20">
        <ImgCardData />

        <div className=" md:w-3/5 md:flex md:justify-between">
          <div className="flex flex-col items-center py-2 gap-y-1 md:w-7/12 md:justify-evenly md:py-0">
            <h1 className="w-11/12 text-xl font-bold text-center md:text-4xl md:text-start">
              ParkingHub Services
            </h1>
            <p className="w-11/12 text-center md:text-start md:text-sm md:leading-loose">
              Experience true smart parking with Valet service. Whether you need
              short-term or long-term parking, Pre-book your spot and enjoy a
              seamless and contactless parking experience.
            </p>
            <img src={driving} alt="private driver" className="w-11/12 " />
            <p className="w-11/12 font-bold text-center md:text-start">
              Park your car with ease and convenience with ParkingHub
            </p>
          </div>
          <SectionCardData />
        </div>

        <ImgsCardData />
      </div>
    </section>
  );
}

export default SectionComps;
