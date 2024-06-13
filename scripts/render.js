export const renderizarProdutos = (produtos, pai) => {
  pai.innerHTML = "";
  produtos.forEach((produto) => {
    const card = produtoCard(produto);
    pai.append(card);
  });
};

const produtoCard = (produto) => {
  const { id, img, discount, description, previusPrice, price } = produto;

  const imgProduct = document.createElement("img");
  imgProduct.src = img;

  const spanPrevius = document.createElement("span");
  spanPrevius.innerText = `${discount}%`;

  const spanOff = document.createElement("span");
  spanOff.innerText = `off`;

  const divDiscount = document.createElement("div");
  divDiscount.classList = "card-off";
  divDiscount.append(spanPrevius, spanOff);

  const divImg = document.createElement("div");
  divImg.classList = "card-off-position";
  divImg.append(imgProduct, divDiscount);

  const p = document.createElement("p");
  p.innerText = description;

  const spanPreviusPrice = document.createElement("span");
  spanPreviusPrice.innerText = `de R$ ${previusPrice}`;

  const spanPrice = document.createElement("span");
  spanPrice.innerText = `R$ ${price}`;

  const span5x = document.createElement("span");
  span5x.innerText = `5x`;

  const spanDe = document.createElement("span");
  spanDe.innerText = `de`;

  const spanCurrentPrice = document.createElement("span");
  spanCurrentPrice.innerText = `R$ ${price / 5}`;

  const spanSemJuros = document.createElement("span");
  spanSemJuros.innerText = `sem juros`;

  const divPrices = document.createElement("div");
  divPrices.append(span5x, spanCurrentPrice, spanSemJuros);

  const totalPrice = document.createElement("div");
  totalPrice.classList = "display-flex flex-direction-column card-price";
  totalPrice.append(spanPreviusPrice, spanPrice, divPrices);

  const divText = document.createElement("div");
  divText.classList = "display-flex gap-section2 flex-direction-column";
  divText.append(p, totalPrice);

  const btn = document.createElement("button");
  btn.innerText = `Adicionar ao carrinho`;

  const divCard = document.createElement("div");
  divCard.classList = "card";
  divCard.id = id;
  divCard.append(divImg, divText, btn);

  const li = document.createElement("li");

  li.append(divCard);

  return li;
};
