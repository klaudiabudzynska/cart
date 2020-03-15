class CartData {
  constructor(){
    this.products = []
  }

  setProduct(product){
    if(product.amount) product.amount++ 
    else{
      product.amount = 1;
      this.products.push(product);
    }
  }

  updateProductAmount(productId, diff){
    this.products.forEach(product => {
      if(product.id === productId){
        product.amount += diff
        return;
      }
    })
  }

  getProducts(){
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

  getTotalPrice(){
    let total = 0;
    this.products.forEach(product => {
      total += product.amount * product.price;
    })

    return total;
  }
}

export default new CartData();