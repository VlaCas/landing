(function(){
  const translations = {
    gl: {
      title: 'Fuego Fest - Festival de Música',
      selectors: {
        // Menú principal
        '#mainmenu li:nth-child(2) a': 'Artistas',
        '#mainmenu li:nth-child(3) a': 'Preventa',
        '#mainmenu li:nth-child(4) a': 'FAQs',
        '#mainmenu li:nth-child(5) a': 'Galería',
        '.menu_side_area a.btn-main span': 'Mercar entrada',
        '#mainmenu div.wrapper-cta-mobile a': 'Mercar entrada',
        
        // Carousel (solo el activo, el segundo está comentado)
        '#de-carousel .carousel-item.active h1': 'V aniversario',
        '#de-carousel .carousel-item.active .lead': 'O Festival que marca o comezo do verán nas Rías Baixas!',
        '#de-carousel .carousel-item.active .btn-main': 'Mercar',
        
        // Sección fecha
        '#section-date h2': '23 • 06 • 2026',
        '#section-date h3': 'Illa de Samertolomeu, Moaña',
        
        // Secciones
        '#section-artists .wm': 'Artistas',
        '#section-artists h2': '01 Artistas',
        '#section-preorder .wm': 'Preventa',
        '#section-preorder h2': '02 Preventa',
        '#section-faqs .wm': 'FAQs',
        '#section-faqs #h2faqs': '03 Preguntas frecuentes',
        '#section-gallery .wm': 'Galería',
        '#section-gallery h2': '04 Galería',
        '#section-countdown .wm': 'Comeza en',
        
        // Formulario de preventa
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(1) .p-4 h3': 'Formulario de reserva',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(1) .p-4 p': 'Completa os teus datos para recibir a confirmación por WhatsApp.',
        '#preorderForm label[for="pre_name"]': 'Nome',
        '#preorderForm input#pre_name': 'O teu nome',
        '#preorderForm input#pre_name + .invalid-feedback': 'Introduce un nome válido (mínimo 2 caracteres).',
        '#preorderForm label[for="pre_whatsapp"]': 'Whatsapp',
        '#preorderForm input#pre_whatsapp': '+34 6..',
        '#preorderForm #pre_whatsapp ~ .invalid-feedback': 'Número de teléfono non válido. Usa formato +34123456789 ou 9-15 díxitos.',
        '#preorderForm .form-text': 'Usaremos este número para enviarche a confirmación vía Chatbot.',
        '#preorderForm label[for="pre_email"]': 'Email',
        '#preorderForm input#pre_email': 'tucorreo@exemplo.com',
        '#preorderForm input#pre_email + .invalid-feedback': 'Introduce un correo electrónico válido.',
        '#preorderForm label[for="pre_terms"]': 'Acepto a política de privacidade e os termos legais',
        '#preorderForm #pre_terms ~ .invalid-feedback': 'Debes aceptar a política para continuar.',
        '#preorderForm button[type="submit"]': 'Enviar reserva',
        
        // Tipos de entrada
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h3': 'Tipos de entrada',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(1)': 'Entrada 1 día — €49.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(1)': 'Acceso durante un día, inclúe acceso xeral ao recinto e zonas comúns. Pago dentro do festival mediante pulsera cashless.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(2)': 'Entrada 3 días — €69.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(2)': 'Acceso durante os días programados. Inclúe vantaxes en puntos de venda e prioridade nas actividades anunciadas.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(3)': 'Abono Todos os días — €89.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(3)': 'Acceso completo ao festival durante toda a súa duración. Mellor relación calidade/prezo.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:last-of-type': 'Importante: As entradas oficiais véndense só nos canais autorizados. Garda o correo de compra e mostra o QR no acceso. As devolucións e políticas de saldo cashless publicaranse antes do evento.',
        
        // Tabs de FAQs
        '#tab-entradas-acceso-tab': 'Entradas e acceso',
        '#tab-pulsera-tab': 'Pulsera & Cashless',
        '#tab-horarios-tab': 'Horarios & Recinto',
        '#tab-ubicacion-tab': 'Ubicación & Transporte',
        '#tab-menores-tab': 'Menores',
        '#tab-seguridad-tab': 'Seguridade & Obxectos',
        '#tab-accesibilidad-tab': 'Accesibilidade (PMR)',
        '#tab-salud-tab': 'Saúde & Meteoroloxía',
        '#tab-imagen-tab': 'Imaxe & Prensa',
        
        // FAQs - Entradas y acceso
        '#faqE1 button': '¿Onde compro as entradas oficiais?',
        '#faqE1c .accordion-body': 'Só nos canais oficiais: Fuegofest.es e a ticketera autorizada (cando se anuncie). Recoméndase evitar reventas ou canles non oficiais.',
        '#faqE2 button': '¿Podo mercar entradas na taquilla?',
        '#faqE2c .accordion-body': 'Si, únicamente se hai dispoñibilidade. Recoméndase mercar online para asegurar o acceso e evitar colas.',
        '#faqE3 button': 'Perdín a miña entrada ou non atopo o email, que fago?',
        '#faqE3c .accordion-body': 'Revisa a carpeta de spam ou promocións. Se non aparece, contacta co soporte da ticketera co correo de compra e o xustificante.',
        '#faqE4 button': 'Que documentación necesito para entrar?',
        '#faqE4c .accordion-body': 'É obrigatorio levar DNI, NIE ou pasaporte. Pódese solicitar para verificar a idade ou resolver incidencias.',
        '#faqE5 button': 'Como valido a miña entrada ao chegar?',
        '#faqE5c .accordion-body': 'Presenta o código QR (no móbil ou impreso). O persoal escanearao para permitir o acceso.',
        
        // FAQs - Pulsera & Cashless
        '#faqP1 button': '¿Cánxiase a entrada por unha pulsera?',
        '#faqP1c .accordion-body': 'Si. A entrada cámbiase por unha pulsera, que serve para o acceso e o pagamento dentro do recinto. Debe levarse colocada e sen manipular.',
        '#faqP2 button': '¿Podo saír e volver entrar no recinto?',
        '#faqP2c .accordion-body': 'Non. O reacceso non está permitido salvo que se dispoña dunha pulsera de reacceso.',
        '#faqP3 button': '¿Como se paga dentro do festival?',
        '#faqP3c .accordion-body': 'O festival usa un sistema cashless. Todos os pagos realízanse coa pulsera, que pode recargarse online ou en puntos habilitados no recinto.',
        '#faqP4 button': '¿Devólvese o saldo sobrante do cashless?',
        '#faqP4c .accordion-body': 'A política de devolucións (prazo, condicións e procedemento) publicarase antes do evento.',
        
        // FAQs - Horarios & Recinto
        '#faqH1 button': '¿A que hora abren portas e a que hora remata o festival?',
        '#faqH1c .accordion-body': 'Os horarios anunciaranse proximamente.',
        '#faqH2 button': '¿Cando publícanse os horarios dos artistas?',
        '#faqH2c .accordion-body': 'Comunicarase máis preto da data do evento para axustar produción e tempos dos shows.',
        '#faqH3 button': '¿Haberá un mapa do recinto?',
        '#faqH3c .accordion-body': 'Si. Publicarase un plano con accesos, barras, aseos, puntos de información, cashless e zona PMR.',
        
        // FAQs - Ubicación & Transporte
        '#faqU1 button': '¿Onde se celebra Fuego Fest?',
        '#faqU1c .accordion-body': 'En Moaña (Pontevedra). A ubicación exacta e os accesos recomendados publicarase antes do evento.',
        '#faqU2 button': '¿Haberá parking ou zonas para taxi/VTC?',
        '#faqU2c .accordion-body': 'A información sobre parking e paradas oficiais comunicarase proximamente.',
        
        // FAQs - Menores
        '#faqM1 button': '¿Poden entrar menores ao festival?',
        '#faqM1c .accordion-body': 'Si: Menores de 16 anos só acompañados por titor legal ou adulto responsable. Menores de 16–17 con autorización asinada por pai/nai ou titor legal.',
        '#faqM2 button': '¿Que documentación deben traer os menores?',
        '#faqM2c .accordion-body': 'Menores de 16: documento do menor (se dispoña) e do titor/acompañante. Menores de 16–17: documento do menor e autorización asinada; pode solicitarse copia do DNI do asinante.',
        '#faqM3 button': '¿Onde descargar a autorización para menores?',
        '#faqM3c .accordion-body': 'Habilitarase un enlace de descarga na web oficial antes do evento.',
        
        // FAQs - Seguridad & Objetos
        '#faqS1 button': '¿Haberá controis de acceso?',
        '#faqS1c .accordion-body': 'Si. Realizaranse controis e rexistros preventivos por motivos de seguridade.',
        '#faqS2 button': '¿Que obxectos non están permitidos?',
        '#faqS2c .accordion-body': 'Non se permite acceder con obxectos perigosos ou punzantes, vidro, latas, sprays, punteiros láser, drons nin equipos profesionais. A lista final publicarase oficialmente.',
        '#faqS3 button': '¿Haberá consigna ou lockers?',
        '#faqS3c .accordion-body': 'Non. O festival non dispón de servizo de consigna nin lockers.',
        
        // FAQs - Accesibilidad
        '#faqA1 button': '¿O festival é accesible para persoas con mobilidade reducída?',
        '#faqA1c .accordion-body': 'Si. Haberá itinerarios accesibles e unha zona PMR. Os detalles anunciaranse proximamente.',
        '#faqA2 button': '¿Como solicitar acreditación PMR ou acceso prioritario?',
        '#faqA2c .accordion-body': 'Publicarase un canal específico (email ou formulario) cos requisitos e prazos.',
        
        // FAQs - Salud & Meteorología
        '#faqSa1 button': '¿Haberá asistencia sanitaria?',
        '#faqSa1c .accordion-body': 'Si. O festival contará cun dispositivo sanitario e un punto de primeiros auxilios.',
        '#faqSa2 button': '¿Que pasa se chove?',
        '#faqSa2c .accordion-body': 'O festival celébrase salvo causas de forza maior. Recoméndase levar chubasquero e calzado adecuado.',
        '#faqSa3 button': '¿Haberá obxectos perdidos?',
        '#faqSa3c .accordion-body': 'Si. Haberá un punto de Lost & Found durante o evento e un canal post-evento para reclamacións.',
        
        // FAQs - Imagen & Prensa
        '#faqI1 button': '¿Podo gravar co móbil?',
        '#faqI1c .accordion-body': 'Si, para uso persoal. Non se permiten equipos profesionais nin drons sen acreditación.',
        '#faqI2 button': '¿Como solicitar acreditación de prensa, foto ou vídeo?',
        '#faqI2c .accordion-body': 'Publicarase un formulario coas condicións e prazos para solicitar acreditación.',
        
        // Footer
        'footer .row > div:nth-child(1) .widget h5': 'Contacto',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(1) a': 'Área Recreativa de Meira - 42°17\'11"N 8°43\'11"W',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(2) a': '+34 682 135 944',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(3) a': 'contact@fuegofest.es',
        'footer .row > div:nth-child(2) .widget h5': 'Ligazóns rápidas',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(1) a': 'Preventa e entradas',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(2) a': 'Preguntas frecuentes',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(3) a': 'Artistas',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(4) a': 'Galería',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(5) a': 'Comeza en / Horarios',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(6) a': 'Políticas de compra',
        'footer .row > div:nth-child(3) .widget h5': 'Privacidade e legal',
        'footer .row > div:nth-child(3) .widget ul li:nth-child(1) a': 'Aviso Legal',
        'footer .row > div:nth-child(3) .widget ul li:nth-child(2) a': 'Política de privacidade',
        'footer .row > div:nth-child(3) .widget ul li:nth-child(3) a': 'Política de cookies',
        'footer .row > div:nth-child(3) .widget ul li:nth-child(4) a': 'Termos e condicións',
        'footer .row > div:nth-child(4) .widget h5': 'Mercar Entradas',
        'footer .row > div:nth-child(4) .widget p': 'Diríxete á nosa plataforma de compra de billetes para obter o teu!',
        '#btn-buy': 'Mercar',
        'footer .row > div:nth-child(4) .widget small': 'Chegarás a unha web de confianza. Estaremos agardándote.',
        '.subfooter .copy': '© 2025 - Fuego Fest Corp. Todos os dereitos reservados. ',
        
        // Política de Cookies
        '.cookies-policy h1': 'Política de Cookies',
        '.cookies-policy p:nth-of-type(1)': 'Na web <a href="https://molanlos2000.com" target="_blank" rel="noopener noreferrer">https://molanlos2000.com</a> (en adiante, o <strong>Sitio Web</strong>) utilizamos cookies para facilitar a relación dos visitantes co noso contido e para permitir elaborar estatísticas sobre as visitas que recibimos.',
        '.cookies-policy p:nth-of-type(2)': 'Informámoslle de que podemos utilizar cookies coa finalidade de facilitar a súa navegación a través do Sitio Web, distinguilo doutros usuarios, proporcionarlle unha mellor experiencia no uso do mesmo, e identificar problemas para mellorar o noso Sitio Web.',
        '.cookies-policy h2:nth-of-type(1)': '¿Que son as cookies?',
        '.cookies-policy h2:nth-of-type(1) + p': 'As cookies son pequenos arquivos que se gravan no navegador utilizado por cada visitante da nosa web para que o servidor poida lembrar a visita dese usuario cando volva acceder aos nosos contidos. Esta información non revela a súa identidade nin datos persoais, pero permite identificalo como un usuario recurrente e gardar as súas preferencias e información técnica.',
        '.cookies-policy h2:nth-of-type(1) + p + p': 'En cumprimento da Directiva 2009/136/CE, desenvolvida polo artigo 22 da LSSI e seguindo as directrices da AEPD, informamos detalladamente do uso de cookies nesta web.',
        '.cookies-policy h2:nth-of-type(2)': 'Tipos de cookies',
        '.cookies-policy h3:nth-of-type(1)': 'Segundo a entidade que as xestiona',
        '.cookies-policy h3:nth-of-type(2)': 'Segundo o tempo que permanecen activas',
        '.cookies-policy h3:nth-of-type(3)': 'Segundo a súa finalidade',
        '.cookies-policy h2:nth-of-type(3)': 'Cookies utilizadas neste sitio web',
        '.cookies-policy h2:nth-of-type(4)': 'Configuración e desactivación de cookies',
        '.cookies-policy h2:nth-of-type(4) + p': 'O usuario pode configurar o seu navegador para aceptar, rexeitar ou recibir avisos sobre a instalación de cookies. Os navegadores permiten:',
        '.cookies-policy h2:nth-of-type(4) + p + p': 'Configuración nos principais navegadores:',
        '.cookies-policy p:last-of-type': 'Esta Política de Cookies pode ser actualizada, polo que recomendamos revisala periodicamente.',
        
        // Política de Privacidad
        '.privacy-policy h1': 'Política de Privacidad',
        '.privacy-policy h2': 'Fuego Fest',
        '.privacy-policy h3:nth-of-type(1)': 'Información ao usuario',
        '.privacy-policy h3:nth-of-type(1) + p:nth-of-type(1)': '<strong>VOLEANDO PRODUCCIONES, S.L.</strong> infórmalle de que, segundo o disposto no Regulamento (UE) 2016/679 (RGPD) e na Lei Orgánica 3/2018 (LOPDGDD), trataremos os seus datos persoais conforme á presente Política de Privacidad.',
        '.privacy-policy h3:nth-of-type(1) + p:nth-of-type(2)': 'Nesta Política describimos como recollemos os seus datos persoais, por que os recollemos, que facemos con eles, con quen os compartimos, como os protexemos e cales son os seus dereitos.',
        '.privacy-policy h3:nth-of-type(1) + p:nth-of-type(3)': 'Esta política aplícase aos datos persoais recollidos pola empresa para a prestación dos seus servizos. Ao cumprimentar calquera dos nosos formularios, o usuario acepta estas condicións e gardaremos rexistro de dita aceptación.',
        '.privacy-policy h3:nth-of-type(2)': '1. Responsable do tratamento',
        '.privacy-policy h3:nth-of-type(3)': '2. Finalidade, lexitimación e conservación',
        '.privacy-policy h3:nth-of-type(3) + p': '<strong>Suscripción a Newsletter</strong>',
        '.privacy-policy h3:nth-of-type(4)': '3. Tipos de datos recollidos',
        '.privacy-policy h3:nth-of-type(4) + p:nth-of-type(1)': 'Recóllense datos identificativos e de contacto. Ademais, recóllense datos de navegación conforme á Política de Cookies.',
        '.privacy-policy h3:nth-of-type(4) + p:nth-of-type(2)': 'A empresa non trata datos especialmente sensibles (orixe racial, ideoloxía, saúde, orientación sexual, datos biométricos ou xenéticos).',
        '.privacy-policy h3:nth-of-type(4) + p:nth-of-type(3)': 'O usuario garante que os datos facilitados son veraces, exactos, completos e actualizados, sendo responsable dos danos que puidesen derivarse do incumprimento desta obrigación.',
        '.privacy-policy h3:nth-of-type(5)': '4. Destinatarios dos datos',
        '.privacy-policy h3:nth-of-type(6)': '5. Responsabilidade do usuario',
        '.privacy-policy h3:nth-of-type(6) + p:nth-of-type(1)': 'O usuario garante ser maior de 14 anos e que os datos proporcionados son exactos, completos e actualizados.',
        '.privacy-policy h3:nth-of-type(6) + p:nth-of-type(2)': 'Será responsable dos danos e perxuízos derivados de información falsa ou inexacta facilitada.',
        '.privacy-policy h3:nth-of-type(7)': '6. Exercicio de dereitos',
        '.privacy-policy h3:nth-of-type(7) + p:nth-of-type(1)': 'O usuario pode exercer gratuitamente os seus dereitos enviando solicitude escrita ou correo electrónico a: <a href="mailto:info@voleaworld.com">info@voleaworld.com</a>',
        '.privacy-policy h3:nth-of-type(7) + p:nth-of-type(2)': 'Tamén poderá presentar reclamación ante a <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">Axencia Española de Protección de Datos</a>.',
        '.privacy-policy h3:nth-of-type(8)': '7. Medidas de seguridade',
        '.privacy-policy h3:nth-of-type(8) + p': 'VOLEANDO PRODUCCIONES, S.L. adopta medidas técnicas e organizativas para garantir a confidencialidade, integridade e seguridade dos datos persoais.',
        '.privacy-policy h3:nth-of-type(9)': '8. Aceptación e consentimento',
        '.privacy-policy h3:nth-of-type(9) + p': 'O usuario declara ter sido informado e aceptar expresamente a presente Política de Privacidad.',
        '.privacy-policy h3:nth-of-type(10)': '9. Obrigatoriedade dos datos',
        '.privacy-policy h3:nth-of-type(10) + p': 'Os datos solicitados nos formularios son obrigatorios para a correcta prestación dos servizos.',
        '.privacy-policy h3:nth-of-type(11)': '10. Actualización da política',
        '.privacy-policy h3:nth-of-type(11) + p': 'A empresa reserva o dereito de modificar a presente Política de Privacidad. Recoméndase revisar periodicamente o seu contido.',
        '.privacy-policy p:last-of-type': '<strong>Última actualización:</strong> 01/05/2026',
        
        // Aviso Legal
        '.legal-notice h1': 'Aviso legal',
        '.legal-notice h2': 'Fuego Fest',
        '.legal-notice p:nth-of-type(1)': '<strong>VOLEANDO PRODUCCIONES, S.L.</strong>, responsable do sitio web, pon a disposición dos usuarios o presente documento, co que pretende dar cumprimento ás obrigacións dispostas na Lei 34/2002, de 11 de xullo, de Servizos da Sociedade da Información e do Comercio Electrónico (LSSICE), así como informar a todos os usuarios do sitio web respecto a cales son as condicións de uso.',
        '.legal-notice p:nth-of-type(2)': 'Toda persoa que acceda a este sitio web asume o papel de usuario, comprometéndose á observancia e cumprimento rigoroso das disposicións aquí dispostas, así como a calquera outra disposición legal que fóra de aplicación.',
        '.legal-notice p:nth-of-type(3)': 'VOLEANDO PRODUCCIONES, S.L. reservese o dereito de modificar calquera tipo de información que puidese aparecer no sitio web, sen que exista obrigación de preavisar ou poñer en coñecemento dos usuarios ditas obrigacións, entendéndose como suficiente coa publicación no sitio web.',
        '.legal-notice h3:nth-of-type(1)': '1. Datos identificativos',
        '.legal-notice h3:nth-of-type(2)': '2. Obxecto',
        '.legal-notice h3:nth-of-type(2) + p': 'A través do Sitio Web, ofrecémoslles aos Usuarios a posibilidade de acceder á información sobre os nosos servizos.',
        '.legal-notice h3:nth-of-type(3)': '3. Privacidade e tratamento de datos',
        '.legal-notice h3:nth-of-type(3) + p': 'Cando para o acceso a determinados contidos ou servizos sexa necesario facilitar datos de carácter persoal, os Usuarios garantirán a súa veracidade, exactitude, autenticidade e vixencia. A empresa dará a ditos datos o tratamento automatizado que corresponda en función da súa natureza ou finalidade, nos termos indicados na sección de Política de Privacidade.',
        '.legal-notice h3:nth-of-type(4)': '4. Propiedade industrial e intelectual',
        '.legal-notice h3:nth-of-type(4) + p:nth-of-type(1)': 'O Usuario recoñece e acepta que todos os contidos que se mostran no Espazo Web e, en especial, deseños, textos, imaxes, logotipos, iconos, botóns, software, nomes comerciais, marcas ou calesquer outros signos susceptibles de utilización industrial e/ou comercial están suxeitos a dereitos de Propiedade Intelectual e Industrial.',
        '.legal-notice h3:nth-of-type(4) + p:nth-of-type(2)': 'O Usuario comprométese a non reproducir, copiar, distribuir, comunicar publicamente, transformar ou modificar ditos contidos sen a autorización expresa do titular dos dereitos.',
        '.legal-notice h3:nth-of-type(4) + p:nth-of-type(3)': 'O acceso ao Espazo Web non implica ningún tipo de renuncia, transmisión, licenza ou cesión total nin parcial de ditos dereitos.',
        '.legal-notice h3:nth-of-type(5)': '5. Obrigacións e responsabilidades do usuario',
        '.legal-notice h3:nth-of-type(5) + p': 'O Usuario comprométese a:',
        '.legal-notice h3:nth-of-type(5) + p + p': 'Así mesmo, o Usuario deberá absterse de:',
        '.legal-notice h3:nth-of-type(5) + p + p + p': 'En caso de que se lle proporcione un contrasinal, o Usuario obrígase a mantelo en segredo e a notificar inmediatamente calquera uso indebido.',
        '.legal-notice h3:nth-of-type(6)': '6. Responsabilidades',
        '.legal-notice h3:nth-of-type(6) + p:nth-of-type(1)': 'A empresa non garante o acceso continuado nin a ausencia de erros no contido do Espazo Web, nin se responsabiliza das decisións tomadas a partir da información ofrecida.',
        '.legal-notice h3:nth-of-type(6) + p:nth-of-type(2)': 'Non se fai responsable de danos derivados de interferencias, virus informáticos, fallos de rede ou uso indebido do sitio web.',
        '.legal-notice h3:nth-of-type(7)': '7. Hipervínculos',
        '.legal-notice h3:nth-of-type(7) + p:nth-of-type(1)': 'O Espazo Web pode incluír enlaces a sitios xestionados por terceiros. A empresa non se responsabiliza do contido de ditos sitios externos.',
        '.legal-notice h3:nth-of-type(7) + p:nth-of-type(2)': 'Concédese un dereito limitado e revogable a enlazar coa páxina principal do sitio web, sempre que sexa para uso privado e non comercial.',
        '.legal-notice h3:nth-of-type(8)': '8. Protección de datos',
        '.legal-notice h3:nth-of-type(8) + p': 'A empresa tratará os datos persoais dos Usuarios conforme ao RGPD, LOPDGDD e LSSI, aplicando as medidas de seguridade correspondentes.',
        '.legal-notice h3:nth-of-type(9)': '9. Cookies',
        '.legal-notice h3:nth-of-type(9) + p': 'O sitio web pode utilizar cookies para mellorar a experiencia do Usuario e personalizar o uso do Espazo Web.',
        '.legal-notice h3:nth-of-type(10)': '10. Declaracións e garantías',
        '.legal-notice h3:nth-of-type(10) + p': 'Os contidos e servizos ofrecidos teñen carácter meramente informativo e non constitúen garantía algunha, salvo as legalmente esixibles.',
        '.legal-notice h3:nth-of-type(11)': '11. Forza maior',
        '.legal-notice h3:nth-of-type(11) + p': 'A empresa non será responsable en caso de imposibilidade de prestar o servizo por causas de forza maior ou caso fortuíto.',
        '.legal-notice h3:nth-of-type(12)': '12. Resolución de controversias',
        '.legal-notice h3:nth-of-type(12) + p': 'As presentes Condicións rexeranse pola lexislación española. Para a resolución de calquera controversia, as partes someteranse aos Xulgados e Tribunais do domicilio social do responsable do sitio web.',
        '.legal-notice p:last-of-type': '<strong>Última actualización:</strong> 01/05/2026'
      },
      cookie: {
        messageText: "Este sitio web emprega <b>cookies</b> para asegurar que obteñas a mellor experiencia. ", 
        linkText: 'Saber máis.',
        linkUrl: '/politica-de-cookies',
        buttonTextAccept: 'Aceptar',
        buttonTextReject: 'Declinar',
        buttonTextConfig: 'Configurar Cookies'
      }
    },
    es: {
      title: 'Fuego Fest - Festival de Música',
      selectors: {
        // Menú principal
        '#mainmenu li:nth-child(2) a': 'Artistas',
        '#mainmenu li:nth-child(3) a': 'Preventa',
        '#mainmenu li:nth-child(4) a': 'FAQs',
        '#mainmenu li:nth-child(5) a': 'Galería',
        '.menu_side_area a.btn-main span': 'Comprar entrada',
        '#mainmenu div.wrapper-cta-mobile a': 'Comprar entrada',
        
        // Carousel (solo el activo, el segundo está comentado)
        '#de-carousel .carousel-item.active h1': 'V aniversario',
        '#de-carousel .carousel-item.active .lead': 'El Festival que marca el inicio del verano en las Rías Baixas!',
        '#de-carousel .carousel-item.active .btn-main': 'Comprar',
        
        // Sección fecha
        '#section-date h2': '23 • 06 • 2026',
        '#section-date h3': 'Isla Samertolomeu, Moaña',
        
        // Secciones
        '#section-artists .wm': 'Artistas',
        '#section-artists h2': '01 Artistas',
        '#section-preorder .wm': 'Preventa',
        '#section-preorder h2': '02 Preventa',
        '#section-faqs .wm': 'FAQs',
        '#section-faqs #h2faqs': '03 Preguntas frecuentes',
        '#section-gallery .wm': 'Galería',
        '#section-gallery h2': '04 Galería',
        '#section-countdown .wm': 'Comienza en',
        
        // Formulario de preventa
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(1) .p-4 h3': 'Formulario de reserva',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(1) .p-4 p': 'Rellena tus datos para recibir la confirmación por WhatsApp.',
        '#preorderForm label[for="pre_name"]': 'Nombre',
        '#preorderForm input#pre_name': 'Tu nombre',
        '#preorderForm input#pre_name + .invalid-feedback': 'Introduce un nombre válido (mínimo 2 caracteres).',
        '#preorderForm label[for="pre_whatsapp"]': 'Whatsapp',
        '#preorderForm input#pre_whatsapp': '+34 6..',
        '#preorderForm #pre_whatsapp ~ .invalid-feedback': 'Número de teléfono no válido. Usa formato +34123456789 o 9-15 dígitos.',
        '#preorderForm .form-text': 'Usaremos este número para enviarte la confirmación vía Chatbot.',
        '#preorderForm label[for="pre_email"]': 'Email',
        '#preorderForm input#pre_email': 'tucorreo@ejemplo.com',
        '#preorderForm input#pre_email + .invalid-feedback': 'Introduce un email válido.',
        '#preorderForm label[for="pre_terms"]': 'Acepto la política de privacidad y los términos legales',
        '#preorderForm #pre_terms ~ .invalid-feedback': 'Debes aceptar la política para continuar.',
        '#preorderForm button[type="submit"]': 'Enviar reserva',
        
        // Tipos de entrada
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h3': 'Tipos de entrada',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(1)': 'Entrada 1 día — €49.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(1)': 'Acceso durante un día, incluye acceso general al recinto y zonas comunes. Pago dentro del festival mediante pulsera cashless.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(2)': 'Entrada 3 días — €69.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(2)': 'Acceso durante los días programados. Incluye ventajas en puntos de venta y prioridad en actividades anunciadas.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 h5:nth-of-type(3)': 'Abono Todos los días — €89.89',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:nth-of-type(3)': 'Acceso completo al festival durante toda la duración. Mejor relación calidad/precio.',
        '#section-preorder .row.g-custom-x .col-md-6:nth-child(2) .p-4 p:last-of-type': 'Importante: Las entradas oficiales se venden solo en los canales autorizados. Guarda el email de compra y muestra el QR en el acceso. Las devoluciones y políticas de saldo cashless se publicarán antes del evento.',
        
        // Tabs de FAQs
        '#tab-entradas-acceso-tab': 'Entradas y acceso',
        '#tab-pulsera-tab': 'Pulsera & Cashless',
        '#tab-horarios-tab': 'Horarios & Recinto',
        '#tab-ubicacion-tab': 'Ubicación & Transporte',
        '#tab-menores-tab': 'Menores',
        '#tab-seguridad-tab': 'Seguridad & Objetos',
        '#tab-accesibilidad-tab': 'Accesibilidad (PMR)',
        '#tab-salud-tab': 'Salud & Meteorología',
        '#tab-imagen-tab': 'Imagen & Prensa',
        
        // FAQs - Entradas y acceso
        '#faqE1 button': '¿Dónde compro las entradas oficiales?',
        '#faqE1c .accordion-body': 'Solo en los canales oficiales: Fuegofest.es y la ticketera autorizada (cuando se anuncie). Se recomienda evitar reventas o canales no oficiales.',
        '#faqE2 button': '¿Puedo comprar entradas en taquilla?',
        '#faqE2c .accordion-body': 'Sí, únicamente si hay disponibilidad. Se recomienda comprar online para asegurar el acceso y evitar colas.',
        '#faqE3 button': 'He perdido mi entrada o no encuentro el email, ¿qué hago?',
        '#faqE3c .accordion-body': 'Revisa la carpeta de spam o promociones. Si no aparece, contacta con el soporte de la ticketera con el email de compra y el justificante.',
        '#faqE4 button': '¿Qué documentación necesito para entrar?',
        '#faqE4c .accordion-body': 'Es obligatorio llevar DNI, NIE o pasaporte. Puede solicitarse para verificar edad o resolver incidencias.',
        '#faqE5 button': '¿Cómo valido mi entrada al llegar?',
        '#faqE5c .accordion-body': 'Presenta el código QR (en el móvil o impreso). El personal lo escaneará para permitir el acceso.',
        
        // FAQs - Pulsera & Cashless
        '#faqP1 button': '¿Se canjea la entrada por una pulsera?',
        '#faqP1c .accordion-body': 'Sí. La entrada se canjea por una pulsera, que sirve tanto para el acceso como para el pago dentro del recinto. Debe llevarse colocada y sin manipular.',
        '#faqP2 button': '¿Puedo salir y volver a entrar al recinto?',
        '#faqP2c .accordion-body': 'No. El reingreso no está permitido salvo que se disponga de una pulsera de reacceso.',
        '#faqP3 button': '¿Cómo se paga dentro del festival?',
        '#faqP3c .accordion-body': 'El festival utiliza un sistema cashless. Todos los pagos se realizan con la pulsera, que puede recargarse online o en puntos habilitados dentro del recinto.',
        '#faqP4 button': '¿Se devuelve el saldo sobrante del cashless?',
        '#faqP4c .accordion-body': 'La política de devolución (plazos, condiciones y procedimiento) se publicará antes del evento.',
        
        // FAQs - Horarios & Recinto
        '#faqH1 button': '¿A qué hora abren puertas y a qué hora termina el festival?',
        '#faqH1c .accordion-body': 'Los horarios se anunciarán próximamente.',
        '#faqH2 button': '¿Cuándo se publican los horarios de los artistas?',
        '#faqH2c .accordion-body': 'Se comunicarán más cerca de la fecha del evento para ajustar la producción y los tiempos de los shows.',
        '#faqH3 button': '¿Habrá un mapa del recinto?',
        '#faqH3c .accordion-body': 'Sí. Se publicará un plano con accesos, barras, baños, puntos de información, cashless y zona PMR.',
        
        // FAQs - Ubicación & Transporte
        '#faqU1 button': '¿Dónde se celebra Fuego Fest?',
        '#faqU1c .accordion-body': 'En Moaña (Pontevedra). La ubicación exacta y los accesos recomendados se publicarán antes del evento.',
        '#faqU2 button': '¿Habrá parking o zonas de parada para taxi/VTC?',
        '#faqU2c .accordion-body': 'La información sobre parking y paradas oficiales se comunicará próximamente.',
        
        // FAQs - Menores
        '#faqM1 button': '¿Pueden entrar menores al festival?',
        '#faqM1c .accordion-body': 'Sí, bajo las siguientes condiciones: Menores de 16 años: solo acompañados por tutor legal o adulto responsable durante todo el evento. Menores de 16 a 17 años: con autorización firmada por padre, madre o tutor legal.',
        '#faqM2 button': '¿Qué documentación deben traer los menores?',
        '#faqM2c .accordion-body': 'Menores de 16: documento del menor (si dispone) y del tutor/acompañante. Se recomienda traer autorización firmada. Menores de 16–17: documento del menor y autorización firmada; puede requerirse copia del DNI del firmante.',
        '#faqM3 button': '¿Dónde se descarga la autorización para menores?',
        '#faqM3c .accordion-body': 'Se habilitará un enlace de descarga en la web oficial antes del evento.',
        
        // FAQs - Seguridad & Objetos
        '#faqS1 button': '¿Habrá controles de acceso?',
        '#faqS1c .accordion-body': 'Sí. Se realizarán controles y registros preventivos por motivos de seguridad.',
        '#faqS2 button': '¿Qué objetos no están permitidos?',
        '#faqS2c .accordion-body': 'No se permite acceder con objetos peligrosos o punzantes, vidrio, latas, sprays o aerosoles, punteros láser, drones ni equipos profesionales. La lista final se publicará oficialmente.',
        '#faqS3 button': '¿Habrá consigna o lockers?',
        '#faqS3c .accordion-body': 'No. El festival no dispone de servicio de consigna ni lockers.',
        
        // FAQs - Accesibilidad
        '#faqA1 button': '¿El festival es accesible para personas con movilidad reducida?',
        '#faqA1c .accordion-body': 'Sí. Habrá itinerarios accesibles y una zona PMR. Los detalles se anunciarán próximamente.',
        '#faqA2 button': '¿Cómo solicito acreditación PMR o acceso prioritario?',
        '#faqA2c .accordion-body': 'Se publicará un canal específico (email o formulario) con los requisitos y plazos.',
        
        // FAQs - Salud & Meteorología
        '#faqSa1 button': '¿Habrá asistencia sanitaria?',
        '#faqSa1c .accordion-body': 'Sí. El festival contará con un dispositivo sanitario y un punto de primeros auxilios.',
        '#faqSa2 button': '¿Qué pasa si llueve?',
        '#faqSa2c .accordion-body': 'El festival se celebra salvo causas de fuerza mayor. Se recomienda llevar chubasquero y calzado adecuado.',
        '#faqSa3 button': '¿Habrá objetos perdidos?',
        '#faqSa3c .accordion-body': 'Sí. Habrá un punto de Lost & Found durante el evento y un canal post-evento para reclamaciones.',
        
        // FAQs - Imagen & Prensa
        '#faqI1 button': '¿Puedo grabar con el móvil?',
        '#faqI1c .accordion-body': 'Sí, para uso personal. No se permiten equipos profesionales ni drones sin acreditación.',
        '#faqI2 button': '¿Cómo solicito acreditación de prensa, foto o vídeo?',
        '#faqI2c .accordion-body': 'Se publicará un formulario con las condiciones y los plazos para solicitar acreditación.',
        
        // Footer
        'footer .row > div:nth-child(1) .widget h5': 'Contacto',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(1) a': 'Área Recreativa de Meira - 42°17\'11"N 8°43\'11"W',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(2) a': '+34 682 135 944',
        'footer .row > div:nth-child(1) .widget address span:nth-of-type(3) a': 'contact@fuegofest.es',
        'footer .row > div:nth-child(2) .widget h5': 'Enlaces rápidos',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(1) a': 'Preventa e entradas',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(2) a': 'Preguntas frecuentes',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(3) a': 'Artistas',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(4) a': 'Galería',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(5) a': 'Comienza en / Horarios',
        'footer .row > div:nth-child(2) .widget ul li:nth-child(6) a': 'Políticas de compra',
        'footer .row > div:nth-child(3) .widget h5': 'Privacidad & Legal',
        'footer .row > div:nth-child(3) .widget ul li:nth-child(1) a': 'Aviso Legal',
        'footer .row > div:nth-child(3) .widget ul li:nth-child(2) a': 'Politica de privacidad',
        'footer .row > div:nth-child(3) .widget ul li:nth-child(3) a': 'Politica de cookies',
        'footer .row > div:nth-child(3) .widget ul li:nth-child(4) a': 'Terminos y condiciones',
        'footer .row > div:nth-child(4) .widget h5': 'Comprar Entradas',
        'footer .row > div:nth-child(4) .widget p': 'Dirígete a nuestra plataforma de compra de boletos para obtener el tuyo!',
        '#btn-buy': 'Comprar',
        'footer .row > div:nth-child(3) .widget small': 'Te redirigiremos a una web de confianza. Te estaremos esperando.',
        '.subfooter .copy': '© 2025 - Fuego Fest Corp. Todos los derechos reservados. ',
        
        // Política de Cookies
        '.cookies-policy h1': 'Política de Cookies',
        '.cookies-policy p:nth-of-type(1)': 'En la web <a href="https://molanlos2000.com" target="_blank" rel="noopener noreferrer">https://molanlos2000.com</a> (en adelante, el <strong>Sitio Web</strong>) utilizamos cookies para facilitar la relación de los visitantes con nuestro contenido y para permitir elaborar estadísticas sobre las visitas que recibimos.',
        '.cookies-policy p:nth-of-type(2)': 'Le informamos que podemos utilizar cookies con la finalidad de facilitar su navegación a través del Sitio Web, distinguirle de otros usuarios, proporcionarle una mejor experiencia en el uso del mismo, e identificar problemas para mejorar nuestro Sitio Web.',
        '.cookies-policy h2:nth-of-type(1)': '¿Qué son las cookies?',
        '.cookies-policy h2:nth-of-type(1) + p': 'Las cookies son pequeños archivos que se graban en el navegador utilizado por cada visitante de nuestra web para que el servidor pueda recordar la visita de ese usuario cuando vuelva a acceder a nuestros contenidos. Esta información no revela su identidad ni datos personales, pero permite identificarle como un usuario recurrente y guardar sus preferencias e información técnica.',
        '.cookies-policy h2:nth-of-type(1) + p + p': 'En cumplimiento de la Directiva 2009/136/CE, desarrollada por el artículo 22 de la LSSI y siguiendo las directrices de la AEPD, informamos detalladamente del uso de cookies en esta web.',
        '.cookies-policy h2:nth-of-type(2)': 'Tipos de cookies',
        '.cookies-policy h3:nth-of-type(1)': 'Según la entidad que las gestiona',
        '.cookies-policy h3:nth-of-type(2)': 'Según el tiempo que permanecen activas',
        '.cookies-policy h3:nth-of-type(3)': 'Según su finalidad',
        '.cookies-policy h2:nth-of-type(3)': 'Cookies utilizadas en este sitio web',
        '.cookies-policy h2:nth-of-type(4)': 'Configuración y desactivación de cookies',
        '.cookies-policy h2:nth-of-type(4) + p': 'El usuario puede configurar su navegador para aceptar, rechazar o recibir avisos sobre la instalación de cookies. Los navegadores permiten:',
        '.cookies-policy h2:nth-of-type(4) + p + p': 'Configuración en los principales navegadores:',
        '.cookies-policy p:last-of-type': 'Esta Política de Cookies puede ser actualizada, por lo que recomendamos revisarla periódicamente.',
        
        // Política de Privacidad
        '.privacy-policy h1': 'Política de Privacidad',
        '.privacy-policy h2': 'Fuego Fest',
        '.privacy-policy h3:nth-of-type(1)': 'Información al usuario',
        '.privacy-policy h3:nth-of-type(1) + p:nth-of-type(1)': '<strong>VOLEANDO PRODUCCIONES, S.L.</strong> le informa que, según lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y en la Ley Orgánica 3/2018 (LOPDGDD), trataremos sus datos personales conforme a la presente Política de Privacidad.',
        '.privacy-policy h3:nth-of-type(1) + p:nth-of-type(2)': 'En esta Política describimos cómo recogemos sus datos personales, por qué los recogemos, qué hacemos con ellos, con quién los compartimos, cómo los protegemos y cuáles son sus derechos.',
        '.privacy-policy h3:nth-of-type(1) + p:nth-of-type(3)': 'Esta política se aplica a los datos personales recogidos por la empresa para la prestación de sus servicios. Al cumplimentar cualquiera de nuestros formularios, el usuario acepta estas condiciones y guardaremos registro de dicha aceptación.',
        '.privacy-policy h3:nth-of-type(2)': '1. Responsable del tratamiento',
        '.privacy-policy h3:nth-of-type(3)': '2. Finalidad, legitimación y conservación',
        '.privacy-policy h3:nth-of-type(3) + p': '<strong>Suscripción a Newsletter</strong>',
        '.privacy-policy h3:nth-of-type(4)': '3. Tipos de datos recogidos',
        '.privacy-policy h3:nth-of-type(4) + p:nth-of-type(1)': 'Se recogen datos identificativos y de contacto. Además, se recogen datos de navegación conforme a la Política de Cookies.',
        '.privacy-policy h3:nth-of-type(4) + p:nth-of-type(2)': 'La empresa no trata datos especialmente sensibles (origen racial, ideología, salud, orientación sexual, datos biométricos o genéticos).',
        '.privacy-policy h3:nth-of-type(4) + p:nth-of-type(3)': 'El usuario garantiza que los datos facilitados son veraces, exactos, completos y actualizados, siendo responsable de los daños que pudieran derivarse del incumplimiento de esta obligación.',
        '.privacy-policy h3:nth-of-type(5)': '4. Destinatarios de los datos',
        '.privacy-policy h3:nth-of-type(6)': '5. Responsabilidad del usuario',
        '.privacy-policy h3:nth-of-type(6) + p:nth-of-type(1)': 'El usuario garantiza ser mayor de 14 años y que los datos proporcionados son exactos, completos y actualizados.',
        '.privacy-policy h3:nth-of-type(6) + p:nth-of-type(2)': 'Será responsable de los daños y perjuicios derivados de información falsa o inexacta facilitada.',
        '.privacy-policy h3:nth-of-type(7)': '6. Ejercicio de derechos',
        '.privacy-policy h3:nth-of-type(7) + p:nth-of-type(1)': 'El usuario puede ejercer gratuitamente sus derechos enviando solicitud escrita o correo electrónico a: <a href="mailto:info@voleaworld.com">info@voleaworld.com</a>',
        '.privacy-policy h3:nth-of-type(7) + p:nth-of-type(2)': 'También podrá presentar reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos</a>.',
        '.privacy-policy h3:nth-of-type(8)': '7. Medidas de seguridad',
        '.privacy-policy h3:nth-of-type(8) + p': 'VOLEANDO PRODUCCIONES, S.L. adopta medidas técnicas y organizativas para garantizar la confidencialidad, integridad y seguridad de los datos personales.',
        '.privacy-policy h3:nth-of-type(9)': '8. Aceptación y consentimiento',
        '.privacy-policy h3:nth-of-type(9) + p': 'El usuario declara haber sido informado y aceptar expresamente la presente Política de Privacidad.',
        '.privacy-policy h3:nth-of-type(10)': '9. Obligatoriedad de los datos',
        '.privacy-policy h3:nth-of-type(10) + p': 'Los datos solicitados en los formularios son obligatorios para la correcta prestación de los servicios.',
        '.privacy-policy h3:nth-of-type(11)': '10. Actualización de la política',
        '.privacy-policy h3:nth-of-type(11) + p': 'La empresa se reserva el derecho de modificar la presente Política de Privacidad. Se recomienda revisar periódicamente su contenido.',
        '.privacy-policy p:last-of-type': '<strong>Última actualización:</strong> 01/05/2026',
        
        // Aviso Legal
        '.legal-notice h1': 'Aviso legal',
        '.legal-notice h2': 'Fuego Fest',
        '.legal-notice p:nth-of-type(1)': '<strong>VOLEANDO PRODUCCIONES, S.L.</strong>, responsable del sitio web, pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.',
        '.legal-notice p:nth-of-type(2)': 'Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.',
        '.legal-notice p:nth-of-type(3)': 'VOLEANDO PRODUCCIONES, S.L. se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web.',
        '.legal-notice h3:nth-of-type(1)': '1. Datos identificativos',
        '.legal-notice h3:nth-of-type(2)': '2. Objeto',
        '.legal-notice h3:nth-of-type(2) + p': 'A través del Sitio Web, les ofrecemos a los Usuarios la posibilidad de acceder a la información sobre nuestros servicios.',
        '.legal-notice h3:nth-of-type(3)': '3. Privacidad y tratamiento de datos',
        '.legal-notice h3:nth-of-type(3) + p': 'Cuando para el acceso a determinados contenidos o servicios sea necesario facilitar datos de carácter personal, los Usuarios garantizarán su veracidad, exactitud, autenticidad y vigencia. La empresa dará a dichos datos el tratamiento automatizado que corresponda en función de su naturaleza o finalidad, en los términos indicados en la sección de Política de Privacidad.',
        '.legal-notice h3:nth-of-type(4)': '4. Propiedad industrial e intelectual',
        '.legal-notice h3:nth-of-type(4) + p:nth-of-type(1)': 'El Usuario reconoce y acepta que todos los contenidos que se muestran en el Espacio Web y, en especial, diseños, textos, imágenes, logotipos, iconos, botones, software, nombres comerciales, marcas o cualesquiera otros signos susceptibles de utilización industrial y/o comercial están sujetos a derechos de Propiedad Intelectual e Industrial.',
        '.legal-notice h3:nth-of-type(4) + p:nth-of-type(2)': 'El Usuario se compromete a no reproducir, copiar, distribuir, comunicar públicamente, transformar o modificar dichos contenidos sin la autorización expresa del titular de los derechos.',
        '.legal-notice h3:nth-of-type(4) + p:nth-of-type(3)': 'El acceso al Espacio Web no implica ningún tipo de renuncia, transmisión, licencia o cesión total ni parcial de dichos derechos.',
        '.legal-notice h3:nth-of-type(5)': '5. Obligaciones y responsabilidades del usuario',
        '.legal-notice h3:nth-of-type(5) + p': 'El Usuario se compromete a:',
        '.legal-notice h3:nth-of-type(5) + p + p': 'Asimismo, el Usuario deberá abstenerse de:',
        '.legal-notice h3:nth-of-type(5) + p + p + p': 'En caso de que se le proporcione una contraseña, el Usuario se obliga a mantenerla en secreto y a notificar inmediatamente cualquier uso indebido.',
        '.legal-notice h3:nth-of-type(6)': '6. Responsabilidades',
        '.legal-notice h3:nth-of-type(6) + p:nth-of-type(1)': 'La empresa no garantiza el acceso continuado ni la ausencia de errores en el contenido del Espacio Web, ni se responsabiliza de las decisiones tomadas a partir de la información ofrecida.',
        '.legal-notice h3:nth-of-type(6) + p:nth-of-type(2)': 'No se hace responsable de daños derivados de interferencias, virus informáticos, fallos de red o uso indebido del sitio web.',
        '.legal-notice h3:nth-of-type(7)': '7. Hipervínculos',
        '.legal-notice h3:nth-of-type(7) + p:nth-of-type(1)': 'El Espacio Web puede incluir enlaces a sitios gestionados por terceros. La empresa no se responsabiliza del contenido de dichos sitios externos.',
        '.legal-notice h3:nth-of-type(7) + p:nth-of-type(2)': 'Se concede un derecho limitado y revocable a enlazar con la página principal del sitio web, siempre que sea para uso privado y no comercial.',
        '.legal-notice h3:nth-of-type(8)': '8. Protección de datos',
        '.legal-notice h3:nth-of-type(8) + p': 'La empresa tratará los datos personales de los Usuarios conforme al RGPD, LOPDGDD y LSSI, aplicando las medidas de seguridad correspondientes.',
        '.legal-notice h3:nth-of-type(9)': '9. Cookies',
        '.legal-notice h3:nth-of-type(9) + p': 'El sitio web puede utilizar cookies para mejorar la experiencia del Usuario y personalizar el uso del Espacio Web.',
        '.legal-notice h3:nth-of-type(10)': '10. Declaraciones y garantías',
        '.legal-notice h3:nth-of-type(10) + p': 'Los contenidos y servicios ofrecidos tienen carácter meramente informativo y no constituyen garantía alguna, salvo las legalmente exigibles.',
        '.legal-notice h3:nth-of-type(11)': '11. Fuerza mayor',
        '.legal-notice h3:nth-of-type(11) + p': 'La empresa no será responsable en caso de imposibilidad de prestar el servicio por causas de fuerza mayor o caso fortuito.',
        '.legal-notice h3:nth-of-type(12)': '12. Resolución de controversias',
        '.legal-notice h3:nth-of-type(12) + p': 'Las presentes Condiciones se regirán por la legislación española. Para la resolución de cualquier controversia, las partes se someterán a los Juzgados y Tribunales del domicilio social del responsable del sitio web.',
        '.legal-notice p:last-of-type': '<strong>Última actualización:</strong> 01/05/2026'
      },
      cookie: {
        messageText: "Este sitio web utiliza <b>cookies</b> para asegurar que obtengas la mejor experiencia. ",
        linkText: 'Saber más.',
        linkUrl: '/politica-de-cookies',
        buttonTextAccept: 'Aceptar',
        buttonTextReject: 'Rechazar',
        buttonTextConfig: 'Configurar Cookies'
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
          if(!nodes || nodes.length === 0) return;
          nodes.forEach(function(el){
            const val = cfg.selectors[sel];
            const tag = (el.tagName || '').toUpperCase();
            if(tag === 'INPUT' || tag === 'TEXTAREA'){
              if('placeholder' in el) el.placeholder = val;
              else el.value = val;
            } else if(tag === 'IMG'){
              el.alt = val;
            } else {
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
    const initial = (lang === 'gl') ? 'GL' : 'ES';
    const elInit = document.querySelector('.lang-initial');
    if(elInit) elInit.textContent = initial;

    if(window.jQuery && typeof $.cookit === 'function'){
      const c = cfg.cookie || {};
      $.cookit({
        backgroundColor: '#111111',
        messageColor: '#fff',
        linkColor: '#e50000',
        buttonColor: '#ffffff',
        messageText: c.messageText || '',
        linkText: c.linkText || '',
        linkUrl: c.linkUrl || '/politica-de-cookies',
        buttonTextAccept: c.buttonTextAccept || 'Aceptar',
        buttonTextReject: c.buttonTextReject || 'Rechazar',
        buttonTextConfig: c.buttonTextConfig || 'Configurar Cookies'
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem('site_lang') || 'gl';

    applyTranslations(saved);
    updateAllLangInitials(saved);

    // Abrir / cerrar dropdown
    document.addEventListener('click', function (e) {
      const toggle = e.target.closest('.lang-toggle');

      // Cerrar todos
      document.querySelectorAll('.lang-options').forEach(opt => {
        opt.style.display = 'none';
      });

      // Abrir el correspondiente
      if (toggle) {
        e.stopPropagation();
        const dropdown = toggle.closest('.lang-dropdown');
        const options = dropdown.querySelector('.lang-options');
        options.style.display = 'block';
      }
    });

    // Selección de idioma
    document.querySelectorAll('.lang-option').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();

        const lang = btn.getAttribute('data-lang');
        localStorage.setItem('site_lang', lang);

        applyTranslations(lang);
        updateAllLangInitials(lang);

        // Cerrar todos
        document.querySelectorAll('.lang-options').forEach(opt => {
          opt.style.display = 'none';
        });
      });
    });

    function updateAllLangInitials(lang) {
      document.querySelectorAll('.lang-initial').forEach(span => {
        span.textContent = lang.toUpperCase();
      });
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('cookieLangToggle');
    if (!btn) return;

    // Idioma guardado o por defecto
    let currentLang = localStorage.getItem('site_lang') || 'gl';

    // Inicializar texto del botón
    updateButtonText(currentLang);

    btn.addEventListener('click', function () {
      // Toggle
      currentLang = currentLang === 'es' ? 'gl' : 'es';

      // Guardar idioma
      localStorage.setItem('site_lang', currentLang);

      // Aplicar traducciones
      if (typeof applyTranslations === 'function') {
        applyTranslations(currentLang);
      }

      // Actualizar texto del botón
      updateButtonText(currentLang);
    });

    function updateButtonText(lang) {
      btn.textContent = lang.toUpperCase();
    }
  });
})();
