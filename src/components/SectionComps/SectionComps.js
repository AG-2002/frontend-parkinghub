import driving from "../../images/driving.svg";
import fourteen from "../../images/SectionCompsImg/fourteen.svg";
import forty from "../../images/SectionCompsImg/forty.svg";
import thirty from "../../images/SectionCompsImg/thirty.svg";
import tweentyfour from "../../images//SectionCompsImg/tweentyfour.svg";
import carefree from "../../images/CardsImg/carefree.svg";
import contactless from "../../images/CardsImg/contactless.svg";
import savings from "../../images/CardsImg/savings.svg";
import ev from "../../images/ev.webp";
import review from "../../images/review.webp";

function SectionComps() {
  return (
    <div className="mt-10 ">
      <div className="flex justify-center gap-x-10 mt-10">
        <img
          src={carefree}
          alt="carefree"
          className="h-1/5 w-1/5 border border-black rounded-3xl"
        />
        <img
          src={contactless}
          alt="contactless"
          className="h-1/5 w-1/5 border border-black rounded-3xl"
        />
        <img
          src={savings}
          alt="savings"
          className="h-1/5 w-1/5 border border-black rounded-3xl"
        />
      </div>
      <div className="flex">
        <div className="w-3/5 flex flex-col justify-center items-center gap-y-8">
          <h1 className="text-3xl font-bold w-3/5">ParkingHub Services</h1>
          <p className="text-sm text-pretty w-3/5 ">
            Experience true smart parking with Valet service. Whether you need
            short-term or long-term parking, Pre-book your spot and enjoy a
            seamless and contactless parking experience.
          </p>
          <img src={driving} alt="private driver" className="h-3/5 w-4/5" />
          <p className="text-lg font-bold w-3/5">
            Park your car with ease and convenience with ParkingHub
          </p>
        </div>
        <div className="w-2/5 flex flex-col justify-center items-center gap-y-8">
          <div className="flex gap-x-8 w-10/12">
            <img src={tweentyfour} alt="search" className="h-20 w-20" />
            <div className="flex flex-col gap-y-2">
              <h1 className="text-3xl font-bold w-4/6">Book Online</h1>
              <p className="w-9/12 text-pretty text-slate-500">
                Just book a Parking online or scan a QR code at the location
              </p>
            </div>
          </div>
          <div className="flex gap-x-8 w-10/12">
            <img src={thirty} alt="search" className="h-20 w-20" />
            <div className="flex mb-10 flex-col gap-y-2">
              <h1 className="text-3xl font-bold w-4/6">Park Smart</h1>
              <p className="w-9/12 text-pretty text-slate-500">
                Get real-time updates and notifications on your parking status
              </p>
            </div>
          </div>
          <div className="flex gap-x-8 w-10/12">
            <img src={forty} alt="search" className="h-20 w-20" />
            <div className="flex flex-col gap-y-2">
              <h1 className="text-3xl font-bold w-4/6">Park Secure</h1>
              <p className="w-9/12 text-pretty text-slate-500">
                No more worrying about the safety and security of your car
              </p>
            </div>
          </div>
          <div className="flex gap-x-8 w-10/12">
            <img src={fourteen} alt="search" className="h-20 w-20" />
            <div className="flex flex-col gap-y-2">
              <h1 className="text-3xl font-bold w-4/6 ">Vehicle Recall</h1>
              <p className="w-9/12 text-pretty text-slate-500">
                Recall over Hub Web and track time to return
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-10 justify-center gap-x-16 mb-10">
        <img
          src={review}
          alt="review"
          className="h-52 w-1/4 border border-black rounded-xl"
        />
        <img
          src={ev}
          alt="ev"
          className="h-52 w-1/4 border border-black rounded-xl"
        />
      </div>
    </div>
  );
}

export default SectionComps;
