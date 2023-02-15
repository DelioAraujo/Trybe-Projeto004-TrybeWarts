const login = () => {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');
  const entrar = document.querySelector('#btn-entrar');

  entrar.addEventListener('click', () => {
    if (email.value === 'trybe@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos');
    }
  });
};

login();
