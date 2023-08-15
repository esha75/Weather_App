//window.alert("hii")
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="f98e17e3c43383208853f78fa0717f4d";
const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");

async function checkWeather(city)
{   
	const response  =await fetch(apiUrl+city+`&appid=${apiKey}`);
	var data = await response.json();
	console.log(data);
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"&#8451;";
	document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
	document.querySelector(".windspeed").innerHTML=data.wind.speed+"km/h";
}
searchButton.addEventListener('click',()=>{
checkWeather(searchBox.value);

})