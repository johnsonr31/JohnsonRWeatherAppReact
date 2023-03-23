import { useState } from 'react';
import { prod, dev } from './Environment.js'
// import { apiKey } from "./ApiKey";

// const [latitude, setLatitude] = useState('');

let apiKey = '&appid=';

let coordinates;
let lat = 37.7974;
let lon = -121.2161;

prod.isLive ? apiKey += prod.apiKey : apiKey += dev.apiKey;

async function GetCoord() {
    const promise = await fetch(`api.openweathermap.org/data/2.5/weather?q=manteca${apiKey}`);
    const data = await promise.json();
    coordinates = data;

    return coordinates;
}

async function GetWeather() {
    GetCoord();
    // lat = coordinates.coord.lat;
    // lon = coordinates.coord.lon;

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${apiKey}&units=imperial`);
    const data = await promise.json();
    // console.log(data);
        
    return data;
}

export { GetWeather }