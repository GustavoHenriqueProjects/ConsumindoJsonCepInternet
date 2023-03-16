'use strict'
/**
 * async: Indica que a função será assíncrona,
 * ou seja, ela usará a palavra-chave await.
 */
export const pesquisarCep = async (cep) =>{

    /*********************************************************************************
     * Cria uma constante que armazena a URL da API ViaCEP que será consultada, 
     * com o CEP a ser pesquisado inserido na URL por meio da interpolação de 
     * string.
     * 
     * async:  isso significa que ela pode ser executada de forma independente 
     * em segundo plano, enquanto outras partes do código continuam a ser executadas.
     ********************************************************************************/
    const url = `https://viacep.com.br/ws/${cep}/json/`

    /**********************************************************************************
     * Aguarda a resposta da consulta à API ViaCEP usando o método fetch
     * 
     * await: "await" é uma palavra-chave que é usada para aguardar a conclusão
     * de uma operação assíncrona antes de continuar a executar o código. Ela só 
     * pode ser usada dentro de funções assíncronas.
     * Quando o JavaScript encontra a palavra-chave "await", ele pausa a 
     *do código até que a operação assíncrona seja concluída.
     * 
     * O fetch é uma API do navegador que permite enviar requisições HTTP para um
     *  servidor e receber a resposta em JavaScript
     *********************************************************************************/
    const response = await fetch(url)

    /*********************************************************************************
     * Aguarda a transformação da resposta da API em um objeto JavaScript 
     * usando o método json()
     * 
     ********************************************************************************/
    const data = await response.json()

    /*********************************************************************************
     * O operador spread (...) é usado para incluir todas as outras propriedades
     *  do objeto data. Com isso todas as outras propriedades da api serão retornadas.
     *********************************************************************************/
    return{
        municipio: data.localidade,
        estado: data.uf,
        // bairro: data.bairro,
        // logradouro: data.logradouro,
        ...data
    }
}

// export const cep = {
//     "cep": "69909-024",
//     "logradouro": "Rua Acre",
//     "complemento": "",
//     "bairro": "Rosa Linda",
//     "municipio": "Rio Branco",
//     "estado": "AC"
//     }