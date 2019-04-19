var num = 0;
var txt = "The Top 7 Breweries in Richmond!";
var speed = 100;
  
function typeWriter() {
  if (num < txt.length) {
    document.getElementById("type-text").innerHTML += txt.charAt(num);
    num++;
    setTimeout(typeWriter, speed);
    console.log("it runs");
  }
}
