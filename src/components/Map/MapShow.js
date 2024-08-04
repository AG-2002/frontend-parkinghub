import parking from "../../images/Parking.png";
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

const redIcon = new Icon({
  iconUrl: require("../../images/placeholder_684908.png"), // path where red marker icon is located
  iconSize: [40, 40],
});

function MapShow({ location, setLocation }) {
  const [citiesLocation, setCitiesLocation] = useState([]);

  function SetViewOnClick() {
    const map = useMapEvent("click", (e) => {
      setLocation(e.latlng); // to update the location of blue Marker
      map.setView(e.latlng, map.getZoom());
    });
    return null;
  }

  useEffect(() => {
    setCitiesLocation(predefinedNearbyPlaces);
  }, [location]);

  useEffect(() => {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          setLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting the geolocation", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  }, []);

  return (
    <div className="h-screen w-screen bg-no-repeat">
      <MapContainer
        center={location}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
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
          <Marker key={index} icon={redIcon} position={[item.lat, item.lon]}>
            <Popup className="popup">
              {item.name}
              <img src={parking} alt="parking" width={400} />
              Searched Location <br /> Latitude: {item.lat}, Longitude:
              {item.lng}
            </Popup>
          </Marker>
        ))}
        <SetViewOnClick />
      </MapContainer>
    </div>
  );
}

export default MapShow;
