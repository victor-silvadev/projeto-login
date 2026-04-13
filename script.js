function alternar() {
    // 1. Pegamos os elementos (Login, Cadastro e a Seção principal)
    const login = document.querySelector('.bloco-login'); 
    const cadastro = document.getElementById('bloco-cadastro');
    const secao = document.getElementById('login');

    // 2. Verificamos se o Login está visível (se não tem a classe 'escondido')
    if (!login.classList.contains('escondido')) {
        
        // --- SAINDO DO LOGIN -> INDO PARA CADASTRO ---
        login.classList.add('escondido'); // Inicia o fade-out do login
        
        setTimeout(() => {
            cadastro.classList.remove('escondido'); // Inicia o fade-in do cadastro
            secao.classList.add('modo-cadastro');  // Inverte a imagem no PC
        }, 500); // 500ms é o tempo exato que definimos no CSS

    } else {
        
        // --- SAINDO DO CADASTRO -> VOLTANDO PARA LOGIN ---
        cadastro.classList.add('escondido'); // Inicia o fade-out do cadastro
        
        setTimeout(() => {
            login.classList.remove('escondido'); // Inicia o fade-in do login
            secao.classList.remove('modo-cadastro'); // Volta a imagem no PC
        }, 500);
    }
}

function alternar() {
    const login = document.querySelector('.bloco-login'); 
    const cadastro = document.getElementById('bloco-cadastro');
    const secao = document.getElementById('login');

    // Seleciona os elementos da imagem
    const titulo = document.querySelector('.imagem h1');
    const texto = document.querySelector('.imagem .P p');

    if (!login.classList.contains('escondido')) {
        login.classList.add('escondido');
        
        setTimeout(() => {
            cadastro.classList.remove('escondido');
            secao.classList.add('modo-cadastro');

            // Muda o conteúdo para o modo cadastro
            titulo.textContent = 'Bem-vindo!';
            texto.textContent = 'Crie sua conta e comece a interagir com o nosso site totalmente do zero.';
        }, 400);

    } else {
        cadastro.classList.add('escondido');
        
        setTimeout(() => {
            login.classList.remove('escondido');
            secao.classList.remove('modo-cadastro');

            // Restaura o conteúdo original
            titulo.textContent = 'Ola!';
            texto.textContent = 'Seja bem-vindo(a) novamente. Faça login para acessar sua conta e poder fazer as configuraçoes no seu ambiente';
        }, 500);
    }
}