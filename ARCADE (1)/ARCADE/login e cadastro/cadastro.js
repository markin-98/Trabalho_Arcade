const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

const username = document.getElementById("usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const data = document.getElementById("data");

function isUsernameTaken(username) {
  return listaUsuarios.some((user) => user.usernameCad == username);
}

function isEmailTaken(email) {
  return listaUsuarios.some((user) => user.emailCad == email);
}

function cadastrar() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const dataValue = data.value.trim();

  if (!usernameValue || !emailValue || !passwordValue || !dataValue) {
    alert("Preencha todos os campos antes de cadastrar.");
    return;
  }

  if (isUsernameTaken(usernameValue) || isEmailTaken(emailValue)) {
    alert("Usuário ou Email já cadastrado! Verifique suas credenciais.");
  } else {
    listaUsuarios.push({
      usernameCad: usernameValue,
      emailCad: emailValue,
      passwordCad: passwordValue,
      dataCar: dataValue,
    });

    // Armazenar a lista atualizada no Local Storage
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

    window.location.href = "../login e cadastro/login.html";
  }

  // Limpar os campos do formulário
  username.value = "";
  email.value = "";
  password.value = "";
  data.value = "";
}

// Adicionar event listener para impedir o cadastro ao pressionar Enter
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    cadastrar();
  }
});
