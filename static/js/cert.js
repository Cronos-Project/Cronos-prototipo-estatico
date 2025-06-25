const certificar = document.querySelectorAll(".certificar");

certificar.forEach((input, idx) => {
    input.addEventListener('input', (e) => {
        
        input.value = input.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 1);

        if (input.value.length === 1 && certificar[idx + 1]) {
            certificar[idx + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && idx > 0) {
            certificar[idx - 1].focus();
        }
    });

    input.addEventListener('paste', (e) => {
        e.preventDefault();
        const paste = (e.clipboardData || window.clipboardData).getData('text');
        paste.split('').forEach((char, i) => {
            if (certificar[idx + i]) {
                certificar[idx + i].value = char;
            }
        });
        
        for (let i = idx; i < certificar.length; i++) {
            if (certificar[i].value === '') {
                certificar[i].focus();
                break;
            }
        }
    });
});