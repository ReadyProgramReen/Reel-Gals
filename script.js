let menuIcon = document.querySelector('.menu-icon')
let sidebar = document.querySelector('.sidebar') 
let conatiner = document.querySelector('.container') 





menuIcon.onclick = ()=>{
    sidebar.classList.toggle('small-sidebar')
    conatiner.classList.toggle('large-container')
}