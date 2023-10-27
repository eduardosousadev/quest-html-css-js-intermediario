const campos = document.querySelectorAll('.campo');
const campoMensagem = document.querySelector('textarea');
const advertencias = document.querySelectorAll('.advertencia');
const advertencia = document.getElementsByClassName('advertencia');
const submit = document.getElementById('submit');

const adicionarBordaVermelha = (elemento) => {
    elemento.style.border = '2px solid #f52e2e';
}
const adicionarBordaVerde = (elemento) => {
    elemento.style.border = '2px solid #00c22b';
}
const mostrarErro = (elemento) => {
    elemento.nextElementSibling.classList.remove('esconder-erro');
}
const ajustarValorDaMargemInferior = (elemento, valor) => {
    elemento.style.marginBottom = `${valor}px`;
}
const removerMargemInferior = (elemento) => {
    elemento.style.marginBottom = '0';
}

const invalidarCampo = (elemento) => {
    mostrarErro(elemento);
    ajustarValorDaMargemInferior(elemento, 0);
    adicionarBordaVermelha(elemento);
};

const aprovarCampo = (elemento) => {
    adicionarBordaVerde(elemento);
    if(elemento === campoMensagem) {
        ajustarValorDaMargemInferior(elemento, 7);
    } else {
        ajustarValorDaMargemInferior(elemento, 15);
    };
};

submit.addEventListener('click', (e) => {
    campos.forEach(function(item) {
        if(!item.value) {
            invalidarCampo(item);
        } else if(item.value) {
            aprovarCampo(item);
        };
    });
    
    e.preventDefault();
});