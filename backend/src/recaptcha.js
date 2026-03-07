const PROJECT_ID = process.env.RECAPTCHA_PROJECT_ID;
const API_KEY = process.env.RECAPTCHA_API_KEY;
const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
const SCORE_THRESHOLD = 0.5;
const ASSESS_URL = `https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${API_KEY}`;

export async function verifyRecaptcha(req, res, next) {
  const token = req.body.recaptchaToken;

  if (!token) {
    return res.status(400).json({ error: "reCAPTCHA token requerido" });
  }

  try {
    const response = await fetch(ASSESS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: { token, siteKey: SITE_KEY },
      }),
    });

    const data = await response.json();

    if (!data.tokenProperties?.valid) {
      console.error("reCAPTCHA token inválido:", data.tokenProperties?.invalidReason);
      return res.status(403).json({ error: "Verificación reCAPTCHA fallida" });
    }

    if (data.tokenProperties.action !== "SUBMIT") {
      console.error("reCAPTCHA action mismatch:", data.tokenProperties.action);
      return res.status(403).json({ error: "Verificación reCAPTCHA fallida" });
    }

    if (data.riskAnalysis.score < SCORE_THRESHOLD) {
      console.error("reCAPTCHA score bajo:", data.riskAnalysis.score);
      return res.status(403).json({ error: "Verificación reCAPTCHA fallida" });
    }

    delete req.body.recaptchaToken;
    next();
  } catch (error) {
    console.error("Error verificando reCAPTCHA:", error);
    return res.status(500).json({ error: "Error al verificar reCAPTCHA" });
  }
}
