// Function to handle form submission
function onSubmit(event) {
  event.preventDefault();
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  let hasErrors=false;
console.log(month);

  // Checking if the day and month are within valid ranges
  if (day <= 0 || day > 31) {
    alert("Invalid day. Please enter a valid day (1 to 31).");
    hasErrors=true;

  }
  if(month <= 0 || month > 12) {
    alert("Invalid month. Please enter a valid month (1 to 12).");
    hasErrors=true;
  }
  if(!hasErrors){
    calculateAndDisplayAkanName(day, month, gender) 
  }

}
// If the input is valid, proceed with the Akan name calculation
const gender = document.getElementById("gender").value;
// Calling the function to calculate the day of the week and display the Akan name
function calculateAndDisplayAkanName(day, month, gender) {
  // Define arrays for male and female Akan names
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];

  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];

  // calculate the day of the week
  let year = new Date().getFullYear(); // Get the current year
  if (month < 3) {
    month += 12;
    year -= 1;
  }
  const century = Math.floor(year / 100);
  const yearOfCentury = year % 100;
  const dayOfWeek = (day + Math.floor(13 * (month + 1) / 5) + yearOfCentury + Math.floor(yearOfCentury / 4) + Math.floor(century / 4) - 2 * century) % 7;

  // Determine the Akan name based on the gender and day of the week
  let akanName = "";
  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }

  // Displaying the result
  const resultDiv = document.getElementById("result");
  alert(`Your Akan name is: ${akanName}`);
}
// Adding form submission event listener
document.getElementById("birthdayForm").addEventListener("submit", onSubmit);