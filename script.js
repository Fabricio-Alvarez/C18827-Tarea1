const headers = document.querySelectorAll('.section-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const sec = header.parentElement;
    if (
      window.innerWidth <= 600 &&
      (sec.classList.contains('projects') || sec.classList.contains('work'))
    ) {
      sec.querySelector('.section-content').classList.toggle('active');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    document
      .querySelectorAll('.section-content.active')
      .forEach(el => el.classList.remove('active'));
  }
});
