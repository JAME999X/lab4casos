Decision Pilot IA
Objetivo del proyecto

Decision Pilot IA es una miniaplicación web educativa diseñada para ayudar a estructurar decisiones complejas mediante prompts claros, trazables y reutilizables.
El objetivo principal es enseñar a analizar problemas, comparar alternativas y justificar decisiones de forma profesional.

¿Qué problema resuelve?

En muchos contextos académicos y profesionales, los estudiantes:

no saben cómo empezar a analizar un caso,
responden de forma vaga o poco estructurada,
no justifican correctamente sus decisiones.

Esta aplicación ayuda a:

organizar la información relevante,
transformar un caso en un análisis estructurado,
generar un prompt listo para obtener una recomendación razonada.
Casos incluidos

La aplicación incluye 4 escenarios típicos para el aula:

Admisión y becas universitarias
Evaluación de candidatos y asignación de becas con criterios de mérito y equidad.
Tickets internos de soporte TI
Clasificación y priorización de incidencias en entornos organizativos.
Devoluciones y fraude en e-commerce
Análisis de solicitudes con posible riesgo de fraude.
Asistente interno de documentación corporativa
Búsqueda y uso de información fiable en entornos internos.
Estructura de archivos
decision-pilot-ia/
│
├── index.html          → Interfaz principal
├── style.css           → Diseño visual
├── app.js              → Lógica de la aplicación
├── prompts.js          → Motor de generación de prompts
├── README.md           → Documentación del proyecto
│
├── data/
│   └── ejemplos.json   → Casos precargados
│
├── assets/             → Recursos visuales (opcional)
└── docs/               → Documentación adicional (opcional)
Instrucciones de uso
Abrir la aplicación en el navegador.
Seleccionar uno de los 4 casos disponibles.
Revisar o completar los campos:
contexto,
decisión,
datos disponibles,
restricciones.
Pulsar “Generar prompt final”.
Revisar el resultado generado.
Pulsar “Copiar prompt” para utilizarlo en herramientas de IA o análisis.
Despliegue en GitHub Pages

Para publicar la aplicación:

Subir el repositorio a GitHub.
Ir a Settings del repositorio.
Acceder a la sección Pages.
En Source, seleccionar:
rama: main (o master)
carpeta: /root
Guardar cambios.

GitHub generará una URL pública donde la app estará disponible.

Limitaciones del proyecto
No utiliza modelos de IA directamente; genera prompts, no respuestas.
La calidad del resultado depende de la calidad de los datos introducidos.
No valida profundamente la veracidad de la información.
No está pensado para uso en producción, sino para aprendizaje.
Los casos son simplificados y no cubren toda la complejidad real.
Autores / Equipo

Proyecto desarrollado por estudiantes en el contexto de la asignatura de
Diseño de Sistemas de Información.

Equipo:

Decision Pilot IA Team
Nota final

Este proyecto está orientado a mejorar la capacidad de análisis, estructuración y justificación de decisiones en contextos reales mediante el uso guiado de IA.
