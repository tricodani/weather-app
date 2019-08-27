// Get user position coordinates
export function getPosition() {
  const geolocationOptions = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 10000
  };
  return new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition(resolve, reject, geolocationOptions);
  });
}

// Reverse geolocation
export function fetchLocation(latitude, longitude) {
  return fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${latitude}&lon=${longitude}`)
    .then(response => response.json())
    .catch(error => console.error(error));
}

// Get weather from coordinates
export function fetchWeather(latitude, longitude) {
  let proxy = "https://cors-anywhere.herokuapp.com/";
  return (
    fetch(
      `${proxy}https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${latitude},${longitude}?exclude=minutely`
    )
      // fetch("https://next.json-generator.com/api/json/get/41m_cc4lP")
      .then(response => response.json())
      .catch(error => console.error(error))
  );
}
