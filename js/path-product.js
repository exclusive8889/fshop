var postapi1='http://localhost:3000/category';
function start1(){
    getpost1(function(post){
        // console.log(post);
        renderPath(post);
        
    });
    

}
start1();

function getpost1(callback){
    fetch(postapi1)
      .then(response => response.json())
      .then(callback)
    
}

function renderPath(posts){
    var path=document.querySelector(".local");
    var idcate=getulrbyid_cate('id_cate');
    var namecate=posts.find(function(post,index){
        return post.id_cate==idcate;
    });
    // console.log(namecate);
    path.innerHTML=`<b><a href="./index.html">TRANG CHỦ</a> / <a href="./product.html?id_cate=${namecate.id_cate}">${namecate.cate}</a></b>`;
};
function getulrbyid_cate(id_cat){
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var string= String(id_cat)
    var id = url.searchParams.get(string);
    // console.log(id);
    return  Number(id);
};