import { BiSolidInstitution } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";

function Card({ title, subTitle, summary }) {
  return (
    <div className=" flex flex-col justify-between w-[400px] h-[280px] border border-black rounded-lg m-1 p-4 ">
      <div>
        <h3 className="text-2xl">{title}</h3>
      </div>
      <div>
        <h2 className="text-4xl font-semibold">{subTitle}</h2>
      </div>

      <div className="flex justify-between ">
        <div className="flex items-center text-slate-400">
          <SlEnergy className="mr-2" size={20} />
          <p className="text-lg">{summary}</p>
        </div>
        <div className="border border-black rounded-full p-3">
          <BiSolidInstitution size={50} />
        </div>
      </div>
    </div>
  );
}

export default Card;
