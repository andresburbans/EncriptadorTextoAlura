# Encriptador de Texto

**Descripción:**

Aplicación web que encripta y desencripta texto según las reglas del desafío de Alura Latam. Permite al usuario ingresar texto, elegir entre encriptar o desencriptar, y copiar el resultado al portapapeles.

**Tecnologías:**

* HTML
* CSS
* JavaScript

**Parámetros del Reto:**

* Encriptar/desencriptar texto utilizando un cifrado de sustitución simple.
* Funcionar solo con letras minúsculas sin acentos ni caracteres especiales.
* Permitir la conversión bidireccional (texto a encriptado y viceversa).

**Ejemplo:**

* "gato" => "gaitober"
* "gaitober" => "gato"

**¡Prueba la aplicación!**

[**Enlace a la aplicación web**](https://andresburbans.github.io/EncriptadorTextoAlura/)

---

**Código Fuente:**

**HTML (index.html - extracto):**

```html
<textarea name="text_in_area" id="texto" placeholder="Ingresar un texto para iniciar :3" required></textarea> 
<input id="enc" type="button" value="Encriptar">
<input id="des" type="button" value="Desencriptar">
<textarea name="text_out_area" id="texto_out" disabled></textarea>
<button id="copiar">Copiar texto</button>

/* Estilos para el botón de encriptar */
.text_in_btns > input:first-child {
    background-color: #ed496c;
    color: #FFF;
}
