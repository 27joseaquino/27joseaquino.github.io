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

// Função 6: Mudar a imagem de perfil ao passar o mouse
const profileImg = document.getElementById('profileImg');
profileImg.addEventListener('mouseover', function () {
    profileImg.src = 'myphoto.svg'; // Substitua por outro caminho de imagem
});
profileImg.addEventListener('mouseout', function () {
    profileImg.src = 'myphoto2.svg'; // Volta para a imagem original
});

// Função 7: Exibir data e hora atual no rodapé
function showDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('pt-BR');
    dateTimeElement.innerText = `Data: ${formattedDate} | Hora: ${formattedTime}`;
}
setInterval(showDateTime, 1000); // Atualiza a cada segundo

// Função 8: Contador de projetos completados
let projectsCompleted = localStorage.getItem('projectsCompleted') || 0;
function updateProjects() {
    projectsCompleted++;
    localStorage.setItem('projectsCompleted', projectsCompleted);
    document.getElementById('projectsCompleted').innerText = `Projetos completados: ${projectsCompleted}`;
}
// Simulação: incremento de projetos após 5 segundos para testar (remova este timeout em produção)
setTimeout(updateProjects, 5000);

// Função existente: Toggle para modo escuro
const toggle = document.getElementById('colorToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
