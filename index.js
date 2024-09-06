document.getElementById('ad').addEventListener('click', function() {
    const city = document.getElementById('as').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '85cf533ceecd38a6352b54e09d8288ec'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

        
            document.querySelector('.gudi h2').textContent = `Weather in ${data.name}`;
            document.querySelector('.gudi span p').textContent = `High: ${data.main.temp_max}°C | Low: ${data.main.temp_min}°C`;
            document.querySelector('.gudi span:nth-of-type(2) p').textContent = `Wind: ${data.wind.speed} m/s | Humidity: ${data.main.humidity}%`;

           
            document.querySelector('.gudi img:first-of-type').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            document.querySelector('.gudi img:last-of-type').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

       
            document.querySelector('.forecast').innerHTML = `
                <p>Mon - 🌤️ - 76°F / 60°F</p>
                <p>Tue - ☁️ - 70°F / 55°F</p>
                <p>Wed - 🌧️ - 68°F / 52°F</p>
                <p>Thu - 🌤️ - 74°F / 58°F</p>
                <p>Fri - ☀️ - 80°F / 65°F</p>
            `;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
