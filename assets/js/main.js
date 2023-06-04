var btnMenu = document.querySelector('.menu_none')
var listMenu = document.querySelector('.menu_list--mobie')
var btnClose = document.querySelector('.btl_close')
console.log(btnMenu);
console.log(listMenu)

btnMenu.addEventListener('click',function(){
    listMenu.style.display = "block";
})

btnClose.addEventListener('click',function(){
    listMenu.style.display = "none";
})