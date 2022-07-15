const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName")
const city_name = document.getElementById('city_name')
const temp_real_val = document.getElementById("temp_real_val")
const temp_status = document.getElementById("temp_status")
const humidity = document.getElementById("humidity")
const feel_like = document.getElementById("feel_like")
const visibility = document.getElementById("visibility")
const pressure = document.getElementById("pressure")
document.getElementById("day").innerHTML = formatAMPM();

const getinfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please Input any City Name`
    }else {
        try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cbe7e8d6f347f4bb9f0f963defae5174`
const response = await fetch(url);
const data = await response.json();
const arrData = [data];
temp_real_val.innerText = arrData[0].main.temp;
city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
const tempMood = arrData[0].weather[0].main;
humidity.innerText = arrData[0].main.humidity;
feel_like.innerText = arrData[0].main.feels_like;
const value = arrData[0].main.pressure/33.864;
var rounded = Math.round(value * 10) / 10;
pressure.innerText = rounded;
visibility.innerText = arrData[0].visibility/1000;



if (tempMood === "Clear") {
    temp_status.innerHTML = "<i class= 'fas fa-sun' style='color: #eccc68;'></i>";
}else if (tempMood === "Clouds") {
    temp_status.innerHTML = "<i class= 'fas fa-cloud' style='color: #f1f2f6;'></i>";

}else if (tempMood === "Rain"){
    temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain'style='color: #a4b0be;'></i>";

}else if (tempMood === "Haze"){
    temp_status.innerHTML = "<i class='fa-solid fa-smog' style='color: #a4b0be;'></i>";
}else {
    temp_status.innerHTML =  "<i class= 'fas fa-sun' style='color: #eccc68;'></i>"
    

}
    }catch {
        city_name.innerText = `Please Enter name properly`;
    }
}
}
submitBtn.addEventListener("click", getinfo)


// Date Part

function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getDay()]+' '+  d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+'  '+hours+':'+minutes;
    }

  







