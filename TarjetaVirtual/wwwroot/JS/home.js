// Variables globales
const phoneNumber = "5659644304";
const emailAddress = "lomanconsultoria2025@gmail.com";
const whatsappNumber = "5659644304";
const companyName = "Consultoría Integral SC";
const address = "Ciudad de México, CDMX";
const websiteUrl = window.location.href;

// Función para mostrar modal
function showModal(message) {
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('messageModal').style.display = 'block';
}

// Función para cerrar modal
function closeModal() {
    document.getElementById('messageModal').style.display = 'none';
}

// Función para llamar por teléfono
function callPhone() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        // Dispositivo móvil - abrir marcador
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // Escritorio - copiar número
        navigator.clipboard.writeText(phoneNumber).then(() => {
            showModal(`📞 Número copiado: ${phoneNumber}`);
        }).catch(() => {
            showModal(`📞 Llama al: ${phoneNumber}`);
        });
    }
}

// Función para enviar email
function sendEmail() {
    const subject = encodeURIComponent(`Contacto desde ${companyName}`);
    const body = encodeURIComponent('Hola, me interesa conocer más sobre sus servicios de consultoría.');
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
}

// Función para abrir WhatsApp
function openWhatsApp() {
    const message = encodeURIComponent(`¡Hola! Me interesa conocer más sobre los servicios de ${companyName}. Vi su tarjeta digital y me gustaría obtener información sobre sus servicios de consultoría.`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Función para abrir Facebook
function openFacebook() {
    const facebookUrl = 'https://www.facebook.com/profile.php?id=61578821236039';
    window.open(facebookUrl, '_blank');
}

// Función para abrir Instagram
function openInstagram() {
    const instagramUrl = 'https://www.instagram.com/lomanconsultoria2025/profilecard/?igsh=aGhrbnN3MGY1bnNh';
    window.open(instagramUrl, '_blank');
}

// FUNCIÓN QR ESPECÍFICA PARA TU HTML BLAZOR
function generateQR() {
    console.log('🚀 === GENERANDO QR PARA BLAZOR ===');

    const currentUrl = window.location.href;
    console.log('🔗 URL para QR:', currentUrl);

    // Buscar los elementos específicos de tu HTML
    const qrContainer = document.getElementById('qrContainer');
    const qrCanvas = document.getElementById('qrCode');
    const qrContent = document.getElementById('qrContent');

    console.log('🎯 Elementos encontrados:');
    console.log('- qrContainer:', !!qrContainer);
    console.log('- qrCanvas:', !!qrCanvas);
    console.log('- qrContent:', !!qrContent);

    if (!qrContainer) {
        console.error('❌ No se encontró qrContainer');
        return;
    }

    // ESTRATEGIA: Reemplazar el canvas con una imagen
    const qrSize = 120;

    // Actualizar contenido de loading
    if (qrContent) {
        qrContent.innerHTML = `
            <div style="font-size: 12px; margin-bottom: 8px; color: #666;">⏳</div>
            <div style="font-weight: 600; font-size: 12px; color: #333;">Generando QR...</div>
            <div style="font-size: 10px; opacity: 0.7; margin-top: 4px; color: #888;">Conectando con servidor</div>
        `;
    }

    // Ocultar canvas original
    if (qrCanvas) {
        qrCanvas.style.display = 'none';
    }

    // Lista de APIs de QR para probar
    const qrAPIs = [
        {
            name: 'QR Server',
            url: `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(currentUrl)}&format=png&ecc=M&margin=1&bgcolor=ffffff&color=333333&qzone=2`
        },
        {
            name: 'QuickChart',
            url: `https://quickchart.io/qr?text=${encodeURIComponent(currentUrl)}&size=${qrSize}&format=png&light=ffffff&dark=333333`
        },
        {
            name: 'Google Charts',
            url: `https://chart.googleapis.com/chart?chs=${qrSize}x${qrSize}&cht=qr&chl=${encodeURIComponent(currentUrl)}&choe=UTF-8&chld=M|1`
        }
    ];

    let qrImageElement = null;

    function tryQRAPI(apiIndex = 0) {
        if (apiIndex >= qrAPIs.length) {
            console.error('❌ Todas las APIs de QR fallaron');
            showQRFallback();
            return;
        }

        const api = qrAPIs[apiIndex];
        console.log(`🔄 Probando API ${apiIndex + 1}/${qrAPIs.length}: ${api.name}`);

        // Crear nueva imagen
        const img = new Image();
        img.crossOrigin = 'anonymous';

        // Actualizar loading con progreso
        if (qrContent) {
            qrContent.innerHTML = `
                <div style="font-size: 12px; margin-bottom: 8px; color: #4CAF50;">🔄</div>
                <div style="font-weight: 600; font-size: 12px; color: #333;">Generando QR...</div>
                <div style="font-size: 10px; opacity: 0.7; margin-top: 4px; color: #888;">
                    Probando servidor ${apiIndex + 1}/${qrAPIs.length}
                </div>
            `;
        }

        img.onload = function () {
            console.log(`✅ QR generado exitosamente con ${api.name}`);

            // Remover imagen anterior si existe
            if (qrImageElement && qrImageElement.parentNode) {
                qrImageElement.remove();
            }

            // Configurar nueva imagen
            img.style.cssText = `
                width: ${qrSize}px; 
                height: ${qrSize}px; 
                border-radius: 5px;
                box-shadow: 0 2px 15px rgba(0,0,0,0.1);
                border: 1px solid #e1e8ed;
                display: block;
                position: relative;
                top: 10px;
                margin: 0 auto 15px auto;
                align-items: center;
            `;

            img.alt = 'Código QR - Tarjeta Digital';
            img.id = 'qrImage';

            // Insertar imagen en el contenedor (antes del qrContent)
            if (qrContent) {
                qrContainer.insertBefore(img, qrContent);
            } else {
                qrContainer.appendChild(img);
            }

            qrImageElement = img;

            // Actualizar contenido informativo
            if (qrContent) {
                qrContent.innerHTML = `
                    <div style="
                        font-size: 0px; 
                        color: black;  
                        text-align: center; 
                    ">
                     
                    </div>
                `;
            }

            console.log('✅ QR insertado correctamente en el DOM');
        };

        img.onerror = function () {
            console.log(`❌ Falló API: ${api.name}, probando siguiente...`);

            // Actualizar loading con error
            if (qrContent) {
                qrContent.innerHTML = `
                    <div style="font-size: 12px; margin-bottom: 8px; color: #ff9800;">⚠️</div>
                    <div style="font-weight: 600; font-size: 12px; color: #333;">Reintentando...</div>
                    <div style="font-size: 10px; opacity: 0.7; margin-top: 4px; color: #888;">
                        Servidor ${apiIndex + 1} no disponible
                    </div>
                `;
            }

            // Probar siguiente API después de un breve delay
            setTimeout(() => {
                tryQRAPI(apiIndex + 1);
            }, 1000);
        };

        // Timeout para APIs lentas (8 segundos)
        const timeoutId = setTimeout(() => {
            if (!img.complete) {
                console.log(`⏰ Timeout en API: ${api.name}`);
                img.src = ''; // Cancelar carga
                tryQRAPI(apiIndex + 1);
            }
        }, 8000);

        // Limpiar timeout si la imagen carga
        img.addEventListener('load', () => clearTimeout(timeoutId));
        img.addEventListener('error', () => clearTimeout(timeoutId));

        // Iniciar carga
        img.src = api.url;
    }

    function showQRFallback() {
        console.log('🎯 Mostrando fallback QR');

        // Remover imagen anterior si existe
        if (qrImageElement && qrImageElement.parentNode) {
            qrImageElement.remove();
        }

        // Crear botón de fallback atractivo
        const fallbackDiv = document.createElement('div');
        fallbackDiv.id = 'qrFallback';
        fallbackDiv.style.cssText = `
            width: ${qrSize}px; 
            height: ${qrSize}px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%); 
            border-radius: 12px; 
            color: white; 
            text-align: center; 
            font-size: 11px; 
            padding: 15px; 
            box-sizing: border-box;
            box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
            cursor: pointer;
            margin: 0 auto 15px auto;
            transition: transform 0.2s ease;
        `;

        fallbackDiv.innerHTML = `
            <div>
                <div style="font-size: 32px; margin-bottom: 8px;">📱</div>
                <div style="font-weight: bold; margin-bottom: 6px; font-size: 12px;">¡Compartir Tarjeta!</div>
                <div style="font-size: 10px; opacity: 0.9; margin-bottom: 8px;">Toca para copiar enlace</div>
                <div style="background: rgba(255,255,255,0.2); border-radius: 6px; padding: 6px 10px; font-size: 10px; font-weight: 600;">
                    📋 COPIAR ENLACE
                </div>
            </div>
        `;

        // Agregar evento click
        fallbackDiv.onclick = function () {
            copyLink();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        };

        // Insertar en el contenedor
        if (qrContent) {
            qrContainer.insertBefore(fallbackDiv, qrContent);
        } else {
            qrContainer.appendChild(fallbackDiv);
        }

        // Actualizar contenido informativo
        if (qrContent) {
            qrContent.innerHTML = `
                <div style="
                    font-size: 11px; 
                    color: #4CAF50; 
                    margin-top: 12px; 
                    text-align: center; 
                    line-height: 1.4;
                    font-weight: 500;
                ">
                    🚀 <strong>¡Toca el botón verde!</strong><br>
                    <span style="color: #666; font-size: 10px;">para copiar el enlace de tu tarjeta</span>
                </div>
            `;
        }

        console.log('✅ Fallback QR mostrado correctamente');
    }

    // Iniciar el proceso
    setTimeout(() => {
        tryQRAPI();
    }, 500);
}

// Función para compartir en WhatsApp
function shareWhatsApp() {
    const currentUrl = window.location.href;
    const shareText = encodeURIComponent(`🏢 *${companyName}*
"Consultoría con visión a la cultura de servicio"

👆 *¡Mira mi tarjeta digital interactiva!*
${currentUrl}

📞 ${phoneNumber}
✉️ ${emailAddress}
📍 ${address}

🏢 *Nuestros Servicios:*
• Trámites Administrativos
• Servicios Fiscales  
• Servicios Legales
• Facturación 4.0
• Servicios Financieros
• Incubadora de Negocios
• Financiamiento PYME

¡Visita mi tarjeta digital para más información y contacto directo!`);

    const whatsappUrl = `https://wa.me/?text=${shareText}`;
    window.open(whatsappUrl, '_blank');
}

// Función para copiar enlace
function copyLink() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
        showModal(`🔗 ¡Perfecto! El enlace de tu tarjeta digital ha sido copiado.

Ahora puedes pegarlo en:
• Mensajes de WhatsApp
• Correos electrónicos  
• Redes sociales
• Firmas digitales
• Cualquier lugar donde quieras compartir tu información profesional

Quien abra el enlace verá tu tarjeta completa con diseño interactivo.`);
    }).catch(() => {
        // Fallback para navegadores antiguos
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showModal('🔗 ¡Enlace de la tarjeta digital copiado al portapapeles!');
        } catch (err) {
            showModal(`🔗 Enlace de tu tarjeta digital:
            
${currentUrl}

Copia este enlace para compartir tu tarjeta completa con diseño interactivo.`);
        }
        document.body.removeChild(textArea);
    });
}

// Cerrar modal al hacer clic fuera
window.onclick = function (event) {
    const modal = document.getElementById('messageModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Efecto de partículas flotantes
function createFloatingParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `hsl(${Math.random() * 360}, 50%, 70%)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.animation = `floatUp ${Math.random() * 3 + 2}s linear forwards`;
    particle.style.zIndex = '1';

    document.body.appendChild(particle);

    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 5000);
}

// Función para reiniciar animaciones automáticamente
function restartServiceAnimations() {
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceIcons = document.querySelectorAll('.service-icon');

    serviceItems.forEach(item => {
        // Reiniciar animación de la tarjeta
        item.style.animation = 'none';
        void item.offsetWidth; // Forzar reflow
        item.style.animation = 'slideInUp 0.8s ease-out, servicePulse 6s ease-in-out infinite 2s';
    });

    serviceIcons.forEach(icon => {
        // Reiniciar animación del icono
        icon.style.animation = 'none';
        void icon.offsetWidth; // Forzar reflow
        icon.style.animation = 'iconAutoRotate 8s ease-in-out infinite';
    });
}

// Función para debug de animaciones
function debugAnimations() {
    console.log('🎭 === ESTADO DE ANIMACIONES ===');
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceIcons = document.querySelectorAll('.service-icon');

    serviceItems.forEach((item, index) => {
        console.log(`Servicio ${index + 1}:`, {
            animation: item.style.animation,
            playState: item.style.animationPlayState
        });
    });

    serviceIcons.forEach((icon, index) => {
        console.log(`Icono ${index + 1}:`, {
            animation: icon.style.animation,
            playState: icon.style.animationPlayState
        });
    });
}

// Función para debug del QR
function debugQRStatus() {
    console.log('🔍 === ESTADO ACTUAL DEL QR ===');
    console.log('qrContainer:', document.getElementById('qrContainer'));
    console.log('qrCanvas:', document.getElementById('qrCode'));
    console.log('qrContent:', document.getElementById('qrContent'));
    console.log('qrImage:', document.getElementById('qrImage'));
    console.log('qrFallback:', document.getElementById('qrFallback'));
    console.log('URL actual:', window.location.href);
}

// EVENTOS PRINCIPALES - INICIALIZACIÓN COMPLETA
document.addEventListener('DOMContentLoaded', function () {
    console.log('📱 Inicializando tarjeta digital Blazor...');
    console.log('🌐 URL actual:', window.location.href);

    // Inicializar partículas
    setInterval(createFloatingParticle, 3000);

    // Inicializar QR después de que Blazor termine de renderizar
    setTimeout(() => {
        console.log('🚀 Iniciando generación de QR...');
        generateQR();
    }, 1000);

    // Configurar efectos hover para servicios con animaciones automáticas
    setTimeout(() => {
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach((item, index) => {
            // Pausar animaciones automáticas al hacer hover
            item.addEventListener('mouseenter', () => {
                item.style.animationPlayState = 'paused';
                const icon = item.querySelector('.service-icon');
                if (icon) {
                    icon.style.animationPlayState = 'paused';
                }
            });

            // Reanudar animaciones automáticas al quitar el hover
            item.addEventListener('mouseleave', () => {
                item.style.animationPlayState = 'running';
                const icon = item.querySelector('.service-icon');
                if (icon) {
                    icon.style.animationPlayState = 'running';
                }
            });
        });
    }, 500);

    // Configurar observer para animaciones cuando entran en vista
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Activar animaciones cuando el elemento es visible
                const item = entry.target;
                const icon = item.querySelector('.service-icon');

                item.style.animationPlayState = 'running';
                if (icon) {
                    icon.style.animationPlayState = 'running';
                }
            }
        });
    }, observerOptions);

    // Observar todos los elementos de servicio
    setTimeout(() => {
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach(item => {
            serviceObserver.observe(item);
        });
    }, 1000);

    // Reiniciar animaciones cada 25 segundos para mantenerlas fluidas
    setInterval(function () {
        const serviceIcons = document.querySelectorAll('.service-icon');

        // Solo reiniciar si no hay hover activo
        serviceIcons.forEach((icon, index) => {
            const item = icon.closest('.service-item');
            if (item && !item.matches(':hover')) {
                setTimeout(() => {
                    const animation = icon.style.animation;
                    icon.style.animation = 'none';
                    void icon.offsetWidth;
                    icon.style.animation = animation || 'iconAutoRotate 8s ease-in-out infinite';
                }, index * 200); // Delay escalonado para efecto de onda
            }
        });
    }, 25000);
});

// Verificación final al cargar la ventana completamente
window.addEventListener('load', () => {
    console.log('🏁 Ventana cargada completamente');

    // Animaciones de entrada con delays escalonados
    const elements = document.querySelectorAll('.service-item, .contact-item');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) rotateX(0deg)';
        }, index * 100);
    });

    // Verificación final del QR
    setTimeout(() => {
        const qrImage = document.getElementById('qrImage');
        const qrFallback = document.getElementById('qrFallback');

        if (!qrImage && !qrFallback) {
            console.log('🔄 QR no detectado después de la carga, reintentando...');
            generateQR();
        } else {
            console.log('✅ QR verificado correctamente');
        }
    }, 3000);

    // Iniciar ciclo de reinicio de animaciones cada 30 segundos
    setInterval(restartServiceAnimations, 30000);
});

// Hacer funciones disponibles globalmente para debug
window.debugAnimations = debugAnimations;
window.restartServiceAnimations = restartServiceAnimations;
window.debugQRStatus = debugQRStatus;
window.regenerateQR = generateQR;