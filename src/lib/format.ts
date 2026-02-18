/**
 * Formatea un número al estilo español: punto separador de miles, coma para decimales.
 * Ej: 45283259 → "45.283.259", 10.29 → "10,29"
 */
export function formatNumber(value: number, decimals?: number): string {
  const fixed = decimals !== undefined ? value.toFixed(decimals) : value.toString();
  const [intPart, decPart] = fixed.split(".");
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (decPart) {
    return `${formattedInt},${decPart}`;
  }
  return formattedInt;
}

/**
 * Formatea un número como tasa por mil (‰)
 */
export function formatRate(value: number, decimals: number = 2): string {
  return `${formatNumber(value, decimals)}‰`;
}

/**
 * Formatea un número como porcentaje
 */
export function formatPercent(value: number, decimals: number = 2): string {
  return `${formatNumber(value, decimals)}%`;
}
