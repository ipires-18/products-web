export const calculateDiscountedPrice = (
  price: number,
  discount: number
): number => {
  const discountAmount = price * (discount / 100)
  return price - discountAmount
}
