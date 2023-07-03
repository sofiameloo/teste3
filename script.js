// Dados dos ingressos
var ingressos = [
  {
    nome: "Cadeira Inferior",
    data: "2023-06-15",
    preco: 445
  },
  {
    nome: "Cadeira Inferior ",
    data: "2023-06-09",
    preco: 495
  },
  {
    nome: "Cadeira Inferior",
    data: "2023-06-09",
    preco: 450
  },
  {
    nome: "Cadeira Inferior",
    data: "2023-06-13",
    preco: 550
    },
  {
    nome: "Cadeira Inferior",
    data: "2023-06-12",
      preco: 500
  }
];

// Função para carregar os ingressos na página
function carregarIngressos() {
  var listaIngressos = document.getElementById('lista-ingressos');

  // Limpar a lista de ingressos
  listaIngressos.innerHTML = '';

  // Adicionar os ingressos à lista
  ingressos.forEach(function(ingresso) {
    var divIngresso = document.createElement('div');
    divIngresso.className = 'ingresso';
    divIngresso.setAttribute('data-data', ingresso.data);
    divIngresso.setAttribute('data-preco', ingresso.preco);

    var h4 = document.createElement('h4');
    h4.textContent = ingresso.nome;

    var p1 = document.createElement('p');
    p1.textContent = 'Data: ' + ingresso.data;

    var p2 = document.createElement('p');
    p2.textContent = 'Preço: R$ ' + ingresso.preco.toFixed(2);

    divIngresso.appendChild(h4);
    divIngresso.appendChild(p1);
    divIngresso.appendChild(p2);

    listaIngressos.appendChild(divIngresso);
  });
}

// Carregar os ingressos ao carregar a página
window.addEventListener('load', function() {
  carregarIngressos();
});

// Função para filtrar os ingressos
function filtrarIngressos() {
  var filtro = document.getElementById('filtro').value;
  var listaIngressos = document.getElementById('lista-ingressos');
  var ingressos = listaIngressos.getElementsByClassName('ingresso');

  // Converter a lista de ingressos em um array para facilitar a manipulação
  var ingressosArray = Array.from(ingressos);

  // Ordenar os ingressos de acordo com o filtro selecionado
  switch (filtro) {
    case 'recente':
      ingressosArray.sort(function(a, b) {
        var dataA = new Date(a.getAttribute('data-data'));
        var dataB = new Date(b.getAttribute('data-data'));
        return dataB - dataA;
      });
      break;
    case 'antigo':
      ingressosArray.sort(function(a, b) {
        var dataA = new Date(a.getAttribute('data-data'));
        var dataB = new Date(b.getAttribute('data-data'));
        return dataA - dataB;
      });
      break;
    case 'menor-preco':
      ingressosArray.sort(function(a, b) {
        var precoA = parseFloat(a.getAttribute('data-preco'));
        var precoB = parseFloat(b.getAttribute('data-preco'));
        return precoA - precoB;
      });
      break;
    case 'maior-preco':
      ingressosArray.sort(function(a, b) {
        var precoA = parseFloat(a.getAttribute('data-preco'));
        var precoB = parseFloat(b.getAttribute('data-preco'));
        return precoB - precoA;
      });
      break;
  }

  // Limpar a lista de ingressos
  while (listaIngressos.firstChild) {
    listaIngressos.firstChild.remove();
  }

  // Adicionar os ingressos ordenados de volta à lista
  ingressosArray.forEach(function(ingresso) {
    listaIngressos.appendChild(ingresso);
  });
}
