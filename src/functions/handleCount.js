
export const handleIncrease = (quantity, setQuantity, max = 99, onChange) => {
  if (quantity < max) {
    const newVal = quantity + 1;
    setQuantity(newVal);
    onChange && onChange(newVal);
  }
};

export const handleDecrease = (quantity, setQuantity, min = 1, onChange) => {
  if (quantity > min) {
    const newVal = quantity - 1;
    setQuantity(newVal);
    onChange && onChange(newVal);
  }
};
