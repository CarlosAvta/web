const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


document.querySelectorAll('.acc-head').forEach(head => {
      head.addEventListener('click', () => {
        const body = head.nextElementSibling;
        const open = body.style.display === 'block';
        document.querySelectorAll('.acc-body').forEach(b => b.style.display = 'none');
        body.style.display = open ? 'none' : 'block';
      });
    });