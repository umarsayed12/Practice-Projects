let inp = document.getElementById("inp");
let messages = document.getElementById("pass");
let lencon = document.getElementById("len");
let special = document.getElementById("special");
let digcon = document.getElementById("dig");
let uppercon = document.getElementById("upper");
let guide = document.getElementById("guid");
inp.addEventListener("input",() => {
    const pattern = /[^a-zA-Z0-9\s]/;
    if(inp.value.length < 8){
        messages.innerHTML = "Password is WEAK!";
        messages.style.color = "#ff0000";
        inp.style.borderColor = "#ff0000";
    } 
    if(inp.value.length > 8){
        lencon.remove();
        messages.innerHTML = "Password is OKAY!";
        messages.style.color = "#fdda0d";
        inp.style.borderColor = "#fdda0d";
    }
    if((/[A-Z]/.test(inp.value))){
        uppercon.remove();
    }
    if((/\d/.test(inp.value))){
        digcon.remove();
    }
    
    if(pattern.test(inp.value)){
        special.remove();
    }
    if((inp.value.length > 8) && (/[A-Z]/.test(inp.value)) && ((/\d/.test(inp.value))) && (pattern.test(inp.value))){
        messages.innerHTML = "Password is STRONG!";
        messages.style.color = "#00ff00";
        inp.style.borderColor = "#00ff00";
    }
    if(inp.value.length == 0){
        messages.innerHTML="";
        inp.style.borderColor = "";
        guide.appendChild(lencon);
        guide.appendChild(special);
        guide.appendChild(digcon);
        guide.appendChild(uppercon);
    }

});