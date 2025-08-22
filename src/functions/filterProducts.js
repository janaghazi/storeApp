// export function filterProducts(products, category, priceRange, categories, priceRanges) {
//   const categoryLabel = category ? categories.find(c => c.value === category)?.label.toLowerCase() : null;
//   const priceRangeValues = priceRange 
//     ? priceRanges.find(p => p.value === priceRange)?.label
//         .replaceAll("$", "")
//         .split(" - ")
//         .map(Number) 
//     : null;

//   return products.filter(product => {
//     const inCategory = !categoryLabel || product.category === categoryLabel;
//     const inPriceRange = !priceRangeValues || 
//       (product.price >= priceRangeValues[0] && product.price <= priceRangeValues[1]);
//     return inCategory && inPriceRange;
//   });
// }




export function filterProducts(products, category, priceRange, categories, priceRanges) {
  const categoryValue = category; // we pass value (1,2,3,4,null)
  const priceRangeValues = priceRange 
    ? priceRanges.find(p => p.value === priceRange)?.label
        .replaceAll("$", "")
        .split(" - ")
        .map(Number) 
    : null;

  return products.filter(product => {
    const inCategory = !categoryValue || (
      (categoryValue === "1" && product.category.toLowerCase().includes("men")) ||
      (categoryValue === "2" && product.category.toLowerCase().includes("jewelery")) ||
      (categoryValue === "3" && product.category.toLowerCase().includes("electronics")) ||
      (categoryValue === "4" && product.category.toLowerCase().includes("women"))
    );

    const inPriceRange = !priceRangeValues || 
      (product.price >= priceRangeValues[0] && product.price <= priceRangeValues[1]);

    return inCategory && inPriceRange;
  });
}
