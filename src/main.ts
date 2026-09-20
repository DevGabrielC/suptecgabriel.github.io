type ClientType = 'PF' | 'PJ';

const WHATSAPP_NUMBER = '5531972652025';
const SUPPORT_EMAIL = 'suptec.gabriel@gmail.com';

const whatsappButtons = document.querySelectorAll<HTMLButtonElement>('.btn-wpp-dinamico');
const emailButtons = document.querySelectorAll<HTMLButtonElement>('.btn-email-dinamico');
const comboButtons = document.querySelectorAll<HTMLButtonElement>('.btn-combo');

// Abre links externos sem expor a página a window.opener (reverse tabnabbing).
function openExternalLink(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getClientType(event: Event): ClientType | null {
  const button = event.currentTarget as HTMLButtonElement;
  return button.getAttribute('data-cliente') as ClientType | null;
}

function handleWhatsAppClick(event: Event): void {
  const clientType = getClientType(event);

  const message = clientType === 'PJ'
    ? 'Olá! Acessei a página corporativa e gostaria de solicitar um orçamento de TI para a minha empresa.'
    : 'Olá! Acessei o site e gostaria de um orçamento para suporte técnico de TI no meu equipamento.';

  openExternalLink(buildWhatsAppUrl(message));
}

function handleEmailClick(event: Event): void {
  const clientType = getClientType(event);

  const subject = clientType === 'PJ'
    ? '[NOVO CLIENTE B2B] Solicitação de Suporte Empresarial'
    : 'Solicitação de Suporte Técnico';

  const body = clientType === 'PJ'
    ? 'Olá Gabriel,\n\nAcessei a página corporativa e gostaria de solicitar um orçamento de TI para a minha empresa. Nossas principais necessidades no momento são:\n\n- \n- \n\nAguardo retorno.'
    : 'Olá Gabriel,\n\nGostaria de solicitar suporte técnico para meu equipamento. O problema/serviço que preciso é:\n\n- \n\nAguardo retorno.';

  openExternalLink(`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
}

function handleComboClick(event: Event): void {
  const button = event.currentTarget as HTMLButtonElement;
  const comboName = button.getAttribute('data-combo') ?? '';
  openExternalLink(buildWhatsAppUrl(`Olá! Gostaria de agendar o ${comboName}.`));
}

whatsappButtons.forEach((button) => button.addEventListener('click', handleWhatsAppClick));
emailButtons.forEach((button) => button.addEventListener('click', handleEmailClick));
comboButtons.forEach((button) => button.addEventListener('click', handleComboClick));

// Menu mobile (site-nav): abre/fecha e fecha automaticamente ao escolher um link.
const navToggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const navLinks = document.getElementById('menuPrincipal');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Carrossel de avaliações: rola um cartão por clique, respeitando o scroll-snap do CSS.
const testimonialTrack = document.getElementById('testimonialTrack');
const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');

if (testimonialTrack && testimonialPrev && testimonialNext) {
  const scrollByCard = (direction: 1 | -1): void => {
    const card = testimonialTrack.querySelector<HTMLElement>('.testimonial-card');
    const trackGap = parseFloat(getComputedStyle(testimonialTrack).columnGap || '20');
    const amount = (card?.offsetWidth ?? 300) + trackGap;
    testimonialTrack.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  testimonialPrev.addEventListener('click', () => scrollByCard(-1));
  testimonialNext.addEventListener('click', () => scrollByCard(1));
}
