// open and close  modal transaction history
// inisisasi
const modalTransaction = document.querySelectorAll('.modal-transaction')
const btnOpenModal = document.querySelectorAll('.detaile')
const btncloseModal = document.querySelector('.close')
btnOpenModal.forEach(openModal => {
    openModal.addEventListener('click', () => {
        modalTransaction.forEach(modal => {
            modal.classList.add('show')
        })
    })
})

btncloseModal.addEventListener('click', () => {
    modalTransaction.forEach(modal => {
            modal.classList.remove('show')
        })
})