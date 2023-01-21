$(document).ready(
    function() {
        $("#cycle").click (
            function() {

        const info = [{
            name: "General Liability",
            state: "South Carolina"
        },      
        {
            name: "Worker's Compensation",
            state: "North Carolina"
        },
        {
            name: "Fire, Theft, Property",
            state: "All States except Hawaii"
        }];

        var popUp = "";
        //Alert is inside loop so that loop cycles & display through all items in list
        for (i = 0; i < info.length; i++) {
            popUp = "Line of Business"+ "\n" + (i+ 1) + " " + "-" + " " +  info[i].name + "\n" + info[i].state;
            alert(popUp);
        }
    }
)//end of click
    $("#submit").click (
        function() {
             var fname = $("#firstN").val();
             var lname = $("#lastN").val();
             var emailI = $("#email").val();

           // if both checkboxes are checked  
           if ($("#op1").is(":checked") == true && $("#op2").is(":checked") == true) {
             event.preventDefault();
            alert("Please only check one - email or phone")
           }// end of if 
           // if both checkboxes are not checked
           else  if ($("#op1").is(":checked") == false && $("#op2").is(":checked") == false) {
           alert("Please only check one - email or phone");
           event.preventDefault();
            }
            //Display checkbox op1
            else  if ($("#op1").is(":checked") == true && $("#op2").is(":checked") == false) {
                alert("Thank you for your feedback, " + fname + "\n" + "Someone will contact you shortly by email");
                 }
            //checks to see if anything has been inputted into the first, last, and email inputs     
            else  if ( fname === "" || lname === "" || emailI === "" ) {
                    event.preventDefault();
            }    
           //Display checkbox op2      
           else {
            alert("Thank you for your feedback, " + fname + "\n" + "Someone will contact you shortly by phone");
           }
        }
    )
}//end of function
)//end of ready


