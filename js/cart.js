
function render_produc(){
    let products=JSON.parse(localStorage.getItem("cart"));
    var list=document.querySelector(".cart_block");
    // console.log(products);
    var htmls=products.map(function(product){
        // console.log(product);
        
        
        return `
        <div class="cart_product ${product.id_prod}">
                    <div class="img_pro ">
                        <img src="${product.img}" alt="">
                    </div>
                    <div class="infom_pro">
                        <div class="name-pro">
                            <b>${product.title}</b>
                        </div>
                        <select id="color" name="color" class="form-control">
                            <option>Blue</option>
                            <option>Green</option>
                            <option>Red</option>
                        </select>
                        

                        <ul class="thongtin ">
                            <li>Cơ hội trúng Jackpot đến 2 tỷ</li>
                            <li>Cơ hội trúng Jackpot đến 2 tỷ</li>
                            <li>Cơ hội trúng Jackpot đến 2 tỷ</li>
                            <li>Cơ hội trúng Jackpot đến 2 tỷ</li>
                        </ul>
                    </div>
                    <div class="pro_count">
                        <form action="#" class="count">
                            <div class="qtyminus sizes poiter cent" onclick="giamSl(${product.id_prod})">-</div>
                            <input  type="text" name="quantity " value="1" class="qty soluong" id="input_${product.id_prod}"> 
                            <div class="qtyplus sizes poiter cent"onclick="tangSl(${product.id_prod})">+</div>
                        </form>
                        <p class="poiter" onclick="deleteProduct(${product.id_prod})"><i class="fa-solid fa-trash"></i></i> Xóa</p>
                    </div>

                    <div class="pro_price">
                        <p class="pri " id="pri_${product.id_prod}">${product.price1}</p>
                        <p class="li-thought">${product.price2}</p>
                        <p class="giaan" id="price_${product.id_prod}">${product.price1}</p>
                    </div>


                </div>
        `;


    });
    list.innerHTML=htmls.join();

}
render_produc();
pay();
// tăng ,giảm sản phẩm
function giamSl(id){
    var data = document.getElementById(`input_${id}`);
    // console.log(data);
    // data.value = Number(data.value) - 1;  
    if (data.value <= 1)  data.value=1;
    else {
        
        data.value = Number(data.value) - 1;
    }
    total(id,data.value);
    pay();
}
function tangSl(id){
    
    var data = document.getElementById(`input_${id}`);
    data.value = Number(data.value) + 1;
    
    // console.log(price);
    total(id,data.value);
    pay();
}

// console.log(JSON.parse(localStorage.getItem("cart")));

// xóa sản phẩm

function deleteProduct(id_prod){
    let arr=JSON.parse(localStorage.getItem("cart"));
    console.log(arr)
    let sp= arr.filter(function(ele){
        return ele.id_prod != id_prod;
    });
    console.log(sp);
    localStorage.removeItem("cart");
    localStorage.setItem("cart",JSON.stringify(sp));

    render_produc();
    count_pro();

    pay();
}

function count_pro(){
    var cart=JSON.parse(localStorage.getItem("cart"));
    // console.log($("#numprod").innerText);
    if (cart== null)  document.querySelector("#numprod").innerText=0;
    else document.querySelector("#numprod").innerText=cart.length;
    // console.log(cart.length)

}



// tính gia.soluong
function total(id,sluong){
    const price= document.getElementById(`price_${id}`).innerText;
    document.getElementById(`pri_${id}`).innerText=sluong*price;
}

function pay(){
    const pays=document.querySelectorAll(".pri");

    var totalCoin=0;
    for(var value of pays) totalCoin += Number(value.innerText);   
    const tongtien=document.querySelector(".tongtien").innerText=totalCoin;
    // const discount=document.querySelector(".discount"); 
    const total=document.querySelector("#total");
    total.innerText=totalCoin;
}





