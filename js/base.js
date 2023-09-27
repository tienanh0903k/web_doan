function User(username, pass, ho, ten, email, products, donhang) {
    this.ho = ho || "";
    this.ten = ten || "";
    this.email = email || "";
    this.username = username;
    this.pass = pass;

    this.donhang = donhang || [];
    this.products = products || [];

}


// get danh sach nguoi dung
function getListUser() {
    var data = JSON.parse(localStorage.getItem('ListUser')) || [];
    var list = [];
    for (var d in data) {
        l.push(data[d]);
    }
    return l;
}
// set danh sach nguoi dung
function setListUser(l) {
    window.localStorage.setItem("ListUser", JSON.stringify(l));
}



    









// Hàm get set cho người dùng hiện tại đã đăng nhập
function getCurrentUser() {
    return JSON.parse(window.localStorage.getItem('CurrentUser')); // Lấy dữ liệu từ localstorage
}

function setCurrentUser(u) {
    window.localStorage.setItem('CurrentUser', JSON.stringify(u));
}

// Hàm get set cho danh sách người dùng
function getListUser() {
    var data = JSON.parse(window.localStorage.getItem('ListUser')) || []
    var l = [];
    for (var d of data) {
        l.push(d);
    }
    return l;
}

function setListUser(l) {
    window.localStorage.setItem('ListUser', JSON.stringify(l));
}
