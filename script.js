document.addEventListener('DOMContentLoaded', function() {
    const unirseButton = document.getElementById('unirse-comunidad');
    const comprarButton = document.getElementById('comprar-products');

    unirseButton.addEventListener('click', function() {
        window.location.href = "comunidad.html";
    });

    comprarButton.addEventListener('click', function() {
        alert('bienvenido a nuestra comunidad espero disfruten');
        window.location.href = "tienda_online.html";
        
    });
});
