import store from '../GlobalStore/Store'
import {setUserLocation} from '../GlobalStore/LocationActions'

export default function GetUserPosition() {
  let id, target, options;

  function success(pos) {
    let crd = pos.coords;
    if (target.latitude !== crd.latitude && target.longitude !== crd.longitude) {
      store.dispatch(setUserLocation(crd.latitude, crd.longitude))
      navigator.geolocation.clearWatch(id);
    }
  }

  function error(err) {
    //console.warn('ERROR(' + err.code + '): ' + err.message);
    let lat = 60.1733244
    let lon = 24.9410248
    store.dispatch(setUserLocation(lat, lon))
  }

  target = {
    latitude: 0,
    longitude: 0
  };

  options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };

  id = navigator.geolocation.watchPosition(success, error, options);

  
}