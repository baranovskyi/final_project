var nameInput = document.getElementById('guestName');
var emailInput = document.getElementById('guestEmail');
var phoneInput = document.getElementById('guestPhone');
var serviceInput = document.getElementById('chosenService');
var submitBtn = document.getElementById('saveData');
var chosenService;
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
function saveJson() {
    chosenService = {
        "name": nameInput.value,
        "email": emailInput.value,
        "phone": phoneInput.value,
        "service": serviceInput.value
    }
    var data = JSON.stringify(chosenService)
    console.log(chosenService)
    download(data, 'output.json', "application/json");
}
submitBtn.addEventListener('click', saveJson)   


