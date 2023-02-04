"use strict;"


$(document).ready(function() {
    $("#rollOverSun").hover(
        function() {
            $("#hide").css("display", "none")
        }, 
        function() {
            $("#hide").css("display", "block")
        })//end of hover

    $("#mercury").click(
        function() {
            var info = ["Mercury is the smallest planet", "Mercury is real", "Mercury is the messenger god", "Mercury is also in thermometers"];
            var infoString = "";
                for (i = 0; i < info.length; i++) {
                    infoString += info[i] + "\n";
                }
                alert(infoString);
        }
    )//end of mercury click
    $("#Jupiter").click(
        function() {
            $("#jupiterButton").css("margin-top", "200px");
            const notes = [{
                name: "Jupiter",
                quote: "is the largest planet"
            },      
            {
                name: "Jupiter",
                quote: "has a big storm"
            },
            {
                name: "Jupiter",
                quote: "has four moons"
            },
            {
                name: "Jupiter",
                quote: "spins faster than any other planet"
            },
            {
                name: "Jupiter",
                quote: "is 483,682,810 miles from the sun"
            },
            ];
            var test = "";
            for (i = 0; i < notes.length; i++) {
                test += notes[i].name + ": " + notes[i].quote + "<br><br>";
                const display = document.getElementById("disNotes");
                display.innerHTML = test;
                console.log(test);
             if(notes.filter(e => e.quote === "storm")) {
               console.log("test")
                
                
            }
            }
    })
        }//end of ready function
    ) 