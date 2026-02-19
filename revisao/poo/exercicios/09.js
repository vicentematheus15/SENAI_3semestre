// Utilize uma classe nativa do JavaScript, como Array, e crie uma subclasse chamada ListaOrdenada. Sobrescreva o método push() para garantir que, sempre que um item for adicionado, a lista se mantenha automaticamente ordenada.

class ListaOrdenada extends Array {
  push(...itens) {
    // adiciona os itens normalmente
    super.push(...itens);

    // ordena a lista após inserir
    this.sort((a, b) => a - b);

    // retorna o novo tamanho (como o push original)
    return this.length;
  }
}

// Teste
const lista = new ListaOrdenada();

lista.push(5);
lista.push(2);
lista.push(8);
lista.push(1);

console.log(lista); // [1, 2, 5, 8]