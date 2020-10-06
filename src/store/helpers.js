import axios from 'axios';

const API_KEY = 'wv4gytjAGSE2x1KIVqCpkAXuRBZLjhvj';


export const fetchCurrentWeather = ({locationKey}) =>
    axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
        {params: {apikey: API_KEY}});

export const fetch5DaysForecast = ({locationKey}) =>
    axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`,
        {params: {apikey: API_KEY}});

export const fetchAutoCompletion = async ({text}) =>
    axios.get("https://dataservice.accuweather.com/locations/v1/cities/autocomplete",
        {params: {apikey: API_KEY, q: text}});

export const fetchLocationByCoords = async ({coords}) =>
    axios.get("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search",
        {params: {apikey: API_KEY, q: coords}});
