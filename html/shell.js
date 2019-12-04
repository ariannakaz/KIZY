$(".likert").click( function () {
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