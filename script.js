// Inicializa as partículas
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80, // Número de partículas
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff" // Cor das partículas (branco)
        },
        shape: {
            type: "circle", // Formato das partículas
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5, // Opacidade das partículas
            random: false,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5, // Tamanho maior das partículas
            random: true,
            anim: {
                enable: true,
                speed: 10, // Velocidade de animação
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff", // Cor das linhas
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "repulse", // Efeito ao passar o mouse
            },
            onclick: {
                enable: true,
                mode: "push" // Efeito ao clicar
            }
        }
    },
    retina_detect: true
});
// Acessando o formulário e a mensagem de sucesso
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    // Prevenindo o envio do formulário caso algum campo esteja vazio
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Se algum campo estiver vazio, exibe um alerta e impede o envio
    if (name === '' || email === '' || message === '') {
        event.preventDefault(); // Impede o envio do formulário
        alert('Por favor, preencha todos os campos!');
    } else {
        // Se todos os campos estiverem preenchidos, exibe a mensagem de sucesso
        event.preventDefault(); // Evita que o formulário seja enviado de fato
        successMessage.style.display = 'block'; // Exibe a mensagem de sucesso

        // Após 3 segundos, redireciona para a página inicial ou recarrega
        setTimeout(function() {
            // Caso queira redirecionar para a página inicial:
            window.location.href = '/'; // Substitua '/' pela URL da sua página inicial
            
            // Caso queira recarregar a página atual:
            // location.reload(); 
        }, 3000); // Atraso de 3 segundos antes de redirecionar
    }
});