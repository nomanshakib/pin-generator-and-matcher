
function generatePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
};

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
};

document.getElementById("generate-pin-btn").addEventListener('click', function () {
    
    const pin = getPin();
    
    const displayPinField = document.getElementById("display-pin-field");
    displayPinField.value = pin;

});

document.getElementById("calculator").addEventListener('click', function (event) {
    const typeNumber = event.target.innerText;
    const typeNumberField = document.getElementById("type-number-field");
    const previousTypeNumber = typeNumberField.value;
    const newTypeNumber = previousTypeNumber + typeNumber;
    
    if (isNaN(typeNumber)) {
        if(typeNumber === 'C'){
            typeNumberField.value = '';
        }
        else if (typeNumber === '<') {
            const removeNumber = previousTypeNumber.split('');
            removeNumber.pop();
            const remainingNumber = removeNumber.join('');
            typeNumberField.value = remainingNumber;
        }
    }
    else {
        typeNumberField.value = newTypeNumber;
    }
    
    
});

document.getElementById("pin-submit-btn").addEventListener('click', function () {
    
    const displayPinField = document.getElementById("display-pin-field");
    const displayPin = displayPinField.value;

    const typeNumberField = document.getElementById("type-number-field");
    const typeNumber = typeNumberField.value;

    const pinSuccessMassage = document.getElementById("pin-success");
    const pinUnsuccessMassage = document.getElementById("pin-unsuccess");

    if (typeNumber === displayPin) {

        pinSuccessMassage.style.display = 'block';
        pinUnsuccessMassage.style.display = "none";
    }
    else {
        
        pinUnsuccessMassage.style.display = 'block';
        pinSuccessMassage.style.display = "none";
    }

});