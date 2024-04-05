import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import WeatherScreen from './src/screens/WeatherScreen.js';
import rootReducer from './src/redux/reducers';

const store = configureStore({reducer: rootReducer});

export default function App() {
  return (
    <Provider store={store}>
      <WeatherScreen/>
    </Provider>
  );
}