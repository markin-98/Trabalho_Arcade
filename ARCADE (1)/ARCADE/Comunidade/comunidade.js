const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Carregar imagem";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    //gerar nome aleatório
    let username = '';
    var caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 8; i++) {
        username += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    //nome jogo aleatório
    var jogos = ["Counter Strike", "Battlefield", "The Sims", "Overwatch", "PAYDAY", "Stardew Valley", "The Walking Dead", "Rainbow Six", "The Witcher", "Hollow Knight", "Grand Chase", "Minecraft", "Dark Souls", "Black Desert", "Assassin's Creed"];
    let jogoAleatorio = jogos[Math.floor(Math.random() * jogos.length)];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function (e) {
            const readerTarget = e.target;

            const img = document.createElement("img");
            img.src = readerTarget.result;
            img.setAttribute("class", "picture__img");

            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);

            const divImg = document.createElement("div");
            divImg.setAttribute("class", "card");
            divImg.innerHTML = `
                <img src="${img.src}" class="picture__img">
                <div class="card-body">
                    <p class="card-title"><span class="badge" id="username">@${username}</span></p>
                    <p class="card-text"><span id="game">${jogoAleatorio}</span></p>
                </div>
            `
            document.querySelector('.container-card').appendChild(divImg);
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
});
