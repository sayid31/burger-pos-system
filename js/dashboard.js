// sidebar show
const iconShow = document.querySelector('.sidebar-icon')
const sidebar = document.querySelector('.Sidebar')
const iconCloseSidebar = document.querySelector('.icon-close')
iconShow.addEventListener('click', () => {
    sidebar.classList.add('show')
})

iconCloseSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show')
})

document.addEventListener('click', (e) => {
    if(!sidebar.contains(e.target) && !iconShow.contains(e.target)){
        sidebar.classList.remove('show')
    }
}) 

// memanggil bulan
function months(count) {
  const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                     'August', 'September', 'October', 'November', 'December'];
  return allMonths.slice(0, count);
}

const ctx = document.getElementById('myChart').getContext('2d')
const labels = months(7)
const data = {
    labels: labels,
    datasets: [{
        // label: 'Sales Trend',
        data: [65, 59, 80, 81, 56, 55, 40],
        feel: false,
        borderColor: 'rgba(255, 215, 0, .7)',
        tension: 0.1
    }],
}
const options = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: {
                display: false
            }
        }
    }

new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
})

// chart peak hours
const chartPeak = document.getElementById('chartPeak').getContext('2d')
new Chart(chartPeak, {
    type: 'bar',
    data: {
        labels: ['10AM', '12PM', '4PM', '7PM', '9PM'],
        datasets: [{
            data: [30, 40, 50, 60, 70],
            backgroundColor: 'rgba(255, 215, 0, .7)',
            borderColor: 'rgb(255, 140, 0)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend:{
                display: false
            }
        }
    }
})

// chart selling
const chartSelling = document.getElementById('chartSelling')
new Chart(chartSelling, {
    type: 'pie',
    data: {
        labels: ['Fries', 'Drink', 'Burger'],
        datasets: [{
            data: [20, 15, 65],
            backgroundColor: ['rgb(214, 40, 40)', 'rgb(255, 140, 0)', 'rgb(255, 215, 0)'] 
        }] 
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip:{
                callbacks: {
                    label: function(context){
                        const dataset = context.dataset.data
                        const total = dataset.reduce((a,b) => a+b, 0)
                        const value = context.parsed
                        const persentage = ((value / total) * 100).toFixed(1) + '%'
                        return `${context.label}, ${persentage}`
                    }
                }
            },
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20
                }
            }
        }
    }
})
