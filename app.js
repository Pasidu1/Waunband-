document.getElementById('numberForm').addEventListener('submit', function(event) {

event.preventDefault();

    var phoneNumber = document.getElementById('phoneNumber').value;
    var message = document.getElementById('statusMessage');

    if(phoneNumber === "") {
        message.textContent = "Please enter a phone number.";
        message.classList.remove('success');
        message.classList.add('error');
    } else {
        // Example validation (check if number starts with "071")
        if(phoneNumber.startsWith("0743491027")) {
            message.textContent = "This number is NOT banded.";
            message.classList.remove('error');
            message.classList.add('success');
        } else {
            message.textContent = "This number is banded.";
            message.classList.remove('success');
            message.classList.add('error');
        }
    }
});
