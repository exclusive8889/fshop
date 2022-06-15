var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("id_prod");
console.log(c);

//render
var postapi='http://localhost:3000/posts';
function start(){
    getpost(function(post){
        renderProduct(post)
    });

}
start();
function getpost(callback){
  fetch(postapi)
    .then(response => response.json())
    .then(callback)

}
function renderProduct(posts) {
    
    var product =posts.find(function(produc){
        return produc.id_prod==c;
    })
    //console.log(product);   
    
    var prod=document.querySelector(".cont-bottom");
    var html=`
    <div class="ct-product">
                        <div class="name-pro">
                            <h2>Iphone 13 pro max 128Gb</h2>
    
                        </div>
                        <div class="detail">
                            <div class="detail-left">
                                <div class="dt-img">
                                    <img src="${product.img}" alt="">
    
                                </div>
                                <div class="dt-option">
                                    <ul>
                                        <li>
                                            <p><i class="fa-solid fa-images"></i></p>
                                            <a href="">Xem thêm ảnh</a>
                                        </li>
                                        <li>
                                            <p><i class="fa-solid fa-box-archive"></i></p>
                                            <a href="">Trong hộp có gì</a>
                                        </li>
                                        
                                    </ul>
    
                                </div>
                                <div class="dt-info">
                                    <ul>
                                        <li>6.7 inch, OLED, Super Retina XDR, 2778 x 1284 Pixels</li>
                                        <li>12.0 MP + 12.0 MP + 12.0 MP</li>
                                        <li>12.0 MP</li>
                                        <li>128 GB</li>
                                    </ul>
    
                                </div>
    
                            </div>
                            <div class="detail-right">
                                <div class="ndung-gia">
                                    <p>20000000</p>
                                    <p id="textthought">3000000</p>
                                </div>
                                <div class="dtr-price">
                                    <div class="form01">
                                        <div class="ck">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                                            <p>200000</p>
                                        </div>
                                        <label for="vehicle1"> I have a bike</label>
                                    </div>
                                    <div class="form01">
                                        <div class="ck">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                                            <p>200000</p>
                                        </div>
                                        <label for="vehicle1"> I have a bike</label>
                                    </div>
                                    <div class="form01">
                                        <div class="ck">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                                            <p>200000</p>
                                        </div>
                                        <label for="vehicle1"> I have a bike</label>
                                    </div>
                                    <div class="form01">
                                        <div class="ck">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                                            <p>200000</p>
                                        </div>
                                        <label for="vehicle1"> I have a bike</label>
                                    </div>
                                    
    
                                </div>
                                <div class="dtr-option">
                                    <div class="op">
                                        <img src="" alt="">
                                        <p>Xanh</p>
                                    </div>
                                    <div class="op">
                                        <img src="" alt="">
                                        <p>Xanh</p>
                                    </div>
                                    <div class="op">
                                        <img src="" alt="">
                                        <p>Xanh</p>
                                    </div>
    
                                </div>
                                <div class="ttkm">
                                    <p>Ưu đãi thêm</p>
                                    <ul>
                                        <li><i class="fa-solid fa-circle-check"></i> Bảo hành 2 năm chính hãng</li>
                                        <li><i class="fa-solid fa-circle-check"></i>Tặng PMH 165.000đ mua eSim Mobifone Big Data</li>
                                        <li><i class="fa-solid fa-circle-check"></i>Thu cũ đổi mới trợ giá 15% </li>
                                    </ul>
                                </div>
                                <div class="button">
                                    <button>MUA NGAY</button>
                                </div>
    
                            </div>
                        </div>
                    </div>
    `;
    prod.innerHTML=html;
};





