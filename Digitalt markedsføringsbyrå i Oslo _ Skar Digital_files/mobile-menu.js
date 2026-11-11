document.addEventListener("DOMContentLoaded", function () {
    var burger = document.getElementById("hamburger");
    var modal = document.getElementById("myModal");
        
    if (burger) {
        burger.addEventListener("click", function () {
            burger.classList.toggle("is-active");
            
            // Toggle modal visibility
            if (burger.classList.contains("is-active")) {
                modal.style.display = "block";
                document.body.classList.add("no-scroll");
            } else {
                modal.style.display = "none";
                document.body.classList.remove("no-scroll");
            }
        });
    }
});