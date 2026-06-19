// date range
flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "d-m-y",
    locale: {
        rangeSeparator: " s/d "
    }
})

// modal
// inisiasi
const modal = document.getElementById('modal')
const formModal = document.getElementById('form')
const btnCloseModal = document.getElementById('closeModal')
const btnAddModal = document.getElementById('btnAddModal')

btnAddModal.addEventListener('click', () => {
    modal.classList.add('show')
})

btnCloseModal.addEventListener('click', () => {
    modal.classList.remove('show')
})

modal.addEventListener('click', (e) => {
    if(!formModal.contains(e.target)){
        modal.classList.remove('show')
    }
})

// input form option
// inisiasi
const inputDiv = document.querySelector('.input-div')
const option = document.querySelector('.option')
const optionItem = document.querySelectorAll('.option-item')

optionItem.forEach(item => {
    item.addEventListener('click', () => {
        const select = option.previousElementSibling.querySelector('span')
        select.innerHTML = item.innerText
        select.style.color = 'rgb(248, 249, 250)'
        option.classList.remove('active')
    })
})

inputDiv.addEventListener('click', () => {
    option.classList.toggle('active')
})