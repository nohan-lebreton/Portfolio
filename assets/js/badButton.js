document.addEventListener('click', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var button = document.querySelector('.badButton');
  var buttonRect = button.getBoundingClientRect();

  var buttonX = buttonRect.left + button.offsetWidth / 2;
  var buttonY = buttonRect.top + button.offsetHeight / 2;

  var distX = mouseX - buttonX;
  var distY = mouseY - buttonY;

  var distance = Math.sqrt(distX * distX + distY * distY);
  var threshold = button.offsetWidth / 2; // Seuil de distance basé sur la moitié de la largeur du bouton

  if (distance < threshold) {
    var angle = Math.atan2(distY, distX);
    var maxDistance = 100; // Distance maximale à laquelle le bouton s'éloigne

    var newX = buttonX - Math.cos(angle) * maxDistance;
    var newY = buttonY - Math.sin(angle) * maxDistance;

    button.style.left = newX - button.offsetWidth / 2 - buttonRect.left + 'px';
    button.style.top = newY - button.offsetHeight / 2 - buttonRect.top + 'px';
  } else {
    button.style.left = '';
    button.style.top = '';
  }
});















  