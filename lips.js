let Products={
     Lips:[
        {
            "id":1,
            "img":"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FShade2_71ded7bd-c2aa-4450-913b-bcee9510d594.jpg%3Fv%3D1673627346&w=256&q=75",
            "description":"Limited-Edition La La Love 18HR Liquid Lipstick - 02 Scarlet Smitten",
            "price":279,
        },
        {
            "id":2,
            "img":"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FShade4_5136ba1a-dfa5-4779-bae3-87761ab48886.jpg%3Fv%3D1673627360&w=256&q=75",
            "description":"Limited-Edition La La Love 18HR Liquid Lipstick - 04 Mauve Mack",
            "price":400
        },
        {
            "id":3,
            "img":"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FShade3_382d542c-d346-4c1f-8dfb-0351b0d30d3e.jpg%3Fv%3D1673627354&w=256&q=75",
            "description":"Limited-Edition La La Love 18HR Liquid Lipstick - 03 Berry Bliss",
            "price":340
        },
        {
            "id":4,
            "img":"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2Fa_00b52826-78d8-4da0-aba1-fbcbfb39dc33.jpg%3Fv%3D1688228539&w=256&q=75",
            "description":"La La Love 18HR Liquid Lipstick - Set of 3",
            "price":450
        },
        {
            "id":5,
            "img":"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F6_cf018ce6-c7d9-4ebf-9d00-3aa7433d41f0.jpg%3Fv%3D1706542931&w=256&q=75",
            "description":"Limited-Edition La La Love 18HR Liquid Lipstick - 08 Peach Passion",
            "price":768
        },

    
    ],

    
}
// let b=document.querySelector(".float-end");
//    b.addEventListener("click",function(){
//        window.open("bagdata.html","_Self")
// })
let Auth=localStorage.getItem("isAuth")
if(Auth!=="Authenticated"){
    window.location.href="./login.html";
}else{
    localStorage.setItem("isAuth","Not Authenticated")
}
let bagCount=document.querySelector(".bag-count")
let count=0
function Addtocart(data){
    let newId=Math.floor(Math.random()*100)
    data.id=newId
  let cardDetails=JSON.parse(localStorage.getItem("cardDetails"))||[];
  console.log(cardDetails)
  cardDetails.push(data)
  localStorage.setItem('cardDetails',JSON.stringify(cardDetails))
  
}
let lipsCart=document.querySelector(".lips-cart")
function lipsdata(){
Products.Lips.map((data)=>{
    let div=document.createElement("div")
    let img = document.createElement("img");
    let desc=document.createElement("p")
    let price = document.createElement("p")
    img.src=data.img
    img.style.height="150px"
    img.style.width="150px"
    desc.innerText=data.description
    price.innerText=`₹${data.price}`
    let addtocart=document.createElement("button")
    addtocart.innerText="Add to Bag"
    addtocart.addEventListener("click",function(){
        Addtocart(data)
        count++
        bagCount.innerText=count
        localStorage.setItem("count",JSON.stringify(count))
        Addcart()
     })
     div.append(img,desc,price,addtocart)
     lipsCart.append(div)
    })
}
lipsdata()
function Addcart(){
let bag=document.querySelector(".bag")
let floatEnd=document.querySelector(".float-end")
bag.style.border="1px solid red"
bag.style.width="15px"
bag.style.height="15px"
bag.style.borderRadius="100%"
bag.style.backgroundColor="red"
bag.style.position="absolute"
bag.style.top="20%"

}
function sorteddata(ele){
    ele.map((data)=>{
        let div=document.createElement("div")
        let img = document.createElement("img");
        let desc=document.createElement("p")
        let price = document.createElement("p");
        img.src=data.img
        img.style.height="150px"
        img.style.width="150px"
        desc.innerText=data.description
        price.innerText=`₹${data.price}`
        let addtocart=document.createElement("button")
         addtocart.innerText="Add to Bag"
         addtocart.addEventListener("click",function(){
            Addtocart(data)
            count++
            bagCount.innerText=count
            Addcart()
         })
         div.append(img,desc,price,addtocart)
         lipsCart.append(div)
        })
}
function priceHightoLow(){
    fetch('./db.json')
    .then((res)=>res.json())
    .then((ele)=>{
        console.log(ele)
        ele.sort(function(a,b){
            console.log(a.price,b.price)
        return b.price-a.price
        });
        lipsCart.innerHTML=null;
        sorteddata(ele)
    });
}
function priceLowtoHigh(){
    fetch('./db.json')
    .then((res)=>res.json())
    .then((ele)=>{
        console.log(ele)
        ele.sort(function(a,b){
            console.log(a.price,b.price)
        return a.price-b.price
        });
        lipsCart.innerHTML=null;
        sorteddata(ele)
    });
}
