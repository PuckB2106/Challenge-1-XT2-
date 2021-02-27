var myChart1 = document.getElementById('myChart').getContext('2d');
var chart1 = new Chart(myChart1, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Water', 'Frisdrank',],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}

});
