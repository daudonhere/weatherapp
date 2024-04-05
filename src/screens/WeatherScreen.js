import React, { useEffect, useState } from "react";
import { Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/actions/weatherAction';
import { ImageBackground } from "react-native";
import CurrentWeather from "../components/CurrentWeather";
import styled from "styled-components/native";
import bgImg from "../assets/4.png";

const WeatherScreen = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);
    const { loading, weatherData, error } = weather;

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

  return (
    <Container>
      <ImageBackground source={bgImg} style={{ width: "100%", height: "100%" }}>
        
        {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : (
                <>
                    <CurrentView>
                        <City>
                            {weatherData.name} / {weatherData.timezone}
                        </City>
                    <MainInfoContainer>
                        <CurrentTempView>
                            <CurrentDegrees>
                                {Math.round(weatherData.main.temp)}
                                °C
                            </CurrentDegrees>
                            </CurrentTempView>
                                <Description>
                                    {weatherData.weather[0].main}, {weatherData.weather[0].description}
                                </Description>
                    </MainInfoContainer>
                    <SecondaryInfoContainer>
                        <Row>
                        <DetailsBox>
                            <Label>Feels</Label>
                            <Details>
                            {Math.round(weatherData.main.feels_like)}
                            °C
                            </Details>
                        </DetailsBox>
                        <DetailsBox>
                            <Label>Low</Label>
                            <Details>
                            {Math.round(weatherData.main.temp_min)}
                            °C
                            </Details>
                        </DetailsBox>
                        <DetailsBox>
                            <Label>High</Label>
                            <Details>
                            {Math.round(weatherData.main.temp_max)}
                            °C
                            </Details>
                        </DetailsBox>
                        </Row>
                        <Row>
                        <DetailsBox>
                            <Label>Wind</Label>
                            <Details>
                            {weatherData.wind.speed} m/s
                            </Details>
                        </DetailsBox>
                        <DetailsBox>
                            <Label>Humidity</Label>
                            <Details>
                                {Math.round(weatherData.main.humidity)}% *
                            </Details>
                        </DetailsBox>
                        <DetailsBox>
                            <Label>Pressure</Label>
                            <Details>
                            {weatherData.main.pressure} hPa
                            </Details>
                        </DetailsBox>
                        </Row>
                    </SecondaryInfoContainer>
                    </CurrentView>
                </>
            )}
        
      </ImageBackground>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;

const CurrentView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CurrentTempView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MainInfoContainer = styled.View`
  display: flex;
  align-items: center;
`;

const City = styled.Text`
  color: white;
  margin-top: 40px;
  font-size: 15px;
  text-transform: capitalize;
`;

const Description = styled.Text`
  color: white;
  font-size: 15px;
  text-transform: capitalize;
`;

const SecondaryInfoContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  width: 95%;
  max-width: 478px;
`;

const CurrentDegrees = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 60px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: black;
  padding: 10px 30px;
`;

const DetailsBox = styled.View`
  display: flex;
`;

const Label = styled.Text`
  font-size: 18px;
`;

const Details = styled.Text`
  color: black;
  font-size: 15px;
  text-transform: capitalize;
`;

export default WeatherScreen;