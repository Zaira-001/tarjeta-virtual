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

    // Intentar abrir cliente de email nativo
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
    // Reemplaza esta URL con tu página real de Facebook
    const facebookUrl = 'https://www.facebook.com/profile.php?id=61578821236039';
    window.open(facebookUrl, '_blank');
}

// Función para abrir Instagram
function openInstagram() {
    // Reemplaza esta URL con tu perfil real de Instagram
    const instagramUrl = 'https://www.instagram.com/lomanconsultoria2025/profilecard/?igsh=aGhrbnN3MGY1bnNh';
    window.open(instagramUrl, '_blank');
}

// Función para generar código QR que comparte la tarjeta digital completa
function generateQR() {
    console.log('🔄 Generando QR automáticamente...');

    // El QR contendrá la URL completa de la tarjeta digital
    // Esto asegura que quien escanee vea toda la tarjeta con su diseño completo
    const fullCardUrl = window.location.href;

    try {
        // Generar QR con la URL completa
        const qr = new QRious({
            element: document.getElementById('qrCode'),
            value: fullCardUrl,
            size: 120,
            background: 'white',
            foreground: '#333',
            level: 'M', // Nivel medio es suficiente para URLs
            padding: 10
        });

        // Cambiar el contenido después de generar
        setTimeout(() => {
            const qrContent = document.getElementById('qrContent');
            if (qrContent) {
                qrContent.innerHTML = `
                    <div style="font-size: 9px; color: #666; margin-top: 5px; line-height: 1.3; text-align: center;">
                    </div>`;
            }
        }, 100);

        console.log('✅ QR generado exitosamente');

    } catch (error) {
        console.error('❌ Error generando QR:', error);
        // Fallback con API externa
        generateQRWithAPI();
    }
}

// Función de respaldo usando API externa (AGREGAR ESTA FUNCIÓN)
function generateQRWithAPI() {
    console.log('🔄 Generando QR con API externa...');

    const qrElement = document.getElementById('qrCode');
    const qrContent = document.getElementById('qrContent');
    const currentUrl = window.location.href;

    if (qrElement && qrContent) {
        // Ocultar canvas
        qrElement.style.display = 'none';

        // Crear imagen con API
        const img = document.createElement('img');
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(currentUrl)}`;
        img.style.cssText = 'width: 120px; height: 120px;';
        img.alt = 'Código QR - Tarjeta Digital';

        img.onload = function () {
            // Insertar imagen antes del contenido
            qrElement.parentNode.insertBefore(img, qrContent);

            // Actualizar contenido
            qrContent.innerHTML = `
                <div style="font-size: 9px; color: #666; margin-top: 5px; line-height: 1.3; text-align: center;">
                </div>
            `;

            console.log('✅ QR generado con API externa');
        };

        img.onerror = function () {
            qrContent.innerHTML = `
                <div style="font-size: 12px; color: #ff6b6b; text-align: center; padding: 10px;">
                    ⚠️<br>
                    <strong>Error</strong><br>
                    <span style="font-size: 10px;">No se pudo generar el QR</span><br>
                    <button onclick="generateQR()" style="margin-top: 8px; padding: 4px 8px; font-size: 10px; border: 1px solid #ff6b6b; background: white; color: #ff6b6b; border-radius: 4px; cursor: pointer;">
                        Reintentar
                    </button>
                </div>
            `;
        };
    }
}

// Función mejorada para compartir en WhatsApp (incluye la URL de la tarjeta)
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

// Función para copiar enlace con mensaje mejorado
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
        // Fallback para navegadores que no soportan clipboard API
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

// Función adicional para obtener información completa para compartir
function getFullCardInfo() {
    return {
        url: window.location.href,
        company: companyName,
        phone: phoneNumber,
        email: emailAddress,
        address: address,
        description: "Consultoría con visión a la cultura de servicio",
        services: [
            "Trámites Administrativos",
            "Servicios Fiscales",
            "Servicios Legales",
            "Facturación 4.0",
            "Servicios Financieros",
            "Incubadora de Negocios",
            "Financiamiento PYME"
        ]
    };
}

// Función para verificar si la tarjeta se está viendo correctamente
function validateCardDisplay() {
    // Verificar que todos los elementos importantes estén visibles
    const requiredElements = [
        '.company-name',
        '.services-section',
        '.contact-section',
        '.social-section'
    ];

    const allElementsPresent = requiredElements.every(selector =>
        document.querySelector(selector) !== null
    );

    if (allElementsPresent) {
        console.log('✅ Tarjeta digital cargada correctamente - Lista para compartir');
        return true;
    } else {
        console.log('⚠️ Algunos elementos de la tarjeta no están cargados correctamente');
        return false;
    }
}

// Función para generar enlace de vista previa
function generatePreviewLink() {
    const baseUrl = window.location.href;
    const previewParams = new URLSearchParams({
        preview: 'true',
        company: companyName,
        phone: phoneNumber,
        email: emailAddress
    });

    return `${baseUrl}?${previewParams.toString()}`;
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById('messageModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Efecto de partículas adicional
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

// Crear partículas flotantes cada cierto tiempo
setInterval(createFloatingParticle, 3000);

// EJECUTAR AUTOMÁTICAMENTE AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', () => {
    console.log('📱 Inicializando tarjeta digital...');
    console.log('🌐 URL actual:', window.location.href);

    setTimeout(() => {
        validateCardDisplay();

        // Verificar si QRious está disponible antes de generar
        if (typeof QRious !== 'undefined') {
            generateQR();
        } else {
            console.log('⚠️ QRious no disponible inmediatamente, esperando...');
            setTimeout(() => {
                if (typeof QRious !== 'undefined') {
                    generateQR();
                } else {
                    console.log('⚠️ QRious no se cargó, usando fallback');
                    generateQRWithAPI();
                }
            }, 1000);
        }
    }, 500);

    // Agregar efectos hover a los elementos de servicio
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-3px) scale(1.02)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Verificación adicional al cargar completamente la ventana
window.addEventListener('load', () => {
    // Animación de carga con delay escalonado
    const elements = document.querySelectorAll('.service-item, .contact-item');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) rotateX(0deg)';
        }, index * 100);
    });

    // Verificar si el QR se generó correctamente
    setTimeout(() => {
        const canvas = document.getElementById('qrCode');
        if (canvas && (!canvas.style.display || canvas.style.display !== 'none')) {
            const context = canvas.getContext('2d');
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const isEmpty = imageData.data.every(pixel => pixel === 0);

            if (isEmpty) {
                console.log('🔄 Canvas vacío, regenerando QR...');
                generateQR();
            }
        }
    }, 500);
});