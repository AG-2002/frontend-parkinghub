import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import polyline from "@mapbox/polyline"; // Import polyline decoder

function RoutingMachine({ waypoints }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const { start, end } = waypoints;

    const fetchRoute = async () => {
      const url = `https://graphhopper.com/api/1/route?point=${start.lat},${start.lng}&point=${end.lat},${end.lng}&vehicle=car&locale=en&key=${process.env.REACT_APP_GRAPH_HOPPER_API_KEY}`;
      try {
        const { data } = await axios.get(url);
        if (!data.paths || !data.paths[0]) throw new Error("No route found");
        const route = data.paths[0].points;

        const decodedRoute = polyline.decode(route); // Use polyline to decode

        const polylineLayer = L.polyline(decodedRoute, {
          color: "blue",
          weight: 4,
        }).addTo(map);

        // Clean up on unmount
        return () => {
          map.removeLayer(polylineLayer);
        };
      } catch (error) {
        console.error("Error fetching route from GraphHopper:", error);
      }
    };

    fetchRoute();
  }, [map, waypoints]);

  return null;
}

export default RoutingMachine;
