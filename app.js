document.addEventListener("DOMContentLoaded", cityWeather)


function weatherDataFetch(city) {
    var key ='b97f23532fee00d95139acc44e7de5c9';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (){

        })
}
function cityWeather(e){
    weatherDataFetch('Tallinn')
}