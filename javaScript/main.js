// Fonction pour afficher le menu quand on scroll
window.onscroll = function () { scroll()};

function scroll() {
    if (document.documentElement.scrollTop > 920) {
        document.getElementById('header_menu').className = "menu";
    } else {
        document.getElementById('header_menu').className = "";
    }
}



function scrollBottom() {
    if (document.documentElement.scrollBottom > 2000) {
        document.getElementById('header_menu').className = "sans_menu";
    } else {
        document.getElementById('header_menu').className = "";
    }
}

// Fonction pour mettre les barres en dessous des liens sur la barre de menu pendant le scroll
