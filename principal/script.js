const botaoConfirmar = document.getElementById('submit');
const inputNome = document.getElementById('email');
botaoConfirmar.addEventListener('click', function () {
    inputNome.value = '';
});

const form = document.getElementById('formEmail');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    console.log('Email armazenado:', email);
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    localStorage.setItem('userEmail', email);
    console.log('Email armazenado no localStorage:', email);
});
