Chart.defaults.global.defaultFontColor = 'white';

var myChart1 = document.getElementById('myChart1').getContext('2d');
var chart1 = new Chart(myChart1, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'Eten',
            backgroundColor: ['#00538C', '#051C2B'],
            borderColor: '#051C2B',
            borderwidth: '',
            data: [80, 20,]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        legend: {
            display: false
        },
        maintainAspectRatio: false,
    }
});

var myChart2 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(myChart2, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'Water',
            backgroundColor: ['#00538C', '#051C2B'],
            borderColor: '#051C2B',
            borderwidth: '',
            data: [90, 10,]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        legend: {
            display: false
        },
        maintainAspectRatio: false,
    }
});


var myChart3 = document.getElementById('myChart3').getContext('2d');
var chart3 = new Chart(myChart3, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['Waterstof', 'Ethanol', 'Benzine', 'Hydrazine', 'Methaan', 'Propeen', 'Zuurstof'],
        datasets: [{
            label: ['Hoeveelheid brandstof'],
            backgroundColor: ['#00538C', '#ff006e', '#009ADB', '#FFE700', '#fb5607', '#8338ec', '#80b918',],
            data: [25, 99, 75, 30, 80, 59, 90,]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        legend: {
            display: false,
        },
        maintainAspectRatio: false,
    }

});

var myChart4 = document.getElementById('myChart4').getContext('2d');
var chart4 = new Chart(myChart4, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50',],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#051C2B',
            borderColor: 'white',
            data: [0, 1, 1.5, 3, 2, 3.5, 6.1, 5, 6, 4, 5,]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        legend: {
            display: false,
        },
        maintainAspectRatio: false,
    }

});


var myChart5 = document.getElementById('myChart5').getContext('2d');
var chart5 = new Chart(myChart5, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Co2','LH2','O2',],
        datasets: [{
            label: [],
            backgroundColor: ['#f72585','#3f37c9','#4895ef','#4cc9f0',],
            borderColor: ['white',],
            data: ['30','36','34',]
        }]
    },

    // Configuration options go here
    options: {responsive:true,}

});

// var myChart6 = document.getElementById('myChart6').getContext('2d');
// var chart6 = new Chart(myChart6, {
//     // The type of chart we want to create
//     type: 'pie',
//
//     // The data for our dataset
//     data: {
//         labels: [],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: '#00365A',
//             borderColor: 'white',
//             data: [75, 100,]
//         }]
//     },
//
//     // Configuration options go here
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//     }
//
// });

var myChart7 = document.getElementById("myChart7");
var chart7 = new Chart(myChart7, {
    type: 'doughnut',
    data: {
        labels: ['0-10^3km/u','10-30^3km/u','30-60^3km/u'],
        datasets: [{
            label: '# of Votes',
            data: [100, 0, 0,],
            backgroundColor: [
                'rgba(124,252,0,1)',
                'rgba(255,255,0,1)',
                'rgba(255, 99, 132, 1)',

            ],
            borderColor: [
              'rgba(124,252,0,1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
    }
});

var myChart8 = document.getElementById('myChart8').getContext('2d');
var chart8 = new Chart(myChart8, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0', '10', '20', '30', '40', '50'],
        datasets: [{
            backgroundColor:'#f72585' ,
            borderColor: 'white',
            data: ['20','80','60','100','120',]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
    }

});

var count = 10000;

function changeCount(number){
  count += number;
  document.getElementById("count").innerHTML = count;
}
