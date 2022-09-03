// ** load data function

const API_KEY = `4da53e2ed19be689d52d527fb38aa3cf`;

const dataLoader = async (url)=>{
    try {
        const response = await fetch(url);
        response.ok ? console.log("Success") : console.log("Failed");
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
};

// ** Display city temparature

const displayWeather = async city=>{
    // ** Where to display
    const displayWeatherContainer = document.getElementById('temparature-display');
    // ** dynamic display of city name
    const cityContainer = document.getElementById('city-name');
    // ** weather condition display
    const weatherConditionContainer = document.getElementById('weather-condition');
    // ** load temparature data
    const data = await dataLoader(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    console.log(data)
    const {main:{temp},weather} = data;

    weather.forEach(weatherPerCity => {
        const {main} = weatherPerCity;
        weatherConditionContainer.innerText = main;
    })
    
    displayWeatherContainer.innerText = temp;
    cityContainer.innerText = city;
    
   
};

// ** Search Functionality

document.getElementById('search').addEventListener('click',()=>{
    // ** search input
    const searchInputValue = document.getElementById('search-input').value
    displayWeather(searchInputValue);

})

displayWeather('London');