export const apiService = () => `${process.env.SWAP_URL}`;
export const capitalize = (s: string = 'n/a') => s[0].toUpperCase() + s.slice(1)