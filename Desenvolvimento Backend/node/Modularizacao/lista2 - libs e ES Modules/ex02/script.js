// Crie um arquivo dados.json contendo um array de produtos (cada um com nome, preco e quantidade). Desenvolva um script que leia esse arquivo de forma assíncrona, calcule o valor total em estoque de cada produto e o valor total geral, e grave um arquivo relatorio.txt formatado com essas informações — incluindo data e hora da geração no cabeçalho do relatório.

import {readFile, writeFile} from 'fs/promises'

async function lerDados(){
    const dadosBrutos = await readFile('dados.json', 'utf-8');
    return dadosBrutos
}

async function formataDados(dadosBrutos){
    const objetoDados = JSON.parse(dadosBrutos)
    return objetoDados 
}

async function geraRelatorio(objetoDados){
    const data = 
    const cabecalho = `Relatório de estoque - Gerado em: ${data}\n`
}

