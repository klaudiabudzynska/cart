class CartData {
  constructor(){
    this.products = []
  }

  setProduct(product){
    if(product.count) product.count++ 
    else{
      product.count = 1; 
      this.products.push(product);
    }
  }

  getProducts(){
    console.log(this.products);
    return this.products
  }

  removeProduct(productId){
    this.products.forEach((product, i) => {
      if(product.id === productId){
        this.products.splice(i, 1);
        return;
      }
    })
  }
}

export default new CartData();