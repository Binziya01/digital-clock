// let btn=document.querySelector("#btn")
let btn=document.querySelector("#icon")
  btn.addEventListener("click",()=>{
    btn.classList.toggle("fa-sun")

    if(btn.classList.toggle("fa-moon")){
      document.body.style.backgroundColor="black"
      
      document.body.style.color="white"
    }else{
      document.body.style.backgroundColor="white"
      document.body.style.color="yellow"
    }
    
  // if(btn.innerText==="dark"){
  //   btn.innerText="light"
  //   document.body.style.backgroundColor="black"
  //   document.getElementById("clr").style.color="white"
  //   btn.style.backgroundColor="white"
  //   btn.style.color="black"
  // }
  // else if(btn.innerText==="light"){
  //   btn.innerText="dark"
  //   document.body.style.backgroundColor="white"
  //   document.getElementById("clr").style.color="black"
  //   btn.style.backgroundColor="black"
  //   btn.style.color="white"
  // }
  // else{
  //   btn.innerHTML=""
  // }


})




let hours=document.querySelector("#hours")
let minutes=document.querySelector("#min")
let seconds=document.querySelector("#sec")
let section=document.querySelector("#am")

let displayTime=()=>{
  
  
let hrs=new Date().getHours()

let min=new Date().getMinutes()

let sec=new Date().getSeconds()

if(hrs>=12){
  section.innerHTML="PM"
}else{
  section.innerHTML="AM"
}

if(sec < 10){
  sec = "0" + sec
}
if(min < 10){
  min = "0" + min
}

if(hrs < 10){
  hrs="0"+hrs
}

if(hrs>12){
  hrs=hrs-12
}
hours.innerHTML=hrs
minutes.innerHTML=min
seconds.innerHTML=sec
}
setInterval(displayTime,10)