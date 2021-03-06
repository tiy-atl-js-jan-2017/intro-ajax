// curl -v http://swapi.co/api/planets/1/

var planetId = 1;

function getPlanet (count, callback) {
  $.ajax({
    url: `http://swapi.co/api/planets/${count}/`,
    dataType: "json",
    success: callback
  });
}

function planetTemplate (planet) {
  var description = "";
  if (planet.population > 1000000) {
    description = "bustling cityscape";
  } else {
    description = "boring backwater";
  }

  return `
    <li class="planet">${planet.name} is pretty ${planet.climate} and a ${description}.</li>
  `;
}

function updatePageForPlanet (data, status, xhrObject) {
  console.log(xhrObject);
  planetId++;
  var planetHtml = planetTemplate(data);
  $(".planets").append(planetHtml);
}

function addPlanet (event) {
  event.preventDefault();
  getPlanet(planetId, updatePageForPlanet);
}

$(".planet-button").click(addPlanet);

/*

 ///  The long and sordid history of Javascript Modules
 ///  For more, see: http://eloquentjavascript.net/10_modules.html

 var myLibrary = (function () {
 function greet (name) {
 console.log("Hello, " + name);
 }

 function circleArea (radius) {
 return PI * Math.pow(radius, 2);
 }

 var PI = 3.14;

 return {
 greet: greet,
 circleArea: circleArea
 };

 })()

 */
