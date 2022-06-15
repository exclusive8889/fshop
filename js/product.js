



function load(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$(".tab01");
    const pans = $$(".tabop");
    // console.log(pans);


    tabs.forEach((tab,index) => {
        const pan =pans[index]
        // console.log(pan);
        tab.onclick=function(e){
            // console.log(e.target.parentElement.parentElement)
            item01=e.target.parentElement.parentElement
            item01.querySelector(".tab01.active").classList.remove("active");
            item01.querySelector(".tabop.active").classList.remove("active");

            pan.classList.add("active")
            tab.classList.add("active");
            
        }
        
    });
    // phaanf 2
    const coprimg = $$(".tab-item");
    const infos = $$(".tab-pane");

    coprimg.forEach((tab,index) => {
        const info =infos[index];
        // console.log(info);

        tab.onmouseover=function(e){
            item02=e.target.parentElement.parentElement.parentElement
            // console.log(item02)
            item02.querySelector(".tab-item.active").classList.remove("active");
            item02.querySelector(".tab-pane.active").classList.remove("active");
            
            tab.classList.add("active")
            info.classList.add("active")
            
        };
   
    });
};











  



// const product =$$(".produ");

// for(var i=0;i<product.length;++i){
    
//     product[i].onmouseover=function(e){
//         //console.log(e.target.parentElement.parentElement);
//         item04=e.target;
//         item04.querySelector(".order").style.display="flex";
//     }
//     product[i].onmouseout=function(e){
//         //console.log(e.target.parentElement.parentElement);
//         item05=e.target;
//         item05.querySelector(".order").style.display="none";
//     }
// }


// product.forEach((prod,index)=>{
//     prod.onclick=function(e){
//         item03=e
//         console.log(item03)
//         // console.log(e.target.parentElement)
//         $(".order").style.display="flex"
//     }
// });

// document.querySelector(".produ").onclick = function(e) {
//     item03=e.target
//     console.log(item03)
//     //console.log(e.target.parentElement)
//     $(".order").style.display="flex";
// };

// $(".produ").onmouseout = function(e) {
//     $(".order").style.display="none";
// };