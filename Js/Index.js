const btn_menu=document.getElementById('btn_menu')
const menu=document.getElementById('menu')

btn_menu.addEventListener('click',()=>{
    menu.classList.toggle('ChangeClass')
    btn_menu.classList.contains('fa-bars') ? btn_menu.classList.replace('fa-bars','fa-times') : btn_menu.classList.replace('fa-times','fa-bars')
})

menu.addEventListener('click',()=>{
    menu.classList.toggle('ChangeClass')
})
