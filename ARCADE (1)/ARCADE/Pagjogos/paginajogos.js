const urlParams = new URLSearchParams(window.location.search);
    const jogoId = urlParams.get('id');

    // Recuperar dados do LocalStorage
    const storedData = JSON.parse(localStorage.getItem("apiData"));

    // Encontrar o jogo com base no ID
    const jogoSelecionado = storedData.find(jogo => jogo.id == jogoId);

    // Atualizar os elementos HTML com os dados do jogo
    document.getElementById("jogoImagem").src = jogoSelecionado.imagem;
    document.getElementById("jogoNome").textContent = jogoSelecionado.nome;
    document.getElementById("jogoDescricao").textContent = jogoSelecionado.descricao;

    // Verificar se o trailer é do YouTube
    const trailerElement = document.getElementById("jogoTrailer");
    if (jogoSelecionado.trailer.includes("youtube.com")) {
        // Extrair o código do vídeo do link do YouTube
        const videoCode = jogoSelecionado.trailer.split('v=')[1];
        // Construir o link incorporado do YouTube
        const embedLink = `https://www.youtube.com/embed/${videoCode}`;
        // Definir o atributo src do iframe
        trailerElement.src = embedLink;
    } else {
        // Se não for do YouTube, usar o link diretamente
        trailerElement.src = jogoSelecionado.trailer;
    }
    document.getElementById("jogoNoticias").textContent = jogoSelecionado.noticias;
    const comentariosContainer = document.getElementById("comentariosContainer");
    jogoSelecionado.comentarios.forEach(comentario => {
        const comentarioElement = document.createElement("div");
        comentarioElement.className = "comentario";
        comentarioElement.textContent = comentario;
        comentariosContainer.appendChild(comentarioElement);
    });    
    





 
