// src/main.ts

// 1. Buscamos o botão de WhatsApp pelo ID que colocamos no HTML
const btnWhatsapp = document.getElementById('btn-whatsapp') as HTMLButtonElement;

// 2. Criamos a função que redireciona para o seu WhatsApp
function abrirWhatsApp(): void {
  // Substitua '5511999999999' pelo seu número de telefone (Código do país 55 + DDD + Número)
  const telefone = '5531972652025'; 
  const mensagem = encodeURIComponent('Olá! Gostaria de um orçamento para suporte técnico de TI.');
  
  // Abre o link do WhatsApp em uma nova aba
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}

// 3. Verificamos se o botão existe na página e adicionamos a ação de clique
if (btnWhatsapp) {
  btnWhatsapp.addEventListener('click', abrirWhatsApp);
}