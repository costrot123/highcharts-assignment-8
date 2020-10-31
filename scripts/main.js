
Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Number of refugees in 4 European countries'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['2005', '2010', '2018']
  },
  yAxis: {
    title: {
      text: 'Number of refugees'
    },
    labels: {
      formatter: function () {
        return this.value + '';
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: [{
    name: 'Italy',
    marker: {
      symbol: 'square'
    },
    data: [20675, 56397, {
      y: 180829,
      marker: {
        symbol: ''
      }
    }]

  }, {
    name: 'Germany',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 700016,
      marker: {
        symbol: ''
      }
    }, 594269, 1021706]
  }, {
    name: 'France',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 137316,
      marker: {
        symbol: ''
      }
    }, 200687, 355222]
  }, {
    name: 'Belgium',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 15282,
      marker: {
        symbol: ''
      }
    }, 17892, 59208]
  }]

});



Highcharts.chart('container2', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Percent of population considered migrants in 4 European countries'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: [
      '2005',
      '2010',
      '2017'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Percent of population %'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Belguim',
    data: [8.363, 10.232, 11.0979]

  }, {
    name: 'Italy',
    data: [6.7249, 9.6901, 9.9519]

  }, {
    name: 'France',
    data: [11.0031, 11.4181, 12.162]

  }, {
    name: 'Germany',
    data: [11.5126, 12.1297, 14.8148]

  }]
});
