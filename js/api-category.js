var postapi='http://localhost:3000/category';
function start(){
    getpost(function(post){
        // console.log(post);
        // renderPath(post);
        renderCate(post);
    });
    

}
start();

function getpost(callback){
    fetch(postapi)
      .then(response => response.json())
      .then(callback)
    
}
function renderCate(posts){
    var listPost=document.querySelector(".head-bottom ul");
    // console.log(listPost)
    var htmls=posts.map(function(post){
        return`   
              <li> <a href="./product.html?id_cate=${post.id_cate}">${post.cate}</a></li>           
        `;
    });
    listPost.innerHTML=htmls.join('');  
}



function renderPath(posts){
    var path=document.querySelector(".local");
    var idcate=getulrbyid_cate('id_cate');
    var namecate=posts.find(function(post,index){
        return post.id_cate==idcate;
    });
    console.log(namecate);
    path.innerHTML=`<b><a href="./index.html">TRANG CHỦ</a> / <a href="./product.html?id_cate=${namecate.id_cate}">${namecate.cate}</a></b>`;
};
