var cart = document.getElementById('cart')
var addToCartButtons = document.getElementsByClassName('cart-btn')
var count = 0
var total = document.getElementById("cart-total")
var checkoutBtn = document.getElementById("checkout")
//line of text that says cart is empty
var counttxt = document.getElementById("count")
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener("click", addToCart)


}
checkoutBtn.addEventListener("click", checkout)
function update() {
    updateCount()
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

function checkout() {
    cart.innerHTML = ""
    count = 0;
    update()
    alert("Purchase successful, Thank you for shopping with us")
}



function updateCount() {
    // if cart is not empty display count which is the number of items in the cart else display message that cart is empty
    if (cart.getElementsByClassName("cart-item")[0]) {
        count = 0;
        let cartquan = cart.getElementsByClassName('item-quantity')
        for (var i = 0; i < cartquan.length; i++) {
            count += parseInt(cartquan[i].value)
        }


        counttxt.textContent = count + " Items in the cart"
    }
    else {
        counttxt.textContent = "cart is empty"
    }
}
function quantityChange(event) {
    var input = event.target
    //parse input to int to avoid non-int values
    input.value=parseInt(input.value)


    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    getTotal()
    updateCount()
}

function removeItem(event) {
    var element = event.target.parentElement

    element.remove()

    updateCount()
    getTotal()
    updateCount()
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
        update()
    }

}
