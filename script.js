document.addEventListener("DOMContentLoaded", function() {
    // Data for the chart (example data)
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Distance traveled (km)',
            backgroundColor: '#8e54e9',
            borderColor: '#7340b3',
            borderWidth: 1,
            data: [50, 80, 60, 100, 75, 90], // Example data for each month
        }]
    };

    // Configuration options for the chart
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Get the canvas element
    const ctx = document.getElementById('activity-chart').getContext('2d');

    // Create the chart
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});

// If you have interactive elements, you can add your JavaScript here.
// Example: Toggle sidebar menu
document.querySelector('.menu ul li a').addEventListener('click', function() {
    this.classList.toggle('active');
});
