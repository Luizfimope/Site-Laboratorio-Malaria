// Função para inicializar o mapa
function initMap() {
    // Definindo as coordenadas para o ICB UFMG
    const iCBLocation = { lat: -19.853799, lng: -43.982109 };  // As coordenadas geográficas para o ICB UFMG
    
    // Criando o mapa
    const map = new google.maps.Map(document.getElementById("map"), {
      center: iCBLocation,  // O mapa vai começar centrado no ICB
      zoom: 15,  // Zoom do mapa
    });
  
    // Criando um marcador para o ICB UFMG
    const marker = new google.maps.Marker({
      position: iCBLocation,
      map: map,
      title: "ICB UFMG"
    });
  }
  

