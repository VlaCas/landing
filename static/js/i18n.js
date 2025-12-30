(function(){
  const translations = {
    gl: {
      title: 'Fuego Fest - Festival de Música',
      selectors: {
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(1) .p-4 h3': 'Formulario de reserva',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(1) .p-4 p': 'Completa os teus datos para recibir a confirmación por WhatsApp.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h3': 'Tipos de entrada',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(1)': 'Entrada 1 día — €49.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(2)': 'Entrada 3 días — €69.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(3)': 'Abono Todos os días — €89.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(1)': 'Acceso durante un día, inclúe acceso xeral ao recinto e zonas comúns. Pago dentro do festival mediante pulsera cashless.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(2)': 'Acceso durante os días programados. Inclúe vantaxes en puntos de venda e prioridade nas actividades anunciadas.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(3)': 'Acceso completo ao festival durante toda a súa duración. Mellor relación calidade/prezo.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:last-of-type': 'Importante: As entradas oficiais véndense só nos canais autorizados. Garda o correo de compra e mostra o QR no acceso. As devolucións e políticas de saldo cashless publicaranse antes do evento.',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(1) a': 'Área Recreativa de Meira - 42°17\'11"N 8°43\'11"W',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(2) a': '+34 682 135 944',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(3) a': 'contact@fuegofest.es',
        'footer .row > div:nth-child(1) .widget h5': 'Contacto',
        'footer .row > div:nth-child(2) .widget h5': 'Ligazóns rápidas',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(1) a': 'Preventa e entradas',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(2) a': 'Preguntas frecuentes',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(3) a': 'Artistas',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(4) a': 'Galería',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(5) a': 'Comeza en / Horarios',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(6) a': 'Políticas de compra',
        'footer .row > div:nth-child(3) .widget h5': 'Mercar Entradas',
        'footer .row > div:nth-child(3) .widget p': 'Diríxete á nosa plataforma de compra de billetes para obter o teu!',
        '#btn-buy': 'Mercar',
        'footer .row > div:nth-child(3) .widget small': 'Chegarás a unha web de confianza. Estaremos agardándote.',
        '#mainmenu li:nth-child(1) a': 'Artistas',
        '#mainmenu li:nth-child(2) a': 'Preventa',
        '#mainmenu li:nth-child(3) a': 'FAQs',
        '#mainmenu li:nth-child(4) a': 'Galería',
        '#de-carousel .carousel-item:nth-child(1) .btn-main': 'Explorar',
        '#de-carousel .carousel-item:nth-child(1) .lead': 'Celebra con nós un aniversario cheo de música urbana e pop no paraíso de Moaña!',
        '#de-carousel .carousel-item:nth-child(1) h1': 'Isla Samertolomeu Fuego Fest 2026: 5 anos de vibración musical',
        '#de-carousel .carousel-item:nth-child(2) .btn-main': 'Explorar',
        '#de-carousel .carousel-item:nth-child(2) .lead': 'É a túa oportunidade de vivir a música en directo como nunca antes, ser parte dun evento que definirá o futuro da escena musical',
        '#de-carousel .carousel-item:nth-child(2) h1': 'Forma parte da historia musical',
        '#section-artists .wm': 'Artistas',
        '#section-artists h2': '01 Artistas',
        '#section-preorder .wm': 'Preventa',
        '#section-preorder h2': '02 Preventa',
        '#section-faqs #h2faqs': '03 Preguntas frecuentes',
        '#section-faqs .wm': 'FAQs',
        '#section-gallery .wm': 'Galería',
        '#section-gallery h2': '04 Galería',
        '.menu_side_area a.btn-main span': 'Mercar entrada',
        '.carousel-control-prev .sr-only': 'Anterior',
        '.carousel-control-next .sr-only': 'Seguinte',
        '#section-date h2': 'Xuño 23 2026',
        '#section-date h3': 'Moaña (Pontevedra) Isla Samertolomeu (San Bartolomeu-Meira), España',
        '#section-countdown .wm': 'Comeza en',
        '#section-schedule .wm': 'Programa',
        '#section-schedule .de_nav li:nth-child(1) h3': 'Día <span>01</span>',
        '#section-schedule .de_nav li:nth-child(1) h4': '23 de xuño de 2026',
        '#section-schedule h2': '02 Programa',
        '#preorderForm .form-text': 'Usaremos este número para enviarche a confirmación vía Chatbot.',
        '#preorderForm button[type="submit"]': 'Enviar reserva',
        '#preorderForm label[for="pre_email"]': 'Email',
        '#preorderForm label[for="pre_name"]': 'Nome',
        '#preorderForm label[for="pre_terms"]': 'Acepto a política de privacidade e os termos legais',
        '#preorderForm label[for="pre_whatsapp"]': 'Whatsapp',
        '#preorderForm input#pre_name': 'O teu nome',
        '#preorderForm input#pre_name + .invalid-feedback': 'Introduce un nome válido (mínimo 2 caracteres).',
        '#preorderForm input#pre_whatsapp': '+34 6..',
        '#preorderForm #pre_whatsapp ~ .invalid-feedback': 'Número de teléfono non válido. Usa formato +34123456789 ou 9-15 díxitos.',
        '#preorderForm input#pre_email': 'tucorreo@exemplo.com',
        '#preorderForm input#pre_email + .invalid-feedback': 'Introduce un correo electrónico válido.',
        '#preorderForm #pre_terms ~ .invalid-feedback': 'Debes aceptar a política para continuar.',
        '#tab-entradas-acceso-tab': 'Entradas e acceso',
        '#tab-pulsera-tab': 'Pulsera & Cashless',
        '#tab-horarios-tab': 'Horarios & Recinto',
        '#tab-ubicacion-tab': 'Ubicación & Transporte',
        '#tab-menores-tab': 'Menores',
        '#tab-seguridad-tab': 'Seguridade & Obxectos',
        '#tab-accesibilidad-tab': 'Accesibilidade (PMR)',
        '#tab-salud-tab': 'Saúde & Meteoroloxía',
        '#tab-imagen-tab': 'Imaxe & Prensa',
        '#faqE1 button': '¿Onde compro as entradas oficiais?',
        '#faqE1c .accordion-body': 'Só nos canais oficiais: Fuegofest.es e a ticketera autorizada (cando se anuncie). Recoméndase evitar reventas ou canles non oficiais.',
        '#faqA1c .accordion-body': 'Si. Haberá itinerarios accesibles e unha zona PMR. Os detalles anunciaranse proximamente.',
        '#faqA2c .accordion-body': 'Publicarase un canal específico (email ou formulario) cos requisitos e prazos.',
        '#faqCollapse1 .accordion-body': 'Resposta de exemplo para a pregunta 1. Edita esta resposta coa información real.',
        '#faqCollapse1_tab1 .accordion-body': 'Resposta de exemplo para a pregunta 1. Edita esta resposta coa información real.',
        '#faqCollapse1_tab2 .accordion-body': 'Podes mercar entradas na sección de Preventa ou na páxina de entradas.',
        '#faqCollapse1_tab3 .accordion-body': 'Hai información de acceso e transporte na sección de localización.',
        '#faqCollapse2 .accordion-body': 'Resposta de exemplo para a pregunta 2. Substitúe este texto coa resposta real.',
        '#faqCollapse2_tab1 .accordion-body': 'Resposta de exemplo para a pregunta 2. Substitúe este texto coa resposta real.',
        '#faqCollapse2_tab2 .accordion-body': 'Consulta a política de cambios na sección de termos e condicións.',
        '#faqCollapse3 .accordion-body': 'Resposta de exemplo para a pregunta 3. Podes manter este formato para engadir máis preguntas.',
        '#faqCollapse3_tab1 .accordion-body': 'Resposta de exemplo para a pregunta 3. Podes manter este formato para engadir máis preguntas.',
        '#faqE2c .accordion-body': 'Si, únicamente se hai dispoñibilidade. Recoméndase mercar online para asegurar o acceso e evitar colas.',
        '#faqE3c .accordion-body': 'Revisa a carpeta de spam ou promocións. Se non aparece, contacta co soporte da ticketera co correo de compra e o xustificante.',
        '#faqE4c .accordion-body': 'É obrigatorio levar DNI, NIE ou pasaporte. Pódese solicitar para verificar a idade ou resolver incidencias.',
        '#faqE5c .accordion-body': 'Presenta o código QR (no móbil ou impreso). O persoal escanearao para permitir o acceso.',
        '#faqH1c .accordion-body': 'Os horarios anunciaranse proximamente.',
        '#faqH2c .accordion-body': 'Comunicarase máis preto da data do evento para axustar produción e tempos dos shows.',
        '#faqH3c .accordion-body': 'Si. Publicarase un plano con accesos, barras, aseos, puntos de información, cashless e zona PMR.',
        '#faqI1c .accordion-body': 'Si, para uso persoal. Non se permiten equipos profesionais nin drons sen acreditación.',
        '#faqI2c .accordion-body': 'Publicarase un formulario coas condicións e prazos para solicitar acreditación.',
        '#faqM1c .accordion-body': 'Si: Menores de 16 anos só acompañados por titor legal ou adulto responsable. Menores de 16–17 con autorización asinada por pai/nai ou titor legal.',
        '#faqM2c .accordion-body': 'Menores de 16: documento do menor (se dispoña) e do titor/acompañante. Menores de 16–17: documento do menor e autorización asinada; pode solicitarse copia do DNI do asinante.',
        '#faqM3c .accordion-body': 'Habilitarase un enlace de descarga na web oficial antes do evento.',
        '#faqP1c .accordion-body': 'Si. A entrada cámbiase por unha pulsera, que serve para o acceso e o pagamento dentro do recinto. Debe levarse colocada e sen manipular.',
        '#faqP2c .accordion-body': 'Non. O reacceso non está permitido salvo que se dispoña dunha pulsera de reacceso.',
        '#faqP3c .accordion-body': 'O festival usa un sistema cashless. Todos os pagos realízanse coa pulsera, que pode recargarse online ou en puntos habilitados no recinto.',
        '#faqP4c .accordion-body': 'A política de devolucións (prazo, condicións e procedemento) publicarase antes do evento.',
        '#faqS1c .accordion-body': 'Si. Realizaranse controis e rexistros preventivos por motivos de seguridade.',
        '#faqS2c .accordion-body': 'Non se permite acceder con obxectos perigosos ou punzantes, vidro, latas, sprays, punteiros láser, drons nin equipos profesionais. A lista final publicarase oficialmente.',
        '#faqS3c .accordion-body': 'Non. O festival non dispón de servizo de consigna nin lockers.',
        '#faqSa1c .accordion-body': 'Si. O festival contará cun dispositivo sanitario e un punto de primeiros auxilios.',
        '#faqSa2c .accordion-body': 'O festival celébrase salvo causas de forza maior. Recoméndase levar chubasquero e calzado adecuado.',
        '#faqSa3c .accordion-body': 'Si. Haberá un punto de Lost & Found durante o evento e un canal post-evento para reclamacións.',
        '#faqU1c .accordion-body': 'En Moaña (Pontevedra). A ubicación exacta e os accesos recomendados publicarase antes do evento.',
        '#faqU2c .accordion-body': 'A información sobre parking e paradas oficiais comunicarase proximamente.',
        '#faqE2 button': '¿Podo mercar entradas na taquilla?',
        '#faqE3 button': 'Perdín a miña entrada ou non atopo o email, que fago?',
        '#faqE4 button': 'Que documentación necesito para entrar?',
        '#faqE5 button': 'Como valido a miña entrada ao chegar?',
        '#faqP1 button': '¿Cánxiase a entrada por unha pulsera?',
        '#faqP2 button': '¿Podo saír e volver entrar no recinto?',
        '#faqP3 button': '¿Como se paga dentro do festival?',
        '#faqP4 button': '¿Devólvese o saldo sobrante do cashless?',
        '#faqH1 button': '¿A que hora abren portas e a que hora remata o festival?',
        '#faqH2 button': '¿Cando publícanse os horarios dos artistas?',
        '#faqH3 button': '¿Haberá un mapa do recinto?',
        '#faqU1 button': '¿Onde se celebra Fuego Fest?',
        '#faqU2 button': '¿Haberá parking ou zonas para taxi/VTC?',
        '#faqM1 button': '¿Poden entrar menores ao festival?',
        '#faqM2 button': '¿Que documentación deben traer os menores?',
        '#faqM3 button': '¿Onde descargar a autorización para menores?',
        '#faqS1 button': '¿Haberá controis de acceso?',
        '#faqS2 button': '¿Que obxectos non están permitidos?',
        '#faqS3 button': '¿Haberá consigna ou lockers?',
        '#faqA1 button': '¿O festival é accesible para persoas con mobilidade reducída?',
        '#faqA2 button': '¿Como solicitar acreditación PMR ou acceso prioritario?',
        '#faqSa1 button': '¿Haberá asistencia sanitaria?',
        '#faqSa2 button': '¿Que pasa se chove?',
        '#faqSa3 button': '¿Haberá obxectos perdidos?',
        '#faqI1 button': '¿Podo gravar co móbil?',
        '#faqI2 button': '¿Como solicitar acreditación de prensa, foto ou vídeo?',
        '.subfooter .copy': '© 2025 - Fuego Fest Corp. Todos os dereitos reservados. Feito por',
      },
      cookie: {
        messageText: "Este sitio web emprega <b>cookies</b> para asegurar que obteñas a mellor experiencia.",
        linkText: 'Saber máis',
        linkUrl: 'index.html',
        buttonText: 'Acepto'
      }
    },
    es: {
      title: 'Fuego Fest - Festival de Música',
      selectors: {
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(1) .p-4 h3': 'Formulario de reserva',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(1) .p-4 p': 'Rellena tus datos para recibir la confirmación por WhatsApp.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h3': 'Tipos de entrada',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(1)': 'Entrada 1 día — €49.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(2)': 'Entrada 3 días — €69.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(3)': 'Abono Todos los días — €89.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(1)': 'Acceso durante un día, incluye acceso general al recinto y zonas comunes. Pago dentro del festival mediante pulsera cashless.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(2)': 'Acceso durante los días programados. Incluye ventajas en puntos de venta y prioridad en actividades anunciadas.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(3)': 'Acceso completo al festival durante toda la duración. Mejor relación calidad/precio.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(1)': 'Acceso durante un día, incluye acceso general al recinto y zonas comunes. Pago dentro del festival mediante pulsera cashless.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(2)': 'Acceso durante los días programados. Incluye ventajas en puntos de venta y prioridad en actividades anunciadas.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(3)': 'Acceso completo al festival durante toda la duración. Mejor relación calidad/precio.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:last-of-type': 'Importante: Las entradas oficiales se venden solo en los canales autorizados. Guarda el email de compra y muestra el QR en el acceso. Las devoluciones y políticas de saldo cashless se publicarán antes del evento.',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(1) a': 'Área Recreativa de Meira - 42°17\'11"N 8°43\'11"W',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(2) a': '+34 682 135 944',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(3) a': 'contact@fuegofest.es',
        'footer .row > div:nth-child(1) .widget h5': 'Contacto',
        'footer .row > div:nth-child(2) .widget h5': 'Enlaces rápidos',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(1) a': 'Preventa e entradas',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(2) a': 'Preguntas frecuentes',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(3) a': 'Artistas',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(4) a': 'Galería',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(5) a': 'Comienza en / Horarios',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(6) a': 'Políticas de compra',
        'footer .row > div:nth-child(3) .widget h5': 'Comprar Entradas',
        'footer .row > div:nth-child(3) .widget p': 'Dirígete a nuestra plataforma de compra de boletos para obtener el tuyo!',
        '#btn-buy': 'Comprar',
        'footer .row > div:nth-child(3) .widget small': 'Te redirigiremos a una web de confianza. Te estaremos esperando.',
        '#mainmenu li:nth-child(1) a': 'Artistas',
        '#mainmenu li:nth-child(2) a': 'Preventa',
        '#mainmenu li:nth-child(3) a': 'FAQs',
        '#mainmenu li:nth-child(4) a': 'Galería',
        '#de-carousel .carousel-item:nth-child(1) .btn-main': 'Explorar',
        '#de-carousel .carousel-item:nth-child(1) .lead': 'Celebra con nosotros un aniversario lleno de música urbana y pop en el paraíso de Moaña!',
        '#de-carousel .carousel-item:nth-child(1) h1': 'Isla Samertolomeu Fuego Fest 2026: 5 años de vibración musical',
        '#de-carousel .carousel-item:nth-child(2) .btn-main': 'Explorar',
        '#de-carousel .carousel-item:nth-child(2) .lead': 'Es tu oportunidad de vivir la música en directo como nunca antes, ser parte de un evento que definirá el futuro de la escena musical',
        '#de-carousel .carousel-item:nth-child(2) h1': 'Forma parte de la historia musical',
        '#section-artists .wm': 'Artistas',
        '#section-artists h2': '01 Artistas',
        '#section-preorder .wm': 'Preventa',
        '#section-preorder h2': '02 Preventa',
        '#section-faqs #h2faqs': '03 Preguntas frecuentes',
        '#section-faqs .wm': 'FAQs',
        '#section-gallery .wm': 'Galería',
        '#section-gallery h2': '04 Galería',
        '.menu_side_area a.btn-main span': 'Comprar entrada',
        '.carousel-control-prev .sr-only': 'Anterior',
        '.carousel-control-next .sr-only': 'Siguiente',
        '#section-date h2': 'Junio 23 2026',
        '#section-date h3': 'Moaña (Pontevedra) Isla Samertolomeu (San Bartolomeu-Meira), España',
        '#section-countdown .wm': 'Comienza en',
        '#section-schedule .wm': 'Programa',
        '#section-schedule .de_nav li:nth-child(1) h3': 'Día <span>01</span>',
        '#section-schedule .de_nav li:nth-child(1) h4': '23 de junio de 2026',
        '#section-schedule h2': '02 Programa',
        '#preorderForm .form-text': 'Usaremos este número para enviarte la confirmación vía Chatbot.',
        '#preorderForm button[type="submit"]': 'Enviar reserva',
        '#preorderForm label[for="pre_email"]': 'Email',
        '#preorderForm label[for="pre_name"]': 'Nombre',
        '#preorderForm label[for="pre_terms"]': 'Acepto la política de privacidad y los términos legales',
        '#preorderForm label[for="pre_whatsapp"]': 'Whatsapp',
        '#preorderForm input#pre_name': 'Tu nombre',
        '#preorderForm input#pre_name + .invalid-feedback': 'Introduce un nombre válido (mínimo 2 caracteres).',
        '#preorderForm input#pre_whatsapp': '+34 6..',
        '#preorderForm #pre_whatsapp ~ .invalid-feedback': 'Número de teléfono no válido. Usa formato +34123456789 o 9-15 dígitos.',
        '#preorderForm input#pre_email': 'tucorreo@ejemplo.com',
        '#preorderForm input#pre_email + .invalid-feedback': 'Introduce un email válido.',
        '#preorderForm #pre_terms ~ .invalid-feedback': 'Debes aceptar la política para continuar.',
        '#tab-entradas-acceso-tab': 'Entradas y acceso',
        '#tab-pulsera-tab': 'Pulsera & Cashless',
        '#tab-horarios-tab': 'Horarios & Recinto',
        '#tab-ubicacion-tab': 'Ubicación & Transporte',
        '#tab-menores-tab': 'Menores',
        '#tab-seguridad-tab': 'Seguridad & Objetos',
        '#tab-accesibilidad-tab': 'Accesibilidad (PMR)',
        '#tab-salud-tab': 'Salud & Meteorología',
        '#tab-imagen-tab': 'Imagen & Prensa',
        '#faqE1 button': '¿Dónde compro las entradas oficiales?',
        '#faqE1c .accordion-body': 'Solo en los canales oficiales: Fuegofest.es y la ticketera autorizada (cuando se anuncie). Se recomienda evitar reventas o canales no oficiales.',
        '#faqA1c .accordion-body': 'Sí. Habrá itinerarios accesibles y una zona PMR. Los detalles se anunciarán próximamente.',
        '#faqA2c .accordion-body': 'Se publicará un canal específico (email o formulario) con los requisitos y plazos.',
        '#faqCollapse1 .accordion-body': 'Respuesta de ejemplo para la pregunta 1. Edita esta respuesta con la información real.',
        '#faqCollapse1_tab1 .accordion-body': 'Respuesta de ejemplo para la pregunta 1. Edita esta respuesta con la información real.',
        '#faqCollapse1_tab2 .accordion-body': 'Puedes comprar entradas en la sección de Preventa o en la página de tickets.',
        '#faqCollapse1_tab3 .accordion-body': 'Hay información de acceso y transporte en la sección de localización.',
        '#faqCollapse2 .accordion-body': 'Respuesta de ejemplo para la pregunta 2. Sustituye este texto por la respuesta real.',
        '#faqCollapse2_tab1 .accordion-body': 'Respuesta de ejemplo para la pregunta 2. Sustituye este texto por la respuesta real.',
        '#faqCollapse2_tab2 .accordion-body': 'Consulta la política de cambios en la sección de términos y condiciones.',
        '#faqCollapse3 .accordion-body': 'Respuesta de ejemplo para la pregunta 3. Puedes mantener este formato para agregar más preguntas.',
        '#faqCollapse3_tab1 .accordion-body': 'Respuesta de ejemplo para la pregunta 3. Puedes mantener este formato para agregar más preguntas.',
        '#faqE2c .accordion-body': 'Sí, únicamente si hay disponibilidad. Se recomienda comprar online para asegurar el acceso y evitar colas.',
        '#faqE3c .accordion-body': 'Revisa la carpeta de spam o promociones. Si no aparece, contacta con el soporte de la ticketera con el email de compra y el justificante.',
        '#faqE4c .accordion-body': 'Es obligatorio llevar DNI, NIE o pasaporte. Puede solicitarse para verificar edad o resolver incidencias.',
        '#faqE5c .accordion-body': 'Presenta el código QR (en el móvil o impreso). El personal lo escaneará para permitir el acceso.',
        '#faqH1c .accordion-body': 'Los horarios se anunciarán próximamente.',
        '#faqH2c .accordion-body': 'Se comunicarán más cerca de la fecha del evento para ajustar la producción y los tiempos de los shows.',
        '#faqH3c .accordion-body': 'Sí. Se publicará un plano con accesos, barras, baños, puntos de información, cashless y zona PMR.',
        '#faqI1c .accordion-body': 'Sí, para uso personal. No se permiten equipos profesionales ni drones sin acreditación.',
        '#faqI2c .accordion-body': 'Se publicará un formulario con las condiciones y los plazos para solicitar acreditación.',
        '#faqM1c .accordion-body': 'Sí, bajo las siguientes condiciones: Menores de 16 años: solo acompañados por tutor legal o adulto responsable durante todo el evento. Menores de 16 a 17 años: con autorización firmada por padre, madre o tutor legal.',
        '#faqM2c .accordion-body': 'Menores de 16: documento del menor (si dispone) y del tutor/acompañante. Se recomienda traer autorización firmada. Menores de 16–17: documento del menor y autorización firmada; puede requerirse copia del DNI del firmante.',
        '#faqM3c .accordion-body': 'Se habilitará un enlace de descarga en la web oficial antes del evento.',
        '#faqP1c .accordion-body': 'Sí. La entrada se canjea por una pulsera, que sirve tanto para el acceso como para el pago dentro del recinto. Debe llevarse colocada y sin manipular.',
        '#faqP2c .accordion-body': 'No. El reingreso no está permitido salvo que se disponga de una pulsera de reacceso.',
        '#faqP3c .accordion-body': 'El festival utiliza un sistema cashless. Todos los pagos se realizan con la pulsera, que puede recargarse online o en puntos habilitados dentro del recinto.',
        '#faqP4c .accordion-body': 'La política de devolución (plazos, condiciones y procedimiento) se publicará antes del evento.',
        '#faqS1c .accordion-body': 'Sí. Se realizarán controles y registros preventivos por motivos de seguridad.',
        '#faqS2c .accordion-body': 'No se permite acceder con objetos peligrosos o punzantes, vidrio, latas, sprays o aerosoles, punteros láser, drones ni equipos profesionales. La lista final se publicará oficialmente.',
        '#faqS3c .accordion-body': 'No. El festival no dispone de servicio de consigna ni lockers.',
        '#faqSa1c .accordion-body': 'Sí. El festival contará con un dispositivo sanitario y un punto de primeros auxilios.',
        '#faqSa2c .accordion-body': 'El festival se celebra salvo causas de fuerza mayor. Se recomienda llevar chubasquero y calzado adecuado.',
        '#faqSa3c .accordion-body': 'Sí. Habrá un punto de Lost & Found durante el evento y un canal post-evento para reclamaciones.',
        '#faqU1c .accordion-body': 'En Moaña (Pontevedra). La ubicación exacta y los accesos recomendados se publicarán antes del evento.',
        '#faqU2c .accordion-body': 'La información sobre parking y paradas oficiales se comunicará próximamente.',
        '#faqE2 button': '¿Puedo comprar entradas en taquilla?',
        '#faqE3 button': 'He perdido mi entrada o no encuentro el email, ¿qué hago?',
        '#faqE4 button': '¿Qué documentación necesito para entrar?',
        '#faqE5 button': '¿Cómo valido mi entrada al llegar?',
        '#faqP1 button': '¿Se canjea la entrada por una pulsera?',
        '#faqP2 button': '¿Puedo salir y volver a entrar al recinto?',
        '#faqP3 button': '¿Cómo se paga dentro del festival?',
        '#faqP4 button': '¿Se devuelve el saldo sobrante del cashless?',
        '#faqH1 button': '¿A qué hora abren puertas y a qué hora termina el festival?',
        '#faqH2 button': '¿Cuándo se publican los horarios de los artistas?',
        '#faqH3 button': '¿Habrá un mapa del recinto?',
        '#faqU1 button': '¿Dónde se celebra Fuego Fest?',
        '#faqU2 button': '¿Habrá parking o zonas de parada para taxi/VTC?',
        '#faqM1 button': '¿Pueden entrar menores al festival?',
        '#faqM2 button': '¿Qué documentación deben traer los menores?',
        '#faqM3 button': '¿Dónde se descarga la autorización para menores?',
        '#faqS1 button': '¿Habrá controles de acceso?',
        '#faqS2 button': '¿Qué objetos no están permitidos?',
        '#faqS3 button': '¿Habrá consigna o lockers?',
        '#faqA1 button': '¿El festival es accesible para personas con movilidad reducida?',
        '#faqA2 button': '¿Cómo solicito acreditación PMR o acceso prioritario?',
        '#faqSa1 button': '¿Habrá asistencia sanitaria?',
        '#faqSa2 button': '¿Qué pasa si llueve?',
        '#faqSa3 button': '¿Habrá objetos perdidos?',
        '#faqI1 button': '¿Puedo grabar con el móvil?',
        '#faqI2 button': '¿Cómo solicito acreditación de prensa, foto o vídeo?',
        '.subfooter .copy': '© 2025 - Fuego Fest Corp. Todos los derechos reservados. Hecho por',
      },
      cookie: {
        messageText: "Este sitio web utiliza <b>cookies</b> para asegurar que obtengas la mejor experiencia.",
        linkText: 'Saber más',
        linkUrl: 'index.html',
        buttonText: 'Acepto'
      }
    }
  };

  function applyTranslations(lang){
    const cfg = translations[lang] || translations.gl;
    if(cfg.title) document.title = cfg.title;
    if(cfg.selectors){
      Object.keys(cfg.selectors).forEach(function(sel){
        try{
          const nodes = document.querySelectorAll(sel);
          if(!nodes) return;
          nodes.forEach(function(el){
            const val = cfg.selectors[sel];
            const tag = (el.tagName || '').toUpperCase();
            if(tag === 'INPUT' || tag === 'TEXTAREA'){
              // set placeholder when available, otherwise set value
              if('placeholder' in el) el.placeholder = val;
              else el.value = val;
            } else if(tag === 'IMG'){
              el.alt = val;
            } else {
              // default: set innerHTML only when the translation contains HTML tags,
              // otherwise use textContent to avoid accidental HTML parsing or collisions
              if (typeof val === 'string' && /<[^>]+>/.test(val)) {
                el.innerHTML = val;
              } else if (typeof val === 'string') {
                el.textContent = val;
              } else {
                el.innerHTML = val;
              }
            }
          });
        }catch(e){/* ignore selector errors */}
      });
    }
    document.documentElement.lang = (lang === 'es') ? 'es' : 'gl';
    // update toggle initial text
    const initial = (lang === 'es') ? 'ES' : 'GL';
    const elInit = document.querySelector('.lang-initial');
    if(elInit) elInit.textContent = initial;

    // initialize cookies plugin with translated text if available
    if(window.jQuery && typeof $.cookit === 'function'){
      const c = cfg.cookie || {};
      $.cookit({
        backgroundColor: '#111111',
        messageColor: '#fff',
        linkColor: '#e50000',
        buttonColor: '#ffffff',
        messageText: c.messageText || '',
        linkText: c.linkText || '',
        linkUrl: c.linkUrl || 'index.html',
        buttonText: c.buttonText || 'Acepto'
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    const saved = localStorage.getItem('site_lang') || 'gl';
    const toggle = document.getElementById('langToggle');
    const options = document.getElementById('langOptions');
    if(toggle){
      toggle.addEventListener('click', function(e){
        e.stopPropagation();
        if(options) options.style.display = (options.style.display === 'block') ? 'none' : 'block';
      });
    }
    document.querySelectorAll('.lang-option').forEach(function(btn){
      btn.addEventListener('click', function(){
        const l = btn.getAttribute('data-lang');
        localStorage.setItem('site_lang', l);
        if(options) options.style.display = 'none';
        applyTranslations(l);
      });
    });
    // click outside to close
    document.addEventListener('click', function(){ if(options) options.style.display = 'none'; });

    applyTranslations(saved);
  });
})();
