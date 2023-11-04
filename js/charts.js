
const myChart1= new Chart(document.getElementById('myChart1'), {
    type:'line',
    data: {
        labels: labelAxis_C[1],
        datasets: [{
            label: descriptionLabel_C[1],
            data: value_C[1],
             backgroundColor: 'rgba(219, 45, 45, 0.2)',
             borderColor: 'rgb(219, 45, 45)',
            borderWidth: 1.5
        }]
    }
})

const myChart2= new Chart(document.getElementById('myChart2'), {
    type:'line',
    data: {
        labels: labelAxis_C[2],
        datasets: [{
            label: descriptionLabel_C[2],
            data: value_C[2],
             backgroundColor: 'rgba(213, 216, 0, 0.2)',
             borderColor: 'rgb(213, 216, 0)',
            borderWidth: 1.5
        }]
    }
})

const myChart3= new Chart(document.getElementById('myChart3'), {
    type:'line',
    data: {
        labels: labelAxis_C[3],
        datasets: [{
            label: descriptionLabel_C[3],
            data: value_C[3],
             backgroundColor: 'rgba(3, 132, 16, 0.2)',
             borderColor: 'rgb(3, 132, 16)',
            borderWidth: 1.5
        }]
    }
})

const myChart4= new Chart(document.getElementById('myChart4'), {
    type:'line',
    data: {
        labels: labelAxis_C[4],
        datasets: [{
            label: descriptionLabel_C[4],
            data: value_C[4],
             backgroundColor: 'rgba(66, 73, 136, 0.2)',
             borderColor: 'rgba(66, 73, 136, 1)',
            borderWidth: 1.5
        }]
    }
})

const myChart5= new Chart(document.getElementById('myChart5'), {
    type:'line',
    data: {
        labels: labelAxis_C[5],
        datasets: [{
            label: descriptionLabel_C[5],
            data: value_C[5],
             backgroundColor: 'rgba(66, 73, 136, 0.2)',
             borderColor: 'rgba(66, 73, 136, 1)',
            borderWidth: 1.5
        }]
    }
})

const myChart6= new Chart(document.getElementById('myChart6'), {
    type:'line',
    data: {
        labels: labelAxis_C[6],
        datasets: [{
            label: descriptionLabel_C[6],
            data: value_C[6],
             backgroundColor: 'rgba(66, 73, 136, 0.2)',
             borderColor: 'rgba(66, 73, 136, 1)',
            borderWidth: 1.5
        }]
    }
})

const myChart7= new Chart(document.getElementById('myChart7'), {
    type:'line',
    data: {
        labels: labelAxis_C[7],
        datasets: [{
            label: descriptionLabel_C[7],
            data: value_C[7],
             backgroundColor: 'rgba(66, 73, 136, 0.2)',
             borderColor: 'rgba(66, 73, 136, 1)',
            borderWidth: 1.5
        }]
    }
})