import classNames from "classnames";

function Logo({ className }) {
  const finalClassNames = classNames(className, "py-4 flex items-center");
  return (
    <div className={finalClassNames}>
      <div className="text-black font-bold">Parking</div>
      <div className="ml-2 bg-[#ffa31a] text-white rounded-md p-1">hub</div>
    </div>
  );
}

export default Logo;
