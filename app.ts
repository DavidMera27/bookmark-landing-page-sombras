
const botonesLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.topic__link');
const topicSamples: NodeListOf<HTMLDivElement> = document.querySelectorAll('.topic__sample');


botonesLinks.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!(e.currentTarget instanceof Element)) return;
        const actual = e.currentTarget;

        if (!(actual instanceof Element)) return;
        const yaActivo = actual.classList.contains('topic__link--active');

        // Si ya estaba activo, no se hace nada
        if (yaActivo) return;

        if (!(topicSamples[index] instanceof Element)) return;
        const topicSample = topicSamples[index];

        // Remueve la clase de todos
        botonesLinks
            .forEach(el => el.classList.remove('topic__link--active'));
        topicSamples
            .forEach(el => el.classList.remove('topic__sample--active'));

        // Como no estaba activo, lo activamos
        actual.classList.add('topic__link--active');
        topicSample.classList.add('topic__sample--active');

    });
});




/*
//Para footer input email
<input type="email" id="correo" required>

if (!input.validity.valid) {
  // input.validity.typeMismatch → si el formato de email está mal
  // input.validity.valueMissing → si está vacío y es required
}

*/
