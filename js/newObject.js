var placeInput = document.getElementById('place');
var squareInput = document.getElementById('square');
var costInput = document.getElementById('cost');
var objectImage = document.getElementById('objectImage');
var contentSection = document.getElementById('content');
var submit = document.getElementById('submit');
var reader = new FileReader();
var key = +new Date();

function newObject (imageUrl, place, square, cost) {
    this.image = imageUrl;
    this.place = place;
    this.square = square;
    this.cost = cost;
}

function doThis () {

    reader.onloadend = function() {
    imageUrl = reader.result;
    place = placeInput.value;
    square = squareInput.value + " метрів";
    cost = costInput.value;
    
    var houseObject = new newObject (imageUrl, place, square, cost);
    localStorage.setItem(key, JSON.stringify(houseObject));
    alert("Новий об'єкт додано");
    location.reload();
    }
        reader.readAsDataURL(objectImage.files[0]);
}    
for (i = 0; i < localStorage.length; i++) {
var item = localStorage.getItem(localStorage.key(i));
            item = JSON.parse(item);
    var catalogBlock = document.createElement('div');
    catalogBlock.className = "catalog-content";
    var img = document.createElement('img');
    img.className = "item-image";
    var place =  document.createElement('p');
    var square =  document.createElement('p');
    var cost =  document.createElement('p');
    var button = document.createElement('button');
    button.className = "item-buy";
    button.textContent = "Купити";
            img.src =   item['image'];
            place.innerHTML = '<span class="item-bold">' + "Місце: " + "</span>" + item['place'];
            catalogBlock.setAttribute("data-parent", item['place']);
            catalogBlock.setAttribute("data-num", i + 2);
            catalogBlock.setAttribute("data-cost", item['cost'])
            square.innerHTML = '<span class="item-bold">' + "Площа: " + "</span>" + item['square']; 
            cost.innerHTML = '<span class="item-bold">' + "Вартість: " + "</span>" + item['cost'] + '$';
            catalogBlock.appendChild(img);
            catalogBlock.appendChild(place);
            catalogBlock.appendChild(square)
            catalogBlock.appendChild(cost);
            catalogBlock.appendChild(button);
            contentSection.appendChild(catalogBlock)
    }

submit.addEventListener("click", doThis);









