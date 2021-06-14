# 🛒 Descobrir as promoções aplicadas a um carrinho de compras usando NodeJS

O arquivo 📁`src/data/products.json` possui uma lista de **25 produtos** diferentes,
distribuídos em **4 categorias**:

- 🏷️ **`T-SHIRTS`**
- 🏷️ **`PANTS`**
- 🏷️ **`SHOES`**
- 🏷️ **`BAGS`**

O `objeto` de cada produto possui **preço padrão** que pode ser identificado na propriedade 👉`regularPrice`, e também uma lista de **preços promocionais** identificado na propriedade 👉`promotions`.

O **preço final do carrinho** vai ser calculado de acordo com a **combinação das categorias** dos produtos adicionados.

As promoções do carrinho serão calculadas de acordo com as seguintes combinações de looks:

- **`SINGLE LOOK`** - Se todos os produtos do carrinho pertencem a uma única categoria.
- **`DOUBLE LOOK`** - Se pelo menos 2 produtos adicionados pertencem a categorias diferentes.
- **`TRIPLE LOOK`** - Se pelo menos 3 produtos pertencem a categorias diferentes.
- **`FULL LOOK`** - Se pelo menos 4 produtos pertencem a categorias diferentes.

> Se a combinação de produtos adicionados no carrinho corresponderem a uma das condições acima, o valor dos produtos que serão calculados serão os correspondentes na propriedade **`looks`**.

### Você precisa resolver a seguinte situação:

Dada a entrada de um **Array** com os `ids` dos produtos, um `objeto` contendo as seguintes propriedades deve ser retornado:

- Os nomes dos produtos e suas respectivas categorias.
- A promoção aplicada para calcular os preços do carrinho, exemplo: `TRIPLE LOOK`.
- O valor total (já com os descontos aplicados, caso exista).
- O total de desconto.
- A porcentagem de desconto.

#### Exemplo 1:

> Dada a **entrada** do seguinte array de produtos (IDs): `[120, 230, 310, 490]`
>
> É esperada a seguinte **saída**:

```javascript
{
  products: [
    {
      name: 'DISNEY CRUELLA© T-SHIRT',
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
      name: 'SOFT FLAP BACKPACK',
      category: 'BAGS'
    }
  ],
  promotion: 'FULL LOOK',
  totalPrice: 404.96,
  discountValue: 75.00,
  discountPercentage: '15.63%'
}
```

#### Exemplo 2:

> Dada a **entrada** do seguinte array de produtos (IDs): `[130, 140, 230, 260]`
>
> É esperada a seguinte **saída**:

```javascript
{
    products: [
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
            name: 'MENSWEAR PANTS',
            category: 'PANTS'
        }
	],
    promotion: 'DOUBLE LOOK',
	totalPrice: '504.95',
	discountValue: '25.00',
	discount: '4.72%'
}
```

#### Exemplo 3:

> Dada a **entrada** do seguinte array de produtos (IDs): `[110, 120, 130, 140]`
>
> É esperada a seguinte **saída**:

```javascript
{
    products: [
        {
            name: 'PINK PANTHER™ T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'DISNEY CRUELLA© T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'RUBBERIZED PRINTED T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'CONTRAST SLOGAN T-SHIRT',
            category: 'T-SHIRTS'
        }
    ],
    promotion: 'SINGLE LOOK',
    totalPrice: '524.96',
    discountValue: '10.00',
    discount: '1.87%'
}
```

#### Assertion Example 4:

> Dada a **entrada** do seguinte array de produtos (IDs): `[110, 130, 140, 230, 310, 330]`
>
> É esperada a seguinte **saída**:

```javascript
{
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
    totalPrice: '784.94',
    discountValue: '130.00',
    discount: '14.21%'
}
```

## Requisitos

Para este desafio você precisará:

- NodeJS LTS (8.12.0+)
- Instale as dependências do projeto através do comando `npm install`.
