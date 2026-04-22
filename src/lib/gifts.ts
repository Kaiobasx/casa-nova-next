export interface Gift {
  id: number;
  name: string;
  description: string;
  image: string;
  amazonUrl: string;
  shopeeUrl: string;
  priority?: "high" | "medium" | "low";
}

export const gifts: Gift[] = [
  {
    id: 1,
    name: "Batedeira Planetária",
    description: "Perfeita para preparar todas as nossas receitas favoritas na cozinha nova!",
    image: "https://m.media-amazon.com/images/I/71V3QKAjtPL._AC_SX450_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=batedeira+planetaria",
    shopeeUrl: "https://shopee.com.br/search?keyword=batedeira%20planetaria",
    priority: "high",
  },
  {
    id: 2,
    name: "Jogo de Panelas Antiaderente",
    description: "Essencial para cozinhar sem preocupações e com mais saúde.",
    image: "https://m.media-amazon.com/images/I/71Fh0mnSknL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=jogo+de+panelas+antiaderente",
    shopeeUrl: "https://shopee.com.br/search?keyword=jogo%20de%20panelas%20antiaderente",
    priority: "high",
  },
  {
    id: 3,
    name: "Cafeteira Expresso",
    description: "Para começarmos o dia com um café delicioso e quentinho.",
    image: "https://m.media-amazon.com/images/I/51jTHJQjhBL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=cafeteira+expresso",
    shopeeUrl: "https://shopee.com.br/search?keyword=cafeteira%20expresso",
    priority: "high",
  },
  {
    id: 4,
    name: "Air Fryer",
    description: "Para refeições mais saudáveis e práticas, sem bagunça na cozinha.",
    image: "https://m.media-amazon.com/images/I/51NKkmrtVEL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=air+fryer",
    shopeeUrl: "https://shopee.com.br/search?keyword=air%20fryer",
    priority: "high",
  },
  {
    id: 5,
    name: "Liquidificador Potente",
    description: "Essencial para sucos, vitaminas e massas para bolos.",
    image: "https://m.media-amazon.com/images/I/51oF48-a1BL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=liquidificador",
    shopeeUrl: "https://shopee.com.br/search?keyword=liquidificador",
    priority: "medium",
  },
  {
    id: 6,
    name: "Forno Micro-ondas",
    description: "Para aquecer e preparar pratos de forma rápida e eficiente.",
    image: "https://m.media-amazon.com/images/I/51jWG1vyGyL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=microondas",
    shopeeUrl: "https://shopee.com.br/search?keyword=microondas",
    priority: "medium",
  },
  {
    id: 7,
    name: "Aspirador de Pó Robô",
    description: "Para uma casa sempre limpa sem esforço. Uma mão na roda!",
    image: "https://m.media-amazon.com/images/I/81w-AyhZt-L._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=aspirador+robo",
    shopeeUrl: "https://shopee.com.br/search?keyword=aspirador%20robo",
    priority: "medium",
  },
  {
    id: 8,
    name: "Jogo de Cama Macio",
    description: "Conforto e elegância para nossas noites de sono.",
    image: "https://m.media-amazon.com/images/I/51WJrTqatjL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=jogo+de+cama+casal",
    shopeeUrl: "https://shopee.com.br/search?keyword=jogo%20de%20cama%20casal",
    priority: "medium",
  },
  {
    id: 9,
    name: "Kit Toalhas de Banho e Rosto",
    description: "Maciez e absorção para o dia a dia, com um toque de luxo.",
    image: "https://m.media-amazon.com/images/I/81Arq7i+7ML._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=kit+toalhas+banho",
    shopeeUrl: "https://shopee.com.br/search?keyword=kit%20toalhas%20banho",
    priority: "medium",
  },
  {
    id: 10,
    name: "Conjunto de Taças de Vinho",
    description: "Para celebrar momentos especiais no nosso novo lar.",
    image: "https://m.media-amazon.com/images/I/41kOlFU1q3L._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=conjunto+tacas+vinho",
    shopeeUrl: "https://shopee.com.br/search?keyword=tacas%20vinho",
    priority: "low",
  },
  {
    id: 11,
    name: "Aparelho de Jantar Completo",
    description: "Para receber amigos e familiares com muito estilo e bom gosto.",
    image: "https://m.media-amazon.com/images/I/516yfWwMqeL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=aparelho+de+jantar",
    shopeeUrl: "https://shopee.com.br/search?keyword=aparelho%20de%20jantar",
    priority: "low",
  },
  {
    id: 12,
    name: "Conjunto de Utensílios de Cozinha",
    description: "Tudo o que precisamos para nossas aventuras culinárias.",
    image: "https://m.media-amazon.com/images/I/51E0MkFMLvL._AC_UL320_.jpg",
    amazonUrl: "https://www.amazon.com.br/s?k=utensilios+de+cozinha",
    shopeeUrl: "https://shopee.com.br/search?keyword=utensilios%20de%20cozinha",
    priority: "low",
  },
];
