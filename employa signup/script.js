
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');
  
  menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });

  function pwdOpen(){
    var togpwd = document.getElementById("pwd-eyeO");
    var inpp = document.getElementById("password");
    var inp = inpp.querySelector("input");
    if (inp.type == "password"){
        togpwd.src = "eye.png";
        inp.type = "text";
    }
    else{
        togpwd.src = "blind.png";
        inp.type = "password";
    }
}

function pwdOpen1(){
    var togpwd = document.getElementById("conf-pwd-eyeO");
    var inpp = document.getElementById("confirm-password");
    var inp = inpp.querySelector("input");
    if (inp.type == "password"){
        togpwd.src = "eye.png";
        inp.type = "text";
    }
    else{
        togpwd.src = "blind.png";
        inp.type = "password";
    }
}