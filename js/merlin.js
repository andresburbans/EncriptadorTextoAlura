// Objeto de traducción: Define cómo se encriptan las vocales
const llaves = {
    a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat"
  };
  
  // Elementos del DOM: Almacena referencias a elementos HTML para fácil acceso
  const elementos = {
    warning: document.querySelector("#warning"),
    textarea: document.querySelector("#texto"),
    areaDefault: document.querySelector("#default"),
    areaResult: document.querySelector("#result"),
    textoOut: document.querySelector("#texto_out"),
    enc: document.querySelector('#enc'),
    des: document.querySelector('#des'),
    copy: document.querySelector('#copiar')
  };
  
  // Funciones auxiliares
  
  // Muestra un mensaje de advertencia en rojo
  const mostrarAdvertencia = () => {
    elementos.warning.style.color = "red";
    elementos.warning.style.fontSize = "16px";
  };
  
  // Oculta el mensaje de advertencia
  const ocultarAdvertencia = () => {
    elementos.warning.removeAttribute("style");
  };
  
  // Muestra el área de resultado y actualiza el texto
  const mostrarResultado = (texto) => {
    elementos.areaDefault.classList.add("oculto");
    elementos.areaResult.classList.remove("oculto");
    elementos.textoOut.innerHTML = texto;
  };
  
  // Oculta el área de resultado y muestra el área por defecto
  const ocultarResultado = () => {
    elementos.areaDefault.classList.remove("oculto");
    elementos.areaResult.classList.add("oculto");
  };
  
  // Verifica si el texto es válido (no vacío y solo contiene letras minúsculas y espacios)
  const esTextoValido = (texto) => {
    return texto.length > 0 && texto.trim() !== "" && /^[a-z\s]+$/.test(texto);
  };
  
  // Función principal de encriptación/desencriptación
  const procesarTexto = (modo) => {
    ocultarAdvertencia();
    const texto = elementos.textarea.value;
  
    // Verifica si el texto es válido
    if (!esTextoValido(texto)) {
      mostrarAdvertencia();
      ocultarResultado();
      return;
    }
  
    let resultado;
    if (modo === 'encriptar') {
      // Encripta el texto reemplazando cada vocal por su versión encriptada
      resultado = texto.split('').map(char => llaves[char] || char).join('');
    } else {
      // Desencripta el texto reemplazando cada patrón encriptado por su vocal original
      resultado = Object.entries(llaves).reduce((acc, [key, value]) => 
        acc.replace(new RegExp(value, 'g'), key), texto);
    }
  
    mostrarResultado(resultado);
  };
  
  // Función para copiar el resultado al portapapeles
  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(elementos.textoOut.value);
  };
  
  // Event listeners: Asigna funciones a los botones de encriptar, desencriptar y copiar
  elementos.enc.addEventListener('click', () => procesarTexto('encriptar'));
  elementos.des.addEventListener('click', () => procesarTexto('desencriptar'));
  elementos.copy.addEventListener('click', copiarAlPortapapeles);