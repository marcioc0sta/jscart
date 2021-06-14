import data from './products.json'

const { products } = data

export const findById = id => {
  return products.find(item => item.id === id) || 'product not found'
}

