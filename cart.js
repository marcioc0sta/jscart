import data from './products.json'
import {PROMOTION_TYPES} from "./enum";

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

export const getPromotion = productsArray => {
  const categories = productsArray.map(item => findById(item).category)
  const check = eqCheckers(categories)

  if(check.allEq) return PROMOTION_TYPES.SINGLE_LOOK
  if(check.byAmount(2)) return PROMOTION_TYPES.DOUBLE_LOOK
  if(check.byAmount(3)) return PROMOTION_TYPES.TRIPLE_LOOK

  return PROMOTION_TYPES.FULL_LOOK
}

