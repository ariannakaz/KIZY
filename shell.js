// radio value minutes
let radioNum = 0;

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

    document.getElementById("question2").style.display = "block";
    document.getElementById("q1").style.display = "none";
})

$("#question2").click( function () {
    document.getElementById("question2").style.display = "none";
    document.getElementById("next").style.display = "block";
    
})
// $("#question2").click( function () {
    
// })

// document.getElementById("type").addEventListener("click" , function (event) {
//    // $("#toMain").attr("action", "shellMain.html" );
    
// })
$("#ptab").click( function () {
    document.getElementById("challenge").style.display = "block";
    $("#type").attr("action", "shellPhysical.html");
})
$("#mtab").click( function () {
    document.getElementById("challenge").style.display = "block";
    $("#type").attr("action", "shellMental.html");
})

/*
function url() {
    window.location.href = 'Handler1.ashx?username' 
}*/
