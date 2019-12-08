$(".likert").click( function () {
    document.getElementById("question2").style.display = "block";
    document.getElementById("q1").style.display = "none";
    
})
$("#question2").click( function () {
    document.getElementById("question2").style.display = "none";
    document.getElementById("next").style.display = "block";
    
})
document.getElementById("type").addEventListener("click" , function (event) {
    
    
})
$("#ptab").click( function () {
    document.getElementsByClassName("challenge").style.display = "block";
})
$("#mtab").click( function () {
    document.getElementsByClassName("challenge").style.display = "block";
})

/*
function url() {
    window.location.href = 'Handler1.ashx?username' 
}*/