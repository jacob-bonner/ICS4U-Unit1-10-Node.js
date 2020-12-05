// Created By: Jacob Bonner
// Created On: December 2020
// This program allows the user to enter a planet name and the program
//   will tell the user its position in the solar system.

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// Defining the enum containing the containing the planets in the solar system
const SolarSystemPlanets = {
  MERCURY: '1',
  VENUS: '2',
  EARTH: '3',
  MARS: '4',
  JUPITER: '5',
  SATURN: '6',
  URANUS: '7',
  NEPTUNE: '8'
};

try {
  // Getting the planet name input
  const USERINPUT = prompt("Enter the planet name: ");
  const PLANETINPUT = USERINPUT.toUpperCase();
  console.log();

  // Process
  let planetPosition;
  switch (PLANETINPUT) {
    case "MERCURY":
      planetPosition = SolarSystemPlanets.MERCURY;
      break;
    case "VENUS":
      planetPosition = SolarSystemPlanets.VENUS;
      break;
    case "EARTH":
      planetPosition = SolarSystemPlanets.EARTH;
      break;
    case "MARS":
      planetPosition = SolarSystemPlanets.MARS;
      break;
    case "JUPITER":
      planetPosition = SolarSystemPlanets.JUPITER;
      break;
    case "SATURN":
      planetPosition = SolarSystemPlanets.SATURN;
      break;
    case "URANUS":
      planetPosition = SolarSystemPlanets.URANUS;
      break;
    case "NEPTUNE":
      planetPosition = SolarSystemPlanets.NEPTUNE;
      break;
    default:
      planetPosition = null;
  }

  // Output
  if (planetPosition == null) {
    console.log("ERROR: Invalid Input");
  } else {
    console.log("This planet is number", 
                planetPosition, "in the solar system.");
  }

  // Catches and tells the user that an improper input was entered
} catch (err) {
  console.log("ERROR: Invalid Input");
}
