$(document).ready(function(){

var word1 = [
	"Bob Hope",
	"Pig's Ears",
	"Rosy Lee",
	"Tomfoolery",
	"Vera Lynn",
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "Didn't Ought!",
  "Gay and Hearty!",
  "Light and Dark!",
  "Near and Far!",
  "Rattle and Clank!",
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "China Plate.",
  "Dustbin Lid.",
  "Hampton Wick.",
  "Old Bag.",
  "Baked Bean.",
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);

});