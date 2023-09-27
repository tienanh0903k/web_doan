const searchComplete = document.querySelector(".list__results");

console.log(list_Product.length);


  

//Chuyen doi giua cac tab
function switchTab(tab_id) {
  var tab_items = document.getElementsByClassName("tabs__products-nav-item");
  var tab_contents = document.getElementsByClassName("tab-content");
  /* gach chan duoi tab */
  for (var i = 0; i < tab_items.length; i++) {
    if (tab_items[i].getAttribute("data-tab") == tab_id) {
      tab_items[i].classList.add("active");
    } else {
      tab_items[i].classList.remove("active");
    }
    console.log(tab_items[i].getAttribute("data-tab"));
  }
  /* hien thi content tuong ung */
  for (var i = 0; i < tab_contents.length; i++) {
    if (tab_contents[i].getAttribute("id") == tab_id) {
      tab_contents[i].classList.add("active");
    } else {
      tab_contents[i].classList.remove("active");
    }
    console.log(tab_contents[i].getAttribute("id"));
  }
}
