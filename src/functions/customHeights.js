export function getCustomHeight(index) {
  const pattern = [400, 300, 300, 400]; 
  return pattern[index % pattern.length];
}