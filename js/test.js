var postapihsx='http://localhost:3000/hangSanXuat';
var khoanggia='http://localhost:3000/khoangGia';
function startHangsx(){
    getHangsx(function(post){
        // console.log(post);
        // renderPath(post);
        renderHangsx(post);
    });
    getkhoangGia(function(post){
        renderKhoanggia(post);
    })
    

}
startHangsx();

function getHangsx(callback){
    fetch(postapihsx)
      .then(response => response.json())
      .then(callback)
    
}

function renderHangsx(posts){
    var listHangsx=document.querySelector(".hsx");
    // console.log(listPost)
    var htmls=posts.map(function(post){
        return`   
        <div class="option_hsx">
           <a href="">
            <input type="checkbox" class="ckbnsx" id="ckb_${post.id_hsx}" onclick="findbyProducer(${post.id_hsx})">
            <label for="ckb_${post.id_hsx}">${post.hsx}</label>
           </a> 
        </div>      
        `;
    });
    listHangsx.innerHTML=htmls.join('');  
}

// tìm pro bằng mức giá
function getkhoangGia(callback){
    fetch(khoanggia)
      .then(response => response.json())
      .then(callback)
    
}
function renderKhoanggia(posts){
    var listHangsx=document.querySelector(".mucgia");
    console.log(posts);
    var htmls=posts.map(function(post){
        return`   
        <div class="option_hsx">
           <a href="">
            <input type="checkbox" class="ckbnsx" id="kgia_${post.id_khoanggia}" onclick="findbyPrice(${post.id_khoanggia})">
            <label for="kgia_${post.id_khoanggia}">${post.kg}</label>
           </a> 
        </div>      
        `;
    });
    listHangsx.innerHTML=htmls.join('');  
}
function changeKhoanghia(filt,id){
    document.querySelector("#findprice").checked=false;
    filt.khoanggia.push(id);


    if(document.getElementById(`kgia_${id}`).checked===false){
        filt.khoanggia =(filt.khoanggia).filter(item => Number(item) !==  Number(id));
        if(filt.khoanggia.length==0){
    
        }
    }
}
function findbyPrice(id_kg){
    changeKhoanghia(filter,id_kg);
    console.log(filter.khoanggia);
    console.log(filter.hangsx);
    // console.log(filter.khoanggia);
    if(filter.khoanggia.length==0){
        document.querySelector("#findprice").checked=true;
        getAllpro();
    }
    
    else{
        function gettung(callback){
            fetch('http://localhost:3000/posts')
          .then(response => response.json())
          .then(callback);
        //   return callback;
        }
        gettung(function(post){
            // console.log(post);
            if(filter.khoanggia.length==0){
                document.querySelector("#findprice").checked=true;
                var list=post.filter(function(data){
                    return filter.hangsx.includes(data.id_hsx);
                    // return data.id_hsx==1;
                });
                renderPost(list); 
            }
            else{
                if(filter.hangsx.length==0){
                    var list2=post.filter(function(data){
                        // console.log(data.id_khoanggia);
                        return (filter.khoanggia.includes(data.id_khoanggia));
                    });   
                    
                    console.log(list2);
                    renderPost(list2);
                }
                else{
                    var list=post.filter(function(data){
                        return filter.hangsx.includes(data.id_hsx);
                        // return data.id_hsx==1;
                    }); 
                    console.log(list)   
                    var list2=list.filter(function(data){
                        // console.log(data.id_khoanggia);
                        return (filter.khoanggia.includes(data.id_khoanggia));
                    });   
                    
                    console.log(list2);
                    renderPost(list2);
                }
                
            }
            
        })
    }
};





function getAllpro(){
    document.querySelector("#findAll").checked=true;
    
    // console.log(dataIdproduct);
    // const id_cat=getulrbyid_cate('id_cate')
    // window.location.assign(`./product.html?id_cate=${id_cat}`);


    filter.hangsx=[];
    const mulckb=document.querySelectorAll(".ckbnsx");
    for(i=0;i<mulckb.length;i++) {
        mulckb[i].checked=false;
    }
    // document.querySelectorAll(".ckbnsx").checked=false;
    function gettung(callback){
        fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(callback);
    //   return callback;
    }
    
    gettung(function(post){
        // console.log(post);
        //  var list=post.filter(function(data){
        //     return post;
        //     // return data.id_hsx==1;
        // });
        // console.log(list);
        renderPost(post);
    })
  
}

// tìm kiếm theo checkbox
const filter={
    hangsx:[],
    khoanggia: [],
}

function changeCkb(filt,id){
    document.querySelector("#findAll").checked=false;
    filt.hangsx.push(id);


    if(document.getElementById(`ckb_${id}`).checked===false){
        filt.hangsx =(filt.hangsx).filter(item => Number(item) !==  Number(id));
        if(filt.hangsx.length==0){
            
            // document.querySelector("#findAll").checked=true;
           
        }
    }
 
   
    
}
function findbyProducer(id_hsx){
    
    changeCkb(filter,id_hsx);
    console.log(filter.hangsx);
    console.log(filter.khoanggia);
    if(filter.hangsx.length==0){
        getAllpro();
    }
    else{
        function gettung(callback){
            fetch('http://localhost:3000/posts')
          .then(response => response.json())
          .then(callback);
        //   return callback;
        }
        gettung(function(post){
            // console.log(post);
            if(filter.khoanggia.length==0){
                document.querySelector("#findprice").checked=true;
                var list=post.filter(function(data){
                    return filter.hangsx.includes(data.id_hsx);
                    // return data.id_hsx==1;
                });
                renderPost(list); 
            }
            else{
                var list=post.filter(function(data){
                    return filter.hangsx.includes(data.id_hsx);
                    // return data.id_hsx==1;
                }); 
                console.log(list)   
                var list2=list.filter(function(data){
                    // console.log(data.id_khoanggia);
                    return (filter.khoanggia.includes(data.id_khoanggia));
                });   
                
                console.log(list2);
                renderPost(list2);
            }
            
        })
    }  

}
// console.log(data);
//           var data1=data.filter(function (post){
//             return post.hsx==filter.hangsx;
//           });
//           console(data1)

 // const a=async()=>{
    //    const data1= await fetch('http://localhost:3000/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    //    console.log(data1);
    // }




var postapihsx='http://localhost:3000/hangSanXuat';
var khoanggia='http://localhost:3000/khoangGia';
var idcateurl=getulrbyid_cate('id_cate');
function startHangsx(){
    getHangsx(function(post){
        // console.log(post);
        // renderPath(post);
        renderHangsx(post);
    });
    getkhoangGia(function(post){
        renderKhoanggia(post);
    })
    

}
startHangsx();

function getHangsx(callback){
    fetch(postapihsx)
      .then(response => response.json())
      .then(callback)
      .then(function(){load()}) 
}

function renderHangsx(posts){
    var listHangsx=document.querySelector(".hsx");
    // console.log(listPost)
    var htmls=posts.map(function(post){
        return`   
        <div class="option_hsx">
          
            <input type="checkbox" class="ckbnsx" id="ckb_${post.id_hsx}" onclick="findbyProducer(${post.id_hsx})">
            <label for="ckb_${post.id_hsx}">${post.hsx}</label>
           
        </div>      
        `;
    });
    listHangsx.innerHTML=htmls.join('');  
}

// tìm pro bằng mức giá
function getkhoangGia(callback){
    fetch(khoanggia)
      .then(response => response.json())
      .then(callback)
      .then(function(){load()}) 
}
function renderKhoanggia(posts){
    var listHangsx=document.querySelector(".mucgia");
    // console.log(posts);
    var htmls=posts.map(function(post){
        return`   
        <div class="option_hsx">
           
            <input type="checkbox" class="ckbkg" id="kgia_${post.id_khoanggia}" onclick="findbyPrice(${post.id_khoanggia})">
            <label for="kgia_${post.id_khoanggia}">${post.kg}</label>
           
        </div>      
        `;
    });
    listHangsx.innerHTML=htmls.join('');  
}
function changeKhoanghia(filt,id){
    document.querySelector("#findprice").checked=false;
    filt.khoanggia.push(id);


    if(document.getElementById(`kgia_${id}`).checked===false){
        filt.khoanggia =(filt.khoanggia).filter(item => Number(item) !==  Number(id));
        if(filt.khoanggia.length==0){
    
        }
    }
}
function findbyPrice(id_kg){
    changeKhoanghia(filter,id_kg);
    // console.log(filter.khoanggia);
    // console.log(filter.hangsx);
    // console.log(filter.khoanggia);
    if(filter.khoanggia.length==0 && filter.hangsx.length ==0){
        document.querySelector("#findprice").checked=true;
        getAllpro();
    }
    
    else{
        function gettung(callback){
            fetch('http://localhost:3000/posts')
          .then(response => response.json())
          .then(callback)
          .then(function(){load()}) 
        //   return callback;
        }
        gettung(function(posts){
            // console.log(post);
            const post=posts.filter(function(prod){
                return prod.id_cate==idcateurl;
            })
            if(filter.khoanggia.length==0){
                document.querySelector("#findprice").checked=true;
                var list=post.filter(function(data){
                    return filter.hangsx.includes(data.id_hsx);
                    // return data.id_hsx==1;
                });
                renderPost(list); 
            }
            else{
                if(filter.hangsx.length==0){
                    var list2=post.filter(function(data){
                        // console.log(data.id_khoanggia);
                        return (filter.khoanggia.includes(data.id_khoanggia));
                    });   
                    
                    // console.log(list2);
                    renderPost(list2);
                }
                else{
                    var list=post.filter(function(data){
                        return filter.hangsx.includes(data.id_hsx);
                        // return data.id_hsx==1;
                    }); 
                    // console.log(list)   
                    var list2=list.filter(function(data){
                        // console.log(data.id_khoanggia);
                        return (filter.khoanggia.includes(data.id_khoanggia));
                    });   
                    
                    // console.log(list2);
                    renderPost(list2);
                }
                
            }
            
        })
    }
};



function getAllkhoanggia(){
    document.querySelector("#findprice").checked=true;
    filter.khoanggia=[];
    const mulckg=document.querySelectorAll(".ckbkg");
    // console.log(mulckg);
    for(i=0;i<mulckg.length;i++) {
        mulckg[i].checked=false;
    }
    function gettung(callback){
        fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(callback)
      .then(function(){load()}) 
    //   return callback;
    }
    gettung(function(posts){
        const post=posts.filter(function(prod){
            return prod.id_cate==idcateurl;
        })
        // console.log(post);
        if(filter.khoanggia.length==0){
            document.querySelector("#findprice").checked=true;
            var list=post.filter(function(data){
                return filter.hangsx.includes(data.id_hsx);
                // return data.id_hsx==1;
            });
            renderPost(list); 
        }
    });
}

function getAllpro(){
    document.querySelector("#findAll").checked=true;
    
    // console.log(dataIdproduct);
    // const id_cat=getulrbyid_cate('id_cate')
    // window.location.assign(`./product.html?id_cate=${id_cat}`);
    

    filter.hangsx=[];
    const mulckb=document.querySelectorAll(".ckbnsx");
    for(i=0;i<mulckb.length;i++) {
        mulckb[i].checked=false;
    }
    // document.querySelectorAll(".ckbnsx").checked=false;
    function gettung(callback){
        fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(callback)
      .then(function(){load()}) 
    //   return callback;
    }
    
    gettung(function(posts){
        const post=posts.filter(function(prod){
            return prod.id_cate==idcateurl;
        })
        var id=getulrbyid_cate('id_cate');
        // console.log(id);
        
        var lists=filterbyid(post,id);
        // console.log(lists);
        renderPost(lists)
        // renderPost(post);
    })
  
}

// tìm kiếm theo checkbox
const filter={
    hangsx:[],
    khoanggia: [],
}

function changeCkb(filt,id){
    document.querySelector("#findAll").checked=false;
    filt.hangsx.push(id);


    if(document.getElementById(`ckb_${id}`).checked===false){
        filt.hangsx =(filt.hangsx).filter(item => Number(item) !==  Number(id));
        if(filt.hangsx.length==0){
            
            // document.querySelector("#findAll").checked=true;
           
        }
    }
 
   
    
}
function findbyProducer(id_hsx){
    
    changeCkb(filter,id_hsx);
    // console.log(filter.hangsx);
    // console.log(filter.khoanggia);
    if(filter.hangsx.length==0){
        getAllpro();
    }
    else{
        function gettung(callback){
            fetch('http://localhost:3000/posts')
          .then(response => response.json())
          .then(callback)
          .then(function(){load()}) 
        //   return callback;
        }
        gettung(function(posts){
            const post=posts.filter(function(prod){
                return prod.id_cate==idcateurl;
            })
            // console.log(post);
            if(filter.khoanggia.length==0){
                document.querySelector("#findprice").checked=true;
                var list=post.filter(function(data){
                    return filter.hangsx.includes(data.id_hsx);
                    // return data.id_hsx==1;
                });
                renderPost(list); 
            }
            else{
                var list=post.filter(function(data){
                    return filter.hangsx.includes(data.id_hsx);
                    // return data.id_hsx==1;
                }); 
                // console.log(list)   
                var list2=list.filter(function(data){
                    // console.log(data.id_khoanggia);
                    return (filter.khoanggia.includes(data.id_khoanggia));
                });   
                
                // console.log(list2);
                renderPost(list2);
            }
            
        })
    }  

}
// console.log(data);
//           var data1=data.filter(function (post){
//             return post.hsx==filter.hangsx;
//           });
//           console(data1)

 // const a=async()=>{
    //    const data1= await fetch('http://localhost:3000/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
    //    console.log(data1);
    // }
    
