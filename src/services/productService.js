export async function fetchProducts() {
  const storeURL = "https://fakestoreapi.com/products/?sort=asc";
  const response = await fetch(storeURL);

  if (!response.ok) {
    throw new Error("Something went wrong while fetching");
  }

  return response.json(); 
}