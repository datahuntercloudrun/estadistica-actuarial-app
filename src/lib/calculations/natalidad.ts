/**
 * Módulo de cálculos para indicadores de Natalidad y Fecundidad.
 *
 * Incluye:
 * - Tasa Bruta de Natalidad (TBN)
 * - Tasa General de Fecundidad (TGF)
 * - Tasas Específicas de Fecundidad (TEF)
 * - Índice Sintético de Fecundidad (ISF)
 * - Tasa Bruta de Reproducción (TBR)
 * - Índice de Masculinidad y Gender Ratio
 *
 * Todas las funciones son puras: no producen efectos secundarios.
 */

/**
 * Calcula la Tasa Bruta de Natalidad (TBN).
 *
 * TBN = N / P̄ × 1000
 *
 * Mide el número de nacimientos por cada mil habitantes
 * en un período determinado.
 *
 * @param nacimientos      - Número total de nacimientos en el período
 * @param poblaciónInicio  - Población al inicio del período
 * @param poblaciónFin     - Población al final del período
 * @returns TBN expresada por mil (‰)
 */
export function calcularTBN(
  nacimientos: number,
  poblaciónInicio: number,
  poblaciónFin: number,
): number {
  const poblaciónMedia = (poblaciónInicio + poblaciónFin) / 2;
  return (nacimientos / poblaciónMedia) * 1000;
}

/**
 * Calcula la Tasa General de Fecundidad (TGF).
 *
 * TGF = N / P̄f₁₅₋₄₉ × 1000
 *
 * Relaciona los nacimientos con la población femenina en edad fértil
 * (15 a 49 años). Es más precisa que la TBN porque restringe el
 * denominador a la población expuesta al riesgo de procrear.
 *
 * @param nacimientos    - Número total de nacimientos en el período
 * @param pf15_49_inicio - Mujeres de 15-49 años al inicio del período
 * @param pf15_49_fin    - Mujeres de 15-49 años al final del período
 * @returns TGF expresada por mil (‰)
 */
export function calcularTGF(
  nacimientos: number,
  pf15_49_inicio: number,
  pf15_49_fin: number,
): number {
  const poblaciónMediaFemenina = (pf15_49_inicio + pf15_49_fin) / 2;
  return (nacimientos / poblaciónMediaFemenina) * 1000;
}

/**
 * Calcula la Tasa Específica de Fecundidad (TEF) para un grupo de edad.
 *
 * TEF_x = N_x / P̄f_x × 1000
 *
 * Mide la fecundidad de un grupo de edad específico de mujeres.
 * Se calcula dividiendo los nacimientos de madres de esa edad
 * entre la población media de mujeres de esa edad.
 *
 * @param nacimientosPorEdad      - Nacimientos de madres del grupo de edad x
 * @param poblaciónMujeresPorEdad - Población media de mujeres del grupo de edad x
 * @returns TEF del grupo de edad, expresada por mil (‰)
 */
export function calcularTEF(
  nacimientosPorEdad: number,
  poblaciónMujeresPorEdad: number,
): number {
  return (nacimientosPorEdad / poblaciónMujeresPorEdad) * 1000;
}

/**
 * Calcula el Índice Sintético de Fecundidad (ISF) de forma simplificada.
 *
 * ISF = TGF / 1000 × 35
 *
 * Estima el número medio de hijos que tendría una mujer a lo largo
 * de su vida fértil (35 años, de 15 a 49) si se mantuviese la TGF actual.
 * Es una aproximación; el cálculo preciso utiliza las TEF por edad.
 *
 * @param tgf - Tasa General de Fecundidad (por mil)
 * @returns ISF (número medio de hijos por mujer)
 */
export function calcularISFSimple(tgf: number): number {
  return (tgf / 1000) * 35;
}

/**
 * Calcula el Índice Sintético de Fecundidad (ISF) de forma precisa.
 *
 * ISF = (amplitud / 1000) × Σ TEF_x
 *
 * Suma las tasas específicas de fecundidad de todos los grupos de edad
 * y las convierte a hijos por mujer. Si los datos son por edades simples,
 * la amplitud es 1; si son quinquenales, la amplitud es 5.
 *
 * @param tefPorEdad     - Array de TEF para cada grupo de edad (por mil)
 * @param amplitudGrupo  - Amplitud de los grupos de edad (por defecto 1 para edades simples)
 * @returns ISF (número medio de hijos por mujer)
 */
export function calcularISFPreciso(
  tefPorEdad: number[],
  amplitudGrupo: number = 1,
): number {
  const sumaTEF = tefPorEdad.reduce((acc, tef) => acc + tef, 0);
  return (amplitudGrupo / 1000) * sumaTEF;
}

/**
 * Calcula la Tasa Bruta de Reproducción (TBR) de forma simplificada.
 *
 * TBR = ISF × GR
 *
 * Donde GR (gender ratio) = nacidas mujeres / total nacimientos.
 * Indica el número medio de hijas que tendría una mujer si se
 * mantuviesen las tasas de fecundidad y la proporción de sexos actuales.
 *
 * @param isf         - Índice Sintético de Fecundidad
 * @param genderRatio - Proporción de nacimientos femeninos sobre el total
 * @returns TBR (número medio de hijas por mujer)
 */
export function calcularTBRSimple(isf: number, genderRatio: number): number {
  return isf * genderRatio;
}

/**
 * Calcula la Tasa Bruta de Reproducción (TBR) de forma precisa.
 *
 * TBR = (amplitud / 1000) × Σ TEFf_x
 *
 * Usa las tasas específicas de fecundidad calculadas solo con
 * nacimientos femeninos en el numerador.
 *
 * @param tefFemeninasPorEdad - Array de TEF femeninas para cada grupo de edad (por mil)
 * @param amplitudGrupo       - Amplitud de los grupos de edad (por defecto 1)
 * @returns TBR precisa (número medio de hijas por mujer)
 */
export function calcularTBRPrecisa(
  tefFemeninasPorEdad: number[],
  amplitudGrupo: number = 1,
): number {
  const sumaTEFf = tefFemeninasPorEdad.reduce((acc, tef) => acc + tef, 0);
  return (amplitudGrupo / 1000) * sumaTEFf;
}

/**
 * Calcula el Índice de Masculinidad al nacimiento.
 *
 * IM = Nacidos varones / Nacidas mujeres
 *
 * Valores típicos oscilan alrededor de 1.05 (105 varones por cada 100 mujeres).
 *
 * @param nacidosVarones  - Número de nacidos varones
 * @param nacidasMujeres  - Número de nacidas mujeres
 * @returns Índice de masculinidad (ratio)
 */
export function calcularÍndiceMasculinidad(
  nacidosVarones: number,
  nacidasMujeres: number,
): number {
  return nacidosVarones / nacidasMujeres;
}

/**
 * Calcula el Gender Ratio (proporción de nacimientos femeninos).
 *
 * GR = Nacidas mujeres / Total nacimientos
 *
 * Se usa como factor de corrección para convertir el ISF en TBR.
 * Valores típicos oscilan alrededor de 0.4878 (1 / 2.05).
 *
 * @param nacidasMujeres    - Número de nacidas mujeres
 * @param totalNacimientos  - Número total de nacimientos
 * @returns Gender ratio (proporción entre 0 y 1)
 */
export function calcularGenderRatio(
  nacidasMujeres: number,
  totalNacimientos: number,
): number {
  return nacidasMujeres / totalNacimientos;
}
