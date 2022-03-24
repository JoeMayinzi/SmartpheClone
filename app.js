// VARIABLES
let screen = document.querySelector(".screen");
let touch = document.querySelectorAll(".touch button");
let btnCall = document.querySelector(".call-icon");
let calling = document.querySelector(".calling");
let user = document.querySelector(".user")
let callingTime = document.querySelector(".calling-timing");
let callingBtn = document.querySelector(".btn");
let telephone = document.querySelector(".telephone");
let tarif = document.querySelector(".tarif");
const activationType = document.getElementById("envoyer");
const exit = document.getElementById("exit");
const send = document.getElementById("send");
const sonnerie = new Audio("./sonne_tel_attente.mp3");
//const touchSon = new Audio("./numphone-SF.mp3") sonnerie des touches du clavier
// LOGICS
for (i =0; i < touch.length; i++){
  touch[i].addEventListener(("click"), (e)=>{
    screen.textContent += e.target.id
    //touchSon.play()
  })
}

const timeoutRing = ()=>{
  setTimeout(() => {
    sonnerie.play()
  }, 2000);
}

const screenChecking = ()=>{
  btnCall.addEventListener(("click"), (e)=>{
    if (screen.textContent == "") {
      telephone.style.position = "absolue";
      sonnerie.src = "";
    }else if (screen.textContent !== "*425#"){
      calling.style.position = "absolute"
      user.textContent = screen.textContent
    }
    if(screen.textContent == "*425#") {
      tarif.style.top = 25 + "px";
      sonnerie.src = "";
      send.addEventListener(("click"), (e)=>{
        e.stopPropagation()
        if(activationType.value === 1) {
          console.log("le choix du forfait est de 1")
        }
      })

    }
    timeoutRing()
  })

 exit.addEventListener(("click"), ()=>{
   tarif.style.position = "absolute"
   tarif.style.top = -400 + "px";
   
 })
  callingBtn.addEventListener(("click"), ()=>{
    callingTime.textContent = "Appel terminé";
    sonnerie.src = "";
    setTimeout(() => {
      calling.classList.add("calling-remove");    
      screen.textContent == "";     
    }, 1000);
  })

  
}
screenChecking();