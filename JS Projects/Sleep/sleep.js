let getSleepHours = day => {
  switch(day) {
    case 'monday':
  	  return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 8;
      break;
  }
}

let getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

let getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(1);

  if(actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if(actualSleepHours > idealSleepHours) {
    console.log('You got '+(actualSleepHours - idealSleepHours)+' hours more sleep than needed.');
  } else if(actualSleepHours < idealSleepHours) {
    console.log('You got '+(idealSleepHours - actualSleepHours)+' less sleep than needed.');
  }
}

calculateSleepDebt()
