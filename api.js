const API_KEY = "2c6c9dfd755cc41840378aa8c6667be7";

    function getWeatherEmoji(code) {
        if (code >= 200 && code < 300) return "⛈️";
        if (code >= 300 && code < 400) return "🌦️";
        if (code >= 500 && code < 600) return "🌧️";
        if (code >= 600 && code < 700) return "❄️";
        if (code >= 700 && code < 800) return "🌫️";
        if (code === 800) return "☀️";
        if (code === 801) return "🌤️";
        if (code === 802) return "⛅";
        if (code >= 803) return "☁️";
        return "🌡️";
    }

    function searchCity(name) {
        document.getElementById("ville").value = name;
        getWeather();
    }

    function getWeather() {
        const ville = document.getElementById("ville").value.trim();
        if (!ville) {
            document.getElementById("ville").focus();
            return;
        }

        const btn = document.getElementById("searchBtn");
        btn.disabled = true;
        btn.innerHTML = '<span class="loader-dots"><span class="loader-dot"></span><span class="loader-dot"></span><span class="loader-dot"></span></span>';

        document.getElementById("weather-result").style.display = "none";
        document.getElementById("weather-error").style.display = "none";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ville)}&appid=${API_KEY}&units=metric&lang=en`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.cod === 200) {
                    const emoji = getWeatherEmoji(data.weather[0].id);
                    document.getElementById("w-icon").textContent     = emoji;
                    document.getElementById("w-city").textContent     = `${data.name}, ${data.sys.country}`;
                    document.getElementById("w-temp").textContent     = `${Math.round(data.main.temp)}°C`;
                    document.getElementById("w-desc").textContent     = data.weather[0].description;
                    document.getElementById("w-humidity").textContent = `${data.main.humidity}%`;
                    document.getElementById("w-wind").textContent     = `${Math.round(data.wind.speed * 3.6)} km/h`;
                    document.getElementById("w-feels").textContent    = `${Math.round(data.main.feels_like)}°C`;

                    document.getElementById("weather-result").style.display = "block";
                } else {
                    document.getElementById("weather-error").style.display = "block";
                }
            })
            .catch(() => {
                document.getElementById("weather-error").textContent = "❌ Network error. Check your connection.";
                document.getElementById("weather-error").style.display = "block";
            })
            .finally(() => {
                btn.disabled = false;
                btn.innerHTML = "Search";
            });
    }

    document.getElementById("ville").addEventListener("keydown", function(e) {
        if (e.key === "Enter") getWeather();
    });