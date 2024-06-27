import React from "react";

const WeatherDisplay = ({temperature,condition})=>{
    return <>
        <p>{temperature}</p>
        <p>{condition}</p>
    </>
}
export default WeatherDisplay;