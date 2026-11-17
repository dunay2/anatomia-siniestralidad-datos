# Anatomía de la siniestralidad laboral en España

Catálogo estático de tablas derivadas de la Estadística de Accidentes de Trabajo del Ministerio de Trabajo y Economía Social. El conjunto comprende accidentes con baja en jornada de trabajo en España durante las ediciones de 2023, 2024 y 2025.

## Tablas disponibles

| Archivo | Filas | Columnas | Unidad de cada fila |
| --- | ---: | ---: | --- |
| [Perfiles de actividad](datos/perfiles_actividad_2023_2025.csv) | 261 | 28 | División CNAE y año |
| [Distribución anatómica](datos/anatomia_actividad_2023_2025.csv) | 2.349 | 10 | División, año y región corporal |
| [Distribución mensual](datos/mes_actividad_2023_2025.csv) | 3.132 | 10 | División, año y mes |
| [Origen de los valores](datos/trazabilidad_2023_2025.csv) | 261 | 8 | Localización del perfil en las hojas originales |

Los archivos utilizan UTF-8, coma como separador y una primera fila de nombres de campo. Los códigos CNAE deben importarse como texto para conservar sus dos dígitos.

Los tres CSV analíticos conservan los valores de la extracción comprobada. La tabla pública de trazabilidad ofrece el nombre del libro, su URL oficial y las hojas y rangos de origen.

- [Metadatos y procedencia](datos/metadatos.json)
- [Diccionario completo de campos](datos/diccionario.json)
- [Resumen de controles](datos/calidad.json)

## Cobertura y lectura

Cada año contiene 87 divisiones CNAE-2009, 21 secciones y cuatro sectores. Los 261 perfiles representan combinaciones de división y año. Las tablas largas desglosan estos mismos perfiles en nueve regiones corporales o doce meses.

Las columnas `total_accidentes` de las tablas largas repiten el denominador anual. La agregación cuenta cada total una vez por perfil. La tabla anatómica y la mensual ofrecen distribuciones separadas del mismo total; un análisis de región corporal por mes requiere una fuente conjunta.

Desde 2024 la cobertura incluye prácticas formativas no remuneradas. La comparación principal utiliza 2024 y 2025 y comprende 174 perfiles. La edición anual puede incorporar bajas del año anterior aceptadas tardíamente.

## Fuentes oficiales

La extracción utiliza D.13.2 y D.14.2 de cada libro: seis tablas originales. Los subtotales permiten comprobar las agregaciones.

- [MITES 2023, libro D](https://www.mites.gob.es/estadisticas/eat/eat23/TABLAS%20ESTADISTICAS/ATR_2023_D.xlsx)
- [MITES 2024, libro D](https://www.mites.gob.es/estadisticas/eat/eat24/TABLAS%20ESTADISTICAS/ATR_2024_D.xlsx)
- [MITES 2025, libro D](https://www.mites.gob.es/estadisticas/eat/eat25/TABLAS%20ESTADISTICAS/ATR_2025_D.xlsx)
- [MITES 2025, fuentes y notas explicativas](https://www.mites.gob.es/estadisticas/eat/eat25/FuentesyNotas.pdf)
- [MITES, informe metodológico](https://www.mites.gob.es/estadisticas/eat/Informe_Metodologico_Estadarizado_ATR.pdf)

## Comprobaciones

La extracción del 16 de noviembre de 2026 contrastó los recuentos con sus celdas originales. Las claves son únicas, los repartos anatómicos y mensuales suman el total de cada perfil y la suma de las divisiones coincide con secciones, sectores y el total nacional. Los totales nacionales son 558.936 en 2023, 556.385 en 2024 y 546.473 en 2025.

El catálogo del 17 de noviembre de 2026 comprueba la correspondencia de sus copias con las tres tablas analíticas y la identidad de los perfiles de trazabilidad. Sus 5.742 celdas de recuento incluyen 237 ceros y carecen de valores ausentes o negativos.

## Trabajo previsto

La siguiente fase incorporará D.4.2, antigüedad por actividad; D.4.3, antigüedad por forma o contacto del accidente; D.13.5, región corporal por forma o contacto a escala nacional; y la composición del empleo por sexo de la [EPA, tabla 65985](https://www.ine.es/jaxiT3/Tabla.htm?t=65985). La incorporación requiere extracción, comprobación de categorías y documentación de las uniones. Los archivos de este catálogo conservan el alcance anatómico y mensual descrito.

## Publicación en GitHub Pages

Esta carpeta contiene un sitio estático autocontenido. Su contenido puede ocupar la raíz de un repositorio de datos independiente. En la configuración de GitHub Pages, la publicación desde una rama utilizará la carpeta raíz. `index.html` es la página de entrada y `.nojekyll` permite servir directamente los archivos.

La página utiliza rutas relativas para mantener las descargas operativas dentro de una dirección de proyecto de GitHub Pages. La búsqueda funciona en el navegador y los enlaces de descarga funcionan sin JavaScript.

## Cita sugerida

Ministerio de Trabajo y Economía Social. Estadística de Accidentes de Trabajo, resultados definitivos de 2023, 2024 y 2025, tablas D.13.2 y D.14.2. Preparación de las tablas derivadas: proyecto Anatomía de la siniestralidad laboral en España. Extracción del 16 de noviembre de 2026.

La atribución identifica la fuente oficial y la transformación del proyecto. La reutilización de las fuentes conserva las condiciones aplicables del MITES.
