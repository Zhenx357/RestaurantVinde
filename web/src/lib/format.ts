const currencyFormatter = new Intl.NumberFormat("da-DK", {
  style: "currency",
  currency: "DKK",
});

export function formatPrice(value?: number | null) {
  if (value === undefined || value === null) return null;
  return currencyFormatter.format(value);
}
