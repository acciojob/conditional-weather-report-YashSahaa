import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [temperature , setTemperature] = useState(0);
  const [condition , setCondition] = useState("");

  useEffect(()=>{
    setTemperature(25);
    setCondition("Sunny");
  },[])
  return (
    <div>
      <WeatherDisplay temperature={temperature} condition={condition}/>
    </div>
  )
}

export default App
