

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
  