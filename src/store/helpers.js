import axios from 'axios';

const API_KEY = 'rrMXgMrB62LVuKahf7gNVQnxyKiP6mfW';

export const fetchCurrentWeather = ({locationKey}) =>
    axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
        {params: {apikey: API_KEY}});

export const fetch5DaysForecast = ({locationKey}) =>
    axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`,
        {params: {apikey: API_KEY}});

export const fetchAutoCompletion = async ({text}) =>
    axios.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete",
        {params: {apikey: API_KEY, q: text}});

export const fetchLocationByCoords = async ({coords}) =>
    axios.get("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search",
        {params: {apikey: API_KEY, q: coords}});
