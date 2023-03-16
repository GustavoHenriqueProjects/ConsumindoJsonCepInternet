'use strict'

//import {pesquisarCep} from "./cep.js"
import {pesquisarCep} from "./postmon.js"

console.log(pesquisarCep)

const preencerFormulario = async () => {
    const cepDigitado = document.getElementById('cep').value
    const cep = await pesquisarCep(cepDigitado)
    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.estado
    document.getElementById('estado').value = cep.municipio
}

/**
 *  Quando o elemento perde o fogo, então a função prencherFormulario é acionada
 * */
document.getElementById('cep').addEventListener('blur', preencerFormulario)

