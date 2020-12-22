//корзина
document.getElementsByClassName("sushik")[0].addEventListener("click", function(){
    window.scrollTo(0, document.querySelector(".cart--area").offsetTop);
});
// меню
document.getElementsByClassName("oury")[0].addEventListener("click", function(){
    window.scrollTo(0, document.querySelector(".sushi-area").offsetTop);
});
// акции
document.getElementsByClassName("acti")[0].addEventListener("click", function(){
    window.scrollTo(0, document.querySelector(".Stocks").offsetTop);
});
document.getElementsByClassName("contact")[0].addEventListener("click", function(){
    window.scrollTo(0, document.querySelector(".page-footer").offsetTop);
});