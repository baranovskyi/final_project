var placeInput = document.getElementById('place');
var squareInput = document.getElementById('square');
var costInput = document.getElementById('cost');
var objectImage = document.getElementById('objectImage');
var contentSection = document.getElementById('content');
var submit = document.getElementById('submit');
var reader = new FileReader();
var key = +new Date();
var catalogBlock;
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
    cost = costInput.value + "$";
    
    var houseObject = new newObject (imageUrl, place, square, cost);
  
    
    localStorage.setItem(key, JSON.stringify(houseObject));
    }
        reader.readAsDataURL(objectImage.files[0]);
}    
for (i = 0; i < localStorage.length; i++) {
var item = localStorage.getItem(localStorage.key(i));
            item = JSON.parse(item);
    catalogBlock = document.createElement('div');
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
            square.innerHTML = '<span class="item-bold">' + "Площа: " + "</span>" + item['square']; 
            cost.innerHTML = '<span class="item-bold">' + "Вартість: " + "</span>" + item['cost'];
            catalogBlock.appendChild(img);
            catalogBlock.appendChild(place);
            catalogBlock.appendChild(square)
            catalogBlock.appendChild(cost);
            catalogBlock.appendChild(button);
            contentSection.appendChild(catalogBlock)
    }

submit.addEventListener("click", doThis);

var catalogBlocks = document.getElementsByClassName('catalog-content');
var checkboxes = document.getElementsByClassName("checkBox");
var qa = [];
for (let i = 0; i < catalogBlocks.length; i++) {
    qa.push(catalogBlocks[i].dataset.parent)
}
console.log(qa)






function doThiss (event) {
    var checkArray = [];
    for (let i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked) {
            checkArray.push(checkboxes[i].value)
            
        }
    }
    console.log(checkArray)
    for (let j = 0; j < catalogBlocks.length; j++) {
    if (!checkArray.includes(catalogBlocks[j].dataset.parent)) {
        catalogBlocks[j].style.display = "none";
        console.log(catalogBlocks[j].dataset.parent)
    } else {
        catalogBlocks[j].style.display = "block";
    }
    if (checkArray.length < 1) {
        catalogBlocks[j].style.display = "block";
    }
        // } else {
        //     catalogBlocks[j].style.display = "none";
        //     console.log('none')
        // }
        // if (event.target.checked != true) {
        //     catalogBlocks[j].style.display = "block";
        // }
    }
}


// function as () {
//     for (let i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             console.log("chek")
//             for (let j = 0; j < catalogBlocks.length; j++) {
//                 if (checkboxes[i].value != catalogBlocks[j].dataset.parent) {
//                     catalogBlocks[j].style.display = "none"
//                 }   else {
//                 catalogBlocks[j].style.display = "block"
//                 console.log('none')
//             }
//         }
//     } 
//   }
// }
  

//     for (let i = 0; i < catalogBlocks.length; i++) {
//         for (let j = 0; j < checkboxes.length; j++) {
//             if (checkboxes[j].value == catalogBlocks[i].dataset.parent) {
//                 catalogBlocks[i].style.display = "block";
//                 console.log('block')
//             } else {
//                 catalogBlocks[i].style.display = "none";
//                 console.log('none')
//             }
//         }
    
//         // var item = ;
//         console.log(catalogBlocks[i].dataset.parent)
//         // console.log(catalogBlocks.dataset.parent)
//     }







// for(var i = 0; i < inputs.length; i++) {
//     if(inputs[i].type == "checkbox") {
//         inputs[i].checked = true; 
//     }  
// }




    // function encodeImageFileAsURL(element) {
    //     var file = element.files[0];
    //     var reader = new FileReader();
    //     reader.onloadend = function() {
    //      localStorage.setItem("omg", reader.result)
    //        img.src =   localStorage.getItem("omg")

    //     }
    //     reader.readAsDataURL(file);
    //   }
      