  const list_Product = [
    {
      id: "1",
      ten: "Áo 2 Dây Dáng Xòe",
      image:
        "https://pubcdn.ivymoda.com/files/product/thumab/400/2023/04/12/7bee81a35c0a0df09f1685d0f4f76afb.jpg",
      gia: "150000",
    },
    {
      id: "2",
      ten: "Đầm Thô 1 Lớp Xẻ Eo",
      image:
        "https://pubcdn.ivymoda.com/files/product/thumab/1280/2022/03/14/9c0ab3211d33a203eba6ff92fdfbe90f.JPG",
      gia: "50000",
    },
    {
      id: "3",
      ten: "Đầm Ôm Đính Hoa",
      image:
        "https://pubcdn.ivymoda.com/files/product/thumab/400/2023/03/21/09aed06391dd71cfef2f5fb54376b356.jpg",
      gia: "200000",
    },
    {
      id: "4",
      ten: "Set Lụa Dập Vân",
      image:
        "https://pubcdn.ivymoda.com/files/product/thumab/400/2023/04/17/b0bf3c83cca821e34d1c5a8a41cd2794.jpg",
      gia: "230000",
    },
    {
      id: "5",
      ten: "Đầm Dạ Hội Cổ Yếm",
      image:
        "https://pubcdn.ivymoda.com/files/product/thumab/1280/2023/05/12/8f233f54a0cf50b8a8c591470a4bcb0b.jpg",
      gia: "3450000",
    },
    {
      id: "6",
      ten: "Đầm Dạ Hội Cổ Yếm",
      image:
        "https://pubcdn.ivymoda.com/files/product/thumab/1280/2023/05/12/8f233f54a0cf50b8a8c591470a4bcb0b.jpg",
      gia: "3450000",
    },
    {
      id: "7",
      ten: "Đầm Dạ Hội Cổ Yếm",
      image:
        "https://pubcdn.ivymoda.com/files/product/thumab/1280/2023/05/12/8f233f54a0cf50b8a8c591470a4bcb0b.jpg",
      gia: "3450000",
    },
    {
      id: "8",
      ten: "Đầm Dạ Hội Cổ Yếm",
      image:
        "https://pubcdn.ivymoda.com/files/product/thumab/1280/2023/05/12/8f233f54a0cf50b8a8c591470a4bcb0b.jpg",
      gia: "3450000",
    },
  ];


  var str = "";
  for (let i = 0; i < list_Product.length; i++) {
    
    var obj = JSON.stringify(list_Product[i]);
    str += `
    <div class="col l-3 c-6">
      <div class="product">
        <div class="info-ticket">Best Seller</div>
        <div class="thumb-product">
          <img src="${list_Product[i].image}">
        </div>
        <div class="info-product">
          <div class="list-color">
            <a href="" class="color-picker">
              <img src="https://pubcdn.ivymoda.com/ivy2/images/color/013.png" alt="013" class="lazy">
            </a>
            <div class="favourite">
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
          <h3 class="title-product">
            <a href="https://ivymoda.com/sanpham/chan-vay-xep-ly-cap-cao-phoi-khuy-ms-30m8283-37829">
              <span>${list_Product[i].ten}</span>
            </a>
          </h3>
          <div class="price-product">
            <ins>
              <span>${list_Product[i].gia}</span>
              <span>đ</span>
            </ins>
            <div class="add-to-cart">
              <button onclick=\'addToCart(\`${obj}\`)\'>
                <i class="fa-solid fa-bag-shopping"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  document.querySelector(".tabs__products-content .row").innerHTML = str;

  // Add to cart function
  function addToCart(itemJson) {
    var item = JSON.parse(itemJson);
    /* console.log(item); */
    item.quantity = 1;
    var list;
    if (localStorage.getItem("carts") == null) {
      list = [item];
    } else {
      list = JSON.parse(localStorage.getItem("carts")) || [];
      let ok = true;
      for (let x of list) {
        if (x.id == item.id) {
          x.quantity += 1;
          ok = false;
          break;
        }
      }
      if (ok) {
        list.push(item);
      }
    }
    localStorage.setItem("carts", JSON.stringify(list));
    alert("Đã thêm vào giỏ hàng thành công");
  }

  /* -------card -------*/
  const openCartBtn = document.querySelector(".header__right-list li:last-child");
  const cartDiv = document.querySelector(".cart");
  const body = document.querySelector("body");
  const btnExit = document.querySelector(".cart-header span");

  // Mở giỏ hàng
  openCartBtn.addEventListener("click", function () {
    body.classList.add("active");
  });
  //dong gio hang
  btnExit.addEventListener("click", function () {
    body.classList.remove("active");
  });

  // Load Data vao Card

  var list = JSON.parse(localStorage.getItem("carts")) || [];
  function LoadData() {
    var str = "";
    var n = 0;
    var t = 0;
    for (x of list) {
      t += x.gia * x.quantity;
      str +=
        `<tr>
          <td><i onclick="Xoa(` +
        x.id +
        `)" class="fa fa-times-circle" style="font-size:30px;color:red;cursor: pointer;"></i></td>
          <td><img style="width: 50px; height: 50px;" src="` +
        x.image +
        `"> 
          </td>
          <td>` +
        x.ten +
        `</td>
          <td>` +
        x.gia +
        `</td>
          <td>
          <button onclick="Giam(` +
        x.id +
        `)">-</button>
          <input id="q_` +
        Number(x.id) +
        `" onchange="updateQuantity(` +
        x.id +
        `)" type="text" value="` +
        x.quantity +
        `" style="width: 30px;">
          <button onclick="Tang(` +
        x.id +
        `)">+</button>
          </td>
          <td>` +
        x.gia * x.quantity +
        `</td>
        </tr>`;
    }
    document.getElementById("listCart").innerHTML = str; 
    document.getElementById("spTong").textContent = t;
  }
  LoadData();

  /* hien thi san pham*/
  sum = 0;
  var cartItems = JSON.parse(localStorage.getItem("carts")) || [];
  for (var i = 0; i < cartItems.length; i++) {
    sum += cartItems[i].quantity;
    /* console.log(sum); */
  }
  var quantity = document.querySelector(".header_cart-notice");
  quantity.textContent = sum;




  /* xoa sp */
  function XoaCart() {
    localStorage.setItem("cart", null);
    location.reload();
  }
  function Xoa(id) {
    var index = list.findIndex((x) => x.id == id);
    if (index >= 0) {
      list.splice(index, 1);
    }
    LoadData();
  }
  /* console.log(list); */
  function updateCart() {
    localStorage.setItem("carts", JSON.stringify(list));
    location.reload();
  }


  function Giam(id) {
    var index = list.findIndex((x) => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
      list[index].quantity -= 1;
    }
    updateCart();
    LoadData();
  }
  function updateQuantity(id) {
    var quantity = Number(document.getElementById("q_" + id).value);

    var index = list.findIndex((x) => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
      list[index].quantity = quantity;
    }
    updateCart();
    LoadData();
  }







