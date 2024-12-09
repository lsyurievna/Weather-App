const checkBtn = document.querySelector(".search button");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "f841142a9080b6b9d00b2cf70a7c19ba";



async function checkWeather(){
    let city = document.querySelector(".search input").value;
    const response = await fetch(apiUrl+`&q=${city}`+`&apiKey=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
};
 

checkBtn.addEventListener("click", ()=>{checkWeather()})

