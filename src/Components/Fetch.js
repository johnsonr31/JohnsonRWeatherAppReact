import { prod, dev } from './Environment.js'
// import { apiKey } from "./ApiKey";

let apiKey = '&appid=';

prod.isLive ? apiKey += prod.apiKey : apiKey += dev.apiKey;

async function GetWeather() {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908${apiKey}&units=imperial`);
    const data = await promise.json();
    // console.log(data);
        
    return data;
}

export { GetWeather }