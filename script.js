const login = ()=>{
    const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const entrar = document.querySelector("#btn-entrar")


entrar.addEventListener("click", ()=>{
    if(email.value==="trybe@teste.com" && senha.value==="123456"){
        alert("Olá, Tryber!")
    } else {
        alert("Email ou senha inválidos")
    } 
})

}
login();


// Parte de Maurício abaixo o que for adicionar por favor colocar acima

// 18

const checkbox = document.getElementById("agreement");
const submitBtn = document.getElementById("submit-btn");

submitBtn.disabled = true;

checkbox.addEventListener("change", function() {
  if (this.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
