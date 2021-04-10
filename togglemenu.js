function toggleMenu() {
    document.getElementById('top-nav-bar').classList.toggle('closed');
}
var x= document.getElementById('hamburgerBtn');
        x.onclick = toggleMenu;