# Encriptador de Texto - Desafío Alura Latam

**Descripción:**

Esta aplicación web implementa un encriptador y desencriptador de texto según las reglas definidas en el desafío del curso de programación de Alura Latam. Permite al usuario ingresar texto, elegir entre encriptar o desencriptar, y copiar el resultado al portapapeles.

**¡Pruébalo ahora!**

[**Enlace a la aplicación web**](https://andresburbans.github.io/EncriptadorTextoAlura/)

---

## Detalles del Reto

El desafío planteado por Alura Latam se centra en la lógica de programación y la manipulación de strings. Los parámetros específicos del reto son:

**1. Cifrado de Sustitución:**

Se utiliza un cifrado de sustitución simple donde cada vocal se reemplaza por una secuencia de caracteres predefinida ("llave" de encriptación). 

**2. Reglas de Encriptación:**

Las "llaves" de encriptación son:

* "a" -> "ai"
* "e" -> "enter"
* "i" -> "imes"
* "o" -> "ober"
* "u" -> "ufat"

**3. Restricciones:**

* El encriptador/desencriptador debe funcionar solo con letras minúsculas.
* No se permiten letras con acentos ni caracteres especiales.

**4. Conversión Bidireccional:**

Debe ser posible tanto encriptar un texto como desencriptar un texto previamente encriptado, recuperando el mensaje original.

**Ejemplo:**

* "gato" => "gaitober"
* "gaitober" => "gato"

---

## Código Fuente (JavaScript - Extracto)

**Función `procesarTexto`:**

Esta función es el núcleo del encriptador/desencriptador. Recibe el texto ingresado por el usuario y el modo ("encriptar" o "desencriptar") y realiza la transformación correspondiente.

```javascript
const procesarTexto = (modo) => {
  // ... (validaciones y manejo de la interfaz)

  let resultado;
  if (modo === 'encriptar') {
    // Encripta el texto reemplazando vocales por sus llaves
    resultado = texto.split('').map(char => llaves[char] || char).join(''); 
  } else {
    // Desencripta el texto reemplazando las llaves por las vocales originales
    resultado = Object.entries(llaves).reduce((acc, [key, value]) => 
      acc.replace(new RegExp(value, 'g'), key), texto); // Usa expresiones regulares para reemplazar todas las ocurrencias
  }

  mostrarResultado(resultado);
};
---
Explicación del código:
Encriptar: Se itera sobre cada carácter del texto. Si es una vocal (existe en el objeto llaves), se reemplaza por su llave. Si no, se mantiene el carácter original.
Desencriptar: Se utiliza Object.entries para obtener un array de pares [clave, valor] del objeto llaves. Luego, se usa reduce para iterar sobre este array y reemplazar cada "valor" (llave de encriptación) por su "clave" (vocal original) en el texto. Se usa una expresión regular (new RegExp(value, 'g')) para reemplazar todas las ocurrencias de la llave en el texto.

Tecnologías:

HTML: Estructura del documento web.
CSS: Estilos visuales de la aplicación.
JavaScript: Lógica del encriptador/desencriptador y manejo de la interacción con el usuario.

Código Fuente Completo:

El código fuente completo (HTML, CSS, JavaScript) se encuentra en los archivos correspondientes del repositorio.
Nota: Este README proporciona una descripción más detallada del reto y del código JavaScript principal. Puedes seguir profundizando en la documentación y el código para una mejor comprensión del proyecto.
