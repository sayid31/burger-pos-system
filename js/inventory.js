// modal
// modal menu
// inisisasi
const modalMenu = document.getElementById('modalMenu')
const btnCloseModalMenu = document.getElementById('offModalMenu')
const btnOpenModalMenu = document.getElementById('btnAddMenu')
const formModalMenu = document.getElementById('form-menu') 
// evenlintener close and open modal menu
// open modal
btnOpenModalMenu.addEventListener('click', () => {
    modalMenu.classList.add('show')
})
// close modal
btnCloseModalMenu.addEventListener('click', () => {
    modalMenu.classList.remove('show')
})
// click container modal to close form modal
modalMenu.addEventListener('click', (e) => {
    if(!formModalMenu.contains(e.target)){
        modalMenu.classList.remove('show')
    }
})

// modal ingredient
// inisiasi
const modalIngradient = document.getElementById('modalIngredient')
const btnCloseModalingredient = document.getElementById('offModalIngredient')
const btnOpenModalingredient= document.getElementById('btnAddIngredient')
const formModalingredient = document.getElementById('formIngredient') 
// evenlintener close and open modal ingredient
// open modal
btnOpenModalingredient.addEventListener('click', () => {
    modalIngradient.classList.add('show')
})
// close modal
btnCloseModalingredient.addEventListener('click', () => {
    modalIngradient.classList.remove('show')
})
// click container modal to close form modal
modalIngradient.addEventListener('click', (e) => {
    if(!formModalingredient.contains(e.target)){
        modalIngradient.classList.remove('show')
    }
})

// conten show 
// inisiasi
const menuContent = document.getElementById('menu')
const ingredientContent = document.getElementById('ingredient')
const btnShow = document.querySelectorAll('.btnPrimary')
menuContent.classList.remove('active')
ingredientContent.classList.remove('active')
// eventlistener btnshow
btnShow.forEach((btn) => {
    btn.addEventListener('click', () => {
        // show menu, hide ingredient
        if(btn.dataset.target === 'menu'){
            ingredientContent.classList.remove('active')
            menuContent.classList.remove('active')
        }else if(btn.dataset.target === 'ingredient'){
            menuContent.classList.add('active')
            ingredientContent.classList.add('active')
        }
    })
})

// mockApi
// inisiasi
// menu content
// table wrapper menu
const tableMenuWarapper = document.getElementById("tableMenuWrapper")
// Api url
const Api_URL_Menu = `https://68aebe10b91dfcdd62ba182b.mockapi.io/inventory_menu`
// function render table menu
function renderMenuTable(data){
    tableMenuWarapper.innerHTML = ""
    data.forEach(item => {
        const trMenuTable = document.createElement("tr")
        trMenuTable.classList.add('tr')
        trMenuTable.innerHTML = `
        <td>${item.menu_id}</td>
        <td>${item.name}</td>
        <td>${item.costPrice}</td>
        <td>${item.sellingPrice}</td>
        <td>${item.stock}</td>
        <td>${item.category}</td>
        <td><div class="actionMenu">
        <button onclick="UpdateMenu(${item.id})"><i class="ri-pencil-line"></i></button>
        <button onclick="DeletMenu(${item.id})"><i class="ri-delete-bin-line"></i></button>
        </div></td>
        `
        tableMenuWarapper.appendChild(trMenuTable)
    })
}

// fetch API
async function fetchMenu() {
    try{
        const res = await fetch(Api_URL_Menu)
        const data = await res.json()
        renderMenuTable(data)
    }catch(err){
        console.error("Filed to fetch menu:", err)
    }
}

// inisiasi form
const menuID = document.getElementById("id_menu")
const menuName = document.getElementById("name_menu")
const costPriceMenu = document.getElementById("costPrice_menu")
const sellingPriceMenu = document.getElementById("sellingPrice_menu")
const stockMenu = document.getElementById("stock_menu")
const categoryMenu = document.getElementById("category_menu")
const imagesMenu = document.getElementById("images_menu")

let updateID = null
let menuImgOld = null

// add data form
const formMenu = document.getElementById("form-menu")
formMenu.addEventListener('submit', async (e) => {
    e.preventDefault()
    let payload =  {
        menu_id:menuID.value.trim(),
        name:menuName.value.trim(),
        costPrice: costPriceMenu.value.trim(),
        sellingPrice: sellingPriceMenu.value.trim(),
        stock: stockMenu.value.trim(),
        category: categoryMenu.value.trim(),
    }

    const images_menu = imagesMenu.files[0]

    if(images_menu){
        const rider = new FileReader()
        rider.onload = async function(e){
            payload.images = e.target.result
            await sendData(payload)
        }
        rider.readAsDataURL(images_menu)
    }else{
        if(updateID) payload.images = menuImgOld
        await sendData(payload)
    }
})

async function sendData(payload) {
    try{
        if(updateID){
            await fetch(`${Api_URL_Menu}/${updateID}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            })
            updateID = null
        }else{
            await fetch(Api_URL_Menu, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            })
        }
        fetchMenu()
        formMenu.reset()
        modalMenu.click()
    }catch(err){
        console.log("Send Error:", err)
    }
}

// update data
async function UpdateMenu(id) {
    const response = await fetch(`${Api_URL_Menu}/${id}`)
    const data = await response.json()
    updateID = id
    menuID.value = data.menu_id
    menuName.value = data.name
    costPriceMenu.value = data.costPrice
    sellingPriceMenu.value = data.sellingPrice
    stockMenu.value = data.stock
    categoryMenu.value = data.category

    menuImgOld = data.images
    modalMenu.classList.add("show")
}

async function DeletMenu(id) {
    if(confirm("Are you sure to delete this menu?")){
        await fetch(`${Api_URL_Menu}/${id}`, {
            method:"DELETE"
        })
        await fetchMenu()
    }
}

// call fetch menu when the page is first loaded
window.addEventListener("DOMContentLoaded", () => {
    fetchMenu()
})

// fetch API 
