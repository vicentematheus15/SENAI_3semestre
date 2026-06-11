export const PRODUCTS = [
  {
    id: 1,
    name: 'Tênis Nike Air Max 270',
    price: 299.90,
    category: 'calcados',
    categoryLabel: 'Calçados',
    emoji: '👟',
    description: 'Tênis esportivo com tecnologia Air Max para máximo conforto no dia a dia. Solado em espuma de alta qualidade e design moderno.',
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43'],
  },
  {
    id: 2,
    name: 'Camisa Polo Ralph Lauren',
    price: 189.90,
    category: 'roupas',
    categoryLabel: 'Roupas',
    emoji: '👕',
    description: 'Camisa polo clássica com bordado característico. Material 100% algodão premium, ideal para ocasiões casuais e formais.',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
  },
  {
    id: 3,
    name: 'Mochila Adidas Classic',
    price: 149.90,
    category: 'acessorios',
    categoryLabel: 'Acessórios',
    emoji: '🎒',
    description: 'Mochila esportiva com compartimento principal amplo e bolso frontal. Material resistente à água, ideal para o dia a dia.',
    sizes: ['Único'],
  },
  {
    id: 4,
    name: 'Fone JBL Tune 760NC',
    price: 399.90,
    category: 'eletronicos',
    categoryLabel: 'Eletrônicos',
    emoji: '🎧',
    description: 'Fone de ouvido over-ear com cancelamento de ruído ativo. Bateria de 35 horas, conexão Bluetooth 5.0 e som JBL Pure Bass.',
    sizes: ['Único'],
  },
  {
    id: 5,
    name: 'Relógio Casio G-Shock',
    price: 249.90,
    category: 'acessorios',
    categoryLabel: 'Acessórios',
    emoji: '⌚',
    description: 'Relógio resistente a impactos e água até 200m. Cronômetro, alarme, calendário automático e luz de fundo LED.',
    sizes: ['Único'],
  },
  {
    id: 6,
    name: 'Óculos Ray-Ban Wayfarer',
    price: 459.90,
    category: 'acessorios',
    categoryLabel: 'Acessórios',
    emoji: '🕶️',
    description: 'Óculos de sol icônico com lentes polarizadas UV400. Armação em acetato de alta qualidade e estilo atemporal.',
    sizes: ['Único'],
  },
]

export function formatPrice(price) {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id))
}
