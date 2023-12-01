var firebaseConfig = {

    apiKey: "AIzaSyBV4K5yn5rVfvef4ZSrp6J7RMZr_rtWUiw",
    authDomain: "dht11-9cfc9.firebaseapp.com",
    databaseURL: "https://dht11-9cfc9-default-rtdb.firebaseio.com",
    projectId: "dht11-9cfc9",
    storageBucket: "dht11-9cfc9.appspot.com",
    messagingSenderId: "840592959904",
    appId: "1:840592959904:web:4e3e8670ec1f6db5669cc5",
    measurementId: "G-2D916HNF5N"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
database.ref().on("value", function (snap) {
    Humidity = snap.child("nha_yen_01/sensor/dht_11").val().humidity;
    Temperature = snap.child("nha_yen_01/sensor/dht_11").val().temperature;
    Light = snap.child("nha_yen_01/sensor/dht_11").val().light;

    $("#Temperature").html(Temperature)
    $("#Humidity").html(Humidity)
    $("#Light").html(Light)

    if (Temperature > 32) {
        // Hiển thị thông báo "toast"
        Toastify({
            text: 'Nhiệt độ quá  cao :' + Temperature + "!!!",
            duration: 5000, // Thời gian hiển thị của thông báo (5 giây)
            close: true, // Cho phép đóng thông báo
            gravity: 'top', // Vị trí hiển thị của thông báo (top, bottom, left, right)
            backgroundColor: '#ff0000', // Màu nền của thông báo
            stopOnFocus: true, // Dừng hiển thị thông báo khi trang web được focus
        }).showToast();

    }
    if (Temperature < 22) {
        // Hiển thị thông báo "toast"
        Toastify({
            text: 'Nhiệt độ quá thấp :' + Temperature + "!!!",
            duration: 5000, // Thời gian hiển thị của thông báo (5 giây)
            close: true, // Cho phép đóng thông báo
            gravity: 'top', // Vị trí hiển thị của thông báo (top, bottom, left, right)
            backgroundColor: '#ff0000', // Màu nền của thông báo
            stopOnFocus: true, // Dừng hiển thị thông báo khi trang web được focus
        }).showToast();

    }
    if (Humidity < 40) {
        // Hiển thị thông báo "toast"
        Toastify({
            text: 'Độ Ẩm  quá  thấp :' + Humidity + "!!!",
            duration: 5000, // Thời gian hiển thị của thông báo (5 giây)
            close: true, // Cho phép đóng thông báo
            gravity: 'top', // Vị trí hiển thị của thông báo (top, bottom, left, right)
            backgroundColor: '#ff0000', // Màu nền của thông báo
            stopOnFocus: true, // Dừng hiển thị thông báo khi trang web được focus
        }).showToast();

    }
    if (Temperature > 70) {
        // Hiển thị thông báo "toast"
        Toastify({
            text: 'Độ Ẩm  quá cao :' + Humidity + "!!!",
            duration: 5000, // Thời gian hiển thị của thông báo (5 giây)
            close: true, // Cho phép đóng thông báo
            gravity: 'top', // Vị trí hiển thị của thông báo (top, bottom, left, right)
            backgroundColor: '#ff0000', // Màu nền của thông báo
            stopOnFocus: true, // Dừng hiển thị thông báo khi trang web được focus
        }).showToast();

    }

});

const auth = firebase.auth();

// Lấy tham chiếu tới button đăng nhập và đăng xuất
const logoutButton = document.getElementById('logoutButton');

// Thêm xử lý sự kiện click vào button đăng nhập

// Thêm xử lý sự kiện click vào button đăng xuất
logoutButton.addEventListener('click', () => {
    // Đăng xuất khỏi Firebase Authentication
    auth.signOut()
        .then(() => {
            console.log('Đăng xuất thành công!');
            window.location.href = 'login.html';
        })
        .catch((error) => {
            console.error(error);
            alert('Đăng xuất thất bại!');
        });
});
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // Nếu đã đăng nhập
        console.log("Người dùng đã đăng nhập:", user.email);
    } else {
        // Nếu chưa đăng nhập
        console.log("Người dùng chưa đăng nhập");
        window.location.href = "login.html"; // Chuyển hướng đến trang đăng nhập
    }
});