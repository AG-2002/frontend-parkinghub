import React, { useState } from "react";
import getByAddress from "../../Api/AddressApi";
import MapShow from "./MapShow";
import "./GeocodingComponent.css";
import InputBar from "../InputBar/InputBar";
import { IoMenu } from "react-icons/io5";

function GeocodingComponent() {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState({
    lat: 28.543828736324443,
    lng: 77.1786211200175,
  });
  const [isTrue, setIsTrue] = useState(false);

  const handleSubmit = async () => {
    const location = await getByAddress(address);
    setLocation(location);
  };

  const handleClick = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div>
      <MapShow location={location} setLocation={setLocation} />

      <IoMenu
        size={50}
        className="button bg-white border border-2 border-black hover:bg-black hover:text-white"
        onClick={handleClick}
      />

      {isTrue && (
        <div className="button h-screen w-[400px] bg-white">
          <IoMenu
            size={50}
            className="bg-white border border-2 border-black hover:bg-black hover:text-white"
            onClick={handleClick}
          />

          <div className="mt-10 grid gap-y-10 justify-center">
            <InputBar
              placeholder={"Enter address..."}
              onSubmit={handleSubmit}
              getValue={setAddress}
            />
            <div className="text-center">
              {location
                ? `${location.lat} and ${location.lng}`
                : `Select location`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GeocodingComponent;
