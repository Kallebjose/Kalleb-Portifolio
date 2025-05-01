// Inicializa as partículas
particlesJS('particles-js', {
    particles: {
        number: {
            value: 55,
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
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(response => {
        if (response.ok) {
            form.style.display = 'none'; 
            successMessage.style.display = 'block'; 

           
            setTimeout(() => {
                successMessage.style.display = 'none';
                form.style.display = 'block';
            }, 15000); 
        } else {
            alert("Erro ao enviar a mensagem.");
        }
    })
    .catch(error => alert("Erro ao enviar a mensagem: " + error));
});
const themeToggleButton = document.getElementById("theme-toggle"); // Pega o botão de alternância
const body = document.body; // Pega o body para adicionar ou remover as classes
const slider = themeToggleButton.querySelector(".toggle-btn-slider"); // Pega a bolinha dentro do botão

// Verifica se já existe o tema salvo no localStorage (para lembrar a escolha do usuário)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme); // Se um tema for encontrado, adiciona a classe ao body
    // Atualiza o estado da bolinha com base no tema salvo
    if (savedTheme === 'theme-dark') {
        themeToggleButton.classList.add('active'); // Se tema escuro, ativa o botão
        slider.style.transform = 'translateX(30px)'; // Move a bolinha para a direita
    }
}

themeToggleButton.addEventListener("click", () => {
    // Alterna entre o tema claro e o tema escuro
    if (body.classList.contains("theme-light")) {
        body.classList.remove("theme-light");
        body.classList.add("theme-dark");
        localStorage.setItem('theme', 'theme-dark'); // Salva a escolha do tema
        themeToggleButton.classList.add('active'); // Ativa a bolinha
        slider.style.transform = 'translateX(30px)'; // Move a bolinha para a direita
    } else {
        body.classList.remove("theme-dark");
        body.classList.add("theme-light");
        localStorage.setItem('theme', 'theme-light'); // Salva a escolha do tema
        themeToggleButton.classList.remove('active'); // Desativa a bolinha
        slider.style.transform = 'translateX(0)'; // Move a bolinha para a esquerda
    }
});
