const login = () => {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');
  const entrar = document.querySelector('#btn-entrar');

  entrar.addEventListener('click', (event) => {
    event.preventDefault();
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  });
};

login();

// Parte de Maurício abaixo o que for adicionar por favor colocar acima

// 18

const checkbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

submitBtn.disabled = true;

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
