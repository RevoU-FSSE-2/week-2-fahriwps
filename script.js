window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  var headerImage = document.getElementById('dog-image-header');
  var isHeaderImageHidden = headerImage.classList.contains('hide-image');

  if (window.scrollY > nav.offsetTop && !isHeaderImageHidden) {
    headerImage.classList.add('hide-image');
  } else if (window.scrollY <= nav.offsetTop && isHeaderImageHidden) {
    headerImage.classList.remove('hide-image');
  }
});

function scrollToRegistration() {
  const registrationSection = document.getElementById('registration-form');
  registrationSection.scrollIntoView({ behavior: 'smooth' });
}
