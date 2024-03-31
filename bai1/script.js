/*Bài 6*/
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "12345678") {
        alert("Đăng nhập thành công!");
    } else {
        alert("Tên người dùng hoặc mật khẩu không đúng!");
    }
}

function signUp() {
    alert("Chức năng đăng ký chưa được triển khai!");
}
