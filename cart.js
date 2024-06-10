let cartData=JSON.parse(localStorage.getItem("cart-data"))

console.log(cartData)

cartData.forEach((ele,i) => {
    let container = document.getElementById("container")
    let box=document.createElement("div")
    
    let name =document.createElement("h4")
    name.innerText = ele.name
    
    let username = document.createElement("p")
    username.innerText=ele.username
    
    let email=document.createElement("h6")
    email.innerText=ele.email
    
    let btn=document.createElement("button")
    btn.innerText="Remove"
    btn.addEventListener("click",function(){
        RemoveData(ele)
    })
   
    
    box.append(name,username,email,btn)
    container.append(box)
  
    })


    function RemoveData(ele){
        cartData.splice(i,1)
    }