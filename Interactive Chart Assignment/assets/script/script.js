$(function() {

  // Korisnici - pregledi
  var totalViewer = 39764,
    totalUsers = 39764;

  // Novi vs Povratni pregledi doughnut chart
  var usersDoughnutChart = new CanvasJS.Chart("users-doughnut-chart", {
    animationEnabled: true,
    backgroundColor: "transparent",
    toolTip: {
      backgroundColor: "#000000",
      borderThickness: 2,
      cornerRadius: 0,
      fontColor: "#ffffff",
      contentFormatter: function(e) {
        return e.entries[0].dataPoint.name + ": " + CanvasJS.formatNumber(e.entries[0].dataPoint.y, '###,###') + " - " + Math.round(e.entries[0].dataPoint.y / totalUsers * 100) +
          "%"; // calcuting and showing percentage of users inside tooltip
      }
    },
    data: [{
      innerRadius: "82%",
      radius: "100%",
      showInLegend: false,
      startAngle: 180,
      type: "doughnut",
      dataPoints: [{
          y: 22489,
          name: "Povratni pregledi",
          color: "#c70000"
        },
        {
          y: 17275,
          name: "Novi pregledi",
          color: "#424242",
          exploded: true
        }
      ]
    }]
  });

  // Novi vs Povratni pregledi line chart
  var usersSplineChart = new CanvasJS.Chart("users-spline-chart", {
    animationEnabled: true,
    backgroundColor: "transparent",
    axisX: {
      gridThickness: 0,
      labelFontColor: "#bbbbbb",
      lineColor: "#bbbbbb"
    },
    axisY: {
      gridThickness: 0,
      labelFontColor: "#bbbbbb",
      lineColor: "#bbbbbb"
    },
    legend: {
      dockInsidePlotArea: true,
      fontColor: "#ffffff",
      fontSize: 16,
      horizontalAlign: "right",
      verticalAlign: "top"
    },
    toolTip: {
      backgroundColor: "#000000",
      borderThickness: 2,
      cornerRadius: 0,
      fontColor: "#ffffff",
      shared: true
    },
    data: [{
        color: "#424242",
        legendMarkerType: "square",
        legendText: "NOVI",
        name: "NOVI",
        showInLegend: true,
        type: "spline",
        dataPoints: [{
            x: new Date("22 May 2022"),
            y: 1199
          },
          {
            x: new Date("23 May 2022"),
            y: 1314
          },
          {
            x: new Date("24 May 2022"),
            y: 1147
          },
          {
            x: new Date("25 May 2022"),
            y: 1403
          },
          {
            x: new Date("26 May 2022"),
            y: 1217
          },
          {
            x: new Date("27 May 2022"),
            y: 1015
          },
          {
            x: new Date("28 May 2022"),
            y: 1138
          },
          {
            x: new Date("29 May 2022"),
            y: 1272
          },
          {
            x: new Date("30 May 2022"),
            y: 957
          },
          {
            x: new Date("31 May 2022"),
            y: 862
          },
          {
            x: new Date("1 Jun 2022"),
            y: 716
          },
          {
            x: new Date("2 Jun 2022"),
            y: 712
          },
          {
            x: new Date("3 Jun 2022"),
            y: 610
          },
          {
            x: new Date("4 Jun 2022"),
            y: 585
          },
          {
            x: new Date("5 Jun 2022"),
            y: 847
          },
          {
            x: new Date("6 Jun 2022"),
            y: 744
          },
          {
            x: new Date("7 Jun 2022"),
            y: 756
          },
          {
            x: new Date("8 Jun 2022"),
            y: 781
          }
        ]
      },
      {
        color: "#c70000",
        legendMarkerType: "square",
        legendText: "POVRATNI",
        name: "POVRATNI",
        showInLegend: true,
        type: "spline",
        dataPoints: [{
            x: new Date("22 May 2022"),
            y: 1844
          },
          {
            x: new Date("23 May 2022"),
            y: 1554
          },
          {
            x: new Date("24 May 2022"),
            y: 1273
          },
          {
            x: new Date("25 May 2022"),
            y: 1284
          },
          {
            x: new Date("26 May 2022"),
            y: 1126
          },
          {
            x: new Date("27 May 2022"),
            y: 946
          },
          {
            x: new Date("28 May 2022"),
            y: 964
          },
          {
            x: new Date("29 May 2022"),
            y: 1793
          },
          {
            x: new Date("30 May 2022"),
            y: 1432
          },
          {
            x: new Date("31 May 2022"),
            y: 1130
          },
          {
            x: new Date("1 Jun 2022"),
            y: 1074
          },
          {
            x: new Date("2 Jun 2022"),
            y: 954
          },
          {
            x: new Date("3 Jun 2022"),
            y: 856
          },
          {
            x: new Date("4 Jun 2022"),
            y: 833
          },
          {
            x: new Date("5 Jun 2022"),
            y: 1536
          },
          {
            x: new Date("6 Jun 2022"),
            y: 1416
          },
          {
            x: new Date("7 Jun 2022"),
            y: 1248
          }, {
            x: new Date("8 Jun 2022"),
            y: 1226
          }
        ]
      }
    ]
  });

  // Korisnici po zemljama bar chart
  var usersCountriesBarChart = new CanvasJS.Chart("users-countries-bar-chart", {
    animationEnabled: true,
    backgroundColor: "transparent",
    axisX: {
      labelFontColor: "#f7f6f6",
      labelFontSize: 16,
      labelFontFamily: "roboto",
      lineThickness: 0,
      tickThickness: 0
    },
    axisY: {
      gridThickness: 0,
      lineThickness: 0,
      tickThickness: 0,
      valueFormatString: " "

    },
    toolTip: {
      backgroundColor: "#ffffff",
      borderThickness: 0,
      cornerRadius: 0,
      fontColor: "#424242",
      contentFormatter: function(e) {
        return e.entries[0].dataPoint.label + ": " + CanvasJS.formatNumber(Math.round(e.entries[0].dataPoint.y / 100 * totalUsers), '###,###'); // calculating and showing country wise number of users inside tooltip
      }
    },
    data: [{
      color: "#424242",
      indexLabelFontColor: "#f7f6f6",
      indexLabelFontFamily: "roboto",
      indexLabelFontSize: 18,
      indexLabelPlacement: "outside",
      type: "bar",
      dataPoints: [{
          y: 14.4,
          indexLabel: "14.4%",
          label: "Ostali"
        },
        {
          y: 2.6,
          indexLabel: "2.6%",
          label: "Crna Gora"
        },
        {
          y: 3.6,
          indexLabel: "3.6%",
          label: "Severna Makedonija"
        },
        {
          y: 9.5,
          indexLabel: "9.5%",
          label: "Hrvatska"
        },
        {
          y: 20.3,
          indexLabel: "20.3%",
          label: "Bosna i Hercegovina"
        },
        {
          y: 49.6,
          indexLabel: "49.6%",
          label: "Srbija"
        }
      ]
    }]
  });

  // doughnut chart 13 - 17 godina
  var doughnutChart01 = new CanvasJS.Chart("doughnut-chart-01", {
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      fontColor: "#848484",
      fontSize: 25,
      horizontalAlign: "center",
      text: "1.7%",
      verticalAlign: "center"
    },
    toolTip: {
      backgroundColor: "#ffffff",
      borderThickness: 0,
      cornerRadius: 0,
      fontColor: "#424242"
    },
    data: [{
      explodeOnClick: false,
      innerRadius: "96%",
      radius: "90%",
      startAngle: 270,
      type: "doughnut",
      dataPoints: [{
          y: 1.7,
          color: "#c70000",
          toolTipContent: "13-17: <span>" + CanvasJS.formatNumber(Math.round(1.7 / 100 * totalViewer), '#,###,###') + "</span>"
        },
        {
          y: 53,
          color: "#424242",
          toolTipContent: null
        }
      ]
    }]
  });

  // doughnut chart 18 - 24 godina
  var doughnutChart02 = new CanvasJS.Chart("doughnut-chart-02", {
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      fontColor: "#848484",
      fontSize: 25,
      horizontalAlign: "center",
      text: "43.3%",
      verticalAlign: "center"
    },
    toolTip: {
      backgroundColor: "#ffffff",
      borderThickness: 0,
      cornerRadius: 0,
      fontColor: "#424242"
    },
    data: [{
      explodeOnClick: false,
      innerRadius: "96%",
      radius: "90%",
      startAngle: 270,
      type: "doughnut",
      dataPoints: [{
          y: 43.3,
          color: "#c70000",
          toolTipContent: "18-24: <span>" + CanvasJS.formatNumber(Math.round(43.3 / 100 * totalViewer), '#,###,###') + "</span>"
        },
        {
          y: 81,
          color: "#424242",
          toolTipContent: null
        }
      ]
    }]
  });

  // doughnut chart 25 - 34 godina
  var doughnutChart03 = new CanvasJS.Chart("doughnut-chart-03", {
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      fontColor: "#848484",
      fontSize: 25,
      horizontalAlign: "center",
      text: "34.4%",
      verticalAlign: "center"
    },
    toolTip: {
      backgroundColor: "#ffffff",
      borderThickness: 0,
      cornerRadius: 0,
      fontColor: "#424242"
    },
    data: [{
      explodeOnClick: false,
      innerRadius: "96%",
      radius: "90%",
      startAngle: 270,
      type: "doughnut",
      dataPoints: [{
          y: 34.4,
          color: "#c70000",
          toolTipContent: "25-34: <span>" + CanvasJS.formatNumber(Math.round(34.4 / 100 * totalViewer), '#,###,###') + "</span>"
        },
        {
          y: 88,
          color: "#424242",
          toolTipContent: null
        }
      ]
    }]
  });

  // doughnut chart 35 - 44 godina
  var doughnutChart04 = new CanvasJS.Chart("doughnut-chart-04", {
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      fontColor: "#848484",
      fontSize: 25,
      horizontalAlign: "center",
      text: "13.6%",
      verticalAlign: "center"
    },
    toolTip: {
      backgroundColor: "#ffffff",
      borderThickness: 0,
      cornerRadius: 0,
      fontColor: "#424242"
    },
    data: [{
      explodeOnClick: false,
      innerRadius: "96%",
      radius: "90%",
      startAngle: 270,
      type: "doughnut",
      dataPoints: [{
          y: 13.6,
          color: "#c70000",
          toolTipContent: "35-44: <span>" + CanvasJS.formatNumber(Math.round(13.6 / 100 * totalViewer), '#,###,###') + "</span>"
        },
        {
          y: 53,
          color: "#424242",
          toolTipContent: null
        }
      ]
    }]
  });

  // doughnut chart 45 - 54 godina
  var doughnutChart05 = new CanvasJS.Chart("doughnut-chart-05", {
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      fontColor: "#848484",
      fontSize: 25,
      horizontalAlign: "center",
      text: "5.6%",
      verticalAlign: "center"
    },
    toolTip: {
      backgroundColor: "#ffffff",
      borderThickness: 0,
      cornerRadius: 0,
      fontColor: "#424242"
    },
    data: [{
      explodeOnClick: false,
      innerRadius: "96%",
      radius: "90%",
      startAngle: 270,
      type: "doughnut",
      dataPoints: [{
          y: 5.6,
          color: "#c70000",
          toolTipContent: "45-54: <span>" + CanvasJS.formatNumber(Math.round(5.6 / 100 * totalViewer), '#,###,###') + "</span>"
        },
        {
          y: 81,
          color: "#424242",
          toolTipContent: null
        }
      ]
    }]
  });

  // doughnut chart 55 - 64 godina
  var doughnutChart06 = new CanvasJS.Chart("doughnut-chart-06", {
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      fontColor: "#848484",
      fontSize: 25,
      horizontalAlign: "center",
      text: "1.2%",
      verticalAlign: "center"
    },
    toolTip: {
      backgroundColor: "#ffffff",
      borderThickness: 0,
      cornerRadius: 0,
      fontColor: "#424242"
    },
    data: [{
      explodeOnClick: false,
      innerRadius: "96%",
      radius: "90%",
      startAngle: 270,
      type: "doughnut",
      dataPoints: [{
          y: 1.2,
          color: "#c70000",
          toolTipContent: "55-64: <span>" + CanvasJS.formatNumber(Math.round(1.2 / 100 * totalViewer), '#,###,###') + "</span>"
        },
        {
          y: 88,
          color: "#424242",
          toolTipContent: null
        }
      ]
    }]
  });

  // jQuery.inview plugin
  $('.inview').one('inview', function(e, isInView) {
    if (isInView) {
      switch (this.id) {

        case "users-doughnut-chart":
          usersDoughnutChart.render();
          break;
        case "users-spline-chart":
          usersSplineChart.render();
          break;
        case "users-countries-bar-chart":
          usersCountriesBarChart.render();
          break;
        case "doughnut-chart-01":
          doughnutChart01.render();
          break;
        case "doughnut-chart-02":
          doughnutChart02.render();
          break;
        case "doughnut-chart-03":
          doughnutChart03.render();
          break;
        case "doughnut-chart-04":
          doughnutChart04.render();
          break;
        case "doughnut-chart-05":
          doughnutChart05.render();
          break;
        case "doughnut-chart-06":
          doughnutChart06.render();
          break;
      }
    }
  });

});
