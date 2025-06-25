document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const senha2 = document.getElementById('senha2').value;

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
    if (senha !== senha2) {
        alert('As senhas não coincidem.');
        return;
    }
    this.submit();
    alert('conta validada');
   
});