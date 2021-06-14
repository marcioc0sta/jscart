import {PROMOTION_TYPES} from "./enum";
import {eqCheckers, findById} from "./helpers";

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

