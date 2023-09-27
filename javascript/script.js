// ativar links da nav 
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if(url=== href) {
        link.classList.add('ativo');
    }
}
links.forEach(ativarLink);

//  ativar item de orçamento 

const parametros = new URLSearchParams( location.search);


function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    elemento.checked = true;
    console.log(elemento);
}

parametros.forEach(ativarProduto);



// galeria de imgs das bicicletas Nimbus.
// const galeria = document.querySelectorAll('.bicicleta-imagens img');
// const galeriaContainer = document.querySelector('.bicicleta-nibus'); 
// // console.log(galeria, galeriaContainer);

// function trocarImagem(event) {
//     const img = event.currentTarget;
//     galeriaContainer.prepend(img)
//     console.log(img);
// }

// function eventosGaleria(img) {
//     img.addEventListener('click', trocarImagem);
// }

// galeria.forEach(eventosGaleria);

// const galeria = document.querySelectorAll('.bicicleta-imagens img');
// const destaqueImagem = document.querySelector('.bicicleta-destaque img');

// function trocarImagem(event) {
//     const img = event.currentTarget;
//     const src = img.getAttribute('src');
//     const destaqueSrc = destaqueImagem.getAttribute('src');
    

//     img.setAttribute('src', destaqueSrc);
//     destaqueImagem.setAttribute('src', src);
// }

// galeria.forEach(function (img) {
//     img.addEventListener('click', trocarImagem);
// });



const galeria = document.querySelectorAll('.bicicleta-imagens img');
const destaqueImagem = document.querySelector('.bicicleta-destaque img');

function trocarImagem(event) {
    const img = event.currentTarget;
    const src = img.getAttribute('src');
    const destaqueSrc = destaqueImagem.getAttribute('src');

    // Verificar a largura da tela
    const media = window.matchMedia("(min-width: 9000px)");

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
