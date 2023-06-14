//nút hiện thị menu mobie 
var btnMenu = document.querySelector('.menu_none')
//menu moibe
var listMenu = document.querySelector('.menu_list--mobie')
//  nut x đóng menu mobie
var btnClose = document.querySelector('.btl_close')

//
var body = document.getElementById('app')
var opacity = body.querySelectorAll(':not(.menu_list--mobie)')
console.log(opacity);
// console.log(btnMenu);
// console.log(listMenu)

btnMenu.addEventListener('click',function(){
    listMenu.style.display = "block";
    body.style.opacity ="0.5"
})

btnClose.addEventListener('click',function(){
    listMenu.style.display = "none";
    body.style.opacity ="1"
})