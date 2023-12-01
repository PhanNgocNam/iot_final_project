
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
///
var currentPage = 1;
var perPage = 5;
var totalPages = 1;


var employeeRef = database.ref('nha_yen_01/history_device');
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
            if(employees[key].status=='on'){
            tableRows += '<tr>' +
                '<td>' + employees[key].time + '</td>' +
                '<td>' + employees[key].name + '</td>' +
                '<td><span class="status delivered">' + employees[key].status + '</span></td>'
            '</tr>';
            }
            if(employees[key].status=='off'){
                tableRows += '<tr>' +
                    '<td>' + employees[key].time + '</td>' +
                    '<td>' + employees[key].name + '</td>' +
                    '<td><span class="status off">' + employees[key].status + '</span></td>'
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
            if (employees[key].name.toLowerCase().indexOf(document.getElementById('search-input').value.toLowerCase()) != -1) {
                if (startIndex <= 0) {
                    // Đã đến vị trí bắt đầu, bắt đầu hiển thị nhân viên
                    if(employees[key].status=='on'){
                        tableRows += '<tr>' +
                            '<td>' + employees[key].time + '</td>' +
                            '<td>' + employees[key].name + '</td>' +
                            '<td><span class="status delivered">' + employees[key].status + '</span></td>'
                        '</tr>';
                        }
                        if(employees[key].status=='off'){
                            tableRows += '<tr>' +
                                '<td>' + employees[key].time + '</td>' +
                                '<td>' + employees[key].name + '</td>' +
                                '<td><span class="status off">' + employees[key].status + '</span></td>'
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



        document.getElementById('employee-list').innerHTML = tableRows;
    });
}

document.getElementById('search-input').addEventListener('input', function () {
    currentPage = 1;
    renderEmployees();
});

function exportToExcel() {
    // Get the table HTML element
    var table = document.getElementsByTagName("table")[0];

    // Convert the table to a worksheet object
    var worksheet = XLSX.utils.table_to_sheet(table);

    // Create a new workbook with a worksheet
    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Convert the workbook to an Excel file and download
    var filename = "History_Devices.xlsx";
    XLSX.writeFile(workbook, filename);
}

// biểu đồ
var temperatureRef= database.ref('nha_yen_01/history_data');
var temperatureRef2= database.ref('nha_yen_01/history_data');
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Nhiệt độ (°C)',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 5,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
temperatureRef.on('child_added', function(data) {
    var temperatureData = data.val();

  
    var timestamp = temperatureData.time
    var timeA = timestamp.slice(0, 8);

    myChart.data.labels.push(timeA);
    myChart.data.datasets[0].data.push(temperatureData.temperature);
  
  
  
    if (myChart.data.labels.length > 10) {
      myChart.data.labels.shift();
      myChart.data.datasets[0].data.shift();
    }
    myChart.update();
  });


var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Độ ẩm(%)',
      data: [],
      backgroundColor: 'rgba(30, 144, 255, 1)',
      borderColor: 'rgba(30, 144, 255, 1)',
      borderWidth: 5,
      fill: true,
      backgroundColor: 'rgba(30, 144, 255, 0.2)'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
temperatureRef.on('child_added', function(data) {
 
    var humiditydata = data.val()
    var timestamp =  humiditydata.time
    var timeA = timestamp.slice(0, 8);

    myChart2.data.labels.push(timeA);
    myChart2.data.datasets[0].data.push(humiditydata.humidity);
  
  
  
    if (myChart2.data.labels.length > 10) {
      myChart2.data.labels.shift();
      myChart2.data.datasets[0].data.shift();
    }
    myChart2.update();
  });