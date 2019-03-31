// Fonction pour afficher le menu quand on scroll
window.onscroll = function () { scroll()};

function scroll() {
    if (document.documentElement.scrollTop > 885) {
        document.getElementById('header_menu').className = "menu";
    } else {
        document.getElementById('header_menu').className = "";
    }
}