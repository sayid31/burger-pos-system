// humburger menu
// inisiasi
const humburgerMenu = document.getElementById('humburgerMenu')
const menuActive = document.querySelector('.link-nav')
humburgerMenu.addEventListener('click', () => {
    menuActive.classList.toggle('active')
})

// modal menu 
// inisiasi
const modalMenu = document.getElementById('modalMenu')

const btnEye = document.querySelectorAll('.btnEye')
const rowModal = document.querySelector('.rowModalMenu')
const containerModalMenu = document.getElementById('containerModalMenu')
// on modal
btnEye.forEach(btn => {
    btn.addEventListener('click', () => {
        const parent = btn.closest('.menutoCart')
        const imgModal = parent.querySelector('.imgtoCart').src
        const tittleModal = parent.querySelector('.tittletoCart').textContent
        const deskripsiModal = parent.querySelector('.deskripsitoModal').textContent
        const hargaModal = parent.querySelector('.hargatocart').textContent

        renderModalMenu({imgModal, tittleModal, hargaModal, deskripsiModal})
        modalMenu.classList.add('show')
    })
})

// render modal menu
function renderModalMenu(item){
    containerModalMenu.innerHTML = `
    <i class="ri-close-fill close" id="close"></i>
    <div class="top menutoCart">
        <div class="imgModalMenu">
            <img src="${item.imgModal}" alt="img" class="imgModal imgtoCart">
        </div>
        <div class="modal-data">
            <h2 class="modal-tittle tittletoCart">${item.tittleModal}</h2>
            <span class="modal-price hargatocart">${item.hargaModal}</span>
            <div class="btnModal">
                <button class="btnModalCart btnShopping"><i class="ri-shopping-cart-2-line"></i></button>
                <button id="btnModalBuy">Order Now</button>
        </div>
    </div>
    <div class="modaldeskripsi">
        <h4 class="tittleDeskripsi">Deskripsi:</h4>
        <p class="datadeskripsi">${item.deskripsiModal}</p>
    </div>
    `
}

// close modal
// const btnClose = document.getElementById('close')
containerModalMenu.addEventListener('click', (e) => {
    if(e.target.id === 'close'){
        modalMenu.classList.remove('show')
    }
})
//close modal klik semua area kecuali isi dari modal
modalMenu.addEventListener('click', (e) => {
    if(!rowModal.contains(e.target)){
        modalMenu.classList.remove('show')
    }
})


// shopping cart modal
// inisiasi
const shoppingcart = document.getElementById('shoppingCart')
const basket = document.getElementById('basket')
shoppingcart.addEventListener('click', () => {
    basket.classList.toggle('show')
})

basket.addEventListener('click', (e) => {
    e.stopPropagation()
})
// klik di segala tempat kecuali keranjangnya maka close keranjang
document.addEventListener('click', (e) => {
    if(!shoppingcart.contains(e.target) && !basket.contains(e.target)){
        basket.classList.remove('show')
    }
})

// swipper
const swiperPopular = new Swiper('.popular-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween:32,
    slidesPerView: 'auto',
    centeredSlides: true,

    breakpoints:{
        1150:{
            spaceBetween:80,
        }
    }
});

// shopping cart add item
// array kos0ng
let cartItems = [];
// inisisasi 
// const btnShopping = document.querySelectorAll('.btnShopping')
const shoppingCart = document.getElementById('shoppingCart-basket')
const checkOut = document.querySelector('.chekOut')
const qtyOrder = document.getElementById('qtyOrder')
const totalPriceAll = document.querySelector('.totalHarga') 

// btnShopping.forEach(cart => {
document.addEventListener('click', (e) => {
    const btnCart = e.target.closest('.btnShopping')
    if(!btnCart)return
    const parent = btnCart.closest('.menutoCart')
    if(!parent)return
    const img = parent.querySelector('.imgtoCart').src
    const tittle = parent.querySelector('.tittletoCart').textContent
    const harga = parent.querySelector('.hargatocart').textContent
    
    
    checkOut.classList.add('active')
    const indexProduk = cartItems.findIndex(p => p.tittle === tittle)
    if(indexProduk !== -1){
        cartItems[indexProduk].qty++
    }else{
        cartItems.push({ img, tittle, harga, qty: 1 } )
    }
    renderShoppingCart(cartItems)
    totalCheckOut()
    totalQTY()
    
})
// })

function totalQTY(data = cartItems){
    const total = data.reduce((sum ,item) => 
        sum + (item.qty || 0), 0
    )
    if(total === 0){
        checkOut.classList.remove('active')
    }
    qtyOrder.textContent = total
    return total
}

function renderShoppingCart(){
    shoppingCart.innerHTML = ""
    cartItems.forEach((item, index) => {
        shoppingCart.innerHTML += `
            <div class="shoppingcart-card">
                <div class="checkbox">
                    <input type="checkbox" class="checkboxItem">
                </div>
                <div class="imgShoppingCart">
                    <img src="${item.img}" alt="img">
                </div>
                <div class="data-shoppingCart">
                    <h4>${item.tittle}</h4>
                    <span class = "harga-buy">${item.harga}</span>
                    <div class="numberOfProducts">
                        <button id="plus" onclick = "plusBtn(${index})"><i class="ri-add-line" ></i></button> <span class = "purchaseAmount">${item.qty}</span><button id="minus" onclick = "minusBtn(${index})"><i class="ri-subtract-line"></i></button>
                </div>
            </div>
            `
    })
}

// tambah produk
function plusBtn(index){
        cartItems[index].qty++
        renderShoppingCart()
        totalQTY(cartItems)
        totalCheckOut()
}
function minusBtn(index){
        if(cartItems[index].qty > 1){
            cartItems[index].qty--
        }else{
            cartItems.splice(index, 1)
        }
        renderShoppingCart()
        totalQTY(cartItems)
        totalCheckOut()
    
}

// total harga
function totalCheckOut(){
    const totalPrice = cartItems.reduce((sum, item) =>  
        { let hargaBersih = parseInt(item.harga.replace(/[^0-9]/g, "")); 
            return sum + ( hargaBersih * item.qty)}, 0)
    
    totalPriceAll.textContent = "Rp." + totalPrice.toLocaleString('id-ID')
}

// modal checkout
// inisiasi
const btnBuy = document.querySelectorAll('.btnBuy')
const modalCheckout = document.getElementById('checkout')
const btnOffModalCheckout = document.getElementById('offModalCheckout')

btnBuy.forEach(buy => {
    buy.addEventListener('click', () => {
        modalCheckout.classList.add('show')
    })
})

btnOffModalCheckout.addEventListener('click', () => {
    modalCheckout.classList.remove('show')
})

// select option form checkout
// inisiasi
const selectPayment = document.getElementById('paymentMethodSelect')
const optionPayment = document.getElementById('optionPaymentMethod')
const deliverySelect = document.getElementById('deliverySelect')
const optionDelivery = document.getElementById('optionDelivery')
const optionSelect = document.querySelectorAll('.optionSelect')
const optionTransferPayment = document.querySelectorAll('.transferPayment-dropdown')
const collapsWrapper = document.querySelectorAll('.collapsOption')

// select container
// array id
const ids = ["paymentMethodSelect", "deliverySelect"]
const options = ["optionPaymentMethod", "optionDelivery"]
ids.forEach((Id, i) => {
    const select = document.getElementById(Id)
    const option = document.getElementById(options[i])
    select.addEventListener('click', (e) => {
        e.stopPropagation()
        document.querySelectorAll('.option').forEach(el  => {
            if(el !== option){
                el.classList.remove('active')
            }
        })
        option.classList.toggle('active')
    })
})

// collapeoption to selectPayment
document.querySelectorAll('.option').forEach(options => {
    options.querySelectorAll('.collapsOption').forEach(item => {
        item.addEventListener('click', () => {
            if(item.classList.contains('optionSelect')) return
            const selectPayment = options.previousElementSibling.querySelector('span')
            selectPayment.innerHTML = item.innerText
            options.classList.remove('active')

        })
    })
})

// select transfer option
optionSelect.forEach(item => {
    const optionContainer = item.nextElementSibling
    item.addEventListener('click', (e) => {
        e.stopPropagation()
        optionTransferPayment.forEach(ops => {
            if(ops !== optionContainer && ops.classList.contains('active')){
                ops.classList.remove('active')
            }
        })
        optionContainer.classList.toggle('active')
    })
})

// scroll reveal
const sr = ScrollReveal({
    origin : 'top',
    distance: '20px',
    duration: 2000,
    delay: 300,
    // reset: true
})

const animation = [
    {selector: '.popular-swiper, .data-footer, .copyRight ', options: {}},
    {selector: '.saus', options: {origin: 'bottom'}},
    {selector: '.burger', options: {delay: 1000, distance: '10px', duration: 2000}},
    {selector: '.cucumber, .vegetable', options: {delay: 1600, scale: 0, duration: 1500, rotate: {z: 180}}},
    {selector: '.tomatos, .meat', options: {origin: 'bottom',delay: 2200, scale: 0, duration: 1500, rotate: {z: 180}}},
    {selector: '.home-tittle', options: {delay: 2800}},
    {selector: '.sticker, .text', options: {delay: 3500}},
    {selector: '.imgAbout', options: {origin: 'left'}},
    {selector: '.about-data', options: {origin: 'right'}},
    {selector: '.bogo-card', options: {origin: 'left'}},
    {selector: '.discount-card', options: {origin: 'right'}},
    {selector: '.waktu', options: {delay: 800}},
    {selector: '.menu-card', options: {interval: 100}},
    {selector: '.contact-info', options: {interval: 100}},
    {selector: '.contactShape', options: {origin: 'bottom'}},
    {selector: '.delivery-people', options: {delay: 1000, distance: '200px', duration: 2000}},


]

animation.forEach(anim => sr.reveal(anim.selector, anim.options))

