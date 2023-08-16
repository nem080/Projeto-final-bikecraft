const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const resposta = pergunta.nextElementSibling;
        if (resposta.style.display === 'block') {
            resposta.style.display = 'none';
            
        } else{
            resposta.style.display = 'block';
            pergunta.style.borderRadius = "8px 8px 0 0"
            resposta.style.backgroundColor = 'var(--cor-10)'
            resposta.style.borderRadius =" 0 0 8px 8px"
            resposta.style.color = "var(--cor-2)"
            setaAbrir.style.display = 'none'
            setaFechar.style.display ='inline-block'
        }
    });
});


// const perguntas = document.querySelectorAll('.pergunta');

// perguntas.forEach(pergunta => {
//     const setaAbrir = pergunta.querySelector('.setaAbrir');
//     const setaFechar = pergunta.querySelector('.seta-fechar');
//     const resposta = pergunta.nextElementSibling;

//     pergunta.addEventListener('click', () => {
//         if (resposta.style.display === 'block') {
//             resposta.style.display = 'none';
//             setaAbrir.style.display = 'inline-block';
//             setaFechar.style.display = 'none';
//             pergunta.style.borderRadius = "8px";
//             resposta.style.backgroundColor = 'transparent';
//             resposta.style.color = "inherit";
//         } else {
//             resposta.style.display = 'block';
//             setaAbrir.style.display = 'none';
//             setaFechar.style.display = 'inline-block';
//             pergunta.style.borderRadius = "8px 8px 0 0";
//             resposta.style.backgroundColor = 'var(--cor-7)';
//             resposta.style.borderRadius = "0 0 8px 8px";
//             resposta.style.color = "var(--cor-1)";
//         }
//     });
// });
