// ================================
// VARIABLES GLOBALES
// ================================
const phoneNumber = "5659644304";
const emailAddress = "consultoriaempresarialsadecv@gmail.com";
const whatsappNumber = "5659644304";
const companyName = "Consultoría Integral SC";
const address = "Ciudad de México, CDMX";
const websiteUrl = window.location.href;

// ================================
// BASE DE DATOS DE SERVICIOS
// ================================
const servicesData = {
    tramites: {
        icon: "📋",
        title: "Trámites Administrativos",
        description: "Facilitamos todos tus trámites administrativos con eficiencia y profesionalismo. Ahorra tiempo y evita complicaciones.",
        features: [
            { icon: "🏢", text: "Constitución de empresas (incluye: Acta constitutiva, Registro público, RFC, e.firma y sello)" },
            { icon: "📝", text: "Creación de personas morales en modalidad S.A.S." },
            { icon: "🛡️", text: "Registro de marca ante el IMPI" },
            { icon: "📋", text: "REPSE (Registro de Empresas Prestadoras de Servicios Especializados)" },
            { icon: "⚖️", text: "Elaboración de contratos civiles" },
            { icon: "🏭", text: "Implementación de Normas ISO y Certificaciones Internacionales" },
            { icon: "🌐", text: "Gestión aduanal completa e inscripción en Padrón de Importadores" }
        ]
    },
    fiscales: {
        icon: "📊",
        title: "Servicios Fiscales",
        description: "Mantén tu empresa en regla con el SAT. Ofrecemos soluciones fiscales integrales para optimizar tu carga tributaria.",
        features: [
            { icon: "💼", text: "Declaraciones mensuales y anuales" },
            { icon: "📈", text: "Planeación fiscal efectiva e inteligente" },
            { icon: "💰", text: "Estrategias fiscales para reducción de carga tributaria" },
            { icon: "👥", text: "Elaboración y timbrado de nómina" },
            { icon: "🔍", text: "Regularización de situación ante el SAT" },
            { icon: "⚖️", text: "Atención de requerimientos del SAT y corrección de errores" },
            { icon: "🌍", text: "Optimización de aranceles y tratados internacionales" }
        ]
    },
    legales: {
        icon: "⚖️",
        title: "Servicios Legales",
        description: "Protege tus intereses con asesoría legal especializada. Te acompañamos en todos tus asuntos jurídicos empresariales.",
        features: [
            { icon: "📜", text: "Elaboración de contratos civiles y de arrendamiento" },
            { icon: "🛡️", text: "Protección legal mediante registro de marcas" },
            { icon: "⚖️", text: "Asesoría legal integral" },
            { icon: "🏭", text: "Implementación de Normas Oficiales Mexicanas (NOM)" },
            { icon: "🔐", text: "Consultoría en gestión de riesgos" },
            { icon: "🤝", text: "Acompañamiento legal, fiscal y financiero" }
        ]
    },
    facturacion: {
        icon: "🧾",
        title: "Facturación y Contabilidad",
        description: "Servicios contables integrales y facturación electrónica para cumplir con todas tus obligaciones sin complicaciones.",
        features: [
            { icon: "💻", text: "Elaboración y timbrado de nómina" },
            { icon: "📊", text: "Servicios contables integrales" },
            { icon: "📈", text: "Elaboración de estados financieros" },
            { icon: "🔍", text: "Auditoría y análisis de situación real de la empresa" },
            { icon: "📋", text: "Registro y organización de operaciones económicas" },
            { icon: "✅", text: "Cumplimiento de obligaciones contables sin complicaciones" }
        ]
    },
    financieros: {
        icon: "💰",
        title: "Servicios Financieros",
        description: "Optimiza tus recursos financieros con nuestra asesoría especializada. Tomamos decisiones estratégicas basadas en datos.",
        features: [
            { icon: "📊", text: "Estados financieros y análisis de situación financiera" },
            { icon: "💹", text: "Asesorías para toma de decisiones de financiamiento" },
            { icon: "📉", text: "Estrategias para reducción de costos de producción" },
            { icon: "💵", text: "Asesorías para fijación de precios en productos y servicios" },
            { icon: "📈", text: "KPI's (Indicadores Clave de Rendimiento)" },
            { icon: "🎯", text: "Control de inventarios y reducción de mermas" },
            { icon: "💼", text: "Modelo financiero para proyectos y cálculo de margen de ganancia" }
        ]
    },
    incubadora: {
        icon: "🚀",
        title: "Incubadora de Negocios",
        description: "Transforma tu idea en un negocio exitoso. Te acompañamos desde la conceptualización hasta el lanzamiento y crecimiento.",
        features: [
            { icon: "💡", text: "Acompañamiento paso a paso desde la idea hasta la validación" },
            { icon: "📋", text: "Elaboración de planes de negocio completos (Resumen ejecutivo, Estudio de mercado, Estrategia de marketing, Plan financiero)" },
            { icon: "🎯", text: "Validación real de tu idea en el mercado" },
            { icon: "🚀", text: "Apoyo para crear tu primer MVP (Producto Mínimo Viable)" },
            { icon: "🤝", text: "Mentorías personalizadas y soporte continuo" },
            { icon: "🏢", text: "Asesoría en constitución de sociedades (S.A. DE C.V., S.A.P.I, S. DE R.L. DE C.V.)" },
            { icon: "📊", text: "Diagnóstico completo del negocio y estrategia personalizada" }
        ]
    },
    pyme: {
        icon: "🏦",
        title: "Financiamiento PYME",
        description: "Despacho especializado para PYMES y MIPYMES con paquetes accesibles desde $2,400 mensuales (IVA incluido).",
        features: [
            { icon: "💰", text: "Estrategias fiscales para reducción de carga" },
            { icon: "📈", text: "Asesorías para toma de decisiones de financiamiento" },
            { icon: "📉", text: "Estrategias para reducción de costos de producción" },
            { icon: "🚀", text: "Consultoría para crecimiento empresarial" },
            { icon: "💼", text: "Planeación fiscal efectiva para ahorro" },
            { icon: "💵", text: "Paquetes desde $2,400 mensuales (IVA incluido)" }
        ]
    }
};

// ================================
// FUNCIONES DE MODALES
// ================================
function showModal(message) {
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('messageModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('messageModal').style.display = 'none';
}

function closeServiceModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

function showServiceDetails(serviceId) {
    console.log('🔍 Mostrando servicio:', serviceId);
    const service = servicesData[serviceId];

    if (!service) {
        console.error('❌ Servicio no encontrado:', serviceId);
        return;
    }

    const featuresHTML = service.features.map(feature => `
        <div class="service-feature-item">
            <div class="service-feature-icon">${feature.icon}</div>
            <div class="service-feature-text">${feature.text}</div>
        </div>
    `).join('');

    const modalContent = `
        <div class="service-modal-header">
            <div class="service-modal-icon">${service.icon}</div>
            <div>
                <div class="service-modal-title">${service.title}</div>
            </div>
        </div>
        <div class="service-modal-description">
            ${service.description}
        </div>
        <div class="service-modal-features">
            <h4>✨ ¿Qué incluye?</h4>
            ${featuresHTML}
        </div>
        <div class="service-modal-cta">
            <button class="btn btn-secondary" onclick="contactForService('${service.title}')">
                📱 Consultar
            </button>
            <button class="btn btn-primary" onclick="closeServiceModal()">
                ✓ Cerrar
            </button>
        </div>
    `;

    document.getElementById('serviceModalContent').innerHTML = modalContent;
    document.getElementById('serviceModal').style.display = 'block';
    console.log('✅ Modal de servicio mostrado');
}

function contactForService(serviceName) {
    const message = encodeURIComponent(`¡Hola! Me interesa conocer más sobre el servicio de *${serviceName}* de ${companyName}. ¿Podrían proporcionarme más información?`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    closeServiceModal();
}

// ================================
// FUNCIONES DE CONTACTO
// ================================
function callPhone() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        window.location.href = `tel:${phoneNumber}`;
    } else {
        navigator.clipboard.writeText(phoneNumber).then(() => {
            showModal(`📞 Número copiado: ${phoneNumber}`);
        }).catch(() => {
            showModal(`📞 Llama al: ${phoneNumber}`);
        });
    }
}

function sendEmail() {
    const subject = encodeURIComponent(`Contacto desde ${companyName}`);
    const body = encodeURIComponent('Hola, me interesa conocer más sobre sus servicios de consultoría.');
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
}

function openWhatsApp() {
    const message = encodeURIComponent(`¡Hola! Me interesa conocer más sobre los servicios de ${companyName}. Vi su tarjeta digital y me gustaría obtener información sobre sus servicios de consultoría.`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

function openFacebook() {
    const facebookUrl = 'https://www.facebook.com/profile.php?id=61578821236039';
    window.open(facebookUrl, '_blank');
}

function openInstagram() {
    const instagramUrl = 'https://www.instagram.com/lomanconsultoria2025/profilecard/?igsh=aGhrbnN3MGY1bnNh';
    window.open(instagramUrl, '_blank');
}

// ================================
// FUNCIÓN GENERACIÓN QR
// ================================
function generateQR() {
    console.log('🚀 === GENERANDO QR PARA BLAZOR ===');

    const currentUrl = window.location.href;
    console.log('🔗 URL para QR:', currentUrl);

    const qrContainer = document.getElementById('qrContainer');
    const qrCanvas = document.getElementById('qrCode');
    const qrContent = document.getElementById('qrContent');

    if (!qrContainer) {
        console.error('❌ No se encontró qrContainer');
        return;
    }

    const qrSize = 120;

    if (qrContent) {
        qrContent.innerHTML = `
            <div style="font-size: 12px; margin-bottom: 8px; color: #666;">⏳</div>
            <div style="font-weight: 600; font-size: 12px; color: #333;">Generando QR...</div>
            <div style="font-size: 10px; opacity: 0.7; margin-top: 4px; color: #888;">Conectando con servidor</div>
        `;
    }

    if (qrCanvas) {
        qrCanvas.style.display = 'none';
    }

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

        const img = new Image();
        img.crossOrigin = 'anonymous';

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

            if (qrImageElement && qrImageElement.parentNode) {
                qrImageElement.remove();
            }

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
            `;

            img.alt = 'Código QR - Tarjeta Digital';
            img.id = 'qrImage';

            if (qrContent) {
                qrContainer.insertBefore(img, qrContent);
            } else {
                qrContainer.appendChild(img);
            }

            qrImageElement = img;

            if (qrContent) {
                qrContent.innerHTML = `
                    <div style="font-size: 0px; color: black;"></div>
                `;
            }

            console.log('✅ QR insertado correctamente');
        };

        img.onerror = function () {
            console.log(`❌ Falló API: ${api.name}`);

            if (qrContent) {
                qrContent.innerHTML = `
                    <div style="font-size: 12px; margin-bottom: 8px; color: #ff9800;">⚠️</div>
                    <div style="font-weight: 600; font-size: 12px; color: #333;">Reintentando...</div>
                    <div style="font-size: 10px; opacity: 0.7; margin-top: 4px; color: #888;">
                        Servidor ${apiIndex + 1} no disponible
                    </div>
                `;
            }

            setTimeout(() => tryQRAPI(apiIndex + 1), 1000);
        };

        const timeoutId = setTimeout(() => {
            if (!img.complete) {
                console.log(`⏰ Timeout en API: ${api.name}`);
                img.src = '';
                tryQRAPI(apiIndex + 1);
            }
        }, 8000);

        img.addEventListener('load', () => clearTimeout(timeoutId));
        img.addEventListener('error', () => clearTimeout(timeoutId));

        img.src = api.url;
    }

    function showQRFallback() {
        console.log('🎯 Mostrando fallback QR');

        if (qrImageElement && qrImageElement.parentNode) {
            qrImageElement.remove();
        }

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

        fallbackDiv.onclick = function () {
            copyLink();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        };

        if (qrContent) {
            qrContainer.insertBefore(fallbackDiv, qrContent);
        } else {
            qrContainer.appendChild(fallbackDiv);
        }

        if (qrContent) {
            qrContent.innerHTML = `
                <div style="font-size: 11px; color: #4CAF50; margin-top: 12px; text-align: center; line-height: 1.4; font-weight: 500;">
                    🚀 <strong>¡Toca el botón verde!</strong><br>
                    <span style="color: #666; font-size: 10px;">para copiar el enlace de tu tarjeta</span>
                </div>
            `;
        }

        console.log('✅ Fallback QR mostrado');
    }

    setTimeout(() => tryQRAPI(), 500);
}

// ================================
// FUNCIONES DE COMPARTIR
// ================================
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
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showModal('🔗 ¡Enlace de la tarjeta digital copiado al portapapeles!');
        } catch (err) {
            showModal(`🔗 Enlace de tu tarjeta digital:\n\n${currentUrl}\n\nCopia este enlace para compartir tu tarjeta completa con diseño interactivo.`);
        }
        document.body.removeChild(textArea);
    });
}

// ================================
// EFECTOS Y ANIMACIONES
// ================================
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

function restartServiceAnimations() {
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceIcons = document.querySelectorAll('.service-icon');

    serviceItems.forEach(item => {
        item.style.animation = 'none';
        void item.offsetWidth;
        item.style.animation = 'slideInUp 0.8s ease-out, servicePulse 6s ease-in-out infinite 2s';
    });

    serviceIcons.forEach(icon => {
        icon.style.animation = 'none';
        void icon.offsetWidth;
        icon.style.animation = 'iconAutoRotate 8s ease-in-out infinite';
    });
}

// ================================
// EVENT LISTENERS
// ================================
window.onclick = function (event) {
    const messageModal = document.getElementById('messageModal');
    const serviceModal = document.getElementById('serviceModal');

    if (event.target == messageModal) {
        closeModal();
    }
    if (event.target == serviceModal) {
        closeServiceModal();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('📱 Inicializando tarjeta digital Blazor...');
    console.log('🌐 URL actual:', window.location.href);

    // Verificar que showServiceDetails está disponible
    console.log('✅ Función showServiceDetails disponible:', typeof showServiceDetails === 'function');

    // Inicializar partículas
    setInterval(createFloatingParticle, 3000);

    // Inicializar QR
    setTimeout(() => {
        console.log('🚀 Iniciando generación de QR...');
        generateQR();
    }, 1000);

    // Configurar efectos hover
    setTimeout(() => {
        const serviceItems = document.querySelectorAll('.service-item');
        console.log('🎯 Servicios encontrados:', serviceItems.length);

        serviceItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.style.animationPlayState = 'paused';
                const icon = item.querySelector('.service-icon');
                if (icon) {
                    icon.style.animationPlayState = 'paused';
                }
            });

            item.addEventListener('mouseleave', () => {
                item.style.animationPlayState = 'running';
                const icon = item.querySelector('.service-icon');
                if (icon) {
                    icon.style.animationPlayState = 'running';
                }
            });
        });
    }, 500);

    // Configurar observer
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const icon = item.querySelector('.service-icon');
                item.style.animationPlayState = 'running';
                if (icon) {
                    icon.style.animationPlayState = 'running';
                }
            }
        });
    }, observerOptions);

    setTimeout(() => {
        const serviceItems = document.querySelectorAll('.service-item');
        serviceItems.forEach(item => {
            serviceObserver.observe(item);
        });
    }, 1000);

    // Reiniciar animaciones periódicamente
    setInterval(function () {
        const serviceIcons = document.querySelectorAll('.service-icon');
        serviceIcons.forEach((icon, index) => {
            const item = icon.closest('.service-item');
            if (item && !item.matches(':hover')) {
                setTimeout(() => {
                    const animation = icon.style.animation;
                    icon.style.animation = 'none';
                    void icon.offsetWidth;
                    icon.style.animation = animation || 'iconAutoRotate 8s ease-in-out infinite';
                }, index * 200);
            }
        });
    }, 25000);
});

window.addEventListener('load', () => {
    console.log('🏁 Ventana cargada completamente');

    const elements = document.querySelectorAll('.service-item, .contact-item');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) rotateX(0deg)';
        }, index * 100);
    });

    setTimeout(() => {
        const qrImage = document.getElementById('qrImage');
        const qrFallback = document.getElementById('qrFallback');

        if (!qrImage && !qrFallback) {
            console.log('🔄 QR no detectado, reintentando...');
            generateQR();
        } else {
            console.log('✅ QR verificado correctamente');
        }
    }, 3000);

    setInterval(restartServiceAnimations, 30000);
});

// Hacer funciones disponibles globalmente
window.showServiceDetails = showServiceDetails;
window.contactForService = contactForService;
window.regenerateQR = generateQR;

console.log('✅ Script home.js cargado completamente');