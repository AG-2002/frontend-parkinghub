import { BiSolidInstitution } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";

function Card({ title, subTitle, summary }) {
  return (
    <div className="flex flex-col w-40 px-2 py-2 border border-black rounded-lg justify-evenly h-36 md:h-64 md:w-96 md:gap-y-6">
      <div className="">
        <h3 className="text-xs md:ml-6 md:text-xl md:font-semibold">{title}</h3>
      </div>

      <div>
        <h2 className="text-xs font-semibold md:ml-6 md:text-2xl md:font-bold">{subTitle}</h2>
      </div>

      <div className="flex justify-around">

        <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
          <SlEnergy className="size-2.5 md:size-7"  />
          <p className="text-xs md:text-xl md:font-medium">{summary}</p>
        </div>

        <div className="flex items-center justify-center border border-black rounded-full size-8 md:size-20">
          <BiSolidInstitution className="size-5 md:size-12" />
        </div>

      </div>
    </div>
  );
}

export default Card;
