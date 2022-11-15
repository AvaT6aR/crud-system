let productName =document.getElementById("productName")
let productPrice =document.getElementById("productPrice")
let productCateg =document.getElementById("productCateg")
let productDescription =document.getElementById("productDescription")
let productCount =document.getElementById("productCount")
let numberDelete1 = document.getElementById('numberDelete1')
let numberDelete2 = document.getElementById('numberDelete2')
let temp =-1
let productContainer;
if(localStorage.getItem("ourproducts") == null){
    productContainer = []
}
else{
    productContainer=JSON.parse(localStorage.getItem("ourproducts"))
    displayproduct()
    
}
function addproduct(){
    document.getElementById("submit").innerHTML="Add Product"
    let product ={
        name:productName.value,
        price:productPrice.value,
        categ:productCateg.value,
        desc:productDescription.value,
        count:productCount.value 
    }

    if (temp >-1) {
        productContainer[temp] =product
        temp=-1
    }
    else if(product.count >1){
        for (let i = 0; i < product.count; i++) {
            productContainer.push(product)
            
        }
    }
    else{
        productContainer.push(product)        
    }
    localStorage.setItem("ourproducts",JSON.stringify(productContainer))
    displayproduct()
    total_price()
    clearvalue()
}

function displayproduct(){
    let productdata=""
    for (let i = 0; i < productContainer.length; i++) {
        productdata+=`
        <tr>
            <td>${i+1}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].categ}</td>
            <td>${productContainer[i].desc}</td>
            <td>${productContainer[i].price}</td>
            <td><button onclick="edit_btn(${i})" class="btn btn-warning">Edit</button></td>
            <td><button onclick="clear_btn(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`
        }
    document.getElementById("t_body").innerHTML=productdata
    total_price()
}

function clear_btn(i){
   productContainer.splice(i,1)
   localStorage.setItem("ourproducts",JSON.stringify(productContainer))
   displayproduct()
}
function total_price(){
    let total = 0;
    let totalPrice = ""
    for (let i = 0; i < productContainer.length; i++) {
        total += Number(productContainer[i].price)
    }
    totalPrice +=`
    <th colspan="2" class='bg-dark text-light'>Total</th>
    <td colspan="5">${total}$</td>
    `
    if(total == 0){
        document.getElementById("t_foot").innerHTML = ''
    } else {
        document.getElementById("t_foot").innerHTML = totalPrice
    }
}
function edit_btn(i){
    productName.value=productContainer[i].name
    productPrice.value=productContainer[i].price
    productCateg.value=productContainer[i].categ
    productDescription.value=productContainer[i].desc
    temp = i 
    submit.innerHTML="Update"
}

function deleteall(){
    productContainer.splice(0)
    localStorage.setItem("ourproducts",JSON.stringify(productContainer))
    displayproduct()
}

function clearvalue(){
    productName.value=""
    productPrice.value=""
    productCateg.value=""
    productDescription.value=""
    productCount.value=""
    return
}

function search (term){
    let productdata= ""
    for (let i = 0; i < productContainer.length; i++) {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase().trim())){
            productdata +=`
            <tr>
                <td>${i+1}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].categ}</td>
                <td>${productContainer[i].desc}</td>
                <td>${productContainer[i].price}</td>
                <td><button onclick="edit_btn(${i})" class="btn btn-warning">Edit</button></td>
                <td><button onclick="clear_btn(${i})" class="btn btn-danger">Delete</button></td>
            </tr>`
        }
       
       
    }
    document.getElementById("t_body").innerHTML=productdata
    total_price()
}



$(window).scroll(() => {
    let windowScroll = $(window).scrollTop()
    if(windowScroll > 500)
    {
         $("#scroll_top").addClass("active")
    }
    else
    {
        $("#scroll_top").removeClass("active")
    }
});
$("#scroll_top").click(function(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})

let aavatar = 0
let aabdullah = 0
function rp(avatar) {
    aavatar = Number(avatar - 1)
    console.log(aavatar)
}
function pr(abdullah) {
    aabdullah = Number(abdullah - aavatar)
    console.log(aabdullah)
}
function deleteNumber(){
    productContainer.splice(aavatar,aabdullah)
    localStorage.setItem("ourproducts",JSON.stringify(productContainer))
    displayproduct()
    numberClear()
}
function numberClear(){
    numberDelete1.value = ''
    numberDelete2.value = ''
}















