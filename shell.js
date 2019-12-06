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
});

let fired_button = "";

$("#physbtn").on("click", function(){
    document.getElementById("next").style.display = "block";
     fired_button = "physical";
  });

  $("#mentbtn").on("click", function(){
    document.getElementById("next").style.display = "block";
     fired_button = "mental";
  });

  $("#bothbtn").on("click", function(){
    document.getElementById("next").style.display = "block";
     fired_button = "";
  });

$("#workout").on("click", function(){
    const $list = $("ul");
  // Remove previous songs.
    $list.empty();

    document.getElementById("question2").style.display = "none";
    document.getElementById("workout").style.display = "none";

    function getWorkout() {
    $.get("/search", function({category: fired_button}) {
        let count=0;
        while (count<radioNum){
            exercises.forEach(function(exercise) {
                $list.append("<li>" + exercise.name + " - " + 
                exercise.description + ")" + "</li>");
                count++;
            });
        };
    });
  }
})

/*$("#ptab").click( function () {
    document.getElementById("challenge").style.display = "block";
    $("#type").attr("action", "shellPhysical.html");
})
$("#mtab").click( function () {
    document.getElementById("challenge").style.display = "block";
    $("#type").attr("action", "shellMental.html");
})*/

