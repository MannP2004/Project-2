const faqs=document.querySelectorAll(".m-4");

faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    });
});
$(document).ready(function() {
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 100){
            $("header").addClass("scrolledHeader");
        }else{
            $("header").removeClass("scrolledHeader");
        }
    });

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});