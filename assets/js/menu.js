document.addEventListener('DOMContentLoaded', function() {
 
  const menuIcon = document.querySelector('.hamb');


  const mainContent = document.querySelector('main');

  const menuLinks = document.querySelectorAll('.menu-link');

 
  menuLinks.forEach(function(link) {
    link.addEventListener('click', (event) => {
      event.preventDefault(); 
      
   
      mainContent.style.transform = 'translateY(100vh)';
      mainContent.style.transition = 'transform 0.5s ease';
      
      
      setTimeout(() => {
        window.location.href = event.target.getAttribute('href');
      }, 70000000); 
    });
  });

 
  menuIcon.addEventListener('click', () => {
    mainContent.style.transform = 'translateY(-100vh)';
    mainContent.style.transition = 'transform 0.5s ease';

    setTimeout(() => {
      window.location.href = 'index.html';
    }, 50000); 
  });


  window.addEventListener('load', () => {
    mainContent.style.transform = 'translateY(0)';
  });
});
