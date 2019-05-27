let getSleepHours = day => {
  switch(day) {
    case 'monday':
  	  return 5;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 5;
      break;
    case 'thursday':
      return 5;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 5;
      break;
    case 'sunday':
      return 5;
      break;
  }
}

let getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

console.log(`You slept ${getActualSleepHours()} hours.`);

let getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(6);

  if(actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if(actualSleepHours > idealSleepHours) {
    console.log('You got '+(actualSleepHours - idealSleepHours)+' hours more sleep than needed.');
  } else if(actualSleepHours < idealSleepHours) {
    console.log('You got '+(idealSleepHours - actualSleepHours)+' less sleep than needed.');
  }
}

calculateSleepDebt()
