const scaleNames = {
    c: "섭씨",
    f: "화씨",
};
function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };
    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]}):
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}
export default TemperatureInput;
import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}