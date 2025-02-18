document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const query = searchInput.value.trim().toLowerCase();
            
            if (query === "bon jovi livin on a prayer") {
                window.location.href = "https://www.youtube.com/watch?v=lDK9QqIzhwk";
            } else {
             
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
  
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const query = searchInput.value.trim().toLowerCase();
        // Se o usuário digitar "dont dream its over", abre o vídeo correspondente
        if (query === "dont dream its over") {
          window.location.href = "https://www.youtube.com/watch?v=J9gKyRmic20";
        } else {
          // Para outras pesquisas, abre a página de resultados do YouTube
          window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        }
      }
    });
  });

  document.querySelector('.login').addEventListener('click', function() {
    window.location.href = 'login.html';
  });