const { products } = require('./products.json');

const findById = id => {
  return products.find(item => item.id === id)
}

