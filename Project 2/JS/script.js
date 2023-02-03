"use strict";
$(document).ready(function() {
    $("#add").click(
        function() {
            var Number1 = $("#firstNum").val();
            var Number2 = $("#secondNum").val();
            var sum = parseFloat(Number1) + parseFloat(Number2);
           

            if (Number1 === "" || Number2 === "" ) {
                $("#message").text("Please enter a number in both fields.");
            } 
            else if (isNaN(Number1) || isNaN(Number2) ) {
                $("#message").text("Please enter a number in both fields.");
                event.preventDefault();
            } else {
               $("#message").text(""); 
               $("#answer").val(sum);
               event.preventDefault(); //keeps numbers from disappearing 
            }

        }//end of function
    )//end of add click

    $("#multiply").click(
        function() {
            var Number1 = $("#firstNum").val();
            var Number2 = $("#secondNum").val();
            var answ = parseFloat(Number1) * parseFloat(Number2);
           

            if (Number1 === "" || Number2 === "" ) {
                $("#message").text("Please enter a number in both fields.");
            }
            else if (isNaN(Number1) || isNaN(Number2) ) {
                $("#message").text("Please enter a number in both fields.");
                event.preventDefault(); 
            } else {
                $("#message").text(""); 
                $("#answer").val(answ);
                event.preventDefault();
            }

        }//end of function
    )//end of multiply click
})
