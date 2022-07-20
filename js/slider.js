const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tabs =$$(".tab-item");
const pane =$$(".tab-pane");

const line = $(".tabs .line");  
const tabActive = $(".tab-item.active");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";


var vtri;
tabs.forEach((tab,index)=>{
  const pan= pane[index];
  // console.log([tab.classList.value])

  tab.onclick= function(){
    clearInterval(timeout)
    auto(index);
    // console.log(index); 
    $(".tab-pane.active").classList.remove("active");
    $(".tab-item.active").classList.remove("active");

    this.classList.add("active");
    pan.classList.add("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

 
    
  
  }


})




var index=0,time = 1000 ;
var timeout;
function auto(index){
  timeout=setInterval( () => {
  
    tabs[index].classList.remove('active');
    pane[index].classList.remove('active');
    index++;
    if (index === tabs.length) index = 0;
  
    tabs[index].classList.add('active');
    pane[index].classList.add('active');
  
    line.style.left = tabs[index].offsetLeft + "px";
    line.style.width = tabs[index].offsetWidth + "px";
  
  }, time);
  
}

auto(index);

