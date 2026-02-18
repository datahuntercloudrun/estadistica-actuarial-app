/**
 * Módulo de cálculos para indicadores de Migraciones.
 *
 * Incluye:
 * - Saldo migratorio
 * - Tasa Bruta de Inmigración (TBI)
 * - Tasa Bruta de Emigración (TBE)
 * - Tasa Neta de Migración
 * - Tasa Media Anual Neta
 * - Razón de Intercambio
 * - Tasas Específicas de Migración por edad
 * - Índice Sintético de Movilidad (ISM)
 * - Cálculo de saldos por región (matriz de migración)
 *
 * Todas las funciones son puras: no producen efectos secundarios.
 */

/**
 * Calcula el saldo migratorio neto.
 *
 * SM = I - E
 *
 * Un valor positivo indica inmigración neta; un valor negativo
 * indica emigración neta.
 *
 * @param inmigraciones - Número de inmigraciones en el período
 * @param emigraciones  - Número de emigraciones en el período
 * @returns Saldo migratorio del período
 */
export function calcularSaldoMigratorio(
  inmigraciones: number,
  emigraciones: number,
): number {
  return inmigraciones - emigraciones;
}

/**
 * Calcula la Tasa Bruta de Inmigración (TBI).
 *
 * TBI = I / P̄ × 1000
 *
 * Mide la intensidad de la inmigración en relación con la
 * población media del territorio receptor.
 *
 * @param inmigraciones  - Número de inmigraciones en el período
 * @param poblaciónMedia - Población media del período
 * @returns TBI expresada por mil (‰)
 */
export function calcularTBI(
  inmigraciones: number,
  poblaciónMedia: number,
): number {
  return (inmigraciones / poblaciónMedia) * 1000;
}

/**
 * Calcula la Tasa Bruta de Emigración (TBE).
 *
 * TBE = E / P̄ × 1000
 *
 * Mide la intensidad de la emigración en relación con la
 * población media del territorio emisor.
 *
 * @param emigraciones   - Número de emigraciones en el período
 * @param poblaciónMedia - Población media del período
 * @returns TBE expresada por mil (‰)
 */
export function calcularTBE(
  emigraciones: number,
  poblaciónMedia: number,
): number {
  return (emigraciones / poblaciónMedia) * 1000;
}

/**
 * Calcula la Tasa Neta de Migración.
 *
 * TNM = SM / P̄ × 1000
 *
 * Resume en un solo indicador el efecto neto de las migraciones
 * sobre la población.
 *
 * @param saldoMigratorio - Saldo migratorio (I - E)
 * @param poblaciónMedia  - Población media del período
 * @returns Tasa neta de migración expresada por mil (‰)
 */
export function calcularTasaNetaMigración(
  saldoMigratorio: number,
  poblaciónMedia: number,
): number {
  return (saldoMigratorio / poblaciónMedia) * 1000;
}

/**
 * Calcula la Tasa Media Anual Neta de migración.
 *
 * TMAN = (SM / n) / P̄ × 1000
 *
 * Cuando el saldo migratorio corresponde a un período de varios años,
 * esta tasa lo anualiza dividiendo primero por el número de años.
 *
 * @param saldoMigratorio - Saldo migratorio total del período
 * @param nAnios          - Número de años que abarca el período
 * @param poblaciónMedia  - Población media del período
 * @returns Tasa media anual neta expresada por mil (‰)
 */
export function calcularTasaMediaAnualNeta(
  saldoMigratorio: number,
  nAnios: number,
  poblaciónMedia: number,
): number {
  return ((saldoMigratorio / nAnios) / poblaciónMedia) * 1000;
}

/**
 * Calcula la Razón de Intercambio migratorio.
 *
 * RI = I / E
 *
 * Un valor mayor que 1 indica que entran más personas de las que salen.
 * Un valor menor que 1 indica lo contrario.
 *
 * @param inmigraciones - Número de inmigraciones en el período
 * @param emigraciones  - Número de emigraciones en el período
 * @returns Razón de intercambio (ratio)
 */
export function calcularRazonIntercambio(
  inmigraciones: number,
  emigraciones: number,
): number {
  return inmigraciones / emigraciones;
}

/**
 * Calcula la Tasa Específica de Migración para un grupo de edad.
 *
 * TEM_x = M_x / P_x × 1000
 *
 * Mide la intensidad migratoria de un grupo de edad específico.
 *
 * @param migraciónGrupo - Número de migraciones del grupo de edad
 * @param poblaciónGrupo - Población media del grupo de edad
 * @returns Tasa específica de migración del grupo, expresada por mil (‰)
 */
export function calcularTasaEspecíficaMigración(
  migraciónGrupo: number,
  poblaciónGrupo: number,
): number {
  return (migraciónGrupo / poblaciónGrupo) * 1000;
}

/**
 * Calcula el Índice Sintético de Movilidad (ISM).
 *
 * ISM = Σ TEM_x × a_x / 1000
 *
 * Indica el número medio de migraciones que realizaría una persona
 * a lo largo de su vida si se mantuviesen las tasas específicas actuales.
 *
 * @param tasasEspecíficas - Array de tasas específicas de migración por grupo de edad (por mil)
 * @param amplitudGrupo   - Amplitud de los grupos de edad (ej: 5 para quinquenales)
 * @returns ISM (número medio de migraciones por persona a lo largo de la vida)
 */
export function calcularISM(
  tasasEspecíficas: number[],
  amplitudGrupo: number,
): number {
  const sumaTasas = tasasEspecíficas.reduce((acc, tasa) => acc + tasa, 0);
  return (sumaTasas * amplitudGrupo) / 1000;
}

/**
 * Calcula los saldos migratorios por región a partir de una matriz origen-destino.
 *
 * La matriz[i][j] representa el número de personas que migran de la región i
 * a la región j. La diagonal (i === j) se ignora (no hay migración interna
 * dentro de la misma región).
 *
 * Para cada región se calculan:
 * - Entradas: suma de la columna j (personas que llegan a j desde otras regiones)
 * - Salidas: suma de la fila i (personas que salen de i hacia otras regiones)
 * - Saldo: entradas - salidas
 *
 * @param matriz   - Matriz cuadrada de migración origen-destino (número[][])
 * @param regiones - Array con los nombres de las regiones
 * @returns Array de objetos con región, entradas, salidas y saldo
 */
export function calcularSaldosMatriz(
  matriz: number[][],
  regiones: string[],
): { region: string; entradas: number; salidas: number; saldo: number }[] {
  const n = regiones.length;

  return regiones.map((region, idx) => {
    // Salidas: suma de la fila idx, excluyendo la diagonal
    let salidas = 0;
    for (let j = 0; j < n; j++) {
      if (j !== idx) {
        salidas += matriz[idx][j];
      }
    }

    // Entradas: suma de la columna idx, excluyendo la diagonal
    let entradas = 0;
    for (let i = 0; i < n; i++) {
      if (i !== idx) {
        entradas += matriz[i][idx];
      }
    }

    return {
      region,
      entradas,
      salidas,
      saldo: entradas - salidas,
    };
  });
}
