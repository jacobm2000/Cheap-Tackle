var cart=document.getElementById('cart')
var addToCartButtons=document.getElementsByClassName('cart-btn')
var count=0
var total=document.getElementById("cart-total")

for(var i = 0; i < addToCartButtons.length;i++){
    var button= addToCartButtons[i]
    button.addEventListener("click",addToCart)
    
    
}
function update(){
    getTotal()
    removeButtons=document.getElementsByClassName('remove-btn')
for(var i = 0; i < removeButtons.length;i++){
    
    var button= removeButtons[i]
    button.addEventListener("click",removeItem)

}
}

function removeItem(event){
    var element= event.target.parentElement
    element.remove()
    count--
    getTotal()
}

function getTotal(){
    var cartItems=document.getElementsByClassName("cart-item")
    total.textContent=0
    for( i in cartItems){
        
        try{
            console.log(cartItems[i].getElementsByClassName("cart-price")[0].innerHTML)
            total.textContent=(parseFloat(total.textContent)+ parseFloat(cartItems[i].getElementsByClassName("cart-price")[0].innerHTML)).toFixed(2)
        }
        catch{

        }
        
    }

}
function addToCart(event){
    var button=event.target
    var item=button.parentElement.parentElement.parentElement
    var title =item.getElementsByClassName('card-title')[0].innerText
    var imgSrc =item.getElementsByClassName('card-img-top')[0].src
    var price =button.parentElement.getElementsByClassName('price')[0].innerText
    
    var span=document.createElement("span")
    span.append(price)
    span.className="cart-price"
    var div=document.createElement("div")
    div.id=count
    div.className="cart-item"
    var img=document.createElement("img")
    var remove=document.createElement("button")
    remove.innerText="X"
    remove.className=" remove-btn btn btn-danger"
    img.src=imgSrc
    img.className="cart-img"

    div.append(title)
    div.append(img)
    div.append(span)
    div.append(remove)
    cart.append(div)
    count+=1
    update()
}
