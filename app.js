const status = document.getElementById("status");

async function checkBackend() {
  try {
  const res = await fetch("https://game-proxy.ailexxx2354.workers.dev/ping");
    if (!res.ok) throw new Error("Falha no backend");
    const data = await res.text();
    status.innerText = "✅ Backend online: " + data;
  } catch (err) {
    status.innerText = "⚠️ Backend indisponível. Modo offline ativado.";
  }
}

checkBackend();
