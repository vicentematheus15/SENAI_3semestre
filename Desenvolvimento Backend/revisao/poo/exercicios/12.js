// Crie uma lista de objetos variados (Botão, Input, Imagem) que herdam de ComponenteVisual. Percorra essa lista com um laço forEach chamando o método renderizar(). Cada objeto deve desenhar sua própria representação no console, demonstrando comportamento polimórfico.

// Classe base
class ComponenteVisual {
  renderizar() {
    console.log("Renderizando componente...");
  }
}

// Subclasse Botao
class Botao extends ComponenteVisual {
  renderizar() {
    console.log("[Botão] desenhado na tela");
  }
}

// Subclasse Input
class Input extends ComponenteVisual {
  renderizar() {
    console.log("[Input] campo de texto exibido");
  }
}

// Subclasse Imagem
class Imagem extends ComponenteVisual {
  renderizar() {
    console.log("[Imagem] exibida na tela");
  }
}

// Lista com objetos variados
const componentes = [
  new Botao(),
  new Input(),
  new Imagem(),
  new Botao()
];

// Percorrendo com forEach (polimorfismo)
componentes.forEach(componente => {
  componente.renderizar();
});