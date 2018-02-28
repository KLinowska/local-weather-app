$(document).ready(function() {
  var lat;
  var long;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      var api =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        lat +
        "&lon=" +
        long;

      $.getJSON(api, function(data) {
        $("#city").html(data.name + ", " + data.sys.country);
        $("#weather").html(
          "<img src=" +
            data.weather[0].icon +
            "> " +
            "<b>" +
            data.main.temp +
            "°C</b>"
        );
        $("#description").html(data.weather[0].description);
        $("#pressure").html(data.main.pressure + " hpa");
        if (data.dt > data.sys.sunset) {
          switch (data.weather[0].main) {
            case "Clear":
              document.body.style.backgroundImage =
                "url('https://dt.azadicdn.com/wp-content/uploads/2013/08/moon_clear_sky_wallpaper_2560x1440.jpg?200')";
              break;
            case "Rain":
              document.body.style.backgroundImage =
                "url('https://www.walldevil.com/wallpapers/a76/rain-night-street-city-lamp.jpg')";
              break;
            case "Snow":
              document.body.style.backgroundImage =
                "url('http://www.publicdomainpictures.net/pictures/30000/velka/night-snow.jpg')";
              break;
            case "Thunderstorm":
              document.body.style.backgroundImage =
                "url('https://c1.staticflickr.com/1/204/452386521_8dd10f53c7_b.jpg')";
              break;
            case "Fog":
              document.body.style.backgroundImage =
                "url('https://upload.wikimedia.org/wikipedia/commons/c/ce/Deception_Pass_Bridge_in_fog.jpg')";
              break;
            case "Mist":
              document.body.style.backgroundImage =
                "url('https://upload.wikimedia.org/wikipedia/commons/c/ce/Deception_Pass_Bridge_in_fog.jpg')";
              break;
            case "Clouds":
              document.body.style.backgroundImage =
                "url('https://upload.wikimedia.org/wikipedia/commons/4/4b/British_Night_Sky_%286965600385%29.jpg')";

              break;
          }
        } else {
          switch (data.weather[0].main) {
            case "Clear":
              document.body.style.backgroundImage =
                "url('https://bloximages.chicago2.vip.townnews.com/missoulian.com/content/tncms/assets/v3/editorial/5/aa/5aa9642f-e19b-5cb8-91b8-e07165f99a3b/59a05d725869b.image.jpg?resize=1200%2C800')";
              document.body.style.color = "#1a1a1a";
              break;
            case "Rain":
              document.body.style.backgroundImage =
                "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Pluie_de_printemps.JPG/800px-Pluie_de_printemps.JPG')";
              break;
            case "Snow":
              document.body.style.backgroundImage =
                "url('https://www.publicdomainpictures.net/pictures/30000/velka/winter-is-a-great.jpg')";
              document.body.style.color = "#1a1a1a";
              break;
            case "Thunderstorm":
              document.body.style.backgroundImage =
                "url('https://c1.staticflickr.com/1/204/452386521_8dd10f53c7_b.jpg')";
              break;
            case "Fog":
              document.body.style.backgroundImage =
                "url('https://upload.wikimedia.org/wikipedia/commons/c/ce/Deception_Pass_Bridge_in_fog.jpg')";
              break;
            case "Clouds":
              document.body.style.backgroundImage =
                "url('https://upload.wikimedia.org/wikipedia/commons/4/47/Cumulus_clouds_21072012_%281%29.jpg')";
              document.body.style.color = "#1a1a1a";
              break;
          }
        }
      });
    });
  }
});
