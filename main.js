//troca de imagens do fundo//
document.addEventListener("DOMContentLoaded", function () {
    var backgroundContainer = document.querySelector('.frase1');
    var images = ['tampletes/img/banner.jpg', 'tampletes/img/banner2.jpg'];
    var currentIndex = 0;


    // Função para pré-carregar as imagens
    var tempImg = new Image();
    tempImg.src = images[currentIndex];
    tempImg.onload = function () {
        backgroundContainer.style.backgroundImage = 'url(' + images[currentIndex] + ')';
    };

    // Função para alterar o background
    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        var imageUrl = 'url(' + images[currentIndex] + ')';
        backgroundContainer.style.backgroundImage = imageUrl;
    }
    setInterval(changeBackground, 4000);
});


// para realização da transição do texto //
document.addEventListener("DOMContentLoaded", function() {
    const frases = document.querySelectorAll('.frase');
    let index = 0;

    function mostrarProximaFrase() {
        frases[index].classList.remove('mostrar');
        index = (index + 1) % frases.length;
        frases[index].classList.add('mostrar');
    }

    // Mostra a primeira frase ao carregar a página
    frases[index].classList.add('mostrar');

    // Chama a função para trocar as frases a cada 3 segundos (3000 milissegundos)
    setInterval(mostrarProximaFrase, 4000);
});

//enviar por whatsapp//
function enviarInformacoes() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const localColeta = document.getElementById('localColeta').value;
    const localEntrega = document.getElementById('localEntrega').value;
    const tipoProduto = document.getElementById('tipoProduto').value;
    const dataTransporte = document.getElementById('dataTransporte').value;
    
    if (!nome || !telefone || !localColeta || !localEntrega || !tipoProduto || !dataTransporte) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    const mensagem = `
    Nome: ${nome}
    Telefone: ${telefone}
    Local de Coleta: ${localColeta}
    Local de Entrega: ${localEntrega}
    Tipo de Produto: ${tipoProduto}
    Data de Transporte: ${dataTransporte}
    `;

    const mensagemFormatada = encodeURIComponent(mensagem);

    const numeroWhatsApp = '+5541999742398';

    // Cria o link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;

    // Abre a janela do WhatsApp com a mensagem preenchida
    window.open(linkWhatsApp, '_blank');
}