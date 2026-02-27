// 1- Estado (o carrinho em memória)
let carrinho = [];

// 2- Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco, quantidade) {
  const item = { nome, preco, quantidade };
  let mensagemErro = document.getElementById("mensagem-erro");
  mensagemErro.textContent = "";

  // Precisa validar se o nome é vazio, se preço é > 0 e se quantidade > 0 depois adicionar e atualizar o item do carrinho
  if (nome.trim() === "") {
    console.error("Erro: nome do produto não pode ser vazio");
    mensagemErro.textContent = "Erro: nome do produto não pode ser vazio";
    return;
  }

  if (isNaN(preco) || preco <= 0) {
    console.error("Erro: preço inválido para o produto:", preco);
    mensagemErro.textContent = "Erro: preço deve ser maior que 0";
    return;
  }

  if (isNaN(quantidade) || quantidade <= 0) {
    console.error("Erro: quantidade inválida para o produto:", quantidade);
    mensagemErro.textContent =
      "Erro: quantidade deve ser um número maior que 0";
    return;
  }

  // Procurar no carrinho se já existe o produto do mesmo nome
  const itemExistente = carrinho.find((item) => item.nome === nome);
  // O find retorna o primeiro item encontrado ou undefined se não encontrar
  // por isso a variável itemExistente pode ser um objeto ou undefined

  // Produto existente: comparar preço novo com preço salvo
  if (itemExistente && itemExistente.preco !== preco) {
    console.error("Erro: preço diferente para o produto:", nome);
    mensagemErro.textContent = "Erro: produto já existe com outro preço";
    return;
  }

  if (itemExistente) {
    // Se o item já existe, atualiza a quantidade
    carrinho = carrinho.map((item) =>
      item.nome === nome
        ? { ...item, quantidade: item.quantidade + quantidade }
        : item,
    );
  } else {
    // Se o item não existe, adiciona ao carrinho
    carrinho.push(item);
  }

  console.log(
    `Adicionado ao carrinho: ${nome} - R$${preco.toFixed(2)} x ${quantidade}`,
  ); // Exibe o item adicionado no console, o toFixed é para mostrar o preço com 2 casas decimais
  mensagemErro.textContent = "";

  // Retornar a lista atualizada do carrinho para exibir no console
  return carrinho;
}

//3- Função de renderização da lista do carrinho, para mostrar os itens adicionados na tela
function rendDaLista() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = ""; // Limpa a lista antes de renderizar

  // Mostrar os intens do carrinho na tela
  carrinho.forEach((item) => {
    const linhaItem = document.createElement("div");
    linhaItem.className = "linha";

    const linhaNome = document.createElement("div");
    linhaNome.className = "coluna nome";

    const linhaPreco = document.createElement("div");
    linhaPreco.className = "coluna preco";

    const linhaQuantidade = document.createElement("div");
    linhaQuantidade.className = "coluna quantidade";

    const linhaSubtotal = document.createElement("div");
    linhaSubtotal.className = "coluna subtotal";

    const linhaAcao = document.createElement("div");
    linhaAcao.className = "coluna acao";


    // O textContent é para mostrar o nome do produto na tela, o item.nome é a propriedade do objeto item que tem o nome do produto
    linhaNome.textContent = item.nome;
    linhaPreco.textContent = `R$${item.preco.toFixed(2)}`;
    linhaQuantidade.textContent = item.quantidade;
    linhaSubtotal.textContent = `R$${(item.preco * item.quantidade).toFixed(2)}`;
    const btnRemover = document.createElement("button");
    btnRemover.className = "btn-remover";
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", () => {
      removerDoCarrinho(item.nome); // remove o item do carrinho

    });
    linhaAcao.appendChild(btnRemover);
    linhaItem.appendChild(linhaNome);
    linhaItem.appendChild(linhaPreco);
    linhaItem.appendChild(linhaQuantidade);
    linhaItem.appendChild(linhaSubtotal);
    linhaItem.appendChild(linhaAcao);
    lista.appendChild(linhaItem);
    // O appendChild é para adicionar o elemento criado na tela, o linhaItem é o elemento que tem as informações do produto e o btnRemover é o botão para remover o item do carrinho
  });

  if (carrinho.length === 0) {
    const item = document.createElement("div");
    item.textContent = "O carrinho está vazio."; // Mensagem de erro
    lista.appendChild(item);
  }
}

// Botão para adicionar o item ao carrinho
let buttonAdicionar = document.getElementById("btn-adicionar");
buttonAdicionar.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const preco = parseFloat(document.getElementById("preco").value);
  const quantidade = parseInt(document.getElementById("quantidade").value, 10);

  adicionarAoCarrinho(nome, preco, quantidade);
  rendDaLista(); // Atualiza a lista do carrinho na tela
  atualizarResumo(); // Atualiza o resumo do carrinho após adicionar um item
});


// 4- Função remover do carrinho, para remover um item do carrinho
function removerDoCarrinho(nome) {
  carrinho = carrinho.filter((item) => item.nome !== nome);
  console.log(`Removido do carrinho: ${nome}`);
  rendDaLista(); // Atualiza a lista do carrinho na tela
  atualizarResumo(); // Atualiza o resumo do carrinho após remover um item
}

// 5- Função para atualizar o resumo do carrinho, mostrando o total de itens, valor total, desconto e valor final
function atualizarResumo() {
  let totalBruto = 0;
  let quantidadeTotal = 0;
  let percentualDesconto = 0;
  let valorDesconto = 0;
  let totalFinal = 0;

  const totalBrutoElement = document.getElementById("total-bruto");
  const percentualDescontoElement = document.getElementById("percentual-desconto");
  const valorDescontoElement = document.getElementById("valor-desconto");
  const totalFinalElement = document.getElementById("total-final");

  carrinho.forEach((item) => {
    totalBruto += item.preco * item.quantidade;
    quantidadeTotal += item.quantidade;
  });// O forEach é para percorrer o array do carrinho e calcular o total bruto

  if (quantidadeTotal >= 1 && quantidadeTotal <= 2) {
    percentualDesconto = 0;
  } else if (quantidadeTotal >= 3 && quantidadeTotal <= 5) {
    percentualDesconto = 0.05; // 3 a 5 produtos = 5% de desconto
  } else if (quantidadeTotal >= 6 && quantidadeTotal <= 9) {
    percentualDesconto = 0.10; // 6 a 9 = 10% de desconto
  } else if (quantidadeTotal >= 10) {
    percentualDesconto = 0.15; // 10 ou mais = 15% de desconto
  }

  valorDesconto = totalBruto * percentualDesconto;
  totalFinal = totalBruto - valorDesconto;

  totalBrutoElement.textContent = `R$ ${totalBruto.toFixed(2)}`;
  percentualDescontoElement.textContent = `${(percentualDesconto * 100).toFixed(0)}%`;
  valorDescontoElement.textContent = `R$ ${valorDesconto.toFixed(2)}`;
  totalFinalElement.textContent = `R$ ${totalFinal.toFixed(2)}`;
}
