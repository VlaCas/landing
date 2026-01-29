(function($) {
  $.cookit = function(options) {

    var settings = $.extend({
      backgroundColor: '#1c1c1c',
      messageColor: '#fff',
      linkColor: '#fad04c',
      buttonColor: '#fad04c',
      messageText: "<b>Do you hungry ?</b> 🍪 Pursuing navigation on this site, you accept the use of cookies.",
      linkText: "Learn more",
      linkUrl: "https://www.cookiesandyou.com",
      buttonTextAccept: "Aceptar",
      buttonTextReject: "Rechazar",
      buttonTextConfig: "Configurar",
    }, options);

    settings.lang = document.documentElement.lang === 'gl' ? 'gl' : 'es';

    const translations = {
      es: {
        modalTitle: "Configuración de cookies",
        modalDescription: "En esta página utilizamos cookies propias y de terceros para mejorar la experiencia del usuario, analizar el tráfico y mostrar publicidad personalizada.",

        essentialTitle: "Esencial",
        essentialDesc: "Funcionalidad principal",

        analyticsTitle: "Analíticas",
        analyticsDesc: "Estadísticas de uso y rendimiento",

        adsTitle: "Marketing",
        adsDesc: "Publicidad personalizada",

        personalizationTitle: "Personalización",
        personalizationDesc: "Funcionalidad personalizada",

        rejectAll: "Rechazar todas",
        acceptAll: "Aceptar todas",
        save: "Guardar",

        cookiesPolicy: "Política de Cookies"
      },

      gl: {
        modalTitle: "Configuración de cookies",
        modalDescription: "Nesta páxina utilizamos cookies propias e de terceiros para mellorar a experiencia do usuario, analizar o tráfico e mostrar publicidade personalizada.",

        essentialTitle: "Esenciais",
        essentialDesc: "Funcionalidade principal",

        analyticsTitle: "Analíticas",
        analyticsDesc: "Estatísticas de uso e rendemento",

        adsTitle: "Marketing",
        adsDesc: "Publicidade personalizada",

        personalizationTitle: "Personalización",
        personalizationDesc: "Funcionalidade personalizada",

        rejectAll: "Rexeitar todas",
        acceptAll: "Aceptar todas",
        save: "Gardar",

        cookiesPolicy: "Política de Cookies"
      }
    };

    var getT = function () {
      return translations[settings.lang] || translations.es;
    };

    const t = getT();
    
    const banner = $("<div id='cookit'></div>");
    const container = $("<div id='cookit-container'></div>");
    const container_text = $("<div id='cookit-container-text'></div>");
    const container_a = $("<div id='cookit-container-a'></div>");
    // var message = buttonAccept = buttonReject = buttonConfig = null;
    var message = buttonAccept = buttonConfig = null;
    const hasCookieConsent = getCookie('cookies-consent');

    if (!hasCookieConsent) {
      createBanner(settings);
      $('#cookit-button-accept').on('click', () => {
        setCookie('essential', true, 365);
        setCookie('analytics', true, 365);
        setCookie('ads', true, 365);
        setCookie('personalization', true, 365);
        setCookie('cookies-consent', 'accepted', 365);
        const cookieBanner = $('#cookit');
        cookieBanner.addClass('hidden');
      });
      $('#cookit-button-reject').on('click', () => {
        setCookie('cookies-consent', 'rejected', 365);
        const cookieBanner = $('#cookit');
        cookieBanner.addClass('hidden');
      });
    }

    // $('#cookit-config').on('click', () => {
    //   $('#cookit-modal', '#cookit-modal-content').removeClass('hidden');
    // });

    function createModal() {
      const modal = $(`
        <div id="cookit-modal" class="cookit-modal hidden">
          <div id="cookit-modal-wrapper" class="cookit-modal-wrapper hidden">
            <div id="cookit-modal-content" class="cookit-modal-content">
              <div class="cookit-modal-header">
                <div class="cookit-modal-title">
                  <svg viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.2"></g><g id="SVGRepo_iconCarrier"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.419 12c0-6.4 5.358-8 8.037-8h1.005v4h3.014v3h4.019v1c0 6.4-5.024 8-8.038 8-3.014 0-8.037-1.6-8.037-8zm5.023-4h.001m-2.01 4h0m5.023 1h.001m-2.01 3h0m6.028-1h0"></path></g></svg>
                  <h3 id="cookit-modal-title"></h3>
                </div>
                <button id="cookieLangToggle" class="cookie-lang-toggle">
                  ES
                </button>
              </div>

              <div class="cookit-modal-body">
                <p id="cookit-modal-text-paragraph"></p>

                <div class='cookie-type-wrapper'>
                  <div class='cookie-type-content'>
                    <div class='cookie-type-text'>
                      <h2 id="cookie-essential-title">Esencial</h2>
                      <p id="cookie-essential-desc">Funcionalidad principal</p>
                    </div>
                    <label class="switch-pro">
                      <input type="checkbox" id='essential-cookie' checked disabled>
                      <span class="slider-pro"></span>
                    </label>
                  </div>
                </div>

                <div class='cookie-type-wrapper'>
                  <div class='cookie-type-content'>
                    <div class='cookie-type-text'>
                      <h2 id="cookie-analytics-title">Analíticas</h2>
                      <p id="cookie-analytics-desc">Estadisticas de uso y rendimiento</p>
                    </div>
                    <label class="switch-pro">
                      <input type="checkbox" id='analytics-cookie' checked>
                      <span class="slider-pro"></span>
                    </label>
                  </div>
                </div>

                <div class='cookie-type-wrapper'>
                  <div class='cookie-type-content'>
                    <div class='cookie-type-text'>
                      <h2 id="cookie-ads-title">Marketing</h2>
                      <p id="cookie-ads-desc">Publicidad personalizada</p>
                    </div>
                    <label class="switch-pro">
                      <input type="checkbox" id='ads-cookie' checked>
                      <span class="slider-pro"></span>
                    </label>
                  </div>
                </div>

                <div class='cookie-type-wrapper'>
                  <div class='cookie-type-content'>
                    <div class='cookie-type-text'>
                      <h2 id="cookie-personalization-title">Personalización</h2>
                      <p id="cookie-personalization-desc">Funcionalidad personalizada</p>
                    </div>
                    <label class="switch-pro">
                      <input type="checkbox" id='personalization-cookie' checked>
                      <span class="slider-pro"></span>
                    </label>
                  </div>
                </div>

                <div class="cookit-actions-wrapper">
                  <div class="cookit-actions-content-top">
                    <button id="reject-all">Rechazar todas</button>
                    <button id="accept-all">Aceptar todas</button>
                  </div>
                  <button id="save">Guardar</button>
                </div>

                <div class="cookit-modal-footer">
                  <a href="https://fuegofest.es/politica-de-cookies" target="_blank">
                    Politica de Cookies
                    <svg fill="#e67300" viewBox="0 0 24 24" width='16' height='16' id="caution-sign-circle" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#e67300" stroke-width="4.8"><line id="secondary-upstroke" x1="11.95" y1="16.5" x2="12.05" y2="16.5" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2; stroke: #e67300;"></line><rect id="primary" x="3" y="3" width="18" height="18" rx="9" style="fill: none; stroke: #e67300; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line id="secondary" x1="12" y1="12" x2="12" y2="7" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2; stroke: #e67300;"></line></g><g id="SVGRepo_iconCarrier"><line id="secondary-upstroke" x1="11.95" y1="16.5" x2="12.05" y2="16.5" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2; stroke: #e67300;"></line><rect id="primary" x="3" y="3" width="18" height="18" rx="9" style="fill: none; stroke: #e67300; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></rect><line id="secondary" x1="12" y1="12" x2="12" y2="7" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2; stroke: #e67300;"></line></g></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `);

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


      $('body').append(modal);

      function applyTranslations() {
        const lang = localStorage.getItem('site_lang') || 'gl';
        settings.lang = lang;
        const t = getT();

        $('#cookit-modal-title').text(t.modalTitle);
        $('#cookit-modal-text-paragraph').text(t.modalDescription);

        $('#cookie-essential-title').text(t.essentialTitle);
        $('#cookie-essential-desc').text(t.essentialDesc);

        $('#cookie-analytics-title').text(t.analyticsTitle);
        $('#cookie-analytics-desc').text(t.analyticsDesc);

        $('#cookie-ads-title').text(t.adsTitle);
        $('#cookie-ads-desc').text(t.adsDesc);

        $('#cookie-personalization-title').text(t.personalizationTitle);
        $('#cookie-personalization-desc').text(t.personalizationDesc);

        $('#reject-all').text(t.rejectAll);
        $('#accept-all').text(t.acceptAll);
        $('#save').text(t.save);

        $('#cookies-policy-text').text(t.cookiesPolicy);

        $('.cookit-lang-btn').removeClass('active');
        $('.cookit-lang-btn[data-lang="' + settings.lang + '"]').addClass('active');
      }
      
      applyTranslations();

      $('.cookit-lang-btn').on('click', function () {
        const newLang = $(this).data('lang');

        // Guardar idioma global
        localStorage.setItem('site_lang', newLang);
        settings.lang = newLang;

        // UI activa
        $('.cookit-lang-btn').removeClass('active');
        $(this).addClass('active');

        // Reaplicar traducciones
        applyTranslations();

        // (opcional) sincronizar <html lang="">
        document.documentElement.lang = newLang;
      });


      $('#save').on('click', () => {
        const essentialCookie = $('#essential-cookie').is(':checked');
        const analyticsCookie = $('#analytics-cookie').is(':checked');
        const adsCookie = $('#ads-cookie').is(':checked');
        const personalizationCookie = $('#personalization-cookie').is(':checked');
        essentialCookie ? setCookie('essential', true, 365) : null;
        analyticsCookie ? setCookie('analytics', true, 365) : null;
        adsCookie ? setCookie('ads', true, 365) : null;
        personalizationCookie ? setCookie('personalization', true, 365) : null;
        setCookie('cookies-consent', 'custom', 365);
        modal.addClass('hidden');
        hideBanner();
        document.documentElement.style.overflow = "";
      });

      $('#accept-all').on('click', () => {
        setCookie('essential', true, 365);
        setCookie('analytics', true, 365);
        setCookie('ads', true, 365);
        setCookie('personalization', true, 365);
        setCookie('cookies-consent', 'accepted', 365);
        modal.addClass('hidden');
        hideBanner();
        document.documentElement.style.overflow = "";
      });

      $('#reject-all').on('click', () => {
        setCookie('cookies-consent', 'rejected', 365);
        modal.addClass('hidden');
        hideBanner();
        document.documentElement.style.overflow = "";
      });
    }

    function createBanner() {
      message = $("<p id='cookit-message'>"+ settings.messageText + "<a id='cookit-link' href='" + settings.linkUrl + "' target='_blank'>" + settings.linkText + "</a>" + "</p>");
      buttonAccept = $("<button id='cookit-button-accept'>" + settings.buttonTextAccept + "</button>");
      // buttonReject = $("<button id='cookit-button-reject'>" + settings.buttonTextReject + "</button>");
      buttonConfig = $("<button id='cookit-button-config'>" + settings.buttonTextConfig + "</button>");
    
      $('body').append(banner);
      banner.append(container);
      container.append(container_text);
      container.append(container_a);
      container_text.append(message);
      container_a.append(buttonAccept);
      // container_a.append(buttonReject);
      container_a.append(buttonConfig);

      createModal();
      customize();

      $('#cookit-button-config').on('click', () => {
        document.documentElement.style.overflow = "hidden";
        const backdrop = $('#cookit-modal');
        const modal = $('#cookit-modal-wrapper');
        modal.removeClass('hidden');
        backdrop.removeClass('hidden');
        // hideBanner();
      });
    }

    function hideBanner() {
      banner.addClass('hidden');
    }

    function customize() {
      banner.css({'background-color': settings.backgroundColor});
      message.css({'color': settings.messageColor});
      buttonAccept.css({
        'background-color': settings.buttonColor,
        'color': settings.backgroundColor
      });
      // buttonReject.css({
      //   'background-color': settings.buttonColor,
      //   'color': settings.backgroundColor
      // });
      buttonConfig.css({
        'background-color': settings.buttonColor,
        'color': settings.backgroundColor
      });
    }
    
    function getCookie(name) {
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      name = name + "=";
    
      for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
      }
    }
    
    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

  };
})(jQuery);
