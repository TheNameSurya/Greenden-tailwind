//selecting the side nav bar //
var sidenav = document.getElementById("sidenav")
var Menubar = document.getElementById("menubar")
var Xdelete = document.querySelector(".text-right")

Menubar.addEventListener("click", function () {
    sidenav.style.right = 0
})

Xdelete.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//Search bar 

var productcontainer = document.getElementById("productcontainer");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredvalue = event.target.value.toUpperCase();
    
    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h1").textContent.toUpperCase();

        if (productname.indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});