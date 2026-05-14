import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const produtos = [
  { id: 1, nome: "Notebook Dell Inspiron", categoria: "Eletrônicos", preco: 3499.90 },
  { id: 2, nome: "Mouse Gamer Logitech", categoria: "Periféricos", preco: 189.90 },
  { id: 3, nome: "Teclado Mecânico Redragon", categoria: "Periféricos", preco: 279.90 },
  { id: 4, nome: "Monitor LG 24 Polegadas", categoria: "Monitores", preco: 899.90 },
  { id: 5, nome: "Cadeira Gamer ThunderX3", categoria: "Acessórios", preco: 1299.90 },
  { id: 6, nome: "Smartphone Samsung Galaxy", categoria: "Celulares", preco: 2499.90 },
  { id: 7, nome: "Fone de Ouvido JBL", categoria: "Periféricos", preco: 299.90 },
  { id: 8, nome: "HD Externo Seagate 1TB", categoria: "Armazenamento", preco: 379.90 },
  { id: 9, nome: "Webcam Full HD Logitech", categoria: "Acessórios", preco: 249.90 },
  { id: 10, nome: "Impressora HP DeskJet", categoria: "Acessórios", preco: 599.90 }
];

  const produtosFiltrados = produtos.filter((produto) => {
    return produto.categoria === 'Periféricos'
  })

 
  return (
    <>
      <section id="center">
        
      </section>
    </>
  )
}

export default App
