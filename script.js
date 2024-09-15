// Função 1: Mudar cor do botão quando clicado
const portfolioButton = document.getElementById('portfolioButton');
portfolioButton.addEventListener('click', function () {
    portfolioButton.style.backgroundColor = 'green';
    setTimeout(() => portfolioButton.style.backgroundColor = '#007BFF', 2000); // Volta para a cor original após 2 segundos
});

// Função 2: Animação ao carregar a página
window.onload = function () {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = 1;
    }, 200);
};

// Função 3: Exibir mensagem de boas-vindas personalizada
function welcomeUser() {
    let userName = prompt("Qual é o seu nome?");
    if (userName) {
        document.getElementById('welcome').innerText = `Bem-vindo, ${userName}!`;
    }
}
window.addEventListener('load', welcomeUser);

// Função 4: Contagem de visualizações da página
let pageViews = localStorage.getItem('pageViews') || 0;
pageViews++;
localStorage.setItem('pageViews', pageViews);
document.getElementById('pageViews').innerText = `Você visitou esta página ${pageViews} vezes.`;

// Função 5: Mostrar/ocultar descrição do perfil
const toggleDescriptionButton = document.getElementById('toggleDescription');
const description = document.getElementById('description');

toggleDescriptionButton.addEventListener('click', function () {
    if (description.style.display === 'none') {
        description.style.display = 'block';
        toggleDescriptionButton.innerText = 'Ocultar Descrição';
    } else {
        description.style.display = 'none';
        toggleDescriptionButton.innerText = 'Mostrar Descrição';
    }
});

// Função existente: Toggle para modo escuro
const toggle = document.getElementById('colorToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
