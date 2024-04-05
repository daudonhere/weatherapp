import axios from 'axios';

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

const API_KEY = 'cf262b2a64239f091c8c61f08de77fab';

export const fetchWeather = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_WEATHER_REQUEST });
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=${API_KEY}`);
            dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: FETCH_WEATHER_FAILURE, payload: error.message });
        }
    };
};