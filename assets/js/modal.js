const modalContainer = document.querySelector(".modal-container")
const openChart = document.getElementById ("open")
const closeChart = document.getElementById("close")
const modalChart = document.querySelector(".modal-chart")

openChart.addEventListener('click', ()=>{ modalContainer.classList.toggle('active')
})


