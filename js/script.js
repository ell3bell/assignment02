$(document).ready();

var female_name = prompt("Please enter a female-name");
var female_name_two = prompt("Please enter a second female-name");
var male_name = prompt("Please enter a male name");
var geographic = prompt("Please enter a geographic feature");
var occupation = prompt("Please enter an occupation");
var noun = prompt("Please enter a noun (1 of 5)");
var noun1 = prompt("Please enter a noun (2 of 5)");
var noun2 = prompt("Please enter a noun (3 of 5)");
var noun3 = prompt("Please enter a noun (4 of 5)");
var noun4 = prompt("Please enter a noun (5 of 5)");
var color = prompt("Please enter a color");

document.getElementById("female_name_0_1").innerHTML = female_name;
document.getElementById("female_name_0_2").innerHTML = female_name;
document.getElementById("female_name_0_3").innerHTML = female_name;

document.getElementById("female_name_1_1").innerHTML = female_name_two;
document.getElementById("female_name_1_2").innerHTML = female_name_two;

document.getElementById("male_name_1").innerHTML = male_name;
document.getElementById("male_name_2").innerHTML = male_name;

document.getElementById("geographic_feature_1").innerHTML = geographic;
document.getElementById("geographic_feature_2").innerHTML = geographic;

document.getElementById("occupation").innerHTML = occupation;

document.getElementById("noun_0").innerHTML = noun;
document.getElementById("noun_1").innerHTML = noun1;
document.getElementById("noun_2").innerHTML = noun2;
document.getElementById("noun_3").innerHTML = noun3;
document.getElementById("noun_4").innerHTML = noun4;

document.getElementById("color_0_1").innerHTML = color;
document.getElementById("color_0_2").innerHTML = color;
document.getElementById("color_0_3").innerHTML = color;
document.getElementById("color_0_4").innerHTML = color;

