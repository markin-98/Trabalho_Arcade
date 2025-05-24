const notificacoes = [
    {
        "id": 1,
        "titulo": "Lançamento",
        "mensagem": "Um novo jogo acaba de ser lançado!",
        "diaEnvio": "segunda",
        "lido": false
    },
    {
        "id": 2,
        "titulo": "Resposta",
        "mensagem": "Alguém respondeu seu comentario",
        "diaEnvio": "segunda",
        "lido": false
    },
    {
        "id": 3,
        "titulo": "Promoção",
        "mensagem": "Um jogo da sua lista de desejos está em promoção",
        "diaEnvio": "segunda",
        "lido": false
    },
    {
        "id": 4,
        "titulo": "Amigos",
        "mensagem": "Você recebeu uma solicitação de amizade",
        "diaEnvio": "segunda",
        "lido": false
    },
    {
        "id": 5,
        "titulo": "Adicionado",
        "mensagem": "Um novo item foi adicionado a sua lista de desejos",
        "diaEnvio": "segunda",
        "lido": false
    },
]

// Armazenando notificações 
try{   
    // Se não houverem dados salvos no localStorage, salvar as notificações no localStorage:
    if(JSON.parse(localStorage.getItem('notificacoes')) === null){
        localStorage.setItem('notificacoes', JSON.stringify(notificacoes));
    }

    const notificacoes_armazenadas = JSON.parse(localStorage.getItem('notificacoes'));
    exibirNotificacoes(notificacoes_armazenadas);
}catch(error){
    console.log(error)
}

// Função para listar notificações do localStorage
function exibirNotificacoes(notificacoes_armazenadas){
    // Primeiro, limpando a seção em que as notificações aparecem
    document.getElementById('notificacoes').innerHTML = '';

    // Percorrer o array de notificações
    notificacoes_armazenadas.forEach((notificacao) => {
        // Apenas as notificações que não estiverem lidas
        if(notificacao.lido !== true){
            // Inserindo notificação na página
            document.getElementById('notificacoes').innerHTML += `
            <div class="notificacao">
                <h2>${notificacao.titulo}</h2>
                <p>${notificacao.mensagem}</p>
                <p>${notificacao.diaEnvio}</p>
                <button id="${notificacao.id}" onclick="marcarNotificacaoLida(event)" class="btn-notificacao">Marcar como lido</button>
            </div>    
            `}
        }
    )}

// Função que vai marcar as notificações lidas
function marcarNotificacaoLida(event){
    const id = event.target.getAttribute('id');

    // Capturando dados armazenados e atribuindo na variáve;
    const notificacoes = JSON.parse(localStorage.getItem('notificacoes'));

    // Percorrendo o array e alterando a propriedade lido da notificação
    notificacoes.forEach((notificacao) => {
        if(notificacao.id === parseInt(id)){
            notificacao.lido = true;
        }
    })

    // Devolvendo o array alterado para localStorage
    localStorage.setItem('notificacoes', JSON.stringify(notificacoes));

    // Recuperando o que foi alterado no localStorage
    const notificacoes_armazenadas = JSON.parse(localStorage.getItem('notificacoes'));
    exibirNotificacoes(notificacoes_armazenadas); // Exbindo notificações
}