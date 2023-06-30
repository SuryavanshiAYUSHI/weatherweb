const API_KEY=`ecbca0a50ff6b48ac6ba5a99ad5b553e`
const form = document.getElementById("form")
const search = document.getElementById("search")
const weather = document.getElementById("weather")

const getWeather= async (city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response= await fetch(url); 
    const data= await response.json()
    return showWeather(data)

}
const showWeather=(data)=>{
   console.log(data)
    weather.innerHTML=`
    <div>
    <i class="fa-solid fa-cloud" style="font-size: 30px;"></i>
  </div>&nbsp;&nbsp;&nbsp;
  <div>
  <p style="color: white;font-size:20px";>${data.name} weather details</p>
   <h2 style="color: white;font-size:30px";>${data.main.temp}℉</h2>
   <p style="color: white;font-size:20px";>${data.weather[0].main}</p>
  </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)