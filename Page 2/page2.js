window.onload = function Chart () {
  var chart = new CanvasJS.Chart("chartContainer",
  {
    axisX:{
      title: "Year",
      fontFamily: "montserrat",
      titleFontSize: 17,
      horizontalAlignment: "center",
      margin: 2
    },
    axisY:{
      title: "C02 Emissions (millions tonnes)",
      fontFamily: "montserrat",
      titleFontSize: 17,
      horizontalAlignment: "center",
      margin: 2
    },
    title:{
      text: "Singapore C02 Emissions From Fossil Fuels",
      fontFamily: "montserrat",
      fontSize: 25,
      horizontalAlignment: "left",
      margin: 10
    },
     data: [
    {
      type: "line",

      dataPoints: [
      { x: new Date(1999, 00, 1), y: 100 },
      { x: new Date(2000, 00, 1), y: 107 },
      { x: new Date(2001, 00, 1), y: 118 },
      { x: new Date(2002, 00, 1), y: 112 },
      { x: new Date(2003, 00, 1), y: 104 },
      { x: new Date(2004, 00, 1), y: 116 },
      { x: new Date(2005, 00, 1), y: 127 },
      { x: new Date(2006, 00, 1), y: 140 },
      { x: new Date(2007, 00, 1), y: 151 },
      { x: new Date(2008, 00, 1), y: 163 },
      { x: new Date(2009, 00, 1), y: 177 },
      { x: new Date(2010, 00, 1), y: 185 },
      { x: new Date(2011, 00, 1), y: 193 },
      { x: new Date(2012, 00, 1), y: 192 },
      { x: new Date(2013, 00, 1), y: 191 },
      { x: new Date(2014, 00, 1), y: 191 },
      { x: new Date(2015, 00, 1), y: 203 },
      { x: new Date(2016, 00, 1), y: 217 },
      { x: new Date(2017, 00, 1), y: 229 },
      { x: new Date(2018, 00, 1), y: 225 },
      { x: new Date(2019, 00, 1), y: 217 },
      { x: new Date(2020, 00, 1), y: 211 }
      ]
    }
    ]
  });

  chart.render();
}

window.onload = function () {
var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  axisX:{
    title: "Year",
    fontFamily: "montserrat",
    titleFontSize: 17,
    horizontalAlignment: "center",
    margin: 2
  },
  axisY:{
    title: "C02 Emissions (millions tonnes)",
    fontFamily: "montserrat",
    titleFontSize: 17,
    horizontalAlignment: "center",
    margin: 2
  },
  title:{
    text: "Singapore C02 Emissions From Fossil Fuels",
    fontFamily: "montserrat",
    fontSize: 25,
    horizontalAlignment: "left",
    margin: 10
  },
  data: [{        
    type: "line",
        indexLabelFontSize: 16,
        dataPoints: [
          { x: new Date(1999, 00, 1), y: 100 },
          { x: new Date(2000, 00, 1), y: 107 },
          { x: new Date(2001, 00, 1), y: 118 },
          { x: new Date(2002, 00, 1), y: 112 },
          { x: new Date(2003, 00, 1), y: 104 },
          { x: new Date(2004, 00, 1), y: 116 },
          { x: new Date(2005, 00, 1), y: 127 },
          { x: new Date(2006, 00, 1), y: 140 },
          { x: new Date(2007, 00, 1), y: 151 },
          { x: new Date(2008, 00, 1), y: 163 },
          { x: new Date(2009, 00, 1), y: 177 },
          { x: new Date(2010, 00, 1), y: 185 },
          { x: new Date(2011, 00, 1), y: 193 },
          { x: new Date(2012, 00, 1), y: 192 },
          { x: new Date(2013, 00, 1), y: 191 },
          { x: new Date(2014, 00, 1), y: 191 },
          { x: new Date(2015, 00, 1), y: 203 },
          { x: new Date(2016, 00, 1), y: 217 },
          { x: new Date(2017, 00, 1), y: 229 },
          { x: new Date(2018, 00, 1), y: 225 },
          { x: new Date(2019, 00, 1), y: 217 },
          { x: new Date(2020, 00, 1), y: 211 }
    ]
  }]
});
chart.render();
}

window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer2",
	{
		title:{
			//text: "Singapore Emissions Profile (2018)",
      fontFamily: "montserrat"
		},
		legend: {
			maxWidth: 350,
			itemWidth: 120
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			legendText: "{indexLabel}",
			dataPoints: [
				{ y: 38.9, indexLabel: "Power" },
				{ y: 46.7, indexLabel: "Industry" },
				{ y: 12.4, indexLabel: "Transport" },
				{ y: 1.8, indexLabel: "Others"}
			]
		}
		]
	});
	chart.render();
}

function choice_1() {
    var one = document.getElementById("1");
    one.style.display = "block";
    var two = document.getElementById("2");
    two.style.display = "none"
    var three = document.getElementById("3");
    three.style.display = "none"
    var four = document.getElementById("move_on_button");
    four.style.display = "none"
}

function choice_2() {
  var one = document.getElementById("1");
  one.style.display = "none";
  var two = document.getElementById("2");
  two.style.display = "block"
  var three = document.getElementById("3");
  three.style.display = "none"
  var four = document.getElementById("move_on_button");
  four.style.display = "none"
}

function choice_3() {
  var one = document.getElementById("1");
  one.style.display = "none";
  var two = document.getElementById("2");
  two.style.display = "none"
  var three = document.getElementById("3");
  three.style.display = "block"
  setTimeout(function(){
    var four = document.getElementById("4");
    four.style.display = "block";
  }, 1000)
  setTimeout(function(){
    var five = document.getElementById("5");
    five.style.display = "block"
  }, 2000)
  setTimeout(function(){
    var six = document.getElementById("6");
    six.style.display = "block"
  }, 2100)
}

