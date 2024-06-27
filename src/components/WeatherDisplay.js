import React from "react";

const WeatherDisplay = ({temperature,condition})=>{
    return <>
        <span style={{color: `${temperature<20?"blue":"red"}`}}>
            <p>Temperature: {temperature}</p>
            <p>Conditions: {condition}</p>
        </span>
    </>
}
export default WeatherDisplay;