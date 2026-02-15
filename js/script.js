window.addEventListener("scroll", function(){
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let position = card.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight){
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});
