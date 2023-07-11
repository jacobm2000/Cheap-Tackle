var cart = document.getElementById('cart')
var addToCartButtons = document.getElementsByClassName('cart-btn')
var count = 0
var total = document.getElementById("cart-total")
var checkoutBtn=document.getElementById("checkout")
//line of text that says cart is empty
var empty = document.getElementById("empty")
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener("click", addToCart)


}
checkoutBtn.addEventListener("click",checkout)
function update() {
    isEmpty()
    getTotal()
    //adds listeners to remove buttons
    removeButtons = document.getElementsByClassName('remove-btn')
    for (var i = 0; i < removeButtons.length; i++) {

        var button = removeButtons[i]
        button.addEventListener("click", removeItem)
    }

    //adds listeners to quantity input boxes
    quan = document.getElementsByClassName('item-quantity')
    for (var i = 0; i < quan.length; i++) {

        var q = quan[i]
        q.addEventListener("change", quantityChange)
    }

}

function checkout(){
    cart.innerHTML=""
    count=0;
    update()
    alert("Purchase successful, Thank you for shopping with us")
}



function isEmpty() {
    // if cart is not empty dont display line saying cart is empty else display it
    if (cart.getElementsByClassName("cart-item")[0]) {
        empty.style.display = "none"
    }
    else {
        empty.style.display = "block"
    }
}
function quantityChange(event) {
    var input = event.target

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    getTotal()
}

function removeItem(event) {
    var element = event.target.parentElement
    element.remove()
    count--
    getTotal()
    isEmpty()
}

function getTotal() {
    var cartItems = document.getElementsByClassName("cart-item")
    total.textContent = "$0"
    for (i in cartItems) {

        try {
            q = cartItems[i].getElementsByClassName("item-quantity")[0].value
            //Get total and replace $ with empty space so that the math can work
            total.textContent = "$" + (parseFloat(total.textContent.replace("$", "")) + parseFloat(cartItems[i].getElementsByClassName("cart-price")[0].innerHTML.replace('$', '')) * q).toFixed(2)
        }
        catch {

        }

    }

}
function addToCart(event) {
    var button = event.target
    var item = button.parentElement.parentElement





    var title = document.createElement("span")
    title.append(item.getElementsByClassName('card-title')[0].innerText)
    title.id = count.id
    title.className = " col-2 mr-2 cart-title"
    var imgSrc = item.getElementsByClassName('card-img-top')[0].src
    var price = button.parentElement.getElementsByClassName('price')[0].innerText

    if (cart.getElementsByClassName(item.id)[0]) {
        alert("item already in cart")
    }
    else {
        var priceSpan = document.createElement("span")
        priceSpan.append(price)
        priceSpan.className = "col-1 cart-price"
        var div = document.createElement("div")
        div.id = count
        div.className = "row justify-content-center mb-5 cart-item" + " " + item.id
        var img = document.createElement("img")
        img.src = imgSrc
        img.className = " col-sm-1 cart-img"
        var quantity = document.createElement("input")
        quantity.type = "number"
        quantity.value = 1
        quantity.className = "col-sm-1 mr-2 ml-5 item-quantity"
        var remove = document.createElement("button")
        remove.innerText = "X"
        remove.className = "col-1 remove-btn btn btn-danger"

        div.append(title)
        div.append(img)
        div.append(priceSpan)
        div.append(quantity)
        div.append(remove)
        cart.append(div)
        console.log(div)
        count += 1
        update()
    }

}
