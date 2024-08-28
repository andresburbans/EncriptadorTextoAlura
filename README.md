// Función principal de encriptación/desencriptación
const procesarTexto = (modo) => {
  // ... (código del método) 

  let resultado;
  if (modo === 'encriptar') {
    // Encripta el texto
    resultado = texto.split('').map(char => llaves[char] || char).join(''); 
  } else {
    // Desencripta el texto
    resultado = Object.entries(llaves).reduce((acc, [key, value]) => 
      acc.replace(new RegExp(value, 'g'), key), texto);
  }

  mostrarResultado(resultado);
};
