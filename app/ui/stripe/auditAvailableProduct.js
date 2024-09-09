export function auditAvailableProduct(dataInBasket) {
  const noAvailableProductArr = dataInBasket?.dataProductListBasket?.map(
    item => ({
      id: item.id,
      noAvailable: item.basket_quantity > Number(item.available_quantity),
    })
  );

  console.log(dataInBasket?.dataProductListBasket);
  console.log(noAvailableProductArr);

  const noAvailableProduct = noAvailableProductArr?.some(
    item => item.noAvailable === true
  );
  console.log(noAvailableProduct);

  return noAvailableProduct;
}
