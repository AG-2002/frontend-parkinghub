import { useContext } from "react";
import MapContext from "../context/map-context";

function useMapContext() {
  return useContext(MapContext);
}

export default useMapContext;
