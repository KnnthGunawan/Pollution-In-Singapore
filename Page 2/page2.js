
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
        margin: 2
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

  