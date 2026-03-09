const RECAPTCHA_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

let loadPromise = null;

function loadScript() {
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    if (window.grecaptcha?.enterprise) {
      resolve(window.grecaptcha.enterprise);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_KEY}`;
    script.async = true;
    script.onload = () => {
      window.grecaptcha.enterprise.ready(() => {
        resolve(window.grecaptcha.enterprise);
      });
    };
    script.onerror = () => {
      loadPromise = null;
      reject(new Error("Failed to load reCAPTCHA"));
    };
    document.head.appendChild(script);
  });

  return loadPromise;
}

export async function executeRecaptcha(action = "SUBMIT") {
  const enterprise = await loadScript();
  return enterprise.execute(RECAPTCHA_KEY, { action });
}
