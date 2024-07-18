function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí defines el usuario y la contraseña correctos
    const correctUsername = 'brisarna';
    const correctPassword = 'Kurito';

    if (username === correctUsername && password === correctPassword) {
        // Abre las ventanas con sus respectivos tamaños y posiciones
        window.electronAPI.openNewWindow('gift.html', 600, 600, 170, 500); 
        window.electronAPI.openNewWindow('hearth.html', 400, 400, 370, 110); 
        window.electronAPI.openNewWindow('cat.html', 400, 400, 1150, 110); 
        window.electronAPI.openNewWindow('cart.html', 600, 600, 1150, 500); 
        window.electronAPI.openNewWindow('flower.html', 400, 400, 760, 600); 

        return false; // Evitar que el formulario se envíe
    } else {
        alert('Usuario o contraseña incorrectos');
        return false; // Evitar que el formulario se envíe
    }
}