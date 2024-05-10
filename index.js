

const apikey='2103805630ac3636dd38d28df093f483'
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const repose=await fetch(apiUrl + city + `&appid=${apikey}`);

    if(repose.status == 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }else{
        var data = await repose.json()

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "assests/clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "assests/clear.png"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "assests/rain.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "assests/drizzle.png"
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "assests/mist.png"
            }
            document.querySelector('.weather').style.display = 'block'
            document.querySelector('.error').style.display = 'none'
    
}
    }
   
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
