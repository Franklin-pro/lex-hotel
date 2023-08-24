
function navOpen(){
    let navlinks = document.querySelector('.nav-links');
    if(navlinks.className==='nav-links'){
        navlinks.classList+=" active"
    }else{
        navlinks.className = 'nav-links';
    }

}

function tap(){
    let date = Date();
    document.querySelector('.opt').innerHTML = date;

}
function check(){

    document.querySelector('.model').style.display="block";
}
function lead(){
    document.querySelector('.yewe').style.display="block";
   
}
 function dark(){
document.querySelector('.home').style.   backgroundColor="#0606078c";
document.querySelector('.about-container').style.backgroundColor = "black";
document.querySelector('.contact-container').style.backgroundColor = "black";
document.querySelector('.card-container').style.backgroundColor = "black";
document.querySelector('.garelly-container').style.backgroundColor = "black";
document.querySelector('.service-container').style.backgroundColor = "black";
document.querySelector('.forms').style.backgroundColor = "#041331";
document.querySelector('.text p').style.color = "#fff";
document.querySelector('.yewe').style.color = "#fff";
document.querySelector('.optt').style.color = "#fff";
}
function light(){
    document.querySelector('.home').style.backgroundColor= "transparent";
    document.querySelector('.contact-container').style.backgroundColor = "#fff4f485";
    document.querySelector('.about-container').style.backgroundColor = "#fff4f485";
    document.querySelector('.card-container').style.backgroundColor = "#fff4f485";
    document.querySelector('.garelly-container').style.backgroundColor = "#fff4f485";
    document.querySelector('.service-container').style.backgroundColor = "#fff4f485";
    document.querySelector('.forms').style.backgroundColor = "#fcf8f8c9";
    document.querySelector('.text p').style.color = "#fff";
    document.querySelector('.yewe').style.color = "#fff";
    document.querySelector('.optt').style.color = "#fff";
    }



    function im1(){
        document.querySelector('.gara').style.display="none";
        document.querySelector('.gar').style.display="flex";
        document.querySelector('.garal').style.display="none";
        document.querySelector('#dot1').style.backgroundColor="rgb(236, 169, 43)";
        document.querySelector('#dot2').style.backgroundColor="white";
        document.querySelector('#dot3').style.backgroundColor="white";
      }

function im2(){
    document.querySelector('.gara').style.display="flex";
    document.querySelector('.gar').style.display="none";
    document.querySelector('.garal').style.display="none";
    document.querySelector('#dot2').style.backgroundColor="#ee5e32";
    document.querySelector('#dot1').style.backgroundColor="white";
    document.querySelector('#dot3').style.backgroundColor="white";
  }
  function im3(){
    document.querySelector('.garal').style.display="flex";
    document.querySelector('.gara').style.display="none";
    document.querySelector('.gar').style.display="none";
    document.querySelector('#dot3').style.backgroundColor="lightgreen";
    document.querySelector('#dot1').style.backgroundColor="white";
    document.querySelector('#dot2').style.backgroundColor="white";
  }

  function reg(){
    let regi = document.querySelector('.register').style.display="flex";
    let regis = document.querySelector('.logins').style.display="none";
   let regia = document.querySelector('.dd').style.display="none";
    let regie = document.querySelector('.de').style.display="flex";
    let reg = document.querySelector('.loginse h1').style.display="none";
 
  }


  function log(){
    let regi = document.querySelector('.register').style.display="none";
    let regis = document.querySelector('.logins').style.display="flex";
    let regia = document.querySelector('.dd').style.display="block";
    let regie = document.querySelector('.de').style.display="none";

  }

  function login(){
    

  }
  
  function taps(){
    let date = Date();
    document.querySelector('.check-in').innerHTML = date;
 
    document.querySelector('.check-in').style.color="orange";
}


let username = document.querySelector('.username')
let email = document.querySelector('.email')
let pwd = document.querySelector('.pwd')

let form = document.querySelector('form');

let get = JSON.parse(localStorage.getItem(get)) || []

form.addEventListener("submit", (e)=>{
  e.preventDefault()

  let obs={
    username: username.value,
    pwd: pwd.value,
    email:email.value

  }

  if(get.find((check)=>check.email == email.value)){
    alert("already exist try another email")
  }
  else{
    get.push(obs);
    let strngfile = JSON.stringify(get)
    localStorage.setItem("get", strngfile);
  }
})

