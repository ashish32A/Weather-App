import React, { useEffect } from "react";

const Weathercard = ({
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,

}) => {
    const [weatherState, setWeatheState] = React.useState("");

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatheState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatheState("wi-fog");
                    break;
                case "Clear":
                    setWeatheState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatheState("wi-dust");
                    break;

                default:
                    setWeatheState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);


    return (
        <>
            <div className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;C</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">
                            {name}, {country}
                        </div>
                    </div>
                </div>




                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>

                </div>
                
            </div>



           

        </>
    );
};

export default Weathercard;