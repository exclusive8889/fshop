var order1='http://localhost:3000/order/';

function ordernow(){
    var name= document.querySelector("#name").value
    var phone= document.querySelector("#phone").value
    var email= document.querySelector("#email").value
    
    const data1 = {
        name: name,
        phone:phone,
        email:email
     };
    //  var cart = localStorage.getItem("cart");
     var cart = JSON.parse(localStorage.getItem("cart"));
     var data ={...data1,cart}
     console.log(data)
    //  const dada1=JSON.stringify(data)
    createOrder(data)
        
}
function createOrder(data,callback){
    var option={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
     };
    console.log(data)
    fetch(order1,option)
        .then(response => response.json())
        .then(callback)

}