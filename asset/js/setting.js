// option setting velue
// inisiasi
const selects = document.getElementById('select')
const options = document.getElementById('option')
const optionsItem = document.querySelectorAll('.option-item')
const inputWrapper = document.getElementById('input-wrapper')

optionsItem.forEach(item => {
    item.addEventListener('click', () => {
        const selectText = options.previousElementSibling.querySelector('span')
        selectText.innerHTML = item.innerText
        selectText.style.color = 'rgb(112, 193, 179)'
        options.classList.remove('active')

        // display the input according to the selection
        const selectedValues = item.getAttribute('data-value')
        if(selectedValues === 'text'){
            inputWrapper.innerHTML = `<input type="text" placeholder="Enter Text" class="input">`
        } else if(selectedValues === 'url'){
            inputWrapper.innerHTML = `<input type="url" placeholder="Enter Url" class="input">`
        }else if(selectedValues === 'image'){
            inputWrapper.innerHTML = `<input type="file" placeholder="Enter Image" class="input">`
        }
    })
})

selects.addEventListener('click', () => {
    options.classList.toggle('active')
})