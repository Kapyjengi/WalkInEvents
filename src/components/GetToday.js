
export default function App() {

    // Otetaan päivämäärästä ISOString muoto jotta saadaan datepickeriin päivämäärä näkyviin
let date = new Date();
date.setDate(date.getDate() + 0);
let isoDate = date.toISOString().substr(0,10);

    return isoDate



}