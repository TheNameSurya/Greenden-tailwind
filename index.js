//selecting the side nav bar //
var sidenav = document.getElementById("sidenav")
var Menubar = document.getElementById("menubar")
var Xdelete=document.querySelector(".text-right")

Menubar.addEventListener("click", function () {
    sidenav.style.right = 0
})

Xdelete.addEventListener("click",function(){
    sidenav.style.right= "-50%"
})