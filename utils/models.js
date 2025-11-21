export const wireframe =  "{" + 
    "'Antecedentes': { " +
        "'Paciente': string," +
        "'Edad': string," +
        "'Sexo': string," +
        "'Ocupación': string," +
        "'Historial Médico': string[]" +
    "}," +
    "'Motivo de Consulta': string," +
    "'Historia de la Enfermedad Actual': string," +
    "'Examen Físico': {" +
        "'Signos Vitales': {" +
            "'FC': number (lpm)," +
            "'FR': number (rpm) *ventilado o no ventilado*," +
            "'TA': string" +
            "'T': number (°C)" +
        "}," +
        "'Peso': number (kg)," +
        "'Talla': number (cm)," +
        "'Abdomen': string," +
        "'Neurológico': string," +
        "'Otros': string" +
    "}," +
    "'Laboratorio y Estudios de Imagen': {" +
        "'Laboratorios': [" +
            "{" +
                "'Lab': string," +
                "'Val': number (g/dL)" +
            "}" +
            "..." +
        "]," +
        "'Estudios de Imagen: [" +
            "{" +
                "'Img': string," +
                "'Val': string" +
            "}" +
            "..." +
        "]" +
    "}," +
    "'Diagnóstico': string," +
    "'Tratamiento Inicial': string," +
    "'Evolución Clinica': string," +
    "'Tratamiento Continuado': string," +
    "'Complicaciones': string," +
    "'Resolución': string," +
    "'Conclusión': string," +
    "'Respuesta Caso': { " +
        "'Plan Nutricional Inicial': string," +
        "'Requerimientos Nutricionales': {" +
            "'Calorías': number (kcal/día)," +
            "'Proteinas': number (g/día)" +
        "}," +
        "'Conducta Nutricional': {" +
            "'Tipo de dieta': string," +
            "'Vía de acceso': string," +
            "'Tipo de fórmula': string" +
        "}," +
        "'Recomendaciones Nutricionales': string[]" +
    "}" +
"}"

export const bodyExample = {
        "minEdad": {
            "valor": 0,
            "unidad": "años"
        },
        "maxEdad": {
            "valor": 15,
            "unidad": "años"
        },
        "casos": [
            "Prematuros",
            "Errores Inatos del metabolismo",
            "Enterocolitis",
            "Alergias",
            "Dietas Cetogénicas",
            "PCI",
            "Renal Niños"
        ]
    }