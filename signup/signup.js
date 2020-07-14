document.addEventListener('DOMContentLoaded', ()=> {

    loadDatOfBirth();


});



function loadDatOfBirth() {
    var selectDate = document.querySelector('#sl-date');
    for (var i = 1; i < 31; ++i) {
        var date = document.createElement('option');
        date.value = i;
        date.innerText = i;

        selectDate.appendChild(date);
    }


    var selectMonth = document.querySelector('#sl-month');
    for (var i = 1; i <= 12; ++i) {
        var date = document.createElement('option');
        date.value = i;
        date.innerText = i;

        selectMonth.appendChild(date);
    }


    var selectYear = document.querySelector('#sl-year');
    for (var i = 2020; i >= 1920; --i) {
        var date = document.createElement('option');
        date.value = i;
        date.innerText = i;

        selectYear.appendChild(date);
    }
}


function submitForm() {
    let txtPassword = document.getElementById('txt-password');
    let txtConfirmPassword = document.getElementById('txt-confirm-password');

    if (txtConfirmPassword.value != txtPassword.value) {
        alert('The confirm password is not match, please try again');
        txtConfirmPassword.focus();
        txtConfirmPassword.select();
        return;
    }


    let checkMale = document.getElementById('check-male');
    let checkFeMale = document.getElementById('check-female');
    if (!(checkFeMale.checked || checkMale.checked)) {
        alert('Please select your gender');
        return;
    }


    var selectDate = document.querySelector('#sl-date');
    var selectMonth = document.querySelector('#sl-month');
    var selectYear = document.querySelector('#sl-year');
    if (selectYear.value == 'Year' || selectMonth.value == 'Month' || selectDate.value == 'Date') {
        alert('Please select your Date of Birth');
        return;
    }


    
    document.getElementById('signup-form').submit();
}