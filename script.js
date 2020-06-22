$(document).ready(function () {
  // var cityInput;
  // var breweryList;
  // var breweryWebsites;
  // var breweryStreetAddress;
  // var breweryState;

  $("#search-btn").on("click", searchCity);
  $("#button2").on("click", renderJoke);
  $("#button1").on("click", renderMeme);

  function showResultsBox() {
    $("#search-results").attr("class", "container-1 row");
  }

  function hideWelcome(){
    $("#welcome").attr("class", "hide");
  }

  function hideResults(){
    $("#search-results").attr("class", "hide");
  }

<<<<<<< HEAD
  function searchCity(event) {
    event.preventDefault();
    showResultsBox();
    hideWelcome();
    $("#joke").empty();
    var cityInput = $("#search-text").val();
    cityInput = cityInput.split(" ").join("_");
    runOpenBrewAPI(cityInput);
=======
  function searchCity() {
    $("#search-btn").on("click", function (event) {
      event.preventDefault();
      showResultsBox();
      hideWelcome();
      $("#joke").attr("src","");
      $("#joke2").html("");
      cityInput = $("#search-text").val();
      cityInput = cityInput.split(" ").join("_");
      runOpenBrewAPI();
    });
>>>>>>> 5329a367a9a97d580f3dfd63be60ac0e0ccf423e
  }

  // var city = cityInput
  function runOpenBrewAPI(city) {
    var OpenBrewAPIURL =
      "https://api.openbrewerydb.org/breweries?by_city=" + city;
    $.ajax({
      url: OpenBrewAPIURL,
      method: "GET",
    }).then(function (response) {
      $("#search-results").empty();
      var searchResults = $("#search-results");
      var htmlStr = "";
      var randNum = Math.floor(Math.random() * response.length);
      var breweryList = response[randNum].name;
      var breweryWebsites = response[randNum].website_url.replace(
        "http:",
        "https:"
      );
      console.log(breweryWebsites);
      var breweryStreetAddress = response[randNum].street;
      var breweryState = response[randNum].state;
      breweryZip = response[randNum].postal_code;
      breweryPhone = response[randNum].phone;
      var website = breweryWebsites
        ? `<a href="${breweryWebsites}" target="_blank" class="card-link">Go to Their Website</a>`
        : `<p> Sorry Couldn't find their website.</p>`;
      htmlStr += `
          <div class="card col" style="width: 18rem;">
          <div class="card-body ">
          <h5 class="card-title">${breweryList}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${breweryStreetAddress} <br>
          ${breweryState}, ${breweryZip} <br>
          Phone: ${breweryPhone}
          </h6>
          ${website}
          <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="${breweryWebsites}" allowfullscreen></iframe>
        </div>
         </div>
        </div>`;
      searchResults.html(htmlStr);
    });
  }

  // RENDER JOKE FUNCTION
  function renderJoke() {
<<<<<<< HEAD
    $("#search-results").empty();
    hideResults();
    hideWelcome();
    $.ajax({
      url: "https://official-joke-api.appspot.com/random_joke",
      method: "get",
    }).then(function (response) {
      $("#joke").empty();
      var jokeResponse = document.createElement("div");
      $(jokeResponse).html(
        response.setup + "<br><br><br><br>" + response.punchline
      );
      $(jokeResponse).attr("color", "white");
      $("#joke").append(jokeResponse);
=======
    $("#button2").on("click", function () {
      $("#search-results").empty();
        hideResults();
        hideWelcome();
        $.ajax({
        url: "https://official-joke-api.appspot.com/random_joke",
        method: "get",
      }).then(function (response) {
        $("#joke2").empty();
        $("#joke").attr("src","");
        var jokeResponse = document.createElement("div");
        $(jokeResponse).html(
          response.setup + "<br><br><br><br>" + response.punchline
        );
        $(jokeResponse).attr("color", "white");
        $("#joke2").append(jokeResponse);
      });
>>>>>>> 5329a367a9a97d580f3dfd63be60ac0e0ccf423e
    });
  }

  //  RENDER MEME FUNCTION
  function renderMeme() {
<<<<<<< HEAD
    $("#search-results").empty();
    hideResults();
    hideWelcome();
    $.ajax({
      url: "https://meme-api.herokuapp.com/gimme",
      method: "get",
    }).then(function (response) {
      $("#joke").empty();
      var memeResponse = document.createElement("img");
      $(memeResponse).attr("src", response.url);
      $(memeResponse).attr("color", "white");
      $(memeResponse).attr("class", "meme-image");
      $("#joke").append(memeResponse);
=======
    $("#button1").on("click", function () {
      $("#search-results").empty();
      hideResults();
      hideWelcome();
      $.ajax({
        url: "https://meme-api.herokuapp.com/gimme",
        method: "get",
      }).then(function (response) {
        console.log(response);
        $("#joke2").empty();
        var memeResponse = $("#joke");
        $(memeResponse).attr("src", response.url);
        $(memeResponse).attr("color", "white");
        $(memeResponse).addClass("class", "meme-image");
        $("#joke").append(memeResponse);
      });
>>>>>>> 5329a367a9a97d580f3dfd63be60ac0e0ccf423e
    });
  }
});
