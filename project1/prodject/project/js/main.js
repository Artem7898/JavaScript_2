const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
  }
}

class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this.render();
  }

  _fetchProducts() {
    new Promise((res, rej) => {
      return fetch(API)
        .then(result=>result.json())
        .then(data=>{
          this.goods = [...data]
          this.render();
        })
        .catch(error => {
          console.log('Error:', error);
        })
    })
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}

class Cart {
  constructor(container = '.cart-body'){
    this.container = container
    this.goodsCart = []
    this.sum = 0
    this.countGoods = 0
    this._fetchGoodsCart()
    this.render()
  }
  _fetchGoodsCart(){
  }
  render(){
  }
  addGoodInCart(product){
    this.goodsCart.push(product)
  }
  removeGoodFromCart(product){
    this.goodsCart = this.goodsCart.filter(good => good.id !== product.id) 
  }
  setCountGoods(){
    this.countGoods = this.goodsCart.length 
  }
  setSum(){ 
    this.goodsCart.reduce((init, item) => {
      return init + item
    })
  }
}
const cart = new Cart()
new ProductList();