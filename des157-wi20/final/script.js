(function () {

    "use strict";

    const map = document.getElementById("map");
    const box = document.getElementById("close");
    const country = document.getElementById("country");
    const china = document.getElementById("China");
    const russia = document.getElementById("Russia");
    const korea = document.getElementById("SouthKorea");
    const japan = document.getElementById("Japan");
    const india = document.getElementById("India");
    const usa = document.getElementById("UnitedStates");
    const canada = document.getElementById("Canada");
    const france = document.getElementById("France");
    const brazil = document.getElementById("Brazil");
    const australia = document.getElementById("Australia");

    china.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/China.png')";
        map.style.transition = "1s";
        country.style.display = "none";
    });
    russia.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/Russia.png')";
        map.style.transition = "1s";
        country.style.display = "none";
    });
    korea.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/SouthKorea.png')";
        map.style.transition = "1s";
        country.style.display = "none";
    });
    japan.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/Japan.png')";
        map.style.transition = "1s";
        country.style.display = "none";
    });
    usa.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/UnitedStates.png')";
        map.style.transition = "1s";
        country.style.display = "none";
    });
    australia.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/Australia.png')";
        map.style.transition = "1s";
        country.style.display = "none";
    });
    india.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/India.png')";
        map.style.transition = "1s";
        country.style.display = "none";
    });
    canada.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/Canada.png')";
        map.style.transition = "1s";
        country.style.display = "none";
    });
    brazil.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/Brazil.png')";
        map.style.transition = "1s";
        country.style.display = "none";
    });
    france.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/France.png')";
        map.style.transition = "1s";
        country.style.display = "none";
    });

    box.addEventListener('click', function (event) {
        event.preventDefault();
        map.style.backgroundImage = "url('images/map.png')";
        map.style.transition = "1s";
        country.style.display = "inline";
    });

}());