
let list = document.querySelectorAll('.navigation li');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));
// menu toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active')
    main.classList.toggle('active')

}
// firebase
// mode
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})
// firebase toggle
// Initialize Firebase
// var firebaseConfig = {

//     apiKey: "AIzaSyBV4K5yn5rVfvef4ZSrp6J7RMZr_rtWUiw",
//     authDomain: "dht11-9cfc9.firebaseapp.com",
//     databaseURL: "https://dht11-9cfc9-default-rtdb.firebaseio.com",
//     projectId: "dht11-9cfc9",
//     storageBucket: "dht11-9cfc9.appspot.com",
//     messagingSenderId: "840592959904",
//     appId: "1:840592959904:web:4e3e8670ec1f6db5669cc5",
//     measurementId: "G-2D916HNF5N"
// };
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();
// $(document).ready(function () {

//     database.ref().on("value", function (snap) {
//         Humidity = snap.child("nha_yen_01/sensor/dht_11").val().humidity;
//         Temperature = snap.child("nha_yen_01/sensor/dht_11").val().temperature;
//         Light = snap.child("nha_yen_01/sensor/dht_11").val().light;

//         // đọc thông tin on off đèn cú
//         Music = snap.child("nha_yen_01/device").val().den_chong_cu;
//         // đọc thông tin on off đèn sưởi ấm
//         den_suoi_am = snap.child("nha_yen_01/device").val().den_suoi_am;
//         // đọc thông tin on off quạt
//         loa = snap.child("nha_yen_01/device").val().loa;
//         // đọc thông tin on off phun sương
//         phun_suong = snap.child("nha_yen_01/device").val().phun_suong_trong;
//         // đọc thông tin on off quạt
//         quat = snap.child("nha_yen_01/device").val().quat;
//         //auto
//         // đọc thông tin on off đèn cú
//         auto = snap.child("/").val().Auto;


//         $("#Temperature").html(Temperature)
//         $("#Humidity").html(Humidity)
//         $("#Light").html(Light)
//         //set trạng thái on off các nút bấm
//         if (Music) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact").style.display = "none";
//             document.getElementById("act").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact").style.display = "block";
//             document.getElementById("act").style.display = "none";
//         }
//         // 
//         if (den_suoi_am) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact1").style.display = "none";
//             document.getElementById("act1").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact1").style.display = "block";
//             document.getElementById("act1").style.display = "none";
//         }
//         // 
//         if (phun_suong) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact2").style.display = "none";
//             document.getElementById("act2").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact2").style.display = "block";
//             document.getElementById("act2").style.display = "none";
//         }
//         // 
//         if (quat) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact3").style.display = "none";
//             document.getElementById("act3").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact3").style.display = "block";
//             document.getElementById("act3").style.display = "none";
//         }
//         // 
//         if (loa) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact4").style.display = "none";
//             document.getElementById("act4").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact4").style.display = "block";
//             document.getElementById("act4").style.display = "none";
//         }
//         if (auto) {    // check from the firebase
//             //$(".Light1Status").text("The light is off");
//             document.getElementById("unact5").style.display = "none";
//             document.getElementById("act5").style.display = "block";
//         } else {
//             //$(".Light1Status").text("The light is on");
//             document.getElementById("unact5").style.display = "block";
//             document.getElementById("act5").style.display = "none";
//         }

//     });
//     //nút bấm đèn chống cú
//     $(".toggle-btn").click(function () {
//         var firebaseRef = firebase.database().ref().child("nha_yen_01/device/den_chong_cu");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (Music) {    // post to firebase
//             console.log(Music)
//             data = {
//                 name: "Đèn chống cú",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             Music = false;
//         } else {
//             console.log(Music)
//             data2 = {
//                 name: "Đèn chống cú",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             Music = true;
//         }
//     })


//     //nút đèn sưởi ấm
//     $(".toggle-btn1").click(function () {
//         var firebaseRef = firebase.database().ref().child("nha_yen_01/device/den_suoi_am");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (den_suoi_am) {    // post to firebase
//             console.log(den_suoi_am)
//             data = {
//                 name: "Đèn sưởi ấm",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             den_suoi_am = false;
//         } else {
//             console.log(den_suoi_am)
//             data2 = {
//                 name: "Đèn sưởi ấm",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             den_suoi_am = true;
//         }
//     })
//     //nút phun sương
//     $(".toggle-btn2").click(function () {
//         var firebaseRef = firebase.database().ref().child("nha_yen_01/device/phun_suong_trong");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (phun_suong) {    // post to firebase
//             console.log(phun_suong)
//             data = {
//                 name: "Phun sương",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             phun_suong = false;
//         } else {
//             console.log(phun_suong)
//             data2 = {
//                 name: "Phun sương",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             phun_suong = true;
//         }
//     })

//     //nút quạt
//     $(".toggle-btn3").click(function () {
//         var firebaseRef = firebase.database().ref().child("nha_yen_01/device/quat");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (quat) {    // post to firebase
//             console.log(quat)
//             data = {
//                 name: "Quạt",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             quat = false;
//         } else {
//             console.log(quat)
//             data2 = {
//                 name: "Quạt",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             quat = true;
//         }
//     })

//     //nút loa

//     $(".toggle-btn4").click(function () {
//         var firebaseRef = firebase.database().ref().child("nha_yen_01/device/loa");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (loa) {    // post to firebase
//             console.log(loa)
//             data = {
//                 name: "Loa",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             loa = false;
//         } else {
//             console.log(quat)
//             data2 = {
//                 name: "Loa",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             loa = true;
//         }
//     })

//     //nút auto
//     $(".toggle-btn5").click(function () {
//         var firebaseRef = firebase.database().ref().child("Auto");
//         var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
//         var now = new Date();
//         // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
//         var hours = now.getHours().toString().padStart(2, '0');
//         var minutes = now.getMinutes().toString().padStart(2, '0');
//         var seconds = now.getSeconds().toString().padStart(2, '0');
//         var day = now.getDate().toString().padStart(2, '0');
//         var month = (now.getMonth() + 1).toString().padStart(2, '0');
//         var year = now.getFullYear().toString();
//         var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
//         if (auto) {    // post to firebase
//             console.log(auto)
//             data = {
//                 name: "Chế độ auto",
//                 time: formattedDate,
//                 status: "off",
//             }
//             firebaseRef_status.push(data)
//             firebaseRef.set(false);
//             auto = false;
//         } else {
//             console.log(auto)
//             data2 = {
//                 name: "Chế độ auto",
//                 time: formattedDate,
//                 status: "on",
//             }
//             firebaseRef_status.push(data2)
//             firebaseRef.set(true);
//             auto = true;
//         }
//     })


// });
// var database = firebase.database();

// Get a reference
//  to the "users" node in your database
/// get ảnh về
var storage = firebase.storage();
var storageRef = storage.ref();


// const imagesRef = storage.ref("img");
// Lấy danh sách các ảnh từ Firebase Storage
// storageRef.listAll().then(function (result) {
//     result.items.forEach(function (imageRef) {

//         // Lấy URL của ảnh từ Firebase Storage
//         imageRef.getDownloadURL().then(function (url) {
//             // Tạo một hàng mới trong bảng HTML
//             var newRow = tableBody.insertRow(-1);

//             // Thêm các ô dữ liệu vào hàng mới
//             var idCell = newRow.insertCell(0);
//             const fileName = imageRef.name
//             const dateTime = fileName.slice(0, 15); // Lấy các ký tự từ vị trí 0 đến 14
//             const year = dateTime.slice(0, 4); // Lấy 4 ký tự đầu tiên
//             const month = dateTime.slice(4, 6); // Lấy 2 ký tự tiếp theo
//             const day = dateTime.slice(6, 8); // Lấy 2 ký tự tiếp theo
//             const hour = dateTime.slice(9, 11); // Lấy 2 ký tự từ vị trí thứ 9
//             const minute = dateTime.slice(11, 13); // Lấy 2 ký tự tiếp theo
//             const second = dateTime.slice(13, 15); // Lấy 2 ký tự cuối cùng
//             console.log(`Ngày: ${year}-${month}-${day}, Giờ: ${hour}:${minute}:${second}`);
//             idCell.appendChild(document.createTextNode(`Ngày: ${year}-${month}-${day}, Giờ: ${hour}:${minute}:${second}`));
     

//             var imageCell = newRow.insertCell(1);
//             var imageElement = document.createElement("img");
//             imageElement.src = url;
//             imageCell.appendChild(imageElement);

        
//         });
//     });
// }).catch(function (error) {
//     console.log(error);
// });
// imagesRef.listAll().then(function (result) {
//     // Create an array to store the image references
//     const imageRefs = [];
  
//     result.items.forEach(function (imageRef) {
//       // Get the URL of the image from Firebase Storage
//       imageRef.getDownloadURL().then(function (url) {
//         // Push the image reference along with its URL to the array
//         imageRefs.push({ name: imageRef.name, url: url });
  
//         // Check if all images have been processed
//         if (imageRefs.length === result.items.length) {
//           // Sort the image references by name
//           imageRefs.sort(function (a, b) {
//             return a.name.localeCompare(b.name);
//           });
  
//           // Iterate through the sorted image references
//           imageRefs.forEach(function (image) {
//             // Create an image element and add it to the grid
//             const img = document.createElement('img');
//             img.src = image.url;
//             img.alt = image.name;
  
//             // Add an event listener to the image to show a modal when clicked
//             img.addEventListener('click', function () {
//               // Show a modal with the full-size image and a download link
//               const modal = document.createElement('div');
//               modal.className = 'modal';
//               const modalContent = document.createElement('div');
//               modalContent.className = 'modal-content';
//               const fullSizeImg = document.createElement('img');
//               fullSizeImg.src = image.url;
//               const downloadLink = document.createElement('a');
//               downloadLink.href = image.url;
//               downloadLink.download = image.name;
//               const fileName = image.name;
//               const dateTime = fileName.slice(0, 15); // Lấy các ký tự từ vị trí 0 đến 14
//               const year = dateTime.slice(0, 4); // Lấy 4 ký tự đầu tiên
//               const month = dateTime.slice(4, 6); // Lấy 2 ký tự tiếp theo
//               const day = dateTime.slice(6, 8); // Lấy 2 ký tự tiếp theo
//               const hour = dateTime.slice(9, 11); // Lấy 2 ký tự từ vị trí thứ 9
//               const minute = dateTime.slice(11, 13); // Lấy 2 ký tự tiếp theo
//               const second = dateTime.slice(13, 15); // Lấy 2 ký tự cuối cùng
  
//               downloadLink.textContent = `${hour}h:${minute}p:${second}s Ngày: ${day}/${month}/${year}`;
  
//               modalContent.appendChild(fullSizeImg);
//               modalContent.appendChild(downloadLink);
//               modal.appendChild(modalContent);
//               document.body.appendChild(modal);
  
//               // Add an event listener to the modal to close it when clicked
//               modal.addEventListener('click', function () {
//                 document.body.removeChild(modal);
//               });
//             });
  
//             // Add the image to the beginning of the grid
//             const imageGrid = document.getElementById('image-grid');
//             imageGrid.insertBefore(img, imageGrid.firstChild);
//           });
//         }
//       });
//     });
//   }).catch(function (error) {
//     console.log(error);
//   });

var imagesRef = database.ref("nha_yen_01/Camera");
        console.log(imagesRef)
        // Lắng nghe sự kiện khi có dữ liệu thay đổi trong Firebase Realtime Database
        imagesRef.on("value", function (snapshot) {
            // Xóa nội dung cũ trong grid
            var imageGrid = document.getElementById("image-grid");
            imageGrid.innerHTML = "";


            // Duyệt qua danh sách hình ảnh và hiển thị chúng trên grid
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();

         

                var imageContainer = document.createElement("div");
                imageContainer.classList.add("image-container");

                var imageElement = document.createElement("img");
                imageElement.src = childData.url;
                imageContainer.appendChild(imageElement);

                var fileNameElement = document.createElement("div");
                fileNameElement.classList.add("file-name");
                fileNameElement.innerText = childData.time;
                imageContainer.appendChild(fileNameElement);



                // Thêm sự kiện click vào hình ảnh để mở modal
                imageElement.addEventListener("click", function () {
                    var modal = document.getElementById("image-modal");
                    var modalImage = document.getElementById("modal-image");
                    modalImage.src = childData.url;


                    modal.style.display = "block";
                });

                imageGrid.prepend(imageContainer);
            });
        });
        // Đóng modal khi người dùng click vào nút đóng
        var closeButton = document.getElementsByClassName("close")[0];
        closeButton.addEventListener("click", function () {
            var modal = document.getElementById("image-modal");
            modal.style.display = "none";
        });