var img = document.getElementById("content");
var monday = document.getElementById("Monday");
var tuesday = document.getElementById("Tuesday");
var wednesday = document.getElementById("Wednesday");
var thursday = document.getElementById("Thursday");
var friday = document.getElementById("Friday");
var saturday = document.getElementById("Saturday");
var sunday = document.getElementById("Sunday");
var cover = document.getElementById("Cover");


monday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/1.jpeg')";
    img.style.transition = "1s";
});
tuesday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/2.jpeg')";
    img.style.transition = "1s";
});
wednesday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/3.jpeg')";
    img.style.transition = "1s";
});
thursday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/4.jpeg')";
    img.style.transition = "1s";
});
friday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/5.jpeg')";
    img.style.transition = "1s";
});
saturday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/6.jpeg')";
    img.style.transition = "1s";
});
sunday.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/7.jpeg')";
    img.style.transition = "1s";
});
cover.addEventListener('click', function(event) {
    event.preventDefault();
    img.style.backgroundImage = "url('images/0.png')";
    img.style.transition = "1s";
});


