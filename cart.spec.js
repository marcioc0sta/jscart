import data from './products.json';

import { findById } from "./cart";

const { products } = data;

describe('cart', () => {
  it('should return a product based on its id', () => {
    //given
    const givenId = 120
    //when
    const product = findById(givenId)
    const inexistentProduct = findById(200001)
    //then
    expect(product).toStrictEqual(products[1])
    expect(inexistentProduct).toStrictEqual('product not found')
  });
});
