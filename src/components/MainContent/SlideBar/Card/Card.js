import { BiSolidInstitution } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";

function Card({ title, subTitle, summary }) {
  return (
    <div className=" flex flex-col justify-between w-96 h-72 border border-black rounded-lg m-1 p-4 max-md:w-36 max-md:h-36 ">
      <div>
        <h3 className="text-2xl max-md:text-xs">{title}</h3>
      </div>
      <div>
        <h2 className="text-4xl font-semibold max-md:text-xs">{subTitle}</h2>
      </div>

      <div className="flex justify-between ">
        <div className="flex items-center text-slate-400">
          <SlEnergy className="mr-2 max-md:size-2.5 " size={20} />
          <p className="text-lg max-md:text-xs max-md:">{summary}</p>
        </div>
        <div className="border border-black rounded-full p-3 max-md:p-2">
          <BiSolidInstitution className="max-md:size-5" size={50} />
        </div>
      </div>
    </div>
  );
}

export default Card;
