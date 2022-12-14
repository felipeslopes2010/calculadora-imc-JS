const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso && !altura) {
        setResultado('Peso e Altura inválidos, Digite um valor numérico', false);
        return;
    }

    if (!peso) {
        setResultado('Peso inválido, Digite um valor numérico', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida, Digite um valor numérico', false);
        return;
    }

    const imc = getImc(peso, altura);
    const grupoImc = getGrupoImc(imc);

    const msg = `Seu IMC é ${imc} (${grupoImc}).`

    setResultado(msg, true);

});

function getGrupoImc(imc) {
    const grupoImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 40) {
        return grupoImc[5];
    }

    if (imc >= 35) {
        return grupoImc[4];
    }

    if (imc >= 30) {
        return grupoImc[3];
    }

    if (imc >= 25) {
        return grupoImc[2];
    }

    if (imc >= 18.5) {
        return grupoImc[1];
    }

    if (imc < 18.5) {
        return grupoImc[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('paragrafo-erro');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}