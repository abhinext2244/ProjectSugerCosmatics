let lips=document.querySelector(".lips");
let lipsPage=document.querySelector(".lips-page")
let eyes=document.querySelector(".eyes")
let eyesPage=document.querySelector(".eyes-page")
let face=document.querySelector(".face")
let facePage=document.querySelector(".face-page")
let skincare=document.querySelector(".skincare")
let skincarePage=document.querySelector(".skincare-page")
let accessorise=document.querySelector(".accessorise")
let accessorisePage=document.querySelector(".accessorise-page")
let gifting=document.querySelector(".gifting")
let giftingPage=document.querySelector(".gifting-page")
let blog=document.querySelector(".blog")
let blogPage=document.querySelector(".blog-page")
lips.addEventListener("mouseover",function(){
   lipsPage.style.scale="1"
})
lips.addEventListener("mouseout",function(){
   lipsPage.style.scale="0"
})
lipsPage.addEventListener("mouseover",function(){
    lipsPage.style.scale="1"
 })
 lipsPage.addEventListener("mouseout",function(){
   lipsPage.style.scale="0"
})
 eyes.addEventListener("mouseover",function(){
   eyesPage.style.scale="1"
})
eyes.addEventListener("mouseout",function(){
    eyesPage.style.scale="0"
 })
 eyesPage.addEventListener("mouseover",function(){
   eyesPage.style.scale="1"
})
eyesPage.addEventListener("mouseout",function(){
  eyesPage.style.scale="0"
})
 face.addEventListener("mouseover",function(){
   facePage.style.scale="1"
})
face.addEventListener("mouseout",function(){
    facePage.style.scale="0"
 })
 facePage.addEventListener("mouseover",function(){
   facePage.style.scale="1"
})
facePage.addEventListener("mouseout",function(){
    facePage.style.scale="0"
 })
 skincare.addEventListener("mouseover",function(){
   skincarePage.style.scale="1"
})
skincare.addEventListener("mouseout",function(){
    skincarePage.style.scale="0"
 })
 skincarePage.addEventListener("mouseover",function(){
   skincarePage.style.scale="1"
})
skincarePage.addEventListener("mouseout",function(){
    skincarePage.style.scale="0"
 })
 accessorise.addEventListener("mouseover",function(){
   accessorisePage.style.scale="1"
})
accessorise.addEventListener("mouseout",function(){
    accessorisePage.style.scale="0"
 })
 accessorisePage.addEventListener("mouseover",function(){
   accessorisePage.style.scale="1"
})
accessorisePage.addEventListener("mouseout",function(){
    accessorisePage.style.scale="0"
 })
 gifting.addEventListener("mouseover",function(){
   giftingPage.style.scale="1"
})
gifting.addEventListener("mouseout",function(){
   giftingPage.style.scale="0"
 })
 giftingPage.addEventListener("mouseover",function(){
   giftingPage.style.scale="1"
})
giftingPage.addEventListener("mouseout",function(){
    giftingPage.style.scale="0"
 })
 blog.addEventListener("mouseover",function(){
   blogPage.style.scale="1"
})
blog.addEventListener("mouseout",function(){
   blogPage.style.scale="0"
 })
 blogPage.addEventListener("mouseover",function(){
   blogPage.style.scale="1"
})
blogPage.addEventListener("mouseout",function(){
    blogPage.style.scale="0"
 })

 const imageurl=[
   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fed482272-4a25-46a7-8708-2106336325db.gif&w=1920&q=75",
   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F19ec57da-b4da-4a18-9f93-745d4f4217da.gif&w=1920&q=75",
   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc5b11d47-5a31-4734-b3c3-7e0018f79ba1.jpg&w=1920&q=75",
   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F2463947b-abca-4deb-bf6c-3fd9267bb12e.jpg&w=1920&q=75",
   "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fb1e298e4-0218-4709-8065-c3a87954edcf.jpg&w=1920&q=75"
 ]
 let Prev=document.querySelector('.Prev')
 let Next=document.querySelector(".Next")
 let slider=document.querySelector(".slider")
 let circle=document.querySelector(".movcir")
 let currentImage=0
 let slidshow=0
 let count=0
function imagemove(){
   count++
   movecircle()
   currentImage++
   if(currentImage>imageurl.length-1){
      currentImage=0
      count=0
      movecircle()
   }
   if(currentImage<0){
      currentImage=imageurl.length-1
      count=imageurl.length-1
      movecircle()
   }
   let img=document.querySelector(".hello")
   img.setAttribute("src",imageurl[currentImage])
   
}
Prev.addEventListener("click",function(){
   count--
   movecircle()
   clearInterval(slidshow)
   slidshow=null
   currentImage--
   
   if(currentImage<0){
      currentImage=imageurl.length-1
      count=imageurl.length-1
      movecircle()
   }
   let img=document.querySelector(".hello")
   img.setAttribute("src",imageurl[currentImage])
   h()
})
Next.addEventListener("click",function(){
   count++
   movecircle()
   clearInterval(slidshow)
   slidshow=null
   currentImage++
   if(currentImage>imageurl.length-1){
      currentImage=0
      count=0
      movecircle()
   }
   let img=document.querySelector(".hello")
   img.setAttribute("src",imageurl[currentImage])
    h()
    
})
function h(){

   if(slidshow){
      clearInterval(slidshow)
   }else{
      slidshow=setInterval(imagemove,1000)
      
   }
}
h()
function movecircle(){
   if(count==0){
      circle.style.marginLeft="0px"
   }else if(count==1){
      circle.style.marginLeft="15px"
   }else if(count==2){
      circle.style.marginLeft="30px"
    }else if(count==3){
      circle.style.marginLeft="43px"
   }else if(count==4){
      circle.style.marginLeft="58px"
   }
}



