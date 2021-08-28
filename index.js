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
        var graph1 = document.getElementById("chart_div");
        graph1.style.display = "block";
    }, 3000)
    setTimeout(function(){
        var text6 = document.getElementById("211");
        text6.style.display = "block";
    }, 3100)
}

/* Google Charts Stuff*/
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'X');
    data.addColumn('number', 'Value');

    data.addRows([
        ["2009", 177], ["2010", 185],  ["2011", 193],  ["2012", 192],  ["2013", 191],  ["2014", 191],
        ["2015", 203],  ["2016", 217],  ["2017", 229],  ["2018", 225],  ["2019", 217], ["2020", 211]
    ]);

    var options = {
        title: "Singapore's C02 Emissions from Fossil-fuels",
        width: 900,
        height: 450,
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