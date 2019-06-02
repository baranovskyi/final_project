var catalogBlocks = document.getElementsByClassName('catalog-content');
var checkboxes = document.getElementsByClassName("checkBox");
var catalogBlocks = document.getElementsByClassName('catalog-content');
var countBlocks = []
for (let j = 0; j < catalogBlocks.length; j++) {
    countBlocks.push(catalogBlocks[j]);
}
var count = countBlocks.length; 
var cnt = 10; 
var cnt_page = Math.ceil(count / cnt); 



var paginator = document.querySelector(".paginator");
var page = "";
    for (var i = 0; i < cnt_page; i++) {
        page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
      }
      paginator.innerHTML = page;
      
       var main_page = document.getElementById("page1");
      main_page.classList.add("paginator_active");


var div_num = document.querySelectorAll(".catalog-content");
for (var i = 0; i < div_num.length; i++) {
  if (i < cnt) {
    div_num[i].style.display = "block";
  }
}




function pagination(event) {
  var e = event || window.event;
  var target = e.target;
  var id = target.id;
  
  if (target.tagName.toLowerCase() != "span") return;
  
  var num_ = id.substr(4);
  var data_page = +target.dataset.page;
  main_page.classList.remove("paginator_active");
  main_page = document.getElementById(id);
  main_page.classList.add("paginator_active");

  var j = 0;
  for (var i = 0; i < div_num.length; i++) {
    var data_num = div_num[i].dataset.num;
    if (data_num <= data_page || data_num >= data_page)
      div_num[i].style.display = "none";

  }
  for (var i = data_page; i < div_num.length; i++) {
    if (j >= cnt) break;
    div_num[i].style.display = "block";
    j++;
  }
}
document.getElementById('changeCheckbox').addEventListener("change", filter)

function filter () {
    var checkArray = [];
    var filterCountBlocks = [];
    var count;
var cntFilter = 10; 
var cntPage;



var pageFilter = "";
    
    for (let k = 0; k < checkboxes.length; k++){
        if (checkboxes[k].checked) {
            checkArray.push(checkboxes[k].value);
            
        }
    }
    for (let j = 0; j < catalogBlocks.length; j++) {
    if (checkArray.includes(catalogBlocks[j].dataset.parent)) {
        filterCountBlocks.push(catalogBlocks[j]);
        count = filterCountBlocks.length;
        cntPage = Math.ceil(count / cntFilter)
        catalogBlocks[j].style.display = "block";
    } 
    else {
        catalogBlocks[j].style.display = "none";
    }
}
for (var i = 0; i < cntPage; i++) {
    pageFilter += "<span data-page=" + i * cntFilter + "  id=\"pageFilter" + (i + 1) + "\">" + (i + 1) + "</span>";
  }
  paginator.innerHTML = pageFilter;
    if (checkArray.length < 1) {
        paginator.innerHTML = page;
        main_page = document.getElementById("page1");
        main_page.classList.add("paginator_active");
        for (var i = 0; i < div_num.length; i++) {
            if (i < cnt) {
              div_num[i].style.display = "block";
            }
  }
}
}
