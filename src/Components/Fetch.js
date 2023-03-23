import { useState } from 'react';
import { prod, dev } from './Environment.js'
// import { apiKey } from "./ApiKey";

// const [latitude, setLatitude] = useState('');

let apiKey = '&appid=';

let coordinates;
let lat = 37.9577;
let lon = -121.2908;

prod.isLive ? apiKey += prod.apiKey : apiKey += dev.apiKey;

async function GetCoord() {
    const promise = await fetch(`api.openweathermap.org/data/2.5/weather?q=manteca${apiKey}`);
    const data = await promise.json();
    coordinates = data;
    // console.log(searchTerm.toLowerCase());
    return coordinates;
}

async function GetWeather() {

    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${apiKey}&units=imperial`);
    const data = await promise.json();
    // console.log(data);
    return data;
}

export { GetWeather }