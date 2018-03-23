var traffic = document.getElementById('traffic').getContext('2d');

var dailyTraffic = document.getElementById('daily-traffic').getContext('2d');

var mobileUsers = document.getElementById('mobile-users').getContext('2d');

Chart.defaults.global.tooltips.enabled = false;

var trafficChart = new Chart(traffic, {
		type: 'line',
		data: {
			labels: [
				'',
				'16 - 22',
				'23 - 29',
				'30 - 5',
				'6 - 12',
				'13 - 19',
				'20 - 26',
				'27 - 3',
				'4 - 10',
				'11 - 17',
				'18 - 24',
				'25 - 31',
				''
			],

			datasets: [{
				data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
				lineTension: 0,
				borderWidth: 1,
				borderColor: '#7676bd',
				pointRadius: 6,
				pointHoverRadius: 8,
				pointBorderWidth: 2,
				backgroundColor: 'rgba(226,227,246, .5)'
			}]
		},

		options: {
			legend: {
				display: false
			},

			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						max: 2500,
						min: 0,
						stepSize: 500
					}
				}]
			}
		}
});

var dailyTrafficChart = new Chart(dailyTraffic, {
		type: 'bar',

		data: {
			labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

			datasets: [{
				data: [50, 75, 150, 100, 200, 175, 75],
				backgroundColor: '#7676bd',
			}]
		},

		options: {
			legend: {
				display: false
			},

			scales: {
				yAxes: [{
					ticks: {
						max: 250,
						min: 0,
						stepSize: 50
					}
				}]
			}
		}
});

var mobileUsersChart = new Chart(mobileUsers, {
		type: 'doughnut',
		data: {
			labels: ['Phones', 'Tablets', 'Desktop'],

			datasets: [{
				data: [1, 1, 4],
				backgroundColor: [
					'#75b1be',
					'#80ca92',
					'#7676bd'
				]
			}]
		},

		options: {
			rotation: 4.2,
			elements: {
				arc: {
					borderWidth: 0
				}
			},
			legend: {
				position: 'right',
				labels: {
					boxWidth: 20
				}
			}
		}
});
