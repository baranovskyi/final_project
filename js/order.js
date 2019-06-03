var guestName = document.getElementById('guestName');
var guestEmail = document.getElementById('guestEmail');
var guestPhone = document.getElementById('guestPhone');
var chosenService = document.getElementById('chosenService');

function OrderedService (guestName, guestEmail, guestPhone, chosenService) {
    this.guestName = guestName;
    this.guestEmail = guestEmail;
    this.guestPhone = guestPhone
    this.chosenService = chosenService;
}
var data;
function service () {
    guestName = guestName.value;
    guestEmail = guestEmail.value;
    guestPhone = guestPhone.value;
    var s = new OrderedService  (guestName, guestEmail, guestPhone, chosenService)
    data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(service));
    $('<a href="data:' + data + '" download="data.json" style="color: #fff; text-decoration: none;">Відправити</a>').appendTo('#saveOrder');
}



    