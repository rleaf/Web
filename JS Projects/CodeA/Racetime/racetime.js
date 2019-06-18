let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = true;
var runnersAge = 18;

if(runnersAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
  console.log(`Your number is: ${raceNumber} and your race will begin at 9:30 am`)
} else if(runnersAge > 18 && registeredEarly === false) {
  console.log(`Your number is: ${raceNumber} and your race will begin at 11:00 am`);
} else if(runnersAge < 18) {
  console.log(`Your number is: ${raceNumber} and your race will begin ag 12:30 pm`)
} else if(runnersAge === 18) {
  console.log('Please see the registration desk')
};
