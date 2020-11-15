export default function GetUserPosition() {
    let lat
    let long
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position)
        lat = position.coords.latitude
        long = position.coords.longitude
      });
    return {lat: lat, long: long}
}