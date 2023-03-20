const passLogin = document.getElementById("submit");
const senha = document.getElementById("senha");
const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;
const email = document.getElementById("email");
const avisoSenha = document.getElementById("aviso-S");
const avisoEmail = document.getElementById("aviso-E");
const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const git = document.querySelector(".git")

  email.addEventListener("click", (e) => {
    e.preventDefault();
    avisoEmail.style.display ="none"
    email.style.border = "2px solid transparent";
  })

  senha.addEventListener("click", (e) => {
    e.preventDefault();
    avisoSenha.style.display ="none"
    senha.style.border = "2px solid transparent";
  })

passLogin.addEventListener("click", (e) => {
  e.preventDefault();
  senha.style.border = "2px solid transparent";
  email.style.border = "2px solid transparent";
  

  if (!emailRegex.test(email.value) && !passwordRegex.test(senha.value)) {

    senha.style.border = "2px solid red";
    email.style.border = "2px solid red";
    avisoEmail.style.display="flex"
    avisoSenha.style.display="flex"

  } else if (!emailRegex.test(email.value) && passwordRegex.test(senha.value)) {

    email.style.border = "2px solid red";
    avisoEmail.style.display="flex"

  } else if (emailRegex.test(email.value) && !passwordRegex.test(senha.value)) {

    senha.style.border = "2px solid red";
    avisoSenha.style.display="flex"

  } else {
    alert("Logado!");
  }
  console.log(emailRegex.test(email.value));
  console.log(passwordRegex.test(senha.value));
});
git.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "https://github.com/login"
})
