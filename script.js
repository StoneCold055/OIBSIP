function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelect = document.getElementById("unitSelect").value;
    let result;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    if (unitSelect === "celsius") {
        result = {
            celsius: temperatureInput,
            fahrenheit: (temperatureInput * 9 / 5) + 32,
            kelvin: temperatureInput + 273.15
        };
    } else if (unitSelect === "fahrenheit") {
        result = {
            celsius: (temperatureInput - 32) * 5 / 9,
            fahrenheit: temperatureInput,
            kelvin: (temperatureInput - 32) * 5 / 9 + 273.15
        };
    } else if (unitSelect === "kelvin") {
        result = {
            celsius: temperatureInput - 273.15,
            fahrenheit: (temperatureInput - 273.15) * 9 / 5 + 32,
            kelvin: temperatureInput
        };
    }

    document.getElementById("result").innerHTML = `
        <p>${temperatureInput} ${unitSelect} is:</p>
        <ul>
            <li>${result.celsius.toFixed(2)} Celsius</li>
            <li>${result.fahrenheit.toFixed(2)} Fahrenheit</li>
            <li>${result.kelvin.toFixed(2)} Kelvin</li>
        </ul>
    `;
}
