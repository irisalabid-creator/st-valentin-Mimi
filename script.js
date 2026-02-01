const btnOui = document.getElementById('btnOui');
const btnNon = document.getElementById('btnNon');
const resultMessage = document.getElementById('resultMessage');

btnOui.addEventListener('click', () => {
  // Le bouton Non disparaît doucement
  btnNon.classList.add('fade-out');

  // Le bouton Oui s'agrandit et pulse
  btnOui.classList.add('animate-grow');

  // Après 2 secondes, afficher le message YOUPIIII
  setTimeout(() => {
    resultMessage.classList.add('show');
    // Désactiver les boutons pour éviter plusieurs clics
    btnOui.disabled = true;
    btnNon.disabled = true;
  }, 2000);
});
