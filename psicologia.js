  // Función para redirigir al contacto
  function irAContacto() {
    window.location.href = "contacto.html";
}

// Función para redirigir al inicio
function irAInicio() {
  
        window.location.href = "index.html";
    }


// Función para redirigir a la página "Sobre mí"
function irASobreMi() {
    window.location.href = "sobremi.html";
}

function irAInfo1() {
    window.location.href = "info1.html";
}
function irAInfo2() {
    window.location.href = "info2.html";
}
function irAInfo3() {
    window.location.href = "info3.html";
}
function navigateTo(page) {
    window.location.href = page; // Redirige a la página indicada
}

    // Función para redirigir al contacto
    function irAContacto() {
        window.location.href = "contacto.html";
    }

    function irAInicio() {
        window.location.href = "index.html";
    }

    function enviarCorreo(event) {
        event.preventDefault(); // Evita que se recargue la página
    
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;
    
        const asunto = encodeURIComponent("Nuevo mensaje desde la web");
        const cuerpo = encodeURIComponent(
            `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`
        );
    
        // Cambia TU_EMAIL@DOMINIO.COM por tu correo real
        window.location.href = `mailto:TU_EMAIL@DOMINIO.COM?subject=${asunto}&body=${cuerpo}`;
    }
        // Funciones de navegación
        function irAInicio() {
            window.location.href = 'index.html';
        }

        function irAContacto() {
            window.location.href = 'contacto.html';
        }

        function navigateTo(page) {
            window.location.href = page;
        }

        function irAInfo1() {
            window.location.href = 'info1.html';
        }

        function irAInfo2() {
            window.location.href = 'info2.html';
        }

        function irAInfo3() {
            window.location.href = 'info3.html';
        }

        // Menú móvil
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('active');
        }

        function closeMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.remove('active');
        }

        // Cerrar menú móvil al hacer clic fuera
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            
            if (!mobileMenu.contains(event.target) && !toggle.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
