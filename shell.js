// radio value minutes
let radioNum = 0;
// button value physical or mental
let typeExcercise = "";

$(".likert").click( function () {
    // alex edit
    if(document.getElementById("5").checked  == true) {
        radioNum = document.getElementById("5").value
    }
    if(document.getElementById("10").checked  == true) {
        radioNum = document.getElementById("10").value
    }
    if(document.getElementById("15").checked  == true) {
        radioNum = document.getElementById("15").value
    }
    if(document.getElementById("20").checked  == true) {
        radioNum = document.getElementById("20").value
    }
    if(document.getElementById("30").checked  == true) {
        radioNum = document.getElementById("30").value
    }  

    document.getElementById("q1").style.display = "none";

    document.getElementById("next").style.display = "block";
})

// so the webpage knows only physical excerises
$(".phys").click( function () {
    typeExcercise = document.getElementsByClassName('phys')[0].value;
})

// so the webpage knows only mental excerises
$(".ment").click( function ()  {
    typeExcercise = document.getElementsByClassName('ment')[0].value;
})

$("#ptab").click( function () {
    document.getElementById("challenge").style.display = "block";
    $("#type").attr("action", "shellPhysical.html");
})
$("#mtab").click( function () {
    document.getElementById("challenge").style.display = "block";
    $("#type").attr("action", "shellMental.html");
})