var disp_val = 1;

function dropdown(){
    var display = document.getElementById("dropdown").style;

    var size = screen.width;
    if (size < 460){
        if (disp_val == 1){
            display.display = "block";
            disp_val = 0;
        }
    
        else{
            display.display = "none";
            disp_val = 1;
        }
    }
}

window.addEventListener("resize", function(){
    var win_size = screen.width;
    if (win_size > 460){
        document.getElementById("dropdown").style.display = "inline";
    }
});

function pwd_visible1(){
    var pass1 = document.getElementById("pass1");
    var pwdb = document.getElementById("pwd-b1");
    if (pass1.type == "password"){
        pass1.type = "text";
        pwdb.src = "test_images/blind.png";
    }
    else{
        pass1.type = "password";
        pwdb.src = "test_images/eye.png";
    }
}

function pwd_visible2(){
    var pass1 = document.getElementById("pass2");
    var pwdb = document.getElementById("pwd-b2");

    if (pass1.type == "password"){
        pass1.type = "text";
        pwdb.src = "test_images/blind.png";
    }
    else{
        pass1.type = "password";
        pwdb.src = "test_images/eye.png";
    }
}