// // ativar links da nav 
// const links = document.querySelectorAll('.header-menu a');

// function ativarLink(link) {
//     const url = location.href;
//     const href = link.href;
//     if(url=== href) {
//         link.classList.add('ativo');
//     }
// }
// links.forEach(ativarLink);

// //  ativar item de orçamento 

// const parametros = new URLSearchParams( location.search);


// function ativarProduto(parametro) {
//     const elemento = document.getElementById(parametro);
//     elemento.checked = true;
//     console.log(elemento);
// }

// parametros.forEach(ativarProduto);



// const galeria = document.querySelectorAll('.bicicleta-imagens img');
// const destaqueImagem = document.querySelector('.bicicleta-destaque img');

// function trocarImagem(event) {
//     const img = event.currentTarget;
//     const src = img.getAttribute('src');
//     const destaqueSrc = destaqueImagem.getAttribute('src');

//     // Verificar a largura da tela
//     const media = window.matchMedia("(min-width: 9000px)");

//     if (media.matches) {
//         // A tela tem uma largura de pelo menos 1000px, então podemos continuar a troca
//         img.setAttribute('src', destaqueSrc);
//         destaqueImagem.setAttribute('src', src);
//     } else {
//         // A tela está no modo responsivo, não fazemos a troca
//         alert("A tela está no modo responsivo, a troca de imagem está desabilitada.");
//     }
// }

// galeria.forEach(function (img) {
//     img.addEventListener('click', trocarImagem);
// });


// // animação
// if (Window.SimpleAnime) {
//     new SimpleAnime();
//     console.log(SimpleAnime);
// }


// ativar links da nav
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url === href) {
        link.classList.add('ativo');
    }
}
links.forEach(ativarLink);

// seguros ativação
const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', (event) => {
        const resposta = pergunta.nextElementSibling;
        if (resposta.style.display === 'block') {
            resposta.style.display = 'none';
            pergunta.classList.remove('aberta'); // Remova a classe quando a resposta estiver oculta
        } else {
            resposta.style.display = 'block';
            pergunta.style.borderRadius = "8px 8px 0 0"
            resposta.style.backgroundColor = 'var(--cor-10)'
            resposta.style.borderRadius = " 0 0 8px 8px"
            resposta.style.color = "var(--cor-2)"
            pergunta.classList.add('aberta'); // Adicione a classe quando a resposta estiver visível
        }
    });
});



// ativar item de orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
        console.log(elemento);
    }
}

parametros.forEach(ativarProduto);

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const destaqueImagem = document.querySelector('.bicicleta-destaque img');

function trocarImagem(event) {
    const img = event.currentTarget;
    const src = img.getAttribute('src');
    const destaqueSrc = destaqueImagem.getAttribute('src');

    // Verificar a largura da tela
    const media = window.matchMedia("(min-width: 1000px)"); // Corrigi a largura mínima

    if (media.matches) {
        // A tela tem uma largura de pelo menos 1000px, então podemos continuar a troca
        img.setAttribute('src', destaqueSrc);
        destaqueImagem.setAttribute('src', src);
    } else {
        // A tela está no modo responsivo, não fazemos a troca
        alert("A tela está no modo responsivo, a troca de imagem está desabilitada.");
    }
}

galeria.forEach(function (img) {
    img.addEventListener('click', trocarImagem);
});

// animação
if (window.SimpleAnime) { // Corrigi a detecção da classe
    new SimpleAnime();
    console.log(SimpleAnime);
}
