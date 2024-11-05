import parking from "../../assets/images/Parking.png";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { Icon } from "leaflet";
import predefinedNearbyPlaces from "../../Services/place-api";
import RoutingMachine from "./RoutingMachine";
import useMapContext from "../../hooks/use-MapContext";

const parkingIcon = new Icon({
  iconUrl: require("../../assets/images/parkingicon.png"), // path where parking marker icon is located
  iconSize: [40, 40],
});

function MapShow() {
  const { waypoints, setWaypoints } = useMapContext();
  const { location, setLocation } = useMapContext();
  const [citiesLocation, setCitiesLocation] = useState([]);

  // this block of code update location of blue marker when user click on map

  const SetViewOnClick = () => {
    try {
      const map = useMapEvent("click", (e) => {
        setLocation(e.latlng); // to update the location of blue Marker
        map.setView(e.latlng, map.getZoom());
      });
      return null;
    } catch (error) {
      console.log(error);
    }
  };

  // the block of code render predefined location on map with marker
  try {
    useEffect(() => {
      setCitiesLocation(predefinedNearbyPlaces);
    }, [location, waypoints]);
  } catch (error) {
    console.log(error);
  }

  // // Handle click on parking card
  // function handleCardClick(predefinedNearbyPlaces) {
  //   if (!location) {
  //     alert("User location is not available yet!");
  //     return;
  //   }
  //   setWaypoints(waypoints); // Update waypoints state
  // }

  return (
    <>
      <MapContainer
        center={location}
        zoom={12}
        scrollWheelZoom={true}
        className="z-10 w-screen h-screen"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {location && (
          <Marker position={location}>
            <Popup className="popup">
              <div className="flex justify-center">
                <img src={parking} alt="parking" width={400} />
              </div>
              Searched Location <br /> Latitude: {location.lat}, Longitude:
              {location.lng}
            </Popup>
          </Marker>
        )}

        {citiesLocation?.map((item, index) => (
          <Marker
            key={index}
            icon={parkingIcon}
            position={[item.lat, item.lng]}
          >
            <Popup className="popup">
              {item.name}
              <img src={parking} alt="parking" width={400} />
              Searched Location <br /> Latitude: {item.lat}, Longitude:
              {item.lng}
            </Popup>
          </Marker>
        ))}

        <SetViewOnClick />
        {waypoints.end && <RoutingMachine waypoints={waypoints} />}
      </MapContainer>
    </>
  );
}

export default MapShow;
