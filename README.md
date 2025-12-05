# 🧪 Modern JavaScript Labs

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

> **Base de conocimiento y colección de prácticas intensivas.**
> Este repositorio documenta mi ruta de aprendizaje profundo en JavaScript, abarcando desde la sintaxis fundamental y ES6+ hasta la resolución de problemas lógicos complejos.

---

## 📂 Estructura del Proyecto

El repositorio está organizado en módulos de dificultad progresiva:

### 1️⃣ Fundamentos (Carpeta `Basico`)
Una colección de **+30 scripts** que exploran las capacidades del lenguaje.
* **Core:** Variables, Tipos de datos, Operadores, Strings.
* **Control de Flujo:** Bucles (`for`, `while`, `map`), Condicionales (`switch`, `ternarios`).
* **Estructuras de Datos:** Arrays, Objetos, `Set`, `Map`.
* **JavaScript Moderno (ES6+):** Arrow Functions, Destructuring, Spread Operator, Módulos (`import/export`).
* **POO:** Clases, Herencia, Getters/Setters, Métodos Estáticos.
* **Manejo de Errores:** `try-catch`, `throw`, Excepciones personalizadas.

### 2️⃣ Prácticas de Lógica (Carpeta `Practicas`)
Ejercicios aplicados para resolver problemas reales.

| Proyecto | Descripción | Conceptos Clave |
| :--- | :--- | :--- |
| **⚔️ Simulador RPG** | Juego de batalla por turnos en consola. | `Class`, `Inheritance`, `Polymorphism`, `Math.random` |
| **⏱️ Conversor de Tiempo** | Algoritmos para conversión de unidades. | `Functions`, `Math logic` |
| **🛒 Calculadora de Compras** | Lógica simple de facturación. | `DOM`, `Basic Logic` |

---

## 🚀 Highlights del Código

### 🔹 Simulador de Batalla RPG (POO)
Implementación de un sistema de clases donde **Guerreros**, **Magos** y **Arqueros** heredan de una clase base `Personaje`, cada uno con mecánicas de ataque únicas y cálculo de daño aleatorio.

```javascript
class Mago extends Personaje {
    constructor(nombre, vida, mana=50) {
        super(nombre, vida)
        this.mana = mana
    }

    atacar(objetivo) {
        // Lógica de daño mágico y gestión de maná
        // ...
    }
}
```

---

## 👏 Créditos y Agradecimientos

Este repositorio es el resultado de mi aprendizaje siguiendo el curso de **JavaScript desde cero** impartido por **Brais Moure (@mouredev)**.
* 🎓 **Curso original:** [JavaScript desde Cero - MoureDev](https://github.com/mouredev/hello-javascript)
* 👾 **Docente:** [Brais Moure](https://github.com/mouredev)

Los ejercicios han sido resueltos y documentados por mí como parte de mi proceso de estudio.

---

<div align="center"> <sub>Desarrollado con ❤️ por Sebastián Gallardo</sub> </div>
