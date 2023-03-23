import { useState } from 'react';
import { prod, dev } from './Environment.js'
// import { apiKey } from "./ApiKey";

// const [latitude, setLatitude] = useState('');

// This string stores the part of the API URL that comes right before the API key, which is stored in a different file in order to make sure the API key doesn't end up in the Github repository
let apiKey = '&appid=';


let lat = 37.9577;
let lon = -121.2908;


// This code below is a ternary operator that will decide if the api key is hidden or not
prod.isLive ? apiKey += prod.apiKey : apiKey += dev.apiKey;

// function GetRandomCoord() {
//     let randomNum = Math.floor(Math.random() * 5);

//     switch(randomNum)
//     {
//         case 0:
//             lat = 37.9577;
//             lon = -121.2908;
//             break;
//         case 1:
//             lat = 34.0633;
//             lon = -117.6509;
//             break;
//         case 2:
//             lat = 51.5085;
//             lon = -0.1257;
//             break;
//         case 3:
//             lat = 35.6895;
//             lon = 139.6917;
//             break;
//     }
// }

// const [ coordinates, setCoordinates ] = useState('');

// This fetch is meant to take the name of a city typed by the user and use it to get the coordinates, which will then be plugged into the URL of the other fetch function to allow the search function to work. I haven't been able to get it to work so far, though.
async function GetCoord() {
    const promise = await fetch(`api.openweathermap.org/data/2.5/weather?q=manteca${apiKey}&units=imperial`);
    const data = await promise.json();
    // setCoordinates(data.coord);
    // coordinates = data;
    // console.log(searchTerm.toLowerCase());
    // return coordinates;
}

// const promise2 = await fetch (`api.openweathermap.org/data/2.5/weather?q=manteca${apiKey}&units=imperial`);
// const coordData = await promise2.json();

// console.log(coordData);

// This is the function that will fetch the data from the weather API. The API key is a value that will be plugged in through string interpolation, which allows it to be hidden from GitHub. The coordinates, which are latitude and longitude, are also values that are plugged in through string interpolation, which should hopefully allow the search function to work, if I can get the other fetch working.
async function GetWeather() {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${apiKey}&units=imperial`);
    const data = await promise.json();
    // The comment below was a console log to test if the data was coming through. Since I know it is, the console log wasn't needed anymore.
    // console.log(data);
    return data;
}

export { GetWeather }