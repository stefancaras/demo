const createCardFromProduct = (product) => {
	return `<div class='card flex column'>
              <img class="bookImage" src='${product.book_image}' />
			  <p class="title blackText"><b>${product.title.toLowerCase()}</b></p>
			  <p class="blackText">by ${product.author}</p>
			  <p class="description blackText">${product.description}</p>
              <p class="price">$ ${product.price}</p>
          </div>`;
};

const getProductsOnIndexPage = () => {
	fetch('./json/fiction.json')
		.then((result) => result.json())
		.then((products) => {
			const productCards = products.map((product) =>
				createCardFromProduct(product)
			);
			const innerHTMLProducts = productCards.join('');
			document.querySelector('#container').innerHTML =
				innerHTMLProducts;
		});
};

window.addEventListener('DOMContentLoaded', getProductsOnIndexPage);