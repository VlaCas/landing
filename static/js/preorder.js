document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('preorderForm');
  if (!form) return;

  const name = form.querySelector('#pre_name');
  const whatsapp = form.querySelector('#pre_whatsapp');
  const email = form.querySelector('#pre_email');
  const terms = form.querySelector('#pre_terms');
  const submitBtn = form.querySelector('button[type="submit"]');

  // ===== Helpers UI =====
  function ensureFeedback(el) {
    const parent = el.parentNode;
    let fb = parent.querySelector('.invalid-feedback');
    if (!fb) {
      fb = document.createElement('div');
      fb.className = 'invalid-feedback';
      parent.appendChild(fb);
    }
    return fb;
  }

  function setError(el, msg) {
    if (!el) return;
    el.classList.remove('is-valid');
    el.classList.add('is-invalid');
    const fb = ensureFeedback(el);
    fb.textContent = msg;
  }

  function clearError(el) {
    if (!el) return;
    el.classList.remove('is-invalid');
    el.classList.add('is-valid');
    const parent = el.parentNode;
    const fb = parent.querySelector('.invalid-feedback');
    if (fb) fb.textContent = '';
  }

  function clearAlerts() {
    form.parentNode.querySelectorAll('.alert').forEach(function (a) { a.remove(); });
  }

  function showAlert(kind, msg) {
    clearAlerts();
    const el = document.createElement('div');
    el.className = 'alert alert-' + kind + ' mt-3';
    el.setAttribute('role', kind === 'success' ? 'status' : 'alert');
    el.textContent = msg;
    form.parentNode.insertBefore(el, form.nextSibling);
    return el;
  }

  // ===== Validations =====
  function validateName() {
    const v = (name.value || '').trim();
    if (v.length < 2) { setError(name, 'Introduce un nombre válido (mínimo 2 caracteres).'); return false; }
    const ok = /^[A-Za-zÀ-ÖØ-öø-ÿñÑáéíóúÁÉÍÓÚüÜ'`´.\- ]+$/.test(v);
    if (!ok) { setError(name, 'El nombre contiene caracteres no permitidos.'); return false; }
    clearError(name); return true;
  }
  function validateWhatsapp() {
    const raw = (whatsapp.value || '').trim();
    const cleaned = raw.replace(/\s|\-|\(|\)/g, '');

    // Validación básica internacional
    if (!/^\+?\d{9,15}$/.test(cleaned)) {
      setError(
        whatsapp,
        'Número no válido. Usa formato internacional o 9–15 dígitos.'
      );
      return false;
    }

    // 🇪🇸 Validación específica España
    // +34XXXXXXXXX o XXXXXXXXX
    const esNumber = cleaned.startsWith('+34')
      ? cleaned.slice(3)
      : cleaned.length === 9
        ? cleaned
        : null;

    if (esNumber) {
      // Rechazar fijos (8 y 9)
      if (!/^[67]\d{8}$/.test(esNumber)) {
        setError(
          whatsapp,
          'El número debe ser móvil (WhatsApp). Los teléfonos fijos no son válidos.'
        );
        return false;
      }
    }

    clearError(whatsapp);
    return true;
  }


  function validateEmail() {
    const v = (email.value || '').trim();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(v)) { setError(email, 'Email no válido.'); return false; }
    clearError(email); return true;
  }

  function validateTerms() {
    if (!terms.checked) {
      const parent = terms.parentNode;
      let fb = parent.querySelector('.invalid-feedback');
      if (!fb) { fb = document.createElement('div'); fb.className = 'invalid-feedback'; parent.appendChild(fb); }
      fb.textContent = 'Debes aceptar la política para continuar.';
      terms.classList.add('is-invalid');
      return false;
    }
    terms.classList.remove('is-invalid');
    const fb = terms.parentNode.querySelector('.invalid-feedback'); if (fb) fb.textContent = '';
    return true;
  }

  name.addEventListener('input', validateName);
  whatsapp.addEventListener('input', validateWhatsapp);
  email.addEventListener('input', validateEmail);
  terms.addEventListener('change', validateTerms);

  // ===== Fetch helpers =====
  async function safeReadJson(resp) {
    // si el servidor no devuelve JSON válido, no rompas el flujo
    try { return await resp.json(); } catch (_) { return null; }
  }

  function setButtonLoading(isLoading, origTextRef) {
    if (!submitBtn) return;
    if (isLoading) {
      submitBtn.disabled = true;
      origTextRef.value = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
    } else {
      submitBtn.disabled = false;
      submitBtn.textContent = origTextRef.value || 'Enviar';
    }
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearAlerts(); // limpia mensajes anteriores al intentar de nuevo

    const okName = validateName();
    const okW = validateWhatsapp();
    const okE = validateEmail();
    const okT = validateTerms();

    if (!(okName && okW && okE && okT)) {
      const first = form.querySelector('.is-invalid');
      if (first) first.focus();
      return;
    }

    const origTextRef = { value: '' };
    setButtonLoading(true, origTextRef);

    const payload = {
      name: (name.value || '').trim(),
      whatsapp: (whatsapp.value || '').trim(),
      email: (email.value || '').trim(),
      terms: terms.checked ? 1 : 0, // tu backend lo puede ignorar, no pasa nada
    };

    const endpoint =
      form.getAttribute('data-endpoint') ||
      'https://preorform.fuegofest.es/api/customers';

    try {
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const body = await safeReadJson(resp);

      if (!resp.ok) {
        // lanzamos un error enriquecido con status + body
        const err = new Error('HTTP_ERROR');
        err.status = resp.status;
        err.body = body;
        throw err;
      }

      // ===== ÉXITO =====
      const msg =
        (body && body.message) ||
        'Reserva recibida. Te contactaremos por WhatsApp cuando haya disponibilidad.';
      showAlert('success', msg);

      form.reset();
      form.querySelectorAll('.is-valid').forEach(function (i) { i.classList.remove('is-valid'); });
    } catch (err) {
      // Limpia estados previos para evitar que se queden "valid" cuando falló
      [name, whatsapp, email].forEach(function (el) {
        if (el) el.classList.remove('is-valid');
      });

      // ===== Errores con status (backend respondió) =====
      if (err && err.status) {
        const status = err.status;
        const body = err.body || {};

        // 409: duplicado (tu backend debería devolver { error:"whatsapp_exists", message:"..." })
        if (status === 409 || body.error === 'whatsapp_exists') {
            if (body.error === 'email_exists') {
                    const msg = body.message || 'Este email ya está registrado.';
                    setError(email, msg);
                    email && email.focus();
                } else if (body.error === 'whatsapp_exists') {
                    const msg = body.message || 'Este WhatsApp ya está registrado.';
                    setError(whatsapp, msg);
                    whatsapp && whatsapp.focus();
                }
            showAlert('danger', body.message || 'Este WhatsApp ya está registrado.');
        }
        // 400: validación (por campo o general)
        else if (status === 400) {
            // Si el backend te manda errors por campo, los pintas tal cual (whatsapp/email)
            if (body && body.errors && typeof body.errors === 'object') {
              Object.keys(body.errors).forEach(function (k) {
              // try exact match
              let field = form.querySelector('[name="' + k + '"]');
              if (!field) {
                // fallback: handle nested keys like 'user.email' or 'data[email]'
                const parts = String(k).split(/\.|\[|\]/).filter(Boolean);
                const last = parts.length ? parts[parts.length - 1] : k;
                field = form.querySelector('[name="' + last + '"], [name$="[' + last + ']"], [name$=".' + last + '"], #' + last + ', [id$="' + last + '"]');
              }
              if (field) setError(field, body.errors[k]);
              else {
                // no matching field — show as form-level alert
                const danger = document.createElement('div');
                danger.className = 'alert alert-danger mt-3';
                danger.setAttribute('role','alert');
                danger.textContent = body.errors[k];
                form.parentNode.insertBefore(danger, form.nextSibling);
              }
              });
              showAlert('danger', body.message || 'Ya existe un registro con esos datos.');
              const first = form.querySelector('.is-invalid'); if (first) first.focus();
            } else {
                // fallback por si el backend no mandó errors
                const msg = body.message || 'Ya existe un registro con esos datos.';
                showAlert('danger', msg);

                if (body.error === 'email_exists') {
                setError(email, msg);
                email && email.focus();
                } else if (body.error === 'whatsapp_exists') {
                setError(whatsapp, msg);
                whatsapp && whatsapp.focus();
                }
            }
        }
        // 429: rate limit
        else if (status === 429) {
          showAlert('danger', body.message || 'Demasiadas solicitudes. Intenta de nuevo en unos minutos.');
        }
        // 500+: servidor
        else if (status >= 500) {
          showAlert('danger', body.message || 'Error del servidor. Intenta de nuevo más tarde.');
        }
        // otros códigos
        else {
          showAlert('danger', body.message || 'Error al enviar. Intenta de nuevo más tarde.');
        }
      }
      // ===== Errores de red / CORS / backend caído =====
      else {
        // Ejemplos típicos: TypeError: Failed to fetch
        showAlert(
          'danger',
          'No se pudo conectar con el servidor. Revisa tu conexión o CORS (dominio permitido) e inténtalo de nuevo.'
        );
      }
    } finally {
      setButtonLoading(false, origTextRef);
    }
  });
});
