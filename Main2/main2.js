google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Primary Emission', 'Percentage'],
    ['Power', 39],
    ['Industry', 46.8],
    ['Transport', 12.4],
    ['Others', 1.8]
  ]);

  var options = {
    titlePosition: "none",
    legend: {position: 'labeled'},
    pieSliceText: "none",
    chartArea: {left: 0, right: 0},
    width: '250'

  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

window.onresize = doALoadOfStuff;

function doALoadOfStuff() {
  drawBasic();
  drawChart();
}