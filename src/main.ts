// src/main.ts

// 1. MAPEAMENTO DE ELEMENTOS
const botoesCombo = document.querySelectorAll('.btn-combo') as NodeListOf<HTMLButtonElement>;
const botoesWppDinamico = document.querySelectorAll('.btn-wpp-dinamico') as NodeListOf<HTMLButtonElement>;
const botoesEmailDinamico = document.querySelectorAll('.btn-email-dinamico') as NodeListOf<HTMLButtonElement>;

// 2. FUNÇÃO CONDICIONAL PARA WHATSAPP
function abrirWhatsAppCondicional(event: Event): void {
  const botaoClicado = event.currentTarget as HTMLButtonElement;
  const tipoCliente = botaoClicado.getAttribute('data-cliente');
  const telefone = '5531972652025'; 
  
  let mensagem = '';

  if (tipoCliente === 'PJ') {
    mensagem = encodeURIComponent('Olá! Acessei a página corporativa e gostaria de solicitar um orçamento de TI para a minha empresa.');
  } else {
    mensagem = encodeURIComponent('Olá! Acessei o site e gostaria de um orçamento para suporte técnico de TI no meu equipamento.');
  }

  window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

// 3. NOVA FUNÇÃO CONDICIONAL PARA E-MAIL
function abrirEmailCondicional(event: Event): void {
  const botaoClicado = event.currentTarget as HTMLButtonElement;
  const tipoCliente = botaoClicado.getAttribute('data-cliente');
  const email = 'suptec.gabriel@gmail.com';
  
  let assunto = '';
  let corpo = '';

  if (tipoCliente === 'PJ') {
    assunto = encodeURIComponent('[NOVO CLIENTE B2B] Solicitação de Suporte Empresarial');
    corpo = encodeURIComponent('Olá Gabriel,\n\nAcessei a página corporativa e gostaria de solicitar um orçamento de TI para a minha empresa. Nossas principais necessidades no momento são:\n\n- \n- \n\nAguardo retorno.');
  } else {
    assunto = encodeURIComponent('Solicitação de Suporte Técnico');
    corpo = encodeURIComponent('Olá Gabriel,\n\nGostaria de solicitar suporte técnico para meu equipamento. O problema/serviço que preciso é:\n\n- \n\nAguardo retorno.');
  }

  window.open(`mailto:${email}?subject=${assunto}&body=${corpo}`, '_blank');
}

// 4. FUNÇÃO PARA OS COMBOS DE SERVIÇO
function solicitarCombo(event: Event): void {
  const botaoClicado = event.currentTarget as HTMLButtonElement;
  const nomeDoCombo = botaoClicado.getAttribute('data-combo');
  const telefone = '5531972652025'; 
  const mensagem = encodeURIComponent(`Olá! Gostaria de agendar o ${nomeDoCombo}.`);
  
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

// 5. ATIVAÇÃO DOS EVENTOS DE CLIQUE
botoesWppDinamico.forEach(botao => {
  botao.addEventListener('click', abrirWhatsAppCondicional);
});

botoesEmailDinamico.forEach(botao => {
  botao.addEventListener('click', abrirEmailCondicional);
});

botoesCombo.forEach(botao => {
  botao.addEventListener('click', solicitarCombo);
});