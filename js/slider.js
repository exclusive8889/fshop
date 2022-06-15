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
    
    // console.log(index); 
    $(".tab-pane.active").classList.remove("active");
    $(".tab-item.active").classList.remove("active");

    this.classList.add("active");
    pan.classList.add("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";


    
  
  }


})




var index=0,time = 3000 ;
// console.log(tabs[3])
setInterval( () => {
  
  tabs[index].classList.remove('active');
  pane[index].classList.remove('active');
  index++;
  if (index === tabs.length) index = 0;

  tabs[index].classList.add('active');
  pane[index].classList.add('active');

  line.style.left = tabs[index].offsetLeft + "px";
  line.style.width = tabs[index].offsetWidth + "px";

}, time);








//console.log(slinext);



// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");



// const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");


// requestIdleCallback(function () {
//   line.style.left = tabActive.offsetLeft + "px";
//   line.style.width = tabActive.offsetWidth + "px";
// });

// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     $(".tab-item.active").classList.remove("active");
//     $(".tab-pane.active").classList.remove("active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//   };
// });
