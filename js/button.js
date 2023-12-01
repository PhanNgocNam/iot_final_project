$(document).ready(function () {

    database.ref().on("value", function (snap) {
      

        // đọc thông tin on off đèn cú
        Music = snap.child("nha_yen_01/device").val().den_chong_cu;
        // đọc thông tin on off đèn sưởi ấm
        den_suoi_am = snap.child("nha_yen_01/device").val().den_suoi_am;
        // đọc thông tin on off quạt
        loa = snap.child("nha_yen_01/device").val().loa;
        // đọc thông tin on off phun sương
        phun_suong = snap.child("nha_yen_01/device").val().phun_suong_trong;
        // đọc thông tin on off quạt
        quat = snap.child("nha_yen_01/device").val().quat;
        //auto
        // đọc thông tin on off đèn cú
        auto = snap.child("/").val().Auto;
     
        //set trạng thái on off các nút bấm
        if (Music) {    // check from the firebase
            //$(".Light1Status").text("The light is off");
            document.getElementById("unact").style.display = "none";
            document.getElementById("act").style.display = "block";
        } else {
            //$(".Light1Status").text("The light is on");
            document.getElementById("unact").style.display = "block";
            document.getElementById("act").style.display = "none";
        }
        // 
        if (den_suoi_am) {    // check from the firebase
            //$(".Light1Status").text("The light is off");
            document.getElementById("unact1").style.display = "none";
            document.getElementById("act1").style.display = "block";
        } else {
            //$(".Light1Status").text("The light is on");
            document.getElementById("unact1").style.display = "block";
            document.getElementById("act1").style.display = "none";
        }
         // 
         if (phun_suong) {    // check from the firebase
            //$(".Light1Status").text("The light is off");
            document.getElementById("unact2").style.display = "none";
            document.getElementById("act2").style.display = "block";
        } else {
            //$(".Light1Status").text("The light is on");
            document.getElementById("unact2").style.display = "block";
            document.getElementById("act2").style.display = "none";
        }
         // 
         if (quat) {    // check from the firebase
            //$(".Light1Status").text("The light is off");
            document.getElementById("unact3").style.display = "none";
            document.getElementById("act3").style.display = "block";
        } else {
            //$(".Light1Status").text("The light is on");
            document.getElementById("unact3").style.display = "block";
            document.getElementById("act3").style.display = "none";
        }
         // 
         if (loa) {    // check from the firebase
            //$(".Light1Status").text("The light is off");
            document.getElementById("unact4").style.display = "none";
            document.getElementById("act4").style.display = "block";
        } else {
            //$(".Light1Status").text("The light is on");
            document.getElementById("unact4").style.display = "block";
            document.getElementById("act4").style.display = "none";
        }
        if (auto) {    // check from the firebase
            //$(".Light1Status").text("The light is off");
            document.getElementById("unact5").style.display = "none";
            document.getElementById("act5").style.display = "block";
        } else {
            //$(".Light1Status").text("The light is on");
            document.getElementById("unact5").style.display = "block";
            document.getElementById("act5").style.display = "none";
        }

    });
    //nút bấm đèn chống cú
    $(".toggle-btn").click(function () {
        var firebaseRef = firebase.database().ref().child("nha_yen_01/device/den_chong_cu");
        var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
        var now = new Date();
        // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        var month = (now.getMonth() + 1).toString().padStart(2, '0');
        var year = now.getFullYear().toString();
        var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
        if (Music) {    // post to firebase
            data = {
                name: "Đèn chống cú",
                time: formattedDate,
                status: "off",
            }
            firebaseRef_status.push(data)
            firebaseRef.set(false);
            Music = false;
        } else {
            data2 = {
                name: "Đèn chống cú",
                time: formattedDate,
                status: "on",
            }
            firebaseRef_status.push(data2)
            firebaseRef.set(true);
            Music = true;
        }
    })


    //nút đèn sưởi ấm
    $(".toggle-btn1").click(function () {
        var firebaseRef = firebase.database().ref().child("nha_yen_01/device/den_suoi_am");
        var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
        var now = new Date();
        // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        var month = (now.getMonth() + 1).toString().padStart(2, '0');
        var year = now.getFullYear().toString();
        var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
        if (den_suoi_am) {    // post to firebase
            console.log(den_suoi_am)
            data = {
                name: "Đèn sưởi ấm",
                time: formattedDate,
                status: "off",
            }
            firebaseRef_status.push(data)
            firebaseRef.set(false);
            den_suoi_am = false;
        } else {
            console.log(den_suoi_am)
            data2 = {
                name: "Đèn sưởi ấm",
                time: formattedDate,
                status: "on",
            }
            firebaseRef_status.push(data2)
            firebaseRef.set(true);
            den_suoi_am = true;
        }
    })
    //nút phun sương
    $(".toggle-btn2").click(function () {
        var firebaseRef = firebase.database().ref().child("nha_yen_01/device/phun_suong_trong");
        var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
        var now = new Date();
        // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        var month = (now.getMonth() + 1).toString().padStart(2, '0');
        var year = now.getFullYear().toString();
        var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
        if (phun_suong) {    // post to firebase
           
            data = {
                name: "Phun sương",
                time: formattedDate,
                status: "off",
            }
            firebaseRef_status.push(data)
            firebaseRef.set(false);
            phun_suong = false;
        } else {
            
            data2 = {
                name: "Phun sương",
                time: formattedDate,
                status: "on",
            }
            firebaseRef_status.push(data2)
            firebaseRef.set(true);
            phun_suong = true;
        }
    })
   
    //nút quạt
    $(".toggle-btn3").click(function () {
        var firebaseRef = firebase.database().ref().child("nha_yen_01/device/quat");
        var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
        var now = new Date();
        // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        var month = (now.getMonth() + 1).toString().padStart(2, '0');
        var year = now.getFullYear().toString();
        var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
        if (quat) {    // post to firebase
           
            data = {
                name: "Quạt",
                time: formattedDate,
                status: "off",
            }
            firebaseRef_status.push(data)
            firebaseRef.set(false);
            quat = false;
        } else {
           
            data2 = {
                name: "Quạt",
                time: formattedDate,
                status: "on",
            }
            firebaseRef_status.push(data2)
            firebaseRef.set(true);
            quat = true;
        }
    })
   
    //nút loa

    $(".toggle-btn4").click(function () {
        var firebaseRef = firebase.database().ref().child("nha_yen_01/device/loa");
        var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
        var now = new Date();
        // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        var month = (now.getMonth() + 1).toString().padStart(2, '0');
        var year = now.getFullYear().toString();
        var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
        if (loa) {    // post to firebase
           
            data = {
                name: "Loa",
                time: formattedDate,
                status: "off",
            }
            firebaseRef_status.push(data)
            firebaseRef.set(false);
            loa = false;
        } else {
           
            data2 = {
                name: "Loa",
                time: formattedDate,
                status: "on",
            }
            firebaseRef_status.push(data2)
            firebaseRef.set(true);
            loa = true;
        }
    })
   
    //nút auto
    $(".toggle-btn5").click(function () {
        var firebaseRef = firebase.database().ref().child("Auto");
        var firebaseRef_status = firebase.database().ref().child("nha_yen_01/history_device");
        var now = new Date();
        // now.setUTCHours(now.getUTCHours() + 7); // Thêm 7 giờ để chuyển múi giờ về GMT+7
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        var month = (now.getMonth() + 1).toString().padStart(2, '0');
        var year = now.getFullYear().toString();
        var formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
        if (auto) {    // post to firebase
          
            data = {
                name: "Chế độ auto",
                time: formattedDate,
                status: "off",
            }
            firebaseRef_status.push(data)
            firebaseRef.set(false);
            auto = false;
        } else {
          
            data2 = {
                name: "Chế độ auto",
                time: formattedDate,
                status: "on",
            }
            firebaseRef_status.push(data2)
            firebaseRef.set(true);
            auto= true;
        }
    })
   
    
});