var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true, // Faz com que os slides fiquem rodando infinitamente
  autoplay: {
      delay: 6000, // Troca de slide a cada 4 segundos
      disableOnInteraction: false // Permite interação sem desativar o autoplay
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true // Permite clicar nos pontos de paginação
  },

});

function filtrarConteudo(event) {
    event.preventDefault();
  
    const termo = document.getElementById("campoBusca").value.trim().toLowerCase();
    const itens = document.querySelectorAll('.galeria-itens .item');
  
    if (!termo) {
      // Se o campo estiver vazio, mostra todos
      itens.forEach(item => item.style.display = 'block');
      return;
    }
  
    itens.forEach(item => {
      const nome = item.dataset.nome.toLowerCase();
      item.style.display = nome.includes(termo) ? 'block' : 'none';
    });
  }


  function toggleChat() {
    const chat = document.getElementById("chatBox");
    chat.style.display = (chat.style.display === "block") ? "none" : "block";
  }
  
  function enviarMensagem(event) {
    event.preventDefault();
  
    const input = document.getElementById("chatInput");
    const mensagem = input.value.trim();
    if (!mensagem) return;
  
    const chat = document.getElementById("chatMessages");
  
    chat.innerHTML += `<p><strong>Você:</strong> ${mensagem}</p>`;
  
    // Resposta simulada
    let resposta = "Ainda estou aprendendo!";
  
    if (mensagem.toLowerCase().includes("contato")) {
      resposta = "Você pode nos contatar pela aba 'Contato' no menu acima.";
    } else if (mensagem.toLowerCase().includes("coleção")) {
      resposta = "Nossa coleção está disponível na aba 'Coleção'.";
    }
  
    chat.innerHTML += `<p><strong>Laveran:</strong> ${resposta}</p>`;
  
    chat.scrollTop = chat.scrollHeight;
    input.value = "";
  }
  


  // ====== MENU HAMBÚRGUER ======
(function () {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('navMenu');

  if (!btn || !nav) return;

  // abre/fecha o nav
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // fecha o menu ao clicar fora (mobile)
  document.addEventListener('click', (e) => {
    const clickInside = nav.contains(e.target) || btn.contains(e.target);
    if (!clickInside && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // ====== DROPDOWN POR TOQUE NO MOBILE ======
  // Em telas menores, o hover não funciona; vamos abrir/fechar por clique
  const MQ = window.matchMedia('(max-width: 992px)');
  const dropdowns = Array.from(nav.querySelectorAll('.dropdown'));

  function bindDropdownClicks() {
    dropdowns.forEach(drop => {
      const trigger = drop.querySelector(':scope > a');

      // evita duplicar listeners ao alternar breakpoints
      drop._listener && trigger.removeEventListener('click', drop._listener);

      if (MQ.matches && trigger) {
        const handler = (ev) => {
          // se o link é âncora (#) ou vazio, previne navegação
          if (!trigger.getAttribute('href') || trigger.getAttribute('href') === '#') {
            ev.preventDefault();
          } else {
            // se tem link real, só abre/fecha e NÃO navega no primeiro toque
            ev.preventDefault();
          }
          // alterna este dropdown e fecha os outros
          const isOpen = drop.classList.toggle('open');
          dropdowns.forEach(d => { if (d !== drop) d.classList.remove('open'); });
          // acessibilidade
          trigger.setAttribute('aria-expanded', String(isOpen));
        };
        trigger.setAttribute('aria-haspopup', 'true');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.addEventListener('click', handler);
        drop._listener = handler;
      }
    });
  }

  bindDropdownClicks();
  MQ.addEventListener('change', bindDropdownClicks);
})();


