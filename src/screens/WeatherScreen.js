import React, { useEffect } from "react";
import { Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/actions/weatherAction';
import WeatherIcon from "../components/WeatherLogo";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import bgImg from "../assets/4.png";

const WeatherScreen = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);
    const { loading, weatherData, error } = weather ?? {};

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    if (loading) {
        return (
            <Container>
                <ActivityIndicator size="large" color="#2980b9" />
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Text>Error: {error}</Text>
            </Container>
        );
    }

    return (
        <Container>
            <ImageBackground source={bgImg} style={{ width: "100%", height: "100%" }}>
                <CurrentView>
                    <Location>
                        <City>
                            {weatherData.name}, {weatherData.sys.country}
                        </City>
                    </Location>
                    <MainInfoContainer>
                        <CurrentTempView>
                            <WeatherIcon iconCode={weatherData.weather[0].icon} color="white" />
                            <Description>
                                {weatherData.weather[0].main}, {weatherData.weather[0].description}
                            </Description>
                        </CurrentTempView>
                        <CurrentDegrees>
                            {parseInt(weatherData.main.temp - 273.15)}°C
                        </CurrentDegrees>
                        <DetailsBox>
                            <LabelPrimary>Feels Like {parseInt(weatherData.main.feels_like - 273.15)}°C</LabelPrimary>
                        </DetailsBox>
                    </MainInfoContainer>
                    <SecondaryInfoContainer>
                        <Row>
                            <DetailsBox>
                                <Details>Wind : {weatherData.wind.speed} m/s</Details>
                            </DetailsBox>
                            <DetailsBox>
                                <Details>Humidity : {weatherData.main.humidity}%</Details>
                            </DetailsBox>
                            <DetailsBox>
                                <Details>Pressure : {weatherData.main.pressure} hPa</Details>
                            </DetailsBox>
                        </Row>
                        <Row>
                            <DetailsBox>
                                <Details>Visibility : {weatherData.visibility}m</Details>
                            </DetailsBox>
                            <DetailsBox>
                                <Details>Base : {weatherData.base}</Details>
                            </DetailsBox>
                        </Row>
                    </SecondaryInfoContainer>
                </CurrentView>
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

const Location = styled.View`
  display: flex;
  align-items: left;
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
  margin-top: 20px;
  margin-left: 30px;
  font-size: 18px;
  text-transform: capitalize;
`;

const Description = styled.Text`
  color: white;
  font-size: 15px;
  text-transform: capitalize;
`;

const LabelPrimary = styled.Text`
  color: white;
  font-size: 18px;
  text-transform: capitalize;
`;

const SecondaryInfoContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 10px;
  width: 85%;
  max-width: 478px;
`;

const CurrentDegrees = styled.Text`
  color: white;
  display: flex;
  justify-content: center;
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

const Details = styled.Text`
  color: white;
  font-size: 15px;
  text-transform: capitalize;
`;

export default WeatherScreen;