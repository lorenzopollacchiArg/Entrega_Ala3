# Ejercicio 1: Análisis del Paradigma según Thomas Kuhn

Análisis del lenguaje **JavaScript** acotado al paradigma de **Programación Orientada a Objetos basada en prototipos**, estructurado a partir de los cuatro componentes de una matriz disciplinaria definidos por Thomas Kuhn:

---

### 1. Generalizaciones Simbólicas
Son los componentes formales, reglas sintácticas y leyes no cuestionadas del lenguaje que la comunidad utiliza como base axiomática:
* **Especificación ECMAScript (ECMA-262):** Las reglas formales de sintaxis y evaluación que definen tipos primitivos, operadores, funciones y objetos.
* **Mecanismo de delegación prototípica (`[[Prototype]]`):** Regla fundamental por la cual todo objeto contiene un enlace implícito a otro objeto prototipo (o `null`). Ante el acceso a una propiedad (`obj.propiedad`), el motor recorre la cadena de prototipos hasta encontrarla o alcanzar la raíz (`Object.prototype`).
* **Semántica del operador `new` y funciones constructoras:** La regla formal que define que invocar `new Constructor()` instancia un nuevo objeto en memoria, enlaza su referencia interna al objeto `Constructor.prototype`, ata el identificador `this` al nuevo objeto y lo devuelve implícitamente.
* **Funciones como ciudadanos de primera clase:** Axioma del lenguaje donde las funciones son objetos en sí mismos, permitiendo asignarles propiedades y métodos (como `.prototype`) y pasarlas como valores.

---

### 2. Creencias de los Profesionales (Modelos Metafísicos)
Son las ideas y modelos compartidos por los desarrolladores sobre por qué esta estructura es preferible o superior a otras:
* **Delegación dinámica frente a jerarquías rígidas:** Se cree que enlazar objetos directamente con otros en tiempo de ejecución ofrece mayor flexibilidad y adaptabilidad que estructurar taxonomías estáticas de clases (como en lenguajes clásicos tipo Java o C++).
* **Mutabilidad y extensibilidad en tiempo de ejecución:** Convicción de que la capacidad de modificar, componer o extender el comportamiento de los objetos sobre la marcha reduce el acoplamiento y facilita la evolución del software.
* **Eficiencia de memoria por comportamiento compartido:** Creencia de que almacenar métodos compartidos en un único prototipo es más eficiente y liviano que duplicar funciones en cada instancia creada.

---

### 3. Valores
Criterios compartidos por la comunidad para evaluar la calidad, elegancia y adecuación del código:
* **Flexibilidad y dinamismo sobre tipado estricto:** Preferencia por la libertad al moldear estructuras de datos y comportamientos con mínima ceremonia sintáctica (*boilerplate*).
* **Composición y delegación sobre herencia profunda:** Valorar estructuras prototípicas planas y directas en lugar de árboles de herencia complejos y difíciles de mantener.
* **Pragmatismo y ligereza:** Priorizar soluciones simples y directas diseñadas para ejecutarse con bajo consumo de recursos en entornos de ejecución restringidos.

---

### 4. Ejemplares
Problemas y soluciones prototípicas que los programadores estudian y aplican para asimilar y demostrar el paradigma:
* **Definición de entidades mediante constructores y prototipos:**
  ```javascript
  function Tarea(titulo) {
      this.titulo = titulo;
  }

  Tarea.prototype.mostrar = function() {
      console.log(this.titulo);
  };

  const miTarea = new Tarea("Estudiar");
  miTarea.mostrar();
