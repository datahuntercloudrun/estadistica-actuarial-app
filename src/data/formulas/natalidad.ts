/**
 * Fórmulas LaTeX reutilizables para indicadores demográficos.
 *
 * Estas cadenas están pensadas para renderizarse con KaTeX o MathJax
 * en los componentes de la aplicación. Cada clave describe el indicador
 * y el valor es la expresión LaTeX correspondiente.
 */
export const FORMULAS = {
  /** Ecuación compensadora: identidad demográfica fundamental */
  ECUACION_COMPENSADORA: "P_{t+1} = P_t + N_t - D_t + I_t - E_t",

  /** Población media (promedio aritmético entre dos instantes) */
  POBLACION_MEDIA: "\\bar{P} = \\frac{P(t) + P(t+n)}{2}",

  /** Tasa Bruta de Natalidad */
  TBN: "TBN(t, t+n) = \\frac{N(t, t+n)}{\\bar{P}(t, t+n)} \\times 1000",

  /** Tasa General de Fecundidad */
  TGF: "TGF(t, t+n) = \\frac{N(t, t+n)}{\\bar{P}f_{15-49}(t, t+n)} \\times 1000",

  /** Tasa Específica de Fecundidad por edad */
  TEF: "TEF^t_x = \\frac{N^t_x}{\\bar{P}f^t_x} \\times 1000",

  /** Índice Sintético de Fecundidad (aproximación simple) */
  ISF_SIMPLE: "ISF_t = \\frac{TGF_t}{1000} \\times 35",

  /** Índice Sintético de Fecundidad (cálculo preciso, edades simples) */
  ISF_PRECISO: "ISF_t = \\frac{1}{1000} \\sum_{x=15}^{49} TEF^t_x",

  /** Índice Sintético de Fecundidad (cálculo preciso, datos quinquenales) */
  ISF_QUINQUENAL: "ISF_t = \\frac{5}{1000} \\sum_{x} TEF^t_x",

  /** Tasa Bruta de Reproducción (aproximación simple) */
  TBR_SIMPLE: "TBR_t = ISF_t \\times \\frac{N^f_t}{N_t}",

  /** Tasa Bruta de Reproducción (cálculo preciso) */
  TBR_PRECISA: "TBR_t = \\frac{1}{1000} \\sum_{x=15}^{49} TEFf^t_x",

  /** Tasa Neta de Reproducción */
  TNR: "TNR_t = ISF_t \\times \\frac{L_x}{L_0} \\times GR",

  /** Índice de Masculinidad al nacimiento */
  INDICE_MASCULINIDAD: "IM_t = \\frac{\\text{Nacidos varones}_t}{\\text{Nacidas mujeres}_t}",

  /** Gender Ratio (proporción de nacimientos femeninos) */
  GENDER_RATIO: "GR_t = \\frac{\\text{Nacidas mujeres}_t}{\\text{Total nacimientos}_t}",

  /** Saldo Vegetativo (crecimiento natural) */
  SALDO_VEGETATIVO: "SV_t = N_t - D_t",

  /** Saldo Migratorio neto */
  SALDO_MIGRATORIO: "SM_t = I_t - E_t",

  /** Tasa Bruta de Inmigración */
  TBI: "TBI = \\frac{I}{\\bar{P}} \\times 1000",

  /** Tasa Bruta de Emigración */
  TBE: "TBE = \\frac{E}{\\bar{P}} \\times 1000",

  /** Tasa Neta de Migración */
  TASA_NETA_MIGRACION: "TNM = \\frac{SM}{\\bar{P}} \\times 1000",

  /** Razón de Intercambio migratorio */
  RAZON_INTERCAMBIO: "RI = \\frac{I}{E}",

  /** Identidad fundamental del diagrama de Lexis */
  IDENTIDAD_FUNDAMENTAL: "\\text{Cohorte} + \\text{Duración} = \\text{Calendario}",

  /** Tasa Específica de Migración por grupo de edad */
  TASA_ESPECIFICA_MIGRACION: "TEM_x = \\frac{M_x}{P_x} \\times 1000",

  /** Índice Sintético de Movilidad */
  ISM: "ISM = \\sum_{x} TEM_x \\times a_x / 1000",
} as const;
