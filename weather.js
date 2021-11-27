var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var high = document.querySelector('.high');
var low = document.querySelector('.low');
var humidity = document.querySelector('.humidity');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=69506ab03800792d6aebb58f46c63228')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var highValue = data['main']['temp_max'];
        var lowValue = data['main']['temp_min'];
        var humidityValue = data['main']['humidity']

        name.innerHTML = nameValue;
        temp.innerHTML = Math.floor((tempValue-273.15)*1.8)+32;
        desc.innerHTML = descValue;
        high.innerHTML = Math.floor((highValue-273.15)*1.8)+32;
        low.innerHTML = Math.floor((lowValue-273.15)*1.8)+32;
        humidity.innerHTML = humidityValue;
    })

.catch (err => alert("Wrong city name!")) 
})
