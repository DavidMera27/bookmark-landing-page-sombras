
const botones: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.folding__cta');

botones.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if(!(e.currentTarget instanceof Element)) return;
    const actual = e.currentTarget.closest('.texts')

    if(!(actual instanceof Element)) return;
    const yaActivo = actual.classList.contains('texts--folding--active');
    
    // Remueve la clase de todos
    document.querySelectorAll('.texts--folding--active')
      .forEach(el => el.classList.remove('texts--folding--active'));

    // Si no estaba activo, lo activamos
    if (!yaActivo) {
      actual instanceof Element && actual.classList.add('texts--folding--active');
    }
  });
});
