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
        const routePolyline = data.paths[0].points;
        
        // Decode the polyline
        const decodedRoute = polyline.decode(routePolyline);

        // Add polyline to map
        const polylineLayer = L.polyline(decodedRoute, {
          color: "blue",
          weight: 4,
        }).addTo(map);
        console.log(decodedRoute);

        // Add markers only at start and end points
        const startPoint = decodedRoute[0]; // Start point
        const endPoint = decodedRoute[decodedRoute.length - 1]; // End point

        L.marker(startPoint).addTo(map); // Marker at start
        L.marker(endPoint).addTo(map);   // Marker at end

        // Clean up on unmount
        return () => {
          map.removeLayer(polylineLayer);
          map.removeLayer(L.marker(startPoint));
          map.removeLayer(L.marker(endPoint));
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
