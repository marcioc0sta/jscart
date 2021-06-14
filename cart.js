import {PROMOTION_TYPES} from "./enum";
import { eqCheckers, findById, round, sum } from "./helpers";

export const getPromotion = productsArray => {
  const categories = productsArray.map(item => findById(item).category)
  const check = eqCheckers(categories)

  if(check.allEq) return PROMOTION_TYPES.SINGLE_LOOK
  if(check.byAmount(2)) return PROMOTION_TYPES.DOUBLE_LOOK
  if(check.byAmount(3)) return PROMOTION_TYPES.TRIPLE_LOOK

  return PROMOTION_TYPES.FULL_LOOK
}

export const getPromotionalValues = productsArray => {
  const promotion = getPromotion(productsArray)
  return productsArray.map(item => {
    return [...findById(item).promotions]
      .find(item => item.looks.includes(promotion))?.price ?? findById(item).regularPrice
  })
}

export const getCart = productsArray => {
  const promotion = getPromotion(productsArray)
  const fullProducts = productsArray.map(findById)

  const products = fullProducts.map(({ name, category }) => ({ name, category }))
  const regularPrices = fullProducts.map(item => item.regularPrice)
  const promotionalPrices = getPromotionalValues(productsArray)

  const fullPrice = round(sum(regularPrices))
  const totalPrice = round(sum(promotionalPrices))
  const discountValue = round(fullPrice - totalPrice)
  const discount = `${round((fullPrice - totalPrice) / fullPrice * 100)}%`

  return {
    products,
    promotion,
    totalPrice,
    discountValue,
    discount
  }
}

