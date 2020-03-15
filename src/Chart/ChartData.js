class ChartData {
  constructor(){
    this.products = []
  }

  setProduct(product){
    product.count ? product.count++ : product.count = 1;
    console.log(product);
    this.products.push(product);
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
}

export default new ChartData();