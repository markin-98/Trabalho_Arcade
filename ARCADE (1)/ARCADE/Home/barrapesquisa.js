var jogos = ["Counter Strike", "Battlefield", "The Sims", "Overwatch", "PAYDAY", "Stardew Valley", "The Walking Dead", "Rainbow Six", "The Witcher", "Hollow Knight", "Grand Chase", "Minecraft", "Dark Souls", "Black Desert", "Assassin's Creed"];

function pesquisar() {
    let input = document.getElementById("searchBar").value;
    input = input.toLowerCase();   
   
    for (i = 0; i < jogos.length; i++){
        if (jogos[i].toLowerCase().includes(input)){
            alert(jogos[i]);
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const storedData = JSON.parse(localStorage.getItem("apiData"));

    document.querySelectorAll('.genre-button').forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar a navegação padrão do link

            const generoSelecionado = this.innerText.toLowerCase();

            // Filtrar os jogos com base no gênero selecionado
            const jogosFiltrados = storedData.filter((jogo) => jogo.genero.toLowerCase().includes(generoSelecionado));

            // Salvar os jogos filtrados no localStorage
            localStorage.setItem("jogosPorGenero", JSON.stringify(jogosFiltrados));

            // Redirecionar para a página de gênero
            window.location.href = this.href;
        });
    });
});











    
    
