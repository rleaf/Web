var colors = new Array (
    [62, 35, 255],
    [60, 255, 50],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0]);

var step = 0;

var colorIndecies = [0, 1, 2, 3];

var gradientSpeed = 0.002;



let updateGradient = () => {

  //if ( $===undefined ) return;

  var c0_0 = colors[colorIndecies[0]]; //62, 35, 255
  var c0_1 = colors[colorIndecies[1]]; // 60, 255, 50
  var c1_0 = colors[colorIndecies[2]]; // 255, 35, 98
  var c1_1 = colors[colorIndecies[3]]; // 45 175, 230

  var istep = 1 - step; //
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]); //62
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]); // 35
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]); // 255
  var color1 = 'rgb('+r1+','+g1+','+b1+')';

  //console.log(color1);

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')';

  console.log(color2);


 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  console.log(step);
  if (step >= 1) {
     step %= 1;
    colorIndecies[0] = colorIndecies[1];
    colorIndecies[2] = colorIndecies[3];

    colorIndecies[1] = (colorIndecies[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndecies[3] = (colorIndecies[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
  }



}

setInterval(updateGradient, 80);


// $('*');         /* This selector is a wild card method and will select all
//                    elements in a document. */
//
// $('#id');       /* This selector selects an element with the given ID. */
//
// $('.class');    /* The class selector will gather all elements in the
//                    document with the given class name. */
//
// $('element');   /* This selector will collect all elements in a document with
//                    the given tag name i.e. table, ul, li, a etc. */

// https://stackoverflow.com/questions/2167544/what-does-the-function-do-in-javascript
