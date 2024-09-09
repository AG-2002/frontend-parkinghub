import driving from "../../../assets/images/driving.svg";
import fourteen from "../../../assets/images/SectionCompsImg/fourteen.svg";
import forty from "../../../assets/images/SectionCompsImg/forty.svg";
import thirty from "../../../assets/images/SectionCompsImg/thirty.svg";
import tweentyfour from "../../../assets/images//SectionCompsImg/tweentyfour.svg";
import carefree from "../../../assets/images/CardsImg/carefree.svg";
import contactless from "../../../assets/images/CardsImg/contactless.svg";
import savings from "../../../assets/images/CardsImg/savings.svg";
import ev from "../../../assets/images/ev.webp";
import review from "../../../assets/images/review.webp";
import ImgCard from "../SlideBar/Card/ImgCard";

const cardList = [
  {
    src: carefree,
    alt: "carefree",
  },
  {
    src: contactless,
    alt: "contactless",
  },
  {
    src: savings,
    alt: "savings",
  },
];

const renderCardList = cardList.map((card) => 
    <ImgCard
      key={cardList.indexOf(card)}
      src={card.src}
      alt={card.alt}
    />
);


function SectionComps() {
  return (
    <div className="mt-10 max-md:h-full">
       <div className="flex items-center justify-center w-full max-md:h-full">
         <div className="flex w-8/12 border-2 justify-evenly max-md:flex-col max-md:h-4/6">{renderCardList}</div>
       </div>

      <div className="flex">
        <div className="flex flex-col items-center justify-center w-3/5 gap-y-8">
          <h1 className="w-3/5 text-3xl font-bold">ParkingHub Services</h1>
          <p className="w-3/5 text-sm text-pretty ">
            Experience true smart parking with Valet service. Whether you need
            short-term or long-term parking, Pre-book your spot and enjoy a
            seamless and contactless parking experience.
          </p>
          <img src={driving} alt="private driver" className="w-4/5 h-3/5" />
          <p className="w-3/5 text-lg font-bold">
            Park your car with ease and convenience with ParkingHub
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-2/5 gap-y-8">
          <div className="flex w-10/12 gap-x-8">
            <img src={tweentyfour} alt="search" className="w-20 h-20" />
            <div className="flex flex-col gap-y-2">
              <h1 className="w-4/6 text-3xl font-bold">Book Online</h1>
              <p className="w-9/12 text-pretty text-slate-500">
                Just book a Parking online or scan a QR code at the location
              </p>
            </div>
          </div>
          <div className="flex w-10/12 gap-x-8">
            <img src={thirty} alt="search" className="w-20 h-20" />
            <div className="flex flex-col mb-10 gap-y-2">
              <h1 className="w-4/6 text-3xl font-bold">Park Smart</h1>
              <p className="w-9/12 text-pretty text-slate-500">
                Get real-time updates and notifications on your parking status
              </p>
            </div>
          </div>
          <div className="flex w-10/12 gap-x-8">
            <img src={forty} alt="search" className="w-20 h-20" />
            <div className="flex flex-col gap-y-2">
              <h1 className="w-4/6 text-3xl font-bold">Park Secure</h1>
              <p className="w-9/12 text-pretty text-slate-500">
                No more worrying about the safety and security of your car
              </p>
            </div>
          </div>
          <div className="flex w-10/12 gap-x-8">
            <img src={fourteen} alt="search" className="w-20 h-20" />
            <div className="flex flex-col gap-y-2">
              <h1 className="w-4/6 text-3xl font-bold ">Vehicle Recall</h1>
              <p className="w-9/12 text-pretty text-slate-500">
                Recall over Hub Web and track time to return
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-10 mb-10 gap-x-16">
        <img
          src={review}
          alt="review"
          className="w-1/4 border border-black h-52 rounded-xl"
        />
        <img
          src={ev}
          alt="ev"
          className="w-1/4 border border-black h-52 rounded-xl"
        />
      </div>
    </div>
  );
}

export default SectionComps;
