// API Key = e2ebd3f5faa1edbbcedec73ed5986c0f



$(".searchBtn").on("click", function (e) {
  var cityName = $("#cityInput").val().trim();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + cityName + "&APPID=e2ebd3f5faa1edbbcedec73ed5986c0f";
  var m = moment();
  var day1Forecast = m.add(1, 'day').format('MM/DD/YY');
  var day2Forecast = m.add(1, 'days').format('MM/DD/YY');
  var day3Forecast = m.add(1, 'days').format('MM/DD/YY');
  var day4Forecast = m.add(1, 'days').format('MM/DD/YY');
  var day5Forecast = m.add(1, 'days').format('MM/DD/YY');

  var cardDiv = $("<div>");
  var cardBodyDiv = $("<div>");

  // var cityLon = response.coord.lon;
  //          var cityLat = response.coord.lat;
  //          console.log("city lat: " + cityLat);
  //          console.log("city lon: " + cityLon);
  //          var UVIndexURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + cityLat + "&lon=" + cityLon;
  //          $.ajax({
  //              url: UVIndexURL,
  //              method: "GET"
  //          }).then(function (response) {
  //              $(".uv-index").text("UV Index: " + response.value);
  //          });



  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {



    // Creates card
    var cityButton = $("<button>").text($("#cityInput").val().trim());
    $(cityButton).attr("cityButton", $("#cityInput").val().trim());
    $(cityButton).attr("class", "cityBtn btn btn-outline-secondary");
    $(cityButton).attr("style", "margin: 6px;");



    $(cardDiv).attr("class", "card col-md-12 row");
    $(cardDiv).attr("style", "width: 18rem;");


    $(cardBodyDiv).attr("class", "card-body");

    var h5El = $("<h5>").text(response.name);
    $(h5El).attr("class", "card-title")

    var h4El = $("<h4>").text(moment().format('L'));

    var temp = (response.main.temp)
    var tempEl = $("<p>").text("Temperature: " + temp + "°");
    $(tempEl).attr("class", "card-text")

    var humidity = response.main.humidity
    var humidityEl = $("<p>").text("Humidity: " + humidity);

    var windEl = $("<p>").text("Wind Speed: " + response.wind.speed + "MPH");

    // Appends card to page
    $(".history").prepend(cityButton);
    $(cardBodyDiv).append(h5El);
    $(cardBodyDiv).append(h4El)
    $(cardBodyDiv).append(tempEl);
    $(cardBodyDiv).append(humidityEl)
    $(cardBodyDiv).append(windEl);

    $(cardDiv).append(cardBodyDiv);

    $(".clickInfo").prepend(cardDiv);



  })


  // 5 Day forecast
  var cityName = $("#cityInput").val().trim();
  var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" + cityName + "&APPID=e2ebd3f5faa1edbbcedec73ed5986c0f";

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {

    var cardDiv2 = $("<div>");
    $(cardDiv2).attr("class", "card");

    for (var i = 0; i < response.list.length; i += 8) {


      var cardBodyDiv2 = $("<div>");
      $(cardBodyDiv2).attr("class", "card-body col-sm");


      var h5El2 = $("<h5>").text(response.list[i].dt_txt);
      $(h5El2).attr("class", "card-title")


      var temp2 = response.list[i].main.temp
      var tempEl2 = $("<p>").text("Temperature: " + temp2 + "°");
      $(tempEl2).attr("class", "card-text")

      var humidity2 = response.list[i].main.humidity
      var humidityEl2 = $("<p>").text("Humidity: " + humidity2);

      var windEl2 = $("<p>").text("Wind Speed: " + response.list[i].wind.speed + "MPH");

      // Appends card to page
      $(cardBodyDiv2).append(h5El2);
      $(cardBodyDiv2).append(tempEl2);
      $(cardBodyDiv2).append(humidityEl2)
      $(cardBodyDiv2).append(windEl2);

      $(cardDiv2).append(cardBodyDiv2);
      $(cardBodyDiv).append(cardDiv2);

    }



  })
})



// When city button is clicked
$(".cityBtn").on("click", function (e) {
  console.log("clicked")
  var btnName = $(".citybutton").attr();
  var queryURL4 = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" + btnName + "&APPID=e2ebd3f5faa1edbbcedec73ed5986c0f";
  $.ajax({
    url: queryURL4,
    method: "GET"
  }).then(function (response) {
    console.log($(".citybutton").attr())
    var m = moment();
    var day1Forecast = m.add(1, 'day').format('MM/DD/YY');
    var day2Forecast = m.add(1, 'days').format('MM/DD/YY');
    var day3Forecast = m.add(1, 'days').format('MM/DD/YY');
    var day4Forecast = m.add(1, 'days').format('MM/DD/YY');
    var day5Forecast = m.add(1, 'days').format('MM/DD/YY');
  
    var cardDiv = $("<div>");
    var cardBodyDiv = $("<div>");
  
  
  
  
  
      // Creates card
      var cityButton = $("<button>").text($("#cityInput").val().trim());
      $(cityButton).attr("cityButton", $("#cityInput").val().trim());
      $(cityButton).attr("class", "cityBtn btn btn-outline-secondary");
      $(cityButton).attr("style", "margin: 6px;");
  
  
  
      $(cardDiv).attr("class", "card col-md-12 row");
      $(cardDiv).attr("style", "width: 18rem;");
  
  
      $(cardBodyDiv).attr("class", "card-body");
  
      var h5El = $("<h5>").text(response.name);
      $(h5El).attr("class", "card-title")
  
      var h4El = $("<h4>").text(moment().format('L'));
  
      var temp = (response.main.temp)
      var tempEl = $("<p>").text("Temperature: " + temp + "°");
      $(tempEl).attr("class", "card-text")
  
      var humidity = response.main.humidity
      var humidityEl = $("<p>").text("Humidity: " + humidity);
  
      var windEl = $("<p>").text("Wind Speed: " + response.wind.speed + "MPH");
  
      // Appends card to page
      $(".history").prepend(cityButton);
      $(cardBodyDiv).append(h5El);
      $(cardBodyDiv).append(h4El)
      $(cardBodyDiv).append(tempEl);
      $(cardBodyDiv).append(humidityEl)
      $(cardBodyDiv).append(windEl);
  
      $(cardDiv).append(cardBodyDiv);
  
      $(".clickInfo").prepend(cardDiv);
  
  
  
    })
  
  
    // 5 Day forecast
    var queryURL3 = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" + btnName + "&APPID=e2ebd3f5faa1edbbcedec73ed5986c0f";
  
    $.ajax({
      url: queryURL3,
      method: "GET"
    }).then(function (response) {
  
      var cardDiv2 = $("<div>");
      $(cardDiv2).attr("class", "card");
  
      for (var i = 0; i < response.list.length; i += 8) {
  
  
        var cardBodyDiv2 = $("<div>");
        $(cardBodyDiv2).attr("class", "card-body col-sm");
  
  
        var h5El2 = $("<h5>").text(response.list[i].dt_txt);
        $(h5El2).attr("class", "card-title")
  
  
        var temp2 = response.list[i].main.temp
        var tempEl2 = $("<p>").text("Temperature: " + temp2 + "°");
        $(tempEl2).attr("class", "card-text")
  
        var humidity2 = response.list[i].main.humidity
        var humidityEl2 = $("<p>").text("Humidity: " + humidity2);
  
        var windEl2 = $("<p>").text("Wind Speed: " + response.list[i].wind.speed + "MPH");
  
        // Appends card to page
        $(cardBodyDiv2).append(h5El2);
        $(cardBodyDiv2).append(tempEl2);
        $(cardBodyDiv2).append(humidityEl2)
        $(cardBodyDiv2).append(windEl2);
  
        $(cardDiv2).append(cardBodyDiv2);
        $(cardBodyDiv).append(cardDiv2);
  
      }
  
  



  })
})


