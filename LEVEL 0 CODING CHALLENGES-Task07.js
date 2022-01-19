function changeToFahrenheit(temp) {

    tempFahrenheit = temp * (9 / 5) + 32

    return String(tempFahrenheit) + " Fahrenheit"

}

function changeToCelsius(temp) {

    tempCelsius = (temp - 32) * (5 / 9)

    return String(tempCelsius) + " Celsius"
}

console.log(changeToFahrenheit(0));
console.log(changeToCelsius(0))