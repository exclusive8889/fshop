//render
var postapi='http://localhost:3000/posts';
function start(){
    getpost(function(post){
        var id=getulrbyid_cate('id_cate');
        // console.log(id);
        
        var lists=filterbyid(post,id);
        // console.log(lists);
        renderPost(lists)
    });

}
start();

function getulrbyid_cate(id_cat){
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var string= String(id_cat)
    var id = url.searchParams.get(string);
    // console.log(id);
    return  Number(id);
};
// console.log(getulrbyid_cate('id_cate'));

function filterbyid(callback,id){
    var listbyidcate=callback.filter(function(post){
        // console.log(id);
        return post.id_cate==id;
    });
    return listbyidcate;

}

function getpost(callback){
  fetch(postapi)
    .then(response => response.json())
    .then(callback)
    .then(function(){load()})  

}
function renderPost(posts) {
    var listPost=document.querySelector(".cont-right");
    var htmls=posts.map(function(post){
        //console.log(post)
        return `

        <div class="produ">             
                    <img src="${post.img}" alt="">
                    <h4><a href="">${post.title} </a></h3>
                    <div class="gb">
                        <b class="tab01 active">${post.version1}</b>
                        <b class="tab01">${post.version2}</b>
                        <b class="tab01">${post.version3}</b>
                        <b class="tab01">${post.version4}</b>
                    </div>
                    <div class="price">
                        <div class="price_tab">
                            <p class="tabop active">${post.price1}</p>
                            <p class="tabop">${post.price2}</p>
                            <p class="tabop">${post.price3}</p>
                            <p class="tabop">${post.price4}</p>
                        </div>
                        <div class="price-sale">
                            <del>4000000</del>

                        </div>

                    </div>
                    <div class="hangkm">
                        <div class="tab-item active">
                            <img src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg" alt="">
                        </div>
                        <div class="tab-item">
                            <img src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg" alt="">
                        </div>
                    </div>
                    <div class="infokm">
                        <div class="tab-pane active">
                            <p>1Giảm ngay 5% tối đa 400.000đ khi thanh toán qua ví Moca trên ứng dụng Grab</p>
                        </div>
                        <div class="tab-pane">
                            <p>2Giảm ngay 5% tối đa 400.000đ khi thanh toán qua ví Moca trên ứng dụng Grab</p>
                        </div>
                    </div>

                    <div class="order" >
                      <a href="http://127.0.0.1:5500/detail-product.html?id_prod=${post.id_prod}" class="button">Mua ngay</a>
                      <p id="order" onclick="addProduct(${post.id_prod})">Thêm vào giỏ
                        <i class="fa-solid fa-cart-arrow-down"></i></p>
                    </div>   
                    
                </div>
        `;
    });
    listPost.innerHTML=htmls.join('');  
};







