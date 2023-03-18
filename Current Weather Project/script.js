const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '********API_KEY********',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
// var city = "New York"

const getWeather = (city) => {
    if (city ==="")
    {
        city = "Chennai";
        console.log("Enter a city");
    }
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            document.getElementById("cityName").innerHTML = city
            document.getElementById("temp").innerHTML = response.temp + "<span>&#8451;</span>"
            document.getElementById("temp-max").innerHTML = response.max_temp + "<span>&#8451;</span>"
            document.getElementById("temp-min").innerHTML = response.min_temp + "<span>&#8451;</span>"

            document.getElementById("humidity").innerHTML = response.humidity + "%"
            document.getElementById("wind-speed").innerHTML = response.wind_speed + " Km/hr"
            document.getElementById("wind-direction").innerHTML = response.wind_degrees

            document.getElementById("feels-like").innerHTML = response.feels_like + "<span>&#8451;</span>"
            document.getElementById("sunrise").innerHTML = response.sunrise
            document.getElementById("sunset").innerHTML = response.sunset


        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(city.value)
    getWeather(city.value)
}
)

delhi.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather("Delhi")
}
)

mumbai.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather("Mumbai")
}
)

banglore.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather("Banglore")
}
)

getWeather("Chennai")
