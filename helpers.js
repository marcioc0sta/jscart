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

export const sum = arr => arr.reduce((acum, current) => {
  return acum + current
}, 0)

export const round = total => Number(total.toFixed(2))

export const pipeFunctions = (...functions) => args =>
  functions.reduce((arg, fn) => fn(arg), args)

export const fMap = arr => identity => {
  return arr.map(identity)
}
