const form = document.querySelector('.formLogin');
form.addEventListener('submit', function(e) {
    e.preventDefault();


    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        alert('O e-mail não pode estar vazio.');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Digite um e-mail válido.');
        return;
    }
    if (!senha || senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    
    window.location.href = this.getAttribute('action');
    
    
});