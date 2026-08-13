const btnWhatsapp = document.getElementById('btn-whatsapp') as HTMLButtonElement;
const btnEmail = document.getElementById('btn-email') as HTMLButtonElement;
const botoesCombo = document.querySelectorAll('.btn-combo') as NodeListOf<HTMLButtonElement>;

function abrirWhatsApp(): void {
  const telefone = '5531972652025'; 
  const mensagem = encodeURIComponent('Olá! Gostaria de um orçamento para suporte técnico de TI.');

  window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

function abrirEmail(): void {
  const email = 'suptec.gabriel@gmail.com';
  const assunto = encodeURIComponent('Solicitação de Suporte Técnico');
  const corpo = encodeURIComponent('Olá Gabriel, gostaria de solicitar suporte técnico para meu equipamento.');

  window.open(`mailto:${email}?subject=${assunto}&body=${corpo}`, '_blank');
}

function solicitarCombo(event: Event): void {
  const botaoClicado = event.currentTarget as HTMLButtonElement;
  const nomeDoCombo = botaoClicado.getAttribute('data-combo');
  const telefone = '5531972652025'; 
  const mensagem = encodeURIComponent(`Olá! Gostaria de agendar o ${nomeDoCombo}.`);
  
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

if (btnWhatsapp) {
  btnWhatsapp.addEventListener('click', abrirWhatsApp);
}

if (btnEmail) {
  btnEmail.addEventListener('click', abrirEmail);
}

botoesCombo.forEach(botao => {
  botao.addEventListener('click', solicitarCombo);
});