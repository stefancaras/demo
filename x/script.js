const createCardFromProduct = (product) => {
	return `<div class='card'>
              <h3>${product.author}</h3>
              <img src='${product.book_image}' />
              <p>${product.price} Lei</p>
          </div>`;
};

const getProductsOnIndexPage = () => {
	fetch('./nonfiction.json')
		.then((result) => result.json())
		.then((products) => {
			const productCards = products.map((product) =>
				createCardFromProduct(product)
			);
			const innerHTMLProducts = productCards.join('');
			document.querySelector('.container').innerHTML =
				innerHTMLProducts;
		});
};

window.addEventListener('DOMContentLoaded', getProductsOnIndexPage);