import React, { useState } from "react";
import forwardGeocode from "../../Services/ForwardGeocode";
import useMapContext from "../../hooks/use-MapContext";
import Loading from "../Loading";
import { IoIosSearch } from "react-icons/io";


export default function MapSearchBar({ Icon, directionIcon }) {
  
  const [isLoading, setIsLoading] = useState(false);
  const { setLocation } = useMapContext();
  
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const query = e.target[0].value;
    const coords = await forwardGeocode(query);
    console.log(coords);
    setLocation(coords);
    setIsLoading(false);
    e.target[0].value = "";
  };

  return (
    <>
      <form
        className={`flex items-center bg-white w-fit p-2 justify-around rounded-3xl drop-shadow-2xl `}
        onSubmit={handleSubmit}
      >
        {Icon && Icon}
        <input  id="search" placeholder="search..." />
        <button ><IoIosSearch size={25}/></button>
        {isLoading && <Loading />}
        {directionIcon}
      </form>
    </>
  );
}
