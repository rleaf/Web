const input = 'Hi, Human';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for(i = 0; i < input.length; i++) {
  //console.log(i)
  for(v = 0; v < vowels.length; v++) {
    //console.log(v)
    if(input[i] === vowels[v]) {
      resultArray.push(input[i]);
      if(input[i] === 'e') {
        resultArray.push(input[i]);
      }
      if(input[i] ==='u') {
        resultArray.push(input[i]);
      }
    }

  }
}

console.log(resultArray.join('').toUpperCase())
