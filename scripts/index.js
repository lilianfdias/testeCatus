import { renderizarProdutos } from "./render.js";
import { products } from "./database.js";

let productCursor = 0;
const productSize = 4;

const containerProdutos = document.querySelector("#cardsProducts");
const proximo = document.querySelector("#next");
const anterior = document.querySelector("#prev");
const formBusca = document.querySelector("#busca");
const inputBusca = document.querySelector("#input");

const buscaProduto = (products) => {
  return products.filter((produto) =>
    produto.description.toLowerCase().includes(inputBusca.value.trim())
  );
};

const decCursor = (cursor) => {
  return cursor <= 0 ? 0 : 1;
};

const incCursor = (dbSize, cursor, size) => {
  return cursor >= dbSize - size ? 0 : 1;
};

proximo.addEventListener("click", () => {
  productCursor =
    productCursor +
    incCursor(buscaProduto(products).length, productCursor, productSize);
  renderizarProdutos(
    buscaProduto(products).slice(productCursor, productCursor + productSize),
    containerProdutos
  );
});

anterior.addEventListener("click", () => {
  productCursor = productCursor - decCursor(productCursor);
  renderizarProdutos(
    buscaProduto(products).slice(productCursor, productCursor + productSize),
    containerProdutos
  );
});

const busca = (event) => {
  event.preventDefault();
  renderizarProdutos(
    buscaProduto(products).slice(0, productSize),
    containerProdutos
  );
};

formBusca.addEventListener("submit", busca);
renderizarProdutos(
  buscaProduto(products).slice(0, productSize),
  containerProdutos
);
