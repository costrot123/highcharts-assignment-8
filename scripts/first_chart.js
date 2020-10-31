
Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Kiwi', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Thomas and Karen\'s house'
      }
    },
    series: [{
      name: 'Thomas',
      data: [6, 1, 0, 4]
    }, {
      name: 'Karen',
      data: [6, 5, 7, 3]
    }]
  });
