function verificarLogin() {
  const nome = document.getElementById('nome').value.trim().toLowerCase();
  if (nome === 'davi' || nome === 'isabelly') {
    window.location.href = 'main.html';
  } else {
    alert('Acesso negado! Só Davi ou Isabelly podem entrar.');
  }
}

function atualizarTempo() {
  const inicio = new Date("2024-10-26T20:27:00");
  const agora = new Date();
  let diff = agora - inicio;

  const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)) % 12;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const segundos = Math.floor(diff / 1000) % 60;

  if (document.getElementById("anos")) document.getElementById("anos").textContent = `${anos} ano(s)`;
  if (document.getElementById("meses")) document.getElementById("meses").textContent = `${meses} mês(es)`;
  if (document.getElementById("dias")) document.getElementById("dias").textContent = `${dias} dia(s)`;
  if (document.getElementById("horas")) document.getElementById("horas").textContent = `${horas} hora(s)`;
  if (document.getElementById("minutos")) document.getElementById("minutos").textContent = `${minutos} minuto(s)`;
  if (document.getElementById("segundos")) document.getElementById("segundos").textContent = `${segundos} segundo(s)`;
}

setInterval(atualizarTempo, 1000);