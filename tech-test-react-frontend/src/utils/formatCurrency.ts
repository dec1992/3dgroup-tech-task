export const formatCurrency = (price: number) => {
    return new Intl.NumberFormat('en-gb', {
        style: 'currency',
        currency: 'GBP',
    }).format(price);
}