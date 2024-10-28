function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        reject(`Unable to fetch location: ${error.message}`);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });
}

export default getCurrentLocation;
