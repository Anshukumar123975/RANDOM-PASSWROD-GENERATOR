const inputs=document.querySelector(".input p");
const generate =document.querySelector(".input button")
function random(){
    let a=Math.floor(Math.random()*70);
    return a;
}

var up="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
var lc="abcdefghijklmnopqrstuvwxyz";
var number="1234567890";
var sc="!@#$%^&*()";
function update(){
    var str="";
    for(let i=0;i<10;i++){
        str+=up[random()];
    }
    return str;
}
generate.addEventListener("click", () => {
    inputs.innerHTML=update();
})