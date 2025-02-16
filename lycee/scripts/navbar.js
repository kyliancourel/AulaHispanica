// Chargement de la navbar
fetch('https://kyliancourel.github.io/AulaHispanica/lycee/pages/navbar.html')
  .then(response => {
    if (!response.ok) throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    return response.text();
  })
  .then(data => {
    // Insérer la navbar dans la page
    document.getElementById('navbar-container').innerHTML = data;

    // Ajouter dynamiquement la feuille de style navbar.css
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://kyliancourel.github.io/AulaHispanica/lycee/styles/navbar.css';
    document.head.appendChild(linkElement);

    // Sélection des éléments
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.getElementById("menu-toggle");
    const navbarMenu = document.getElementById("navbar-menu");

    // Effet sticky + transparence au scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Menu burger : ouverture / fermeture
    menuToggle.addEventListener("click", function() {
        navbarMenu.classList.toggle("show");
        menuToggle.classList.toggle("active");
    });

  })
  .catch(error => console.error('Erreur lors du chargement de la navbar :', error));
