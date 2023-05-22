$(document).ready(function() {
    $('#contact-form').submit(function(event) {
      event.preventDefault(); // Empêche la soumission du formulaire
  
      // Récupération des valeurs des champs
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();
  
      // Configuration d'EmailJS
      emailjs.init('service_6vdbo1s'); // Remplacez YOUR_USER_ID par votre identifiant utilisateur EmailJS
  
      // Envoi de l'e-mail
      emailjs.send('service_6vdbo1s', 'template_brylh97', {
        to_name: 'lebreton.nohan@gmail.com', // Remplacez par votre nom ou adresse e-mail de destination
        from_name: name,
        from_email: email,
        message: message
      })
      .then(function(response) {
        // Action à effectuer en cas de succès (par exemple, afficher un message de confirmation)
        alert('Votre message a été envoyé avec succès !');
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
      }, function(error) {
        // Action à effectuer en cas d'erreur (par exemple, afficher un message d'erreur)
        alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
      });
    });
  });