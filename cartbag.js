let store=document.querySelector("#bag-cart")
let cartPrice=document.querySelector("#cart-price")
let mainData=JSON.parse(localStorage.getItem('cardDetails'))||[];
function RemoveFromcart(ele){
    let cardDetails=JSON.parse(localStorage.getItem("cardDetails"))
    console.log(cardDetails)
    let newcart=cardDetails.filter((item)=>{
    return item.id!=ele.id
    })
    console.log(newcart)
    localStorage.setItem("cardDetails",JSON.stringify(newcart))
    store.innerHTML=null
    DisplayProduct(newcart)
    CalculatePrice(newcart)
}
CalculatePrice(mainData)
function CalculatePrice(data){
    let total=data.reduce((acc,ele)=>{
        return acc+ele.price
    },0)
    cartPrice.innerText=`₹${total}`
    
}
let removecount=document.querySelector(".remove-count")
let countremove=JSON.parse(localStorage.getItem("count"))
console.log(countremove)
console.log(mainData)
DisplayProduct(mainData)
function DisplayProduct(Element){
    Element.map((ele)=>{
        let box=document.createElement("div")
        let img=document.createElement("img")
        let desc=document.createElement("p")
        let price=document.createElement("p")
        let RemoveButton=document.createElement("button")
        img.src=ele.img
        img.style.height="150px"
        img.style.width="150px"
        desc.innerText=ele.description
        price.innerText=`₹${ele.price}`
        RemoveButton.innerText="Remove to cart"
        RemoveButton.onclick=function(){
            RemoveFromcart(ele)
            countremove--
            removecount.innerText=countremove
        }
        box.append(img,desc,price,RemoveButton)
        store.append(box)
        removecount.innerText=countremove
        Addcart()
        
    });
}
function Addcart(){
    let bag=document.querySelector(".bag")
    bag.style.border="1px solid red"
    bag.style.width="15px"
    bag.style.height="15px"
    bag.style.borderRadius="100%"
    bag.style.backgroundColor="red"
    bag.style.position="absolute"
    bag.style.top="20%"
    }
    let Order=document.querySelector(".order-btn")
    let processing=document.querySelector(".processing")
    let Failed=document.querySelector(".payment-failed")
    let success=document.querySelector(".payment-success")
    let sucvalue=document.querySelector(".suc-value")
    let failvalue=document.querySelector(".fail-value")
    function processPayment(){
        return new Promise((resolve, reject) => {
            let Success=Math.random()<0.5;
            setTimeout(()=>{
                if(Success){
                    resolve(
                      success.style.display="block"
                    );
                }else{
                    reject(
                        Failed.style.display="block"
                    )
                }
                processing.style.display="none"
               
                
           },1000)
        })
       
    }
    Order.addEventListener("click",function(){
        store.innerHTML=null
        processing.style.display="block"
        processPayment()
        sucvalue.innerText=`Payment of ${cartPrice.innerText} is sent successfully`
        failvalue.innerText=`Payment of ${cartPrice.innerText} is failed`
         Failed.style.display="none"
        success.style.display="none"
    })