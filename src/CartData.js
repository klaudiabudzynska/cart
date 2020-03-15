class CartData {
  constructor(){
    this.products = [{id:1,"name":"Sprouts - Brussel",price:88.19, count:2},
    {id:2,name:"Evaporated Milk - Skim",price:53.54, count: 1}]
  }

  setProduct(product){
    if(product.count) product.count++ 
    else{
      product.count = 1; 
      this.products.push(product);
    }
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

export default new CartData();