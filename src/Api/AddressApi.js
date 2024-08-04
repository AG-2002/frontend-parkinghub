import axios from "axios";

const getByAddress = async (address) => {
  const options = {
    method: "GET",
    url: "https://map-geocoding.p.rapidapi.com/json",
    params: {
      address,
    },
    headers: {
      "X-RapidAPI-Key": "af4b838a51msh46f61a938ba6ff9p12da55jsn457ce257cdd5",
      "X-RapidAPI-Host": "map-geocoding.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results[0].geometry.location;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getByAddress;
