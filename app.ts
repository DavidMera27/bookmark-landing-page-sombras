//Este tipado no es necesario, aqui lo que importa es el type-narrowing despues
const botonesLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.topic__link');
const topicSamples: NodeListOf<HTMLDivElement> = document.querySelectorAll('.topic__sample');
const formInput: HTMLInputElement = document.querySelector('.form__input--email');
const formBtn: HTMLButtonElement = document.querySelector('.form__input--btn');
const inputWrapper: HTMLDivElement = document.querySelector('.input__wrapper');

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(formInput instanceof HTMLInputElement) || !(inputWrapper instanceof HTMLDivElement)) return;
    if(formInput.validity.valid) return;
    if(formInput.validity.typeMismatch || formInput.validity.valueMissing) inputWrapper.classList.add('input__wrapper--error');
});

formInput.addEventListener('focus', (e) => {
    if (!(e.currentTarget instanceof HTMLInputElement)) return;
    inputWrapper.classList.remove('input__wrapper--error');
})

botonesLinks.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        //Type-narrowing del elemento
        if (!(e.currentTarget instanceof HTMLAnchorElement)) return;
        const actual = e.currentTarget;
        const yaActivo = actual.classList.contains('topic__link--active');

        // Si ya estaba activo, no se hace nada
        if (yaActivo) return;

        if (!(topicSamples[index] instanceof HTMLDivElement)) return;
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

