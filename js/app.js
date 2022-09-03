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
    const cityContainer = document.getElementById('city-name')
    // ** load temparature data
    const data = await dataLoader(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const {main:{temp}} = data;
    
    displayWeatherContainer.innerText = temp;
    cityContainer.innerText = city
    
   
};

displayWeather('London');