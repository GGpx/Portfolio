// Fonction pour afficher le menu quand on scroll
window.onscroll = function () { scroll()};

function scroll() {
    if (document.documentElement.scrollTop > 920) {
        document.getElementById('header_menu').className = "menu";
    } else {
        document.getElementById('header_menu').className = "";
    }
}




// Fonction pour mettre les barres en dessous des liens sur la barre de menu pendant le scroll

// var lien_nav = document.getElementsByClassName('lien_nav');

// for(i = 0; i > lien_nav.lengh ; i++){
//     if(document.documentElement.scrollTop > 1900){
//         liens_nav[1].style.textDecoration = "underline white";
//     }
// }


