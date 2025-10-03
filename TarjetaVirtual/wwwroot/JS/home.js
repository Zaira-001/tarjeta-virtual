// ================================
// VARIABLES GLOBALES
// ================================
const phoneNumber = "5659644304";
const emailAddress = "consultoriaempresarialsadecv@gmail.com";
const whatsappNumber = "5659644304";
const companyName = "Consultoría Integral SC";
const address = "Ciudad de México, CDMX";
const websiteUrl = window.location.href;

// Variables de control para evitar ejecuciones duplicadas
let qrGenerationInProgress = false;
let particleInterval = null;
let animationRestartInterval = null;

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
    const service = servicesData[serviceId];

    if (!service) {
        console.error('Servicio no encontrado:', serviceId);
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
// FUNCIÓN GENERACIÓN QR (OPTIMIZADA)
// ================================
function generateQR() {
    // Prevenir ejecuciones múltiples
    if (qrGenerationInProgress) {
        console.log('QR ya en proceso de generación');
        return;
    }

    qrGenerationInProgress = true;
    const currentUrl = window.location.href;
    const qrContainer = document.getElementById('qrContainer');
    const qrCanvas = document.getElementById('qrCode');
    const qrContent = document.getElementById('qrContent');

    if (!qrContainer) {
        qrGenerationInProgress = false;
        return;
    }

    const qrSize = 120;

    if (qrContent) {
        qrContent.innerHTML = `
            <div style="font-size: 12px; margin-bottom: 8px; color: #666;">⏳</div>
            <div style="font-weight: 600; font-size: 12px; color: #333;">Generando QR...</div>
        `;
    }

    if (qrCanvas) {
        qrCanvas.style.display = 'none';
    }

    // Solo usar una API confiable
    const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(currentUrl)}&format=png&ecc=M&margin=1`;

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = function () {
        const existingQR = document.getElementById('qrImage');
        if (existingQR) existingQR.remove();

        img.style.cssText = `
            width: ${qrSize}px; 
            height: ${qrSize}px; 
            border-radius: 5px;
            display: block;
            margin: 0 auto 15px auto;
        `;

        img.alt = 'Código QR';
        img.id = 'qrImage';

        if (qrContent) {
            qrContainer.insertBefore(img, qrContent);
            qrContent.innerHTML = '';
        } else {
            qrContainer.appendChild(img);
        }

        qrGenerationInProgress = false;
    };

    img.onerror = function () {
        showQRFallback();
        qrGenerationInProgress = false;
    };

    img.src = qrAPI;
}

function showQRFallback() {
    const qrContainer = document.getElementById('qrContainer');
    const existingQR = document.getElementById('qrImage');
    if (existingQR) existingQR.remove();

    const fallbackDiv = document.createElement('div');
    fallbackDiv.id = 'qrFallback';
    fallbackDiv.style.cssText = `
        width: 120px; 
        height: 120px; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        background: #4CAF50; 
        border-radius: 12px; 
        color: white; 
        text-align: center; 
        font-size: 11px; 
        padding: 15px; 
        cursor: pointer;
        margin: 0 auto 15px auto;
    `;

    fallbackDiv.innerHTML = `
        <div>
            <div style="font-size: 32px; margin-bottom: 8px;">📱</div>
            <div style="font-weight: bold; margin-bottom: 6px;">¡Compartir!</div>
            <div style="font-size: 10px;">Toca para copiar</div>
        </div>
    `;

    fallbackDiv.onclick = copyLink;

    const qrContent = document.getElementById('qrContent');
    if (qrContent) {
        qrContainer.insertBefore(fallbackDiv, qrContent);
        qrContent.innerHTML = '';
    } else {
        qrContainer.appendChild(fallbackDiv);
    }
}

// ================================
// FUNCIONES DE COMPARTIR
// ================================
function shareWhatsApp() {
    const currentUrl = window.location.href;
    const shareText = encodeURIComponent(`🏢 *${companyName}*
"Consultoría con visión a la cultura de servicio"

👆 *¡Mira mi tarjeta digital!*
${currentUrl}

📞 ${phoneNumber}
✉️ ${emailAddress}

¡Visita mi tarjeta digital para más información!`);

    const whatsappUrl = `https://wa.me/?text=${shareText}`;
    window.open(whatsappUrl, '_blank');
}

function copyLink() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
        showModal('🔗 ¡Enlace copiado al portapapeles!');
    }).catch(() => {
        showModal(`🔗 Enlace: ${currentUrl}`);
    });
}

// ================================
// EFECTOS OPTIMIZADOS
// ================================
function createFloatingParticle() {
    // Limitar cantidad de partículas
    const existingParticles = document.querySelectorAll('[data-particle]');
    if (existingParticles.length > 3) return;

    const particle = document.createElement('div');
    particle.setAttribute('data-particle', 'true');
    particle.style.cssText = `
        position: fixed;
        width: 3px;
        height: 3px;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: 100%;
        animation: floatUp ${Math.random() * 2 + 2}s linear forwards;
        z-index: 1;
    `;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 4000);
}

// ================================
// INICIALIZACIÓN
// ================================
window.onclick = function (event) {
    const messageModal = document.getElementById('messageModal');
    const serviceModal = document.getElementById('serviceModal');

    if (event.target == messageModal) closeModal();
    if (event.target == serviceModal) closeServiceModal();
}

document.addEventListener('DOMContentLoaded', function () {
    // Generar QR una sola vez
    setTimeout(generateQR, 1000);

    // Iniciar partículas con menos frecuencia
    if (!particleInterval) {
        particleInterval = setInterval(createFloatingParticle, 5000);
    }

    // Configurar servicios con event delegation (más eficiente)
    const servicesList = document.querySelector('.services-list');
    if (servicesList) {
        servicesList.addEventListener('click', function (e) {
            const serviceItem = e.target.closest('.service-item');
            if (serviceItem) {
                const serviceId = serviceItem.getAttribute('onclick').match(/'([^']+)'/)[1];
                showServiceDetails(serviceId);
            }
        });
    }
});

// Funciones globales
window.showServiceDetails = showServiceDetails;
window.contactForService = contactForService;
window.regenerateQR = generateQR;