// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let selectPlanets = pickPlanet(listedPlanets);
     addDestinationInfo(document, selectPlanets.name, selectPlanets.diameter, selectPlanets.star, selectPlanets.distance, selectPlanets.moons, selectPlanets.image) 
    }) 


   let list = this.document.getElementById("faultyItems");
   list.style.visibility = "hidden"; 
   let form = this.document.querySelector("form");
   form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    let pilotInput = document.querySelector("input[name = pilotName]");
    let pilot = pilotInput.value
    let copilotInput = document.querySelector("input[name = copilotName]");
    let copilot = copilotInput.value
    let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
    let fuelLevel = Number(fuelLevelInput.value);
    let cargoLevelInput = document.querySelector("input[name = cargoMass]");
    let cargoLevel = Number(cargoLevelInput.value);
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
})

});