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

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

function getWorkout() {
    let $list = $("ol");
    $list.empty();
    let count=0;

    if (fired_button==""){
        $.get("/search", function(exercises) {
            var data = [];
            data.push(exercises);
            data=shuffle(data[0]);
            while (count<radioNum){
                $list.append("<li>" + data[count]["name"] + " - " + data[count]['description'] + "</li>");
                count++;
            }
        }
    )} 
    else {
        $.get("/search", {category:fired_button}, function(exercises) {
            let excess=0;
            let data = [];
            data.push(exercises);
            data=shuffle(data[0]);
            if (radioNum>data.length){
                excess=radioNum-data.length;
                while (count<data.length){
                    $list.append("<li>" + data[count]["name"] + " - " + data[count]['description'] + "</li>");
                    count++;
                }
                count=0;
                data=shuffle(data);
                while (count<excess){
                    $list.append("<li>" + data[count]["name"] + " - " + data[count]['description'] + "</li>");
                    count++;
                }
            }
            else {
                while (count<radioNum){
                    $list.append("<li>" + data[count]["name"] + " - " + data[count]['description'] + "</li>");
                    count++;
                }
            }
            
        })
    }
};

$("#workout").on("click", function(){
    document.getElementById("question2").style.display = "none";
    document.getElementById("workout").style.display = "none";
    getWorkout();
})

/*$("#ptab").click( function () {
    document.getElementById("challenge").style.display = "block";
    $("#type").attr("action", "shellPhysical.html");
})
$("#mtab").click( function () {
    document.getElementById("challenge").style.display = "block";
    $("#type").attr("action", "shellMental.html");
})*/

