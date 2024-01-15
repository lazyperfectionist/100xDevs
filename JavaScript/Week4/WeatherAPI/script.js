let timeout;
function debounced(){
    clearTimeout(timeout);
    timeout = setTimeout(getWeather, 1000);
}




async function getWeather(){
    let city = document.getElementById("city").value;
    let url = `http://api.weatherapi.com/v1/current.json?key=132adbc292664bb18f391755241101&q=${city}&aqi=yes`
    let data = await fetch(url);
    let res = await data.json();
    console.log(data);
    console.log(res);
    document.getElementById('sum').innerHTML = "JSON " + JSON.stringify(res);
}