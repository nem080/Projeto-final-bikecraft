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