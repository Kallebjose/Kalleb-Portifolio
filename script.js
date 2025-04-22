// Inicializa as partículas
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 90,
                density: {
                    enable: true,
                    value_area: 650
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: true,
                    speed: 10,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 4,
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
                    mode: "grab",
                },
                onclick: {
                    enable: true,
                    mode: "push"
                }
            }
        },
        retina_detect: true
    });

// Acessando o formulário e a mensagem de sucesso
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Adicionando um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(event) {
    // Prevenindo o envio do formulário caso algum campo esteja vazio
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Se algum campo estiver vazio, exibe um alerta e impede o envio
    if (name === '' || email === '' || message === '') {
        event.preventDefault();
        alert('Por favor, preencha todos os campos!');
    } else {
        event.preventDefault(); // Impede o envio real do formulário
        successMessage.style.display = 'block'; // Exibe a mensagem de sucesso

        // Após 3 segundos, redireciona para a página inicial
        setTimeout(function() {
            window.location.href = 'index.html'; // Redireciona para "index.html"
        }, 3000); // Atraso de 3 segundos antes de redirecionar
    }
});
