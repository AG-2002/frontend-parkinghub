import React from "react";

function ParkingCard({ location: { name, lat, lng }, onClick }) {
  return (
    <div className="flex flex-col justify-center w-full h-full px-4 py-4 bg-white border cursor-pointer border-slate-200">
      <h4>{name}</h4>
      <p>Lat: {lat}</p>
      <p>Lon: {lng}</p>
      <button
        onClick={onClick}
        className="px-4 py-0.5 border-2 border-black rounded-3xl"
      >
        Direction
      </button>
    </div>
  );
}

export default ParkingCard;
