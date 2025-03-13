
document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const cardContainer = document.getElementById('card-container');
            let cardsHtml = '';

            data.forEach(card => {
                cardsHtml += `
                    <div class="card">
                        <img src="${card.imagem}" alt="${card.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${card.titulo}</h5>
                            <p class="card-text">${card.descricao}</p>
                            <p class="card-text"><small>Fonte: ${card.fonte}</small></p>
                            <button class="btn" onclick="abrirPopUp('${encodeURIComponent(card.titulo)}', 
                                                                     '${encodeURIComponent(card.descricao)}', 
                                                                     '${encodeURIComponent(JSON.stringify(card.ingredientes))}', 
                                                                     '${encodeURIComponent(JSON.stringify(card.modopreparo))}')">
                                Detalhes
                            </button>
                        </div>
                    </div>
                `;
            });

            cardContainer.innerHTML = cardsHtml;
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
            alert('Falha ao carregar os dados. Tente novamente mais tarde.');
        });
});

// Função para abrir o pop-up com ingredientes e modo de preparo
function abrirPopUp(titulo, descricao, ingredientes, modopreparo) {
    titulo = decodeURIComponent(titulo);
    descricao = decodeURIComponent(descricao);
    ingredientes = JSON.parse(decodeURIComponent(ingredientes));
    modopreparo = JSON.parse(decodeURIComponent(modopreparo));

    const popup = window.open("", "popup", "width=500,height=600");
    popup.document.write(`
        <html>
            <head>
                <title>${titulo}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; text-align: left; }
                    h2 { color: #333; text-align: center; }
                    h3 { color: #555; margin-top: 15px; }
                    ul { padding-left: 20px; }
                    p { font-size: 16px; }
                    button { display: block; margin: 20px auto; padding: 10px 15px; background: #ff6600; color: white; border: none; cursor: pointer; border-radius: 5px; }
                </style>
            </head>
            <body>
                <h2>${titulo}</h2>
                <p><strong>Descrição:</strong> ${descricao}</p>

                <h3>Ingredientes:</h3>
                <ul>
                    ${ingredientes.map(item => `<li>${item}</li>`).join('')}
                </ul>

                <h3>Modo de Preparo:</h3>
                <ol>
                    ${modopreparo.map(item => `<li>${item}</li>`).join('')}
                </ol>

                <button onclick="window.close()">Fechar</button>
            </body>
        </html>
    `);
}
