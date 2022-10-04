
window.onload = confirmAllLinks;





function confirmLink() {
    return confirm("¿Estas seguro que quiere visitar el sitio: " + this.href + "?");
}



function confirmAllLinks() {
    for (var i = 0; i < document.links.length; i++){
        document.links[i].onclick = confirmLink;
    }
}