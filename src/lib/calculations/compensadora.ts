/**
 * Módulo de cálculos para la Ecuación Compensadora.
 *
 * La ecuación compensadora establece la identidad demográfica fundamental:
 *   P(t+1) = P(t) + N(t) - D(t) + I(t) - E(t)
 *
 * Todas las funciones son puras: no producen efectos secundarios.
 */

/**
 * Calcula la población al final del período usando la ecuación compensadora.
 *
 * P(t+1) = P(t) + N(t) - D(t) + I(t) - E(t)
 *
 * @param pt  - Población al inicio del período
 * @param nt  - Nacimientos durante el período
 * @param dt  - Defunciones durante el período
 * @param it  - Inmigraciones durante el período
 * @param et  - Emigraciones durante el período
 * @returns Población al final del período
 */
export function calcularPoblaciónFinal(
  pt: number,
  nt: number,
  dt: number,
  it: number,
  et: number,
): number {
  return pt + nt - dt + it - et;
}

/**
 * Calcula la población media (promedio aritmético entre dos instantes).
 *
 * P̄ = (P₁ + P₂) / 2
 *
 * Se utiliza como denominador en las tasas brutas.
 *
 * @param p1 - Población en el instante inicial
 * @param p2 - Población en el instante final
 * @returns Población media del período
 */
export function calcularPoblaciónMedia(p1: number, p2: number): number {
  return (p1 + p2) / 2;
}

/**
 * Calcula el saldo vegetativo (crecimiento natural).
 *
 * SV = N(t) - D(t)
 *
 * Un valor positivo indica que nacieron más personas de las que fallecieron.
 *
 * @param nt - Nacimientos durante el período
 * @param dt - Defunciones durante el período
 * @returns Saldo vegetativo del período
 */
export function calcularSaldoVegetativo(nt: number, dt: number): number {
  return nt - dt;
}

/**
 * Calcula el saldo migratorio neto.
 *
 * SM = I(t) - E(t)
 *
 * Un valor positivo indica que entraron más personas de las que salieron.
 *
 * @param it - Inmigraciones durante el período
 * @param et - Emigraciones durante el período
 * @returns Saldo migratorio del período
 */
export function calcularSaldoMigratorio(it: number, et: number): number {
  return it - et;
}

/**
 * Calcula el saldo migratorio a partir de la ecuación compensadora inversa.
 *
 * Cuando no se dispone de datos directos de inmigración y emigración,
 * el saldo migratorio se puede deducir por diferencia:
 *
 * SM = P(t+1) - P(t) - N(t) + D(t)
 *
 * @param pt  - Población al inicio del período
 * @param pt1 - Población al final del período
 * @param nt  - Nacimientos durante el período
 * @param dt  - Defunciones durante el período
 * @returns Saldo migratorio estimado del período
 */
export function calcularSaldoMigratorioInverso(
  pt: number,
  pt1: number,
  nt: number,
  dt: number,
): number {
  return pt1 - pt - nt + dt;
}
