// 1. Bouton Mode Sombre / Mode Clair
const boutonTheme = document.getElementById('toggle-theme');
if (boutonTheme) {
  boutonTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const estSombre = document.body.classList.contains('dark-mode');
    boutonTheme.textContent = estSombre ? 'Mode Clair' : 'Mode Sombre';
  });
}

// 2. Filtre du tableau de compétences
const boutonsFiltre = document.querySelectorAll('.filtre-btn');
const lignesTableau = document.querySelectorAll('#table-competences tr');

boutonsFiltre.forEach((bouton) => {
  bouton.addEventListener('click', () => {
    boutonsFiltre.forEach((b) => b.classList.remove('actif'));
    bouton.classList.add('actif');

    const filtreChoisi = bouton.dataset.filtre;

    lignesTableau.forEach((ligne) => {
      const statut = ligne.dataset.statut;
      if (filtreChoisi === 'tous' || statut === filtreChoisi) {
        ligne.style.display = '';
      } else {
        ligne.style.display = 'none';
      }
    });
  });
});

// 3. Confirmation d'envoi du formulaire
const formulaireContact = document.getElementById('form-contact');
const messageConfirmation = document.getElementById('confirmation-msg');

if (formulaireContact && messageConfirmation) {
  formulaireContact.addEventListener('submit', (event) => {
    event.preventDefault();
    const nomInput = document.getElementById('nom');
    const nom = nomInput ? nomInput.value.trim() : '';

    messageConfirmation.textContent = `Merci ${nom || 'pour votre message'} ! Votre message a bien été préparé (aperçu local).`;
    messageConfirmation.hidden = false;
    formulaireContact.reset();
  });
}