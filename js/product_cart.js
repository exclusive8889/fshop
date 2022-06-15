// --------------------------Giỏ hàng----------
// lấy  localstr cũ
//----------lấy số sản phẩm trong giỏ hàng
var cart=JSON.parse(localStorage.getItem("cart"))
// console.log($("#numprod").innerText);
if (cart== null)  document.querySelector("#numprod").innerText=0;
else document.querySelector("#numprod").innerText=cart.length;
// console.log(cart.length)



var cart=[];
var cartold=JSON.parse(localStorage.getItem("cart"));
if(cartold==null){
    cart=[];
}
else{
    cart=cartold;
}


function addProduct(id){

    // console.log(cart)
    getpost(function(posts){
        // console.log(posts)
        sanpham='';
        var sanpham =posts.find(function(produc){
            return produc.id_prod==id;
        })
        // console.log(sanpham)
        cart.push(sanpham);
        
        //  console.log(cart)
        localStorage.setItem("cart",JSON.stringify(cart));
        
        // console.log(cart.length)
         document.querySelector("#numprod").innerText=cart.length;
    });     
}

// const cart=JSON.parse(localStorage.getItem(1))
// console.log(cart)