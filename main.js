var svgcircle = document.getElementById("svgcircle");
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var step5 = document.getElementById("step5");

var main = document.getElementById("main");
main.style.backgroundImage = "url(img-1.jpg)";

var userBox = document.getElementById("userBox");

step1.addEventListener('click',()=>{
    svgcircle.style.strokeDashoffset = "1005.2";
    main.style.backgroundImage = "url(img-2.jpg)";
    userBox.style.top ="-350px";
});
step2.addEventListener('click',()=>{
    svgcircle.style.strokeDashoffset = "753.9";
    main.style.backgroundImage = "url(img-3.jpg)";
    userBox.style.top ="-800px";
});
step3.addEventListener('click',()=>{
    svgcircle.style.strokeDashoffset = "502.6";
    main.style.backgroundImage = "url(img-4.jpg)";
    userBox.style.top ="-1250px";
});
step4.addEventListener('click',()=>{
    svgcircle.style.strokeDashoffset = "251.3";
    main.style.backgroundImage = "url(img-5.jpg)";
    userBox.style.top ="-1700px";
});
step5.addEventListener('click',()=>{
    svgcircle.style.strokeDashoffset = "0";
    main.style.backgroundImage = "url(img-1.jpg)";
    userBox.style.top ="100px";
});