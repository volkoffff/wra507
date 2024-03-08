window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 10) {
    // Ajoute la classe lorsque le défilement est supérieur à 30 pixels
    document
      .querySelector("nav")
      .classList.add("bg-stone-900/90", "backdrop-blur");
  } else {
    // Supprime la classe lorsque le défilement est inférieur ou égal à 30 pixels
    document
      .querySelector("nav")
      .classList.remove("bg-stone-900/90", "backdrop-blur");
  }
});

document.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section'); // Remplacez 'section' par le sélecteur de vos sections
  var scrollPosition = window.scrollY;

  sections.forEach(function(section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Si la position de défilement est dans la section, ajoutez la classe orange-text
          document.querySelector('nav a[href="#' + section.id + '"]').classList.add('text-orange-600');
      } else {
          // Sinon, supprimez la classe text-orange-600
          document.querySelector('nav a[href="#' + section.id + '"]').classList.remove('text-orange-600');
      }
  });
});
