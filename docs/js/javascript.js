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

var btnConfirmD1; //btnConfirmD
var btnConfirmS1; //btnConfirmS 

var char_info_panel; //char_info

//DPSname
//DPSfame
//DPSbuild
//build_other



//end of global variables


//Supporting functions of getting values from HTML
function getEC() {
    EC = document.getElementById("EC").value;
    console.log(EC.length);
   
}

function getTimeZone() {
    timeZone = document.getElementById('Timezone').value;
    console.log("Time Zone: " + timeZone);
}

function getDps() {
    countDps = document.getElementById('DPScount').value;
    console.log("Number of DPS: " + countDps);
    

}

function getSader() {
    countSader = document.getElementById('Sadercount').value;
    console.log('Number of Saders: ' + countSader);
    
}
    
function getTimeZoneTest() {
    timeZone_test = document.getElementById('Timezone_test').value;
    console.log("Time Zone test: " + timeZone_test);
}

function sendAlert() {
    //fill this place with one alert message through if else statement
    //instead of sending multiple alert windowss
    if (EC.length == 0 && countDps == 0 && countSader ==0)
    {
        //console.log("Explorer Club Id is null not entered");
        alert("Please enter the following: \n" + 
        "Explorer Club ID: \n" + 
        "Number of DPS: \n" +
        "Number of Sader: \n");
    }
    else if(EC.length == 0 && countDps == 0) {
        alert("Please enter the following: \n" + 
        "Explorer Club ID: \n" + 
        "Number of DPS: ");
    }
    else if(EC.length == 0 && countSader == 0) {
        alert("Please enter the following: \n" + 
        "Explorer Club ID: \n" +
        "Number of Sader: ");
    }
    else if(EC.length == 0) {
        alert("Please enter the following: \n" +
        "Explorer Club ID: ");
    }
    else if(countDps == 0 && countSader == 0) {
        alert("Please enter the following: \n" + 
        "NUmber of DPS: \n" +
        "Number of Sader: ");
    }
    else if(countDps == 0) {
        alert("Please enter the following: \n" + 
        "Number of DPS: ");
    }
    else if(countSader == 0) {
        alert("Please enter the following: \n" + 
        "Number of Sader: ");
    }
    else {
        //need to add timezone error later
        alert("Following information has been registered: \n" + 
        "Explorer Club ID: " + EC + "\n" + 
        "Time Zone: " + timeZone + "\n" +
        "Time Zone Test: " + timeZone_test + "\n" +
        "Number of DPS: " + countDps + "\n" + 
        "Number of Saders: " + countSader);
        console.log("Error message for later if timezone is not filled out");
    }

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
    sendAlert();
}

function btnConfirmDPS() {
    getEC();
    getTimeZone();
    getTimeZoneTest();
    getDps();
    getSader();
    if (countDps != 0 && countSader != 0 && EC.length != 0){
        char_info_panel.classList.remove("hidden");
    }
    else {
        sendAlert();
    }
}

//document ready
$(document).ready(function() {
    console.log("ready!");
    btnSubmit1 = document.getElementById('btnSubmit');
    btnConfirmD1 = document.getElementById('btnConfirmD');
    char_info_panel = document.getElementById('char_info'); 
    //console.log(char_info_panel); //this too
    //char_info_panel.classList.remove("hidden"); //this too

    btnConfirmD1.addEventListener('click', function ()
    {
        btnConfirmDPS();
    });

    btnSubmit1.addEventListener('click', function () 
    {
        btnSubmit();
    });
    (function dynamic_form() {

        const formContainer = $('#form-container');
        const bufferContainer = $('#buffer-container');
        const numberInput = $('#dpsform');
        const bufferInput = $('#buffer');
    
        numberInput.on('input', function() {
            const numForms = parseInt($(this).val());
            formContainer.empty(); // clear previous forms
            for (let i = 0; i < numForms; i++) {
                const formGroup = $('<div class="form-group"></div>');
                const dpsLabel = $('<label></label>')
                    .attr('for', `dps-${i}`)
                    .text(`DPS ${i + 1}:`);
                const dpsInput = $('<input class="form-control"></input>')
                    .attr('type', 'text')
                    .attr('id', `dps-${i}`)
                    .attr('name', `dps-${i}`)
                    .attr('required', true);
                const fameLabel = $('<label></label>')
                    .attr('for', `fame-${i}`)
                    .text(`Fame ${i + 1}:`);
                const fameInput = $('<input class="form-control"></input>')
                    .attr('type', 'number')
                    .attr('id', `fame-${i}`)
                    .attr('name', `fame-${i}`)
                    .attr('min', '0')
                    .attr('max', '100')
                    .attr('required', true);
                const dropdownLabel = $('<label></label>')
                    .attr('for', `dropdown-${i}`)
                    .text(`Dropdown ${i + 1}:`);
                const dropdown = $('<select class="form-control"></select>')
                    .attr('id', `dropdown-${i}`)
                    .attr('name', `dropdown-${i}`);
                const option1 = $('<option></option>')
                    .attr('value', 'option1')
                    .text('Option 1');
                const option2 = $('<option></option>')
                    .attr('value', 'option2')
                    .text('Option 2');
                const option3 = $('<option></option>')
                    .attr('value', 'option3')
                    .text('Option 3');
                dropdown.append(option1);
                dropdown.append(option2);
                dropdown.append(option3);
                formGroup.append(dpsLabel);
                formGroup.append(dpsInput);
                formGroup.append(fameLabel);
                formGroup.append(fameInput);
                formGroup.append(dropdownLabel);
                formGroup.append(dropdown);
                formContainer.append(formGroup);
            }
        });

        bufferInput.on('input', function() {
            const numForms = parseInt($(this).val());
            bufferContainer.empty(); // clear previous forms
            for (let i = 0; i < numForms; i++) {
                const formGroup = $('<div class="form-group"></div>');
                const bufferNameLabel = $('<label></label>')
                    .attr('for', `buffer-name-${i}`)
                    .text(`Buffer Name ${i + 1}:`);
                const bufferNameInput = $('<input class="form-control"></input>')
                    .attr('type', 'text')
                    .attr('id', `buffer-name-${i}`)
                    .attr('name', `buffer-name-${i}`)
                    .attr('required', true);
                const fameLabel = $('<label></label>')
                    .attr('for', `fame-${i}`)
                    .text(`Fame ${i + 1}:`);
                const fameInput = $('<input class="form-control"></input>')
                    .attr('type', 'number')
                    .attr('id', `fame-${i}`)
                    .attr('name', `fame-${i}`)
                    .attr('required', true);
                const statBuffLabel = $('<label></label>')
                    .attr('for', `statbuff-${i}`)
                    .text(`Stat Buff ${i + 1}:`);
                const statBuffInput = $('<input class="form-control"></input>')
                    .attr('type', 'number')
                    .attr('id', `statbuff-${i}`)
                    .attr('name', `statbuff-${i}`)
                    .attr('required', true);
                const pmiLabel = $('<label></label>')
                    .attr('for', `pmi-${i}`)
                    .text(`PMI ${i + 1}:`);
                const pmiInput = $('<input class="form-control"></input>')
                    .attr('type', 'number')
                    .attr('id', `pmi-${i}`)
                    .attr('name', `pmi-${i}`)
                    .attr('required', true);
                formGroup.append(bufferNameLabel);
                formGroup.append(bufferNameInput);
                formGroup.append(fameLabel);
                formGroup.append(fameInput);
                formGroup.append(statBuffLabel);
                formGroup.append(statBuffInput);
                formGroup.append(pmiLabel);
                formGroup.append(pmiInput);
                bufferContainer.append(formGroup);
            }
        });
    })();

});