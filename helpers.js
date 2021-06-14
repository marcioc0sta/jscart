import data from "./products.json";

const { products } = data
export const findById = id => {
  return products.find(item => item.id === id) || 'product not found'
}

export const eqCheckers = arr => {
  return {
    byAmount: amount => arr.filter(i => i === arr[0]).length === amount,
    allEq: arr.every(i => i === arr[0]),
  }
}