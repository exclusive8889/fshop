var hsx='http://localhost:3000/category';

function startPageIndex(){
    getHangsx(function(post){
        renderHsxInpdex(post)
    });
}
startPageIndex()

function getHangsx(callback){
    fetch(hsx)
      .then(response => response.json())
      .then(callback)
      
}
function renderHsxInpdex(posts){
    var listhsx=document.querySelector(".cont02")
    // console.log(listhsx)
    var htmls=posts.map(function(post){
        return`
        <a href="/product.html?id_cate=${post.id_cate}" class="item">
            <div class="khungtron">
              <picture class="pict">
                <img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/5/25/637890339117025634_F-H1_800x300.png" alt="">            
              </picture>
              
            </div>
            <p>${post.cate}</p>
          </a>
        `
    })
    listhsx.innerHTML=htmls.join('');
}