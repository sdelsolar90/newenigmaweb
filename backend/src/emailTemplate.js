export function confirmationEmail({ name, message, id }) {
  const safeMessage = message || "Sin mensaje adicional";
  const safeId = id || "—";

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enigma Developers — Mensaje Recibido</title>
</head>
<body style="margin:0; padding:0; background-color:#1C1C1E; font-family:'DM Sans',Arial,Helvetica,sans-serif; color:#F0EDE6; min-height:100vh; padding:40px 20px;">

<div style="max-width:560px; width:100%; margin:0 auto;">

  <!-- Logo lockup -->
  <div style="text-align:center; padding:48px 0 36px;">
    <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
      <tr>
        <td style="vertical-align:middle;">
          <img src="https://enigmasac.com/brand/rotor-animated.gif" alt="Enigma" width="64" height="64" style="display:block;" />
        </td>
        <td style="vertical-align:middle; padding:0 20px;">
          <div style="width:1px; height:40px; background:rgba(240,237,230,0.25);"></div>
        </td>
        <td style="vertical-align:middle;">
          <div style="font-family:'DM Sans',Arial,sans-serif; font-weight:400; font-size:22px; letter-spacing:0.22em; color:#F0EDE6; line-height:1;">ENIGMA</div>
          <div style="font-family:'DM Sans',Arial,sans-serif; font-weight:300; font-size:9px; letter-spacing:0.28em; color:rgba(240,237,230,0.45); line-height:1; margin-top:2px;">DEVELOPERS</div>
        </td>
      </tr>
    </table>
  </div>

  <!-- Card -->
  <div style="background:#242424; border:1px solid rgba(240,237,230,0.08); border-radius:2px; overflow:hidden; position:relative;">

    <!-- Top accent line -->
    <div style="height:3px; background:linear-gradient(90deg, transparent, #C44A20, transparent);"></div>

    <!-- Header -->
    <div style="padding:40px 40px 32px; border-bottom:1px solid rgba(240,237,230,0.06);">
      <div style="font-family:'DM Mono','Courier New',monospace; font-size:10px; letter-spacing:0.2em; color:#C44A20; text-transform:uppercase; margin-bottom:16px;">
        ── Mensaje recibido · Ref. #${safeId}
      </div>
      <h1 style="margin:0; font-size:32px; font-weight:400; font-family:'Playfair Display','Georgia',serif; letter-spacing:-0.01em; line-height:1.15; color:#F0EDE6;">
        Tu mensaje<br>está <span style="color:#C44A20;">en marcha.</span>
      </h1>
      <p style="margin:12px 0 0; font-family:'DM Mono','Courier New',monospace; font-weight:300; font-size:13px; line-height:1.7; color:#6B6759;">
        Gracias, ${name}. Nuestro equipo ya está al tanto<br>y te responderá en menos de 24 horas.
      </p>
    </div>

    <!-- Body -->
    <div style="padding:32px 40px;">

      <!-- Status -->
      <div style="margin-bottom:28px;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="vertical-align:middle; padding-right:12px;">
              <div style="width:8px; height:8px; border-radius:50%; background:#C44A20;"></div>
            </td>
            <td style="vertical-align:middle;">
              <div style="font-family:'DM Mono','Courier New',monospace; font-size:11px; letter-spacing:0.12em; color:#C44A20; text-transform:uppercase;">En proceso · Recibido ahora mismo</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- Info grid -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:28px;">
        <tr>
          <td width="50%" style="padding-right:6px; vertical-align:top;">
            <div style="background:rgba(240,237,230,0.03); border:1px solid rgba(240,237,230,0.06); border-radius:2px; padding:16px;">
              <div style="font-family:'DM Mono','Courier New',monospace; font-size:9px; letter-spacing:0.18em; color:#6B6759; text-transform:uppercase; margin-bottom:6px;">Nombre</div>
              <div style="font-size:14px; font-weight:700; color:#F0EDE6;">${name}</div>
            </div>
          </td>
          <td width="50%" style="padding-left:6px; vertical-align:top;">
            <div style="background:rgba(240,237,230,0.03); border:1px solid rgba(240,237,230,0.06); border-radius:2px; padding:16px;">
              <div style="font-family:'DM Mono','Courier New',monospace; font-size:9px; letter-spacing:0.18em; color:#6B6759; text-transform:uppercase; margin-bottom:6px;">Tiempo de respuesta</div>
              <div style="font-size:14px; font-weight:700; color:#F0EDE6;">&lt; 24 horas</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding-top:12px;">
            <div style="background:rgba(240,237,230,0.03); border:1px solid rgba(240,237,230,0.06); border-radius:2px; padding:16px;">
              <div style="font-family:'DM Mono','Courier New',monospace; font-size:9px; letter-spacing:0.18em; color:#6B6759; text-transform:uppercase; margin-bottom:6px;">Tu consulta</div>
              <div style="font-size:13px; font-weight:400; font-family:'DM Mono','Courier New',monospace; color:rgba(240,237,230,0.7);">${safeMessage}</div>
            </div>
          </td>
        </tr>
      </table>

      <!-- Divider -->
      <div style="height:1px; background:rgba(240,237,230,0.06); margin:28px 0;"></div>

      <!-- Timeline -->
      <div style="margin-bottom:28px;">
        <div style="font-family:'DM Mono','Courier New',monospace; font-size:9px; letter-spacing:0.18em; color:#6B6759; text-transform:uppercase; margin-bottom:14px;">Qué pasa ahora</div>

        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td width="20" style="vertical-align:top; text-align:center;">
              <div style="width:8px; height:8px; border-radius:50%; background:#C44A20; margin:4px auto 0;"></div>
              <div style="width:1px; height:20px; background:rgba(240,237,230,0.08); margin:2px auto;"></div>
            </td>
            <td style="padding:0 0 18px 16px; vertical-align:top;">
              <div style="font-size:13px; font-weight:700; color:#F0EDE6; margin-bottom:2px;">Mensaje recibido</div>
              <div style="font-family:'DM Mono','Courier New',monospace; font-size:11px; color:#6B6759;">Llegó correctamente a nuestro sistema</div>
            </td>
          </tr>
          <tr>
            <td width="20" style="vertical-align:top; text-align:center;">
              <div style="width:8px; height:8px; border-radius:50%; border:1px solid rgba(240,237,230,0.15); margin:4px auto 0;"></div>
              <div style="width:1px; height:20px; background:rgba(240,237,230,0.08); margin:2px auto;"></div>
            </td>
            <td style="padding:0 0 18px 16px; vertical-align:top;">
              <div style="font-size:13px; font-weight:700; color:#6B6759; margin-bottom:2px;">Asignación interna</div>
              <div style="font-family:'DM Mono','Courier New',monospace; font-size:11px; color:#6B6759;">Un especialista revisará tu caso</div>
            </td>
          </tr>
          <tr>
            <td width="20" style="vertical-align:top; text-align:center;">
              <div style="width:8px; height:8px; border-radius:50%; border:1px solid rgba(240,237,230,0.15); margin:4px auto 0;"></div>
            </td>
            <td style="padding:0 0 0 16px; vertical-align:top;">
              <div style="font-size:13px; font-weight:700; color:#6B6759; margin-bottom:2px;">Te contactamos</div>
              <div style="font-family:'DM Mono','Courier New',monospace; font-size:11px; color:#6B6759;">Por email o teléfono, según prefieras</div>
            </td>
          </tr>
        </table>
      </div>

      <!-- Divider -->
      <div style="height:1px; background:rgba(240,237,230,0.06); margin:28px 0;"></div>

      <!-- CTA -->
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="vertical-align:middle; padding-right:12px;">
            <a href="https://wa.me/51959561015" style="display:inline-block; background:#C44A20; color:#F0EDE6; text-decoration:none; font-family:'DM Sans',Arial,sans-serif; font-size:13px; font-weight:700; letter-spacing:0.05em; padding:12px 20px; border-radius:2px;">
              WhatsApp directo
            </a>
          </td>
          <td style="vertical-align:middle;">
            <div style="font-family:'DM Mono','Courier New',monospace; font-size:11px; color:#6B6759; line-height:1.5;">¿Necesitas respuesta<br>más rápida? Escríbenos.</div>
          </td>
        </tr>
      </table>

    </div>

    <!-- Footer -->
    <div style="padding:20px 40px; border-top:1px solid rgba(240,237,230,0.06);">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td>
            <span style="font-size:12px; font-weight:800; letter-spacing:0.05em; color:rgba(240,237,230,0.3);">ENIGMA <span style="color:rgba(240,237,230,0.15); font-weight:400;">DEVELOPERS</span></span>
          </td>
          <td style="text-align:right;">
            <span style="font-family:'DM Mono','Courier New',monospace; font-size:9px; letter-spacing:0.15em; color:rgba(240,237,230,0.2); text-transform:uppercase;">enigmasac.com</span>
          </td>
        </tr>
      </table>
    </div>

  </div>

</div>

</body>
</html>`;
}
