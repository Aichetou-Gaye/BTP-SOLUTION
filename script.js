let toggle = document.querySelector('.toggle-menu');
let nav = document.querySelector('.nav');
toggle.onclick = function() {
    toggle.classList.toggle('active');
    nav.classList.toggle('responsive');
}

let name = document.getElementById('name');

        