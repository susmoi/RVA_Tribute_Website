var i = 0;
var txt = "The Top 7 Breweries in Richmond!";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log("it runs");
  }
}
