document.addEventListener("DOMContentLoaded", function () {
  loadUserProfile();
});

function loadUserProfile() {
  const username = localStorage.getItem("username") || "Nome de Usuário";
  document.getElementById("username").textContent = username;

  document.getElementById("username").textContent = userData.username;
  document.getElementById("profile-picture").src = userData.profilePicture;
}

function saveUserData(userData) {
  localStorage.setItem("userData", JSON.stringify(userData));
}


function changeProfilePicture() {
  document.getElementById("file-input").click();
}

function uploadProfilePicture(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const userData = getUserData();
      userData.profilePicture = e.target.result;
      saveUserData(userData);
      document.getElementById("profile-picture").src = e.target.result;
      alert("Foto de perfil alterada com sucesso!");
    };
    reader.readAsDataURL(file);
  }
}

function editUsername() {
  const userData = getUserData();
  const newUsername = prompt("Digite seu novo nome de usuário:", userData.username);
  if (newUsername !== null) {
    userData.username = newUsername;
    saveUserData(userData);
    document.getElementById("username").textContent = newUsername;
    alert("Nome de usuário alterado com sucesso!");
  }
}

function getUserData() {
  const userData = localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : {
    username: "Nome de Usuário",
    profilePicture: "Foto de Perfil",
  };
}

// Função para logout
function logout() {
  const confirmLogout = confirm("Deseja realmente sair?");
  if (confirmLogout) {
    saveUserData({}); // Limpar os dados do usuário ao fazer logout
    window.location.href = '/ARCADE/login e cadastro/login.html';
  }
}