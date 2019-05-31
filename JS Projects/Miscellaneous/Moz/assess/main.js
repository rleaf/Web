var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (var i = 0; i < 5; i++) {
  if (i === 0) {
    var newImage = document.createElement('img'); //create <img ...> </img> element
    newImage.setAttribute('src', 'images/pic1.jpg'); // sets attribute to <img src='images/pic1.jpg'>...
    thumbBar.appendChild(newImage); // appends newImage var to the reference thumbBar var
    newImage.onclick = function(e) {
      var imgSrc = e.target.getAttribute('src');
      displayImage(imgSrc)
    }
  } else if (i === 1) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic2.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
      var imgSrc = e.target.getAttribute('src');
      displayImage(imgSrc)
    }
  } else if (i === 2) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic3.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
      var imgSrc = e.target.getAttribute('src');
      displayImage(imgSrc)
    }
  } else if (i === 3) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic4.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
      var imgSrc = e.target.getAttribute('src');
      displayImage(imgSrc)
    }
  } else if (i === 4) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic5.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
      var imgSrc = e.target.getAttribute('src');
      displayImage(imgSrc)
    };
  };
};

//setAttribute('') || getAttribute('') || appendChild(); || createElement('');

// for (var i = 1; i < 6; i++) {
//   let newImage = document.createElement('img');
//   newImage.setAttribute('img', 'images/pic' + i + '.jpg');
//   thumbBar.appendChild(newImage);
//   newImage.onclick = (e) => {
//     let imgSrc = getAttribute('img');
//     displayImage(imgSrc);
//   }
// }

function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
};

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  let btnClass = btn.getAttribute('class')
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
