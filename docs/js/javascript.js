//console.log("hello");
//global variables
var EC;
var countDps; //html DPScount
var countSader; //html Sadercount
var timeZone; //html Timezone
var timeZone_test; //html Timezone_test
var timeAvalStart; //html Time_availability_start (need to add function)
var timeAvalEnd; //html Time_availability_end (need to add function)
var btnSubmit1;

//end of global variables


//Supporting functions of getting values from HTML
function getEC() {
    EC = document.getElementById("EC").value;
    console.log(EC.length);
    if (EC.length == 0)
    {
        console.log("Explorer Club Id is null not entered");
        alert("Please enter an Explorer Club ID.");
    }
    else {
        console.log("Explorer Club Id: " + EC);
    }
}

function getTimeZone() {
    timeZone = document.getElementById('Timezone').value;
    console.log("Time Zone: " + timeZone);
}

function getDps() {
    countDps = document.getElementById('DPScount').value;
    
    if (countDps == 0) {
        console.log("DPS count is 0, please choose a higher number.");
        alert("Please provide at least 1 DPS.");
    }
    else {
        console.log("Number of DPS: " + countDps);
    }

}

function getSader() {
    countSader = document.getElementById('Sadercount').value;
    if (countSader == 0) {
        console.log ("Sader count is 0, please choose a higher number.");
        alert("Please provide at least 1 Sader.");
    }
    else {
        console.log('Number of Saders: ' + countSader);
    }
}
    
function getTimeZoneTest() {
    timeZone_test = document.getElementById('Timezone_test').value;
    console.log("Time Zone test: " + timeZone_test);
}

function sendAlert() {
    //fill this place with one alert message through if else statement
    //instead of sending multiple alert windows
}

//NEED TO MAKE A FUNCTION TO CONVERT TIME FROM TIME ZONE
//START OF TIME ZONE CONVERSION
function convertTime() {
    
}
//END OF TIME ZONE CONVERSION


//End of Supporting functions of getting values from HTML


function btnSubmit() {
    //var btnSubmit1 = document.getElementById('btnSubmit');
    //btnSubmit1.addEventListener('click', getEC());
    //console.log(EC + ' from btnSubmit');
    getEC();
    getTimeZone();
    getTimeZoneTest();
    getDps();
    getSader();
    alert("Following information has been registered: \n" + 
    "Explorer Club ID: " + EC + "\n" + 
    "Time Zone: " + timeZone + "\n" +
    "Time Zone Test: " + timeZone_test + "\n" +
    "Number of DPS: " + countDps + "\n" + 
    "Number of Saders: " + countSader);
}

//document ready
$(document).ready(function() {
    console.log("ready!");
    btnSubmit1 = document.getElementById('btnSubmit');
   
    btnSubmit1.addEventListener('click', function () 
    {
        btnSubmit();
    });

});