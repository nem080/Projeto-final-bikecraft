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

