document.addEventListener("DOMContentLoaded", () => {
  const elements = {
    caseSelect: document.getElementById("caseSelect"),
    contexto: document.getElementById("contexto"),
    decision: document.getElementById("decision"),
    datos: document.getElementById("datos"),
    restricciones: document.getElementById("restricciones"),
    generateBtn: document.getElementById("generatePromptBtn"),
    copyBtn: document.getElementById("copyPromptBtn"),
    output: document.getElementById("promptOutput")
  };

  const presetCases = {
    "admisiones-becas": {
      contexto:
        "La universidad debe evaluar una solicitud combinada de admisión y beca para un candidato internacional con expediente académico sólido y recursos económicos limitados.",
      decision:
        "Determinar si el candidato debe ser admitido y si corresponde asignarle una beca parcial, total o ninguna.",
      datos:
        "Expediente académico, carta de motivación, renta familiar estimada, entrevista, méritos extracurriculares y plazas disponibles.",
      restricciones:
        "Presupuesto limitado de becas, criterios de mérito y equidad, plazos de resolución y normativa interna."
    },
    "tickets-ti": {
      contexto:
        "El equipo de soporte TI recibe múltiples incidencias internas y debe priorizar su atención sin afectar servicios críticos.",
      decision:
        "Clasificar y priorizar un ticket para decidir si se resuelve en primer nivel, se escala o se trata como incidencia crítica.",
      datos:
        "Descripción del problema, usuarios afectados, servicio impactado, horario, historial de incidencias y nivel de urgencia declarado.",
      restricciones:
        "SLA internos, recursos limitados del equipo, dependencia de otros departamentos y criticidad del servicio."
    },
    "devoluciones-fraude": {
      contexto:
        "Una tienda online analiza una solicitud de devolución que presenta señales mixtas entre incidencia legítima y posible fraude.",
      decision:
        "Decidir si aprobar, revisar manualmente o rechazar la devolución por riesgo de fraude.",
      datos:
        "Historial del cliente, método de pago, motivo de devolución, frecuencia de pedidos, importe, dirección de entrega y eventos anteriores.",
      restricciones:
        "Política de devoluciones, protección al cliente, prevención del fraude, coste operativo y tiempos de respuesta."
    },
    "documentacion-corporativa": {
      contexto:
        "Un empleado necesita localizar y sintetizar documentación corporativa interna para responder a una consulta operativa.",
      decision:
        "Determinar qué información es relevante, qué documento consultar primero y cómo responder de forma fiable.",
      datos:
        "Consulta del usuario, palabras clave, área funcional, documentos disponibles, versiones y políticas internas relacionadas.",
      restricciones:
        "Acceso limitado según rol, posible desactualización documental, tiempo disponible y necesidad de trazabilidad."
    }
  };

  function setOutput(message) {
    elements.output.value = message;
  }

  function getFormData() {
    return {
      caseKey: elements.caseSelect.value.trim(),
      contexto: elements.contexto.value.trim(),
      decision: elements.decision.value.trim(),
      datos: elements.datos.value.trim(),
      restricciones: elements.restricciones.value.trim()
    };
  }

  function validateForm(data) {
    if (!data.caseKey) {
      return "Debes seleccionar un caso.";
    }

    if (!data.contexto) {
      return "Debes completar el campo de contexto.";
    }

    if (!data.decision) {
      return "Debes completar el campo de decisión.";
    }

    return "";
  }

  function loadPreset(caseKey) {
    const preset = presetCases[caseKey];
    if (!preset) return;

    elements.contexto.value = preset.contexto;
    elements.decision.value = preset.decision;
    elements.datos.value = preset.datos;
    elements.restricciones.value = preset.restricciones;
    setOutput("");
  }

  function buildPromptFromExternalFile(data) {
    if (typeof buildPrompt === "function") {
      return buildPrompt(data.caseKey, {
        contexto: data.contexto,
        decision: data.decision,
        datos: data.datos,
        restricciones: data.restricciones
      });
    }

    return [
      `Caso: ${data.caseKey}`,
      `Contexto: ${data.contexto}`,
      `Decisión a tomar: ${data.decision}`,
      `Datos disponibles: ${data.datos || "No especificados."}`,
      `Restricciones: ${data.restricciones || "No especificadas."}`,
      "",
      "Genera un análisis estructurado, identifica criterios, riesgos, supuestos y propone una recomendación final justificada."
    ].join("\n");
  }

  function handleGenerate() {
    const formData = getFormData();
    const errorMessage = validateForm(formData);

    if (errorMessage) {
      setOutput(errorMessage);
      return;
    }

    const finalPrompt = buildPromptFromExternalFile(formData);
    setOutput(finalPrompt);
  }

  async function handleCopy() {
    const text = elements.output.value.trim();

    if (!text) {
      setOutput("No hay ningún prompt generado para copiar.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      setOutput("No se pudo copiar automáticamente. Copia el texto manualmente.");
    }
  }

  elements.caseSelect.addEventListener("change", (event) => {
    loadPreset(event.target.value);
  });

  elements.generateBtn.addEventListener("click", handleGenerate);
  elements.copyBtn.addEventListener("click", handleCopy);
});
