function toggleText() {
    var text = document.getElementById("question");
    text.style.display = "block";
    setTimeout(function(){
        var text2 = document.getElementById("pollution-text");
        text2.style.display = "block";
    }, 1500);
    setTimeout(function(){
        var text3 = document.getElementById("next_button");
        text3.style.display = "block";
    }, 3000);
}

function toggleText2() {
    var text4 = document.getElementById("singapore-text");
    text4.style.display = "block";
    setTimeout(function(){
        var text5 = document.getElementById("9.09");
        text5.style.display = "block";
    }, 1500)
    setTimeout(function(){
        Chart();
    }, 3000)
    setTimeout(function(){
        var text6 = document.getElementById("211");
        text6.style.display = "block";
    }, 3100)
    setTimeout(function(){
        var text6 = document.getElementById("next_button_2");
        text6.style.display = "block";
    }, 3500)
}

function Chart () {
    var chart = new CanvasJS.Chart("chartContainer",
    {

      title:{
      text: "Singapore C02 Emissions From Fossil Fuels"
      },
       data: [
      {
        type: "line",

        dataPoints: [
        { x: new Date(1999, 00, 1), y: 100 },
        { x: new Date(2000, 01, 1), y: 107 },
        { x: new Date(2001, 02, 1), y: 118 },
        { x: new Date(2002, 03, 1), y: 112 },
        { x: new Date(2003, 04, 1), y: 104 },
        { x: new Date(2004, 05, 1), y: 116 },
        { x: new Date(2005, 06, 1), y: 127 },
        { x: new Date(2006, 07, 1), y: 140 },
        { x: new Date(2007, 08, 1), y: 151 },
        { x: new Date(2008, 09, 1), y: 163 },
        { x: new Date(2009, 10, 1), y: 177 },
        { x: new Date(2010, 11, 1), y: 185 },
        { x: new Date(2011, 11, 1), y: 193 },
        { x: new Date(2012, 11, 1), y: 192 },
        { x: new Date(2013, 11, 1), y: 191 },
        { x: new Date(2014, 11, 1), y: 191 },
        { x: new Date(2015, 11, 1), y: 203 },
        { x: new Date(2016, 11, 1), y: 217 },
        { x: new Date(2017, 11, 1), y: 229 },
        { x: new Date(2018, 11, 1), y: 225 },
        { x: new Date(2019, 11, 1), y: 217 },
        { x: new Date(2020, 11, 1), y: 211 }
        ]
      }
      ]
    });

    chart.render();
  }
  
/* Google Charts Stuff
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'X');
    data.addColumn('number', 'C02 Emissions');

    data.addRows([
        ["1999", 100], ["2000", 107], ["2001", 118], ["2002", 112], ["2003", 104], ["2004", 116], ["2005", 127],
        ["2006", 140], ["2007", 151], ["2008", 163], ["2009", 177], ["2010", 185],  ["2011", 193],  ["2012", 192],  ["2013", 191],  ["2014", 191], ["2015", 203],  ["2016", 217],  ["2017", 229],  ["2018", 225],  ["2019", 217], ["2020", 211]
    ]);

    var options = {
        title: "Singapore's C02 Emissions from Fossil-fuels",
        width: (window.innerWidth-100),
        height: (window.innerHeight/3),
        hAxis: {
          title: 'Year'
        },
        vAxis: {
          title: 'C02 Emissions (million tonnes)'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

*/

