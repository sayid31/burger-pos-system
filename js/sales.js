
// years
// take the year dynamically
// inisiasi
const containerOption = document.getElementById('yearsOption')
const thisYear = new Date().getFullYear()
const startingYear = 2020
// loop from the start year to the current year
for (let year = startingYear; year <= thisYear; year++) {
    const option_item = document.createElement('div')
    option_item.classList.add('option-item')
    option_item.setAttribute('data-value', year)
    option_item.textContent = year

    containerOption.appendChild(option_item)
}

// option filter
// inisisasi
const selects = document.querySelectorAll('.select')
const options = document.querySelectorAll('.option')

// close other dropdown menus before opening
options.forEach(optionContainer => {
    optionContainer.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', () => {
            const select = optionContainer.previousElementSibling.querySelector('span')
            // set text
            select.innerHTML = item.innerText
            // take color from option-item
            const itemColor = window.getComputedStyle(item).color
            select.style.color = itemColor
            closeDropdown(optionContainer)
        })
    })
})

// add an event listener
selects.forEach(select => {
    const optionContainer = select.parentElement.nextElementSibling

    // Click Select
    select.addEventListener('click', (e) => {
        e.stopPropagation()

        // toggle dropdown
        options.forEach(option => {
            if (option !== optionContainer && option.classList.contains('show')) {
                closeDropdown(option)
            }
        })

        // toggle dropdown
        if (optionContainer.classList.contains('show')) {
            closeDropdown(optionContainer)
        } else {
            openDropdown(optionContainer)
        }


    })
})

// click outside dropdown to close all dropdowns
document.addEventListener('click', () => {
    options.forEach(option => {
        closeDropdown(option)
    }
    )
})

// function to open and close dropdowns
function openDropdown(optionContainer) {
    optionContainer.classList.add('show')
}

function closeDropdown(optionContainer) {
    optionContainer.classList.remove('show')
    optionContainer.classList.add('closing')
    setTimeout(() => optionContainer.classList.remove('closing'))
}




// mockApi
// inisiasi
// wrapping content
const wrappingContents = document.getElementById('wrappingContents')
//api url
const URL_API = "https://68aebe10b91dfcdd62ba182b.mockapi.io/sales"
// input filter
const daysSelects = document.getElementById('day')
const monthInput = document.getElementById('month')
const yearSelects = document.getElementById('year')
const rangeInput = document.getElementById('range')

// function render sales table
function renderSalesTable(data) {
    wrappingContents.innerHTML = ""
    data.forEach(item => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.date}</td>
        <td>${item.customer}</td>
        <td>${item.totalSpending.toLocaleString()}</td>
        <td>${item.paymentMethod}</td>
        <td>
        <div class = "status ${item.status.toLowerCase()}">${item.paymentStatus}</div></td>
        `
        wrappingContents.appendChild(tr)
    })
}

// fetch data from Api with filter
async function fetchSales(filter = {}) {
    wrappingContents.innerHTML = `<tr><td colspan="6">Loading........</td></tr>`
    try {
        const query = new URLSearchParams(filter).toString()
        const res = await fetch(`${URL_API}?${query}`)
        const data = await res.json()
        renderSalesTable(data)
    } catch (err) {
        console.error(err)
        wrappingContents.innerHTML = `<tr><td colspan="6">Filed To Load Data</td></tr>`
    }
}

// event listener filter
daysSelects.addEventListener('click', (e) => {
    const value = e.target.dataset.value
    if(!value) return
    fetchSales({day: value})
})

monthInput.addEventListener('change', () => {
    fetchSales({month: monthInput.value})
})

yearSelects.addEventListener('click', (e) => {
    const value = e.target.dataset.value
    if(!value) return
    fetchSales({year: value})
})

rangeInput.addEventListener('change', () => {
    fetchSales({range: rangeInput.value})
})




