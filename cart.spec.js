import data from './products.json';

import {getCart, getPromotion, getPromotionalValues} from "./cart";
import {eqCheckers, findById} from "./helpers";
import {PROMOTION_TYPES} from "./enum";

const { products } = data;

const fullLookArr = [120, 230, 310, 490]
const doubleLookArr = [130, 140, 230, 260]
const singleLookArr = [110, 120, 130, 140]
const trippleLookArr = [110, 130, 140, 230, 310, 330]

describe('cart', () => {
  it('should return a product based on its id', function ()  {
    //given
    const givenId = 120
    //when
    const product = findById(givenId)
    const inexistentProduct = findById(200001)
    //then
    expect(product).toStrictEqual(products[1])
    expect(inexistentProduct).toStrictEqual('product not found')
  });
  it('the equality checkers should return accordingly', function () {
    //given
    const array1 = [2, 2]
    const array2 = ['a', 'a', 'b', 'c']
    const array3 = ['a', 'b', 2]
    //when
    const check = eqCheckers(array1)
    const check2 = eqCheckers((array2))
    const check3 = eqCheckers(array3)
    //then
    expect(check.allEq).toBe(true)
    expect(check2.byAmount(2)).toBe(true)
    expect(check3.allEq).toBe(false)
    expect(check3.byAmount(3)).toBe(false)
  });
  it('should get the promotions accordingly', function () {
    //when
    const full = getPromotion(fullLookArr)
    const double = getPromotion(doubleLookArr)
    const single = getPromotion(singleLookArr)
    const tripple = getPromotion(trippleLookArr)
    //then
    expect(full).toStrictEqual(PROMOTION_TYPES.FULL_LOOK)
    expect(double).toStrictEqual(PROMOTION_TYPES.DOUBLE_LOOK)
    expect(single).toStrictEqual(PROMOTION_TYPES.SINGLE_LOOK)
    expect(tripple).toStrictEqual(PROMOTION_TYPES.TRIPLE_LOOK)
  });
  it('should get the promotional values', function () {
    //given
    const expectedValues1 = [99.99, 144.99, 79.99, 79.99]
    //when
    const fullLookPrice = getPromotionalValues(fullLookArr)
    //then
    expect(fullLookPrice).toStrictEqual(expectedValues1)
  });
  it('should get the cart object accordingly', function () {
    //given
    const expectedValue = {
      products: [
        {
          name: 'PINK PANTHER™ T-SHIRT',
          category: 'T-SHIRTS'
        },
        {
          name: 'RUBBERIZED PRINTED T-SHIRT',
          category: 'T-SHIRTS'
        },
        {
          name: 'CONTRAST SLOGAN T-SHIRT',
          category: 'T-SHIRTS'
        },
        {
          name: 'KNIT JOGGING PANTS',
          category: 'PANTS'
        },
        {
          name: 'ASYMMETRICAL LEATHER SLIDE HEELS',
          category: 'SHOES'
        },
        {
          name: 'SLINGBACK KITTEN HEEL SHOES WITH METAL DETAIL',
          category: 'SHOES'
        }
      ],
      promotion: 'TRIPLE LOOK',
      totalPrice: 784.94,
      discountValue: 130,
      discount: '14.21%'
    }
    //when
    const result = getCart(trippleLookArr)
    //then
    expect(result).toEqual(expectedValue)
  });
});
