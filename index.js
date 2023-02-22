const app = {

        init: () => {

            window.onload = function(){
                console.log
            }
        },

    fetchWeather: (ev) => {
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value;
        let key = '';
        let lang = 'en';
        let units = 'imperial';
        let url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}'

        fetch(url)
            .then(resp => {
                if(!resp.ok) throw new Error(resp.statusText);
                return resp.json();
            })
            .then(data => {
                app.showWeather(data);
            })
            .catch(console.err);
    },

    getLocation: (ev) => {
        let opts = { 
            enableHighAccuracy: true,
            timeout: 1000 * 10,
            maximumAge: 1000 * 60 * 5, 
    };
    navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
    },

    ftw: (position) => {
        document.getElementById('Latitude').value = position.coords.latitude.toFixed(2);
        document.getElementById('Longitude').value = position.coords.longitude.toFixed(2);
    },

    wtf: (err) => {
        console.error(err);
    },

    showWeather: (resp) => {
        console.log(resp);

        let html = 
    }

};





app.init();
