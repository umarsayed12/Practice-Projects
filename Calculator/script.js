let input = document.getElementById('input');
let buttons = document.querySelectorAll('.btn');
let st = "";
let arr = Array.from(buttons);
arr.forEach(element => {
    element.addEventListener("click",(e)=>{
        if(e.target.innerHTML == 'AC'){
            st = '';
            input.value = st;
        }
        else if(e.target.innerHTML == "DEL"){
            st = st.substring(0,(st.length-1));
            input.value = st;
        }
        else if(e.target.innerHTML == "="){
            st = eval(st);
            input.value = st;
        }
        else{
            st+=(e.target.innerHTML);
            input.value = st;
        }
    });
});