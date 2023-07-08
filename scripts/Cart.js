cart=document.getElementById('cart')
addToCartButtons=document.getElementsByClassName('cart-btn')

for(var i = 0; i < addToCartButtons.length;i++){
    console.log(i)
    var button= addToCartButtons[i]
    button.addEventListener("click",addToCart)
    
    
}

function addToCart(event){
    var button=event.target
    var item=button.parentElement.parentElement.parentElement
    var title =item.getElementsByClassName('card-title')[0].innerText
    var imgSrc =item.getElementsByClassName('card-img-top')[0].src
    var price =button.parentElement.getElementsByClassName('price')[0].innerText
    console.log(price)
    console.log(title)
    var div=document.createElement("div")
    var img=document.createElement("img")
    img.src=imgSrc
    img.className="cart-img"
    div.append(title)
    div.append(img)
    div.append(price)
    cart.append(div)
}
