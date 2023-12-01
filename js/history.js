
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

var currentPage = 1;
var perPage = 5;
var totalPages = 1;

var employeeRef = database.ref('nha_yen_01/history_data');
employeeRef.on('value', function (snapshot) {
    var employees = snapshot.val();

    // Tính toán số trang dựa trên số lượng nhân viên
    totalPages = Math.ceil(Object.keys(employees).length / perPage);
    var keys = Object.keys(employees).reverse()
    // Tính toán vị trí bắt đầu và kết thúc của danh sách nhân viên hiển thị trên trang hiện tại
    var startIndex = (currentPage - 1) * perPage;
    var endIndex = startIndex + perPage;

    // Hiển thị danh sách nhân viên
    var tableRows = '';
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (startIndex <= 0) {
            // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
            if (employees[key].temperature >= 27 || employees[key].humidity > 80) {
                tableRows += '<tr>' +
                    '<td>' + employees[key].time + '</td>' +
                    '<td>' + employees[key].temperature + '</td>' +
                    '<td>' + employees[key].humidity + '</td>' +
                    '<td>' + employees[key].light + '</td>' +
                    '<td><span class="status off">' + "Warning" + '</span></td>'
                '</tr>';
            } else {
                tableRows += '<tr>' +
                    '<td>' + employees[key].time + '</td>' +
                    '<td>' + employees[key].temperature + '</td>' +
                    '<td>' + employees[key].humidity + '</td>' +
                    '<td>' + employees[key].light + '</td>' +
                    '<td><span class="status delivered">' + "good" + '</span></td>'
                '</tr>';
            }

        }
        startIndex--;

        if (endIndex <= 0) {
            // Đã đến vị trí kết thúc, dừng hiển thị nhân viên
            break;
        }
        endIndex--;
    }
    document.getElementById('employee-list').innerHTML = tableRows;
});

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderEmployees();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderEmployees();
    }
}

function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderEmployees();
    }
}
function renderEmployees() {
    employeeRef.once('value', function (snapshot) {
        var employees = snapshot.val();
        // Tính toán số trang dựa trên số lượng nhân viên
        totalPages = Math.ceil(Object.keys(employees).length / perPage);
        var keys = Object.keys(employees).reverse()
        // Tính toán vị trí bắt đầu và kết thúc của danh sách nhân viên hiển thị trên trang hiện tại
        var startIndex = (currentPage - 1) * perPage;
        var endIndex = startIndex + perPage;
        var tableRows = '';
        // Hiển thị danh sách nhân viên

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            function a() {
                var departmentSelect = document.querySelector('#department');
                departmentSelect.addEventListener('change', function () {
                    var department = departmentSelect.value;
                    console.log(department)
                    return departmentSelect.value;

                });
            }
            var department = a();
            if (department = "Time") {
                if (employees[key].time.toLowerCase().indexOf(document.getElementById('search-input').value.toLowerCase()) != -1) {
                    if (startIndex <= 0) {
                        // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
                        if (employees[key].temperature >= 27 || employees[key].humidity > 80) {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status off">' + "Warning" + '</span></td>'
                            '</tr>';
                        } else {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status delivered">' + "good" + '</span></td>'
                            '</tr>';
                        }
                    }
                    startIndex--;

                    if (endIndex <= 0) {
                        // Đã đến vị trí kết thúc, dừng hiển thị nhân viên
                        break;
                    }
                    endIndex--;

                }
            }
            if (department = "temperature") {
                if (employees[key].temperature == document.getElementById('search-input').value) {
                    if (startIndex <= 0) {
                        // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
                        if (employees[key].temperature >= 27 || employees[key].humidity > 80) {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status off">' + "Warning" + '</span></td>'
                            '</tr>';
                        } else {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status delivered">' + "good" + '</span></td>'
                            '</tr>';
                        }
                    }
                    startIndex--;

                    if (endIndex <= 0) {
                        // Đã đến vị trí kết thúc, dừng hiển thị nhân viên
                        break;
                    }
                    endIndex--;

                }
            }
            if (department = "humiidy") {
                if (employees[key].humidity == document.getElementById('search-input').value) {
                    if (startIndex <= 0) {
                        // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
                        if (employees[key].temperature >= 27 || employees[key].humidity > 80) {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status off">' + "Warning" + '</span></td>'
                            '</tr>';
                        } else {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status delivered">' + "good" + '</span></td>'
                            '</tr>';
                        }
                    }
                    startIndex--;

                    if (endIndex <= 0) {
                        // Đã đến vị trí kết thúc, dừng hiển thị nhân viên
                        break;
                    }
                    endIndex--;

                }
            }

            if (department = "light") {
                if (employees[key].light == document.getElementById('search-input').value) {
                    if (startIndex <= 0) {
                        // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
                        if (employees[key].temperature >= 27 || employees[key].humidity > 80) {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status off">' + "Warning" + '</span></td>'
                            '</tr>';
                        } else {
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].temperature + '</td>' +
                                '<td>' + employees[key].humidity + '</td>' +
                                '<td>' + employees[key].light + '</td>' +
                                '<td><span class="status delivered">' + "good" + '</span></td>'
                            '</tr>';
                        }
                    }
                    startIndex--;

                    if (endIndex <= 0) {
                        // Đã đến vị trí kết thúc, dừng hiển thị nhân viên
                        break;
                    }
                    endIndex--;

                }
            }

        }

        document.getElementById('employee-list').innerHTML = tableRows;
    });
}

document.getElementById('search-input').addEventListener('input', function () {
    currentPage = 1;

    renderEmployees();
});

