console.log("Hello World!");
alert("Đã kết nối thành công!");


console.log("Hello World!");
alert("Đã kết nối thành công!");

let tong = 0;

function chonMon(ten, size, gia){
    tong += gia;

    document.getElementById("tong").innerText = tong.toLocaleString();

    alert(
        "Đã chọn: " + ten +
        "\nSize: " + size +
        "\nGiá: " + gia.toLocaleString() + "đ"
    );
}

function datHang(){
    alert("Đặt hàng thành công!");

    tong = 0;
    document.getElementById("tong").innerText = tong;
}