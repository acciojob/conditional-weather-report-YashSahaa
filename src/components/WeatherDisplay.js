import React from "react";

const WeatherDisplay = ({temperature,condition})=>{
    return <>
        <span style={{color: `${temperature<20?"blue":"red"}`}}>Temperature: {temperature}</span>
        <br/>
        <span>Condition: {condition}</span>
    </>
}
export default WeatherDisplay;