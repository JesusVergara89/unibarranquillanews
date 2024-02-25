const TimeReading = (texto, palabrasPorMinuto = 200) => {
    const palabras = texto.trim().split(/\s+/).length;
    const tiempoLecturaMinutos = palabras / palabrasPorMinuto;
    const tiempoLecturaRedondeado = Math.ceil(tiempoLecturaMinutos);
    return tiempoLecturaRedondeado;
}

const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const tiempoDeLectura = TimeReading(texto);
console.log(`El tiempo de lectura estimado es de ${tiempoDeLectura} minutos.`);
