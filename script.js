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
  
    chat.innerHTML += `<p><strong>Eriquinha:</strong> ${resposta}</p>`;
  
    chat.scrollTop = chat.scrollHeight;
    input.value = "";
  }
  

