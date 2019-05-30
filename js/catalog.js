var content = document.getElementById('content');
  
for (let i = 0; i < data.length; i++) {
    var catalog = document.createElement('div');
var image = document.createElement("img");
var place = document.createElement("p");
var square = document.createElement("p");
var price = document.createElement("p");
var btn = document.createElement('button');
catalog.className = "catalog-content_item";
image.className = 'item-image';
image.src = data[i].imageUrl;
place.innerHTML = `<span class="item-bold">` + `Місце: ` + `<span/>` + data[i].place;
square.innerHTML = '<span class="item-bold">' + "Площа: " + '<span/>' + data[i].square;
price.innerHTML = '<span class="item-bold">' + "Вартість: " + '<span/>' + data[i].price + '$';
btn.className = "item-buy"
btn.textContent = 'Купити'
catalog.appendChild(image);
catalog.appendChild(place);
catalog.appendChild(square);
catalog.appendChild(price);
catalog.appendChild(btn);
content.appendChild(catalog);
}


// // console.log(data)
// var place = document.getElementById('place');
// var square = document.getElementById('square');
// var cost = document.getElementById('const');
// function getPlace () {
//     window.localStorage.setItem("place", place.value);
// var page = localStorage.getItem('place')
// console.log(page)
// var par = document.createElement('p');
// par.innerHTML = page;
// document.body.appendChild(par);
// }
