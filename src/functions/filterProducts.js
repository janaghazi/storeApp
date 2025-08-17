export function filterProducts(products, category, priceRange, categories, priceRanges) {
  const categoryLabel = category ? categories.find(c => c.value === category)?.label.toLowerCase() : null;
  const priceRangeValues = priceRange 
    ? priceRanges.find(p => p.value === priceRange)?.label
        .replaceAll("$", "")
        .split(" - ")
        .map(Number) 
    : null;

  return products.filter(product => {
    const inCategory = !categoryLabel || product.category === categoryLabel;
    const inPriceRange = !priceRangeValues || 
      (product.price >= priceRangeValues[0] && product.price <= priceRangeValues[1]);
    return inCategory && inPriceRange;
  });
}

