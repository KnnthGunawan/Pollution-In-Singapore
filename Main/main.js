function choice_1() {
  document.getElementById("1").style.display = "block";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
}

function choice_2() {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "block";
  document.getElementById("3").style.display = "none";

}

function choice_3() {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("info").style.display = "block";
  document.getElementById("button_1").style.display = "none";
  document.getElementById("button_2").style.display = "none";
  setTimeout(function(){
    document.getElementById("info_p2").style.display = "block";
    document.getElementById("info_p3").style.display = "block";
    document.getElementById("icon").style.display = "block";
    document.getElementById("reveal").style.display = "block";
  }, 0) //1800
}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'x');
      data.addColumn('number', 'C02 Emissions');

      data.addRows([
        [1999, 100],   [2000, 107],  [2001, 118],  [2002, 112],  [2003, 104],  [2004, 116],
        [2005, 127],  [2006, 140],  [2007, 151],  [2008, 163],  [2009, 177], [2010, 185],
        [2011, 193],  [2012, 192],  [2013, 191],  [2014, 191],  [2015, 203], [2016, 217],
        [2017, 229],  [2018, 225],  [2019, 217],  [2020, 211]
      ]);

      var options = {
        hAxis: {
          title: 'Year',
          format: '',
        },
        vAxis: {
          title: 'C02 Emissions (Million Tonnes)'
        },
        legend: {
          position: 'none'
        },
        colors: ['#FF4742'],
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

window.onresize = doALoadOfStuff;

function doALoadOfStuff() {
  drawBasic();
  drawChart();
}