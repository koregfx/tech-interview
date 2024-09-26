# Prueba técnica NextJS - Live Coding - Profieco Sistemas

## Desarrollador Web Fullstack con Next.js y React

---

### **Introducción**

Bienvenido a esta prueba técnica de live coding. El objetivo es evaluar tus habilidades en Next.js 14, React Hook Form, Zod, Axios, shadcn/UI y TypeScript. Dispondrás de aproximadamente una hora para completar la tarea.

---

### **Objetivo de la Prueba**

Crear una aplicación de registro de usuarios con las siguientes características:

- **Formulario de Registro** con validaciones avanzadas.
- **Indicador de Fuerza de Contraseña** que se actualiza en tiempo real.
- **Lista Dinámica de Países** obtenida de una API simulada.
- **Manejo de Efectos Secundarios** utilizando `useEffect`.
- **Interfaz de Usuario** estilizada con shadcn/UI.

---

### **Requisitos**

#### **Tecnologías a Utilizar**

- **Next.js 14** (app router)
- **React Hook Form**
- **Zod**
- **Axios**
- **shadcn/UI**
- **TypeScript**

#### **Campos del Formulario**

- **Nombre**: Mínimo 2 caracteres.
- **Email**: Debe ser un email válido.
- **Contraseña**:
  - Mínimo 8 caracteres.
  - Debe incluir al menos una letra mayúscula, una minúscula y un número.
- **Confirmar Contraseña**: Debe coincidir con el campo Contraseña.
- **País**: Selección de una lista desplegable (no puede estar vacío).
- **Términos y Condiciones**: Casilla de verificación que debe ser aceptada.

#### **Validaciones Avanzadas**

- Utilizar **Zod** para todas las validaciones.
- Usar `refine` de Zod para validar que las contraseñas coinciden.

#### **Funcionalidades Adicionales**

- **Indicador de Fuerza de Contraseña**:
  - Mostrar un indicador visual que refleje la fuerza de la contraseña mientras el usuario la escribe.
  - Utilizar `useEffect` para actualizar el indicador en función de los cambios en el campo de contraseña.
- **Lista Dinámica de Países**:
  - Al montar el componente, obtener la lista de países desde una API simulada utilizando Axios.
  - Poblar el campo de selección de país con los datos obtenidos.
- **Envío y Manejo de Datos**:
  - Al enviar el formulario, realizar una solicitud POST a la API `/api/register` utilizando Axios.
  - Manejar y mostrar mensajes de éxito o error basados en la respuesta de la API.
- **Interfaz de Usuario**:
  - Utilizar componentes de **shadcn/UI** para diseñar el formulario y las notificaciones.
  - Asegurar una experiencia de usuario intuitiva y agradable.

---

### **Instrucciones**

#### **1. Configuración Inicial**

- El proyecto ya está creado y las dependencias necesarias están añadidas al `package.json`.
- Linters y formatters están configurados.
- Crear una rama nueva con tu nombre y apellidos.
- Instalar dependencias.
- Las extensiones necesarias para VSCode son: Error Lens, ESLint, Prettier, Prettier ESLint, Tailwind CSS IntelliSense, Pretty TypeScript Errors.

#### **2. Archivos de API Proporcionados**

Los siguientes endpoints ya están implementados y no es necesario modificarlos.

##### **`/api/countries` - Obtener Lista de Países**

- **Ruta**: `app/api/countries/route.ts`

##### **`/api/register` - Registro de Usuario**

- **Ruta**: `app/api/register/route.ts`

**Notas:**

- **No debes modificar estos archivos.**
- Puedes utilizar estos endpoints en tu aplicación para obtener la lista de países y enviar los datos de registro.
- Si intentas registrar el email `test@example.com`, la API devolverá un error 400 simulando que el email ya está en uso.

#### **3. Desarrollo del Formulario**

- Crea un formulario utilizando **React Hook Form** y **shadcn/UI**.
- Implementa las validaciones utilizando **Zod**, incluyendo el uso de `refine` para validar que las contraseñas coinciden.
- Asegúrate de manejar y mostrar los mensajes de error y éxito de forma clara para el usuario.

#### **4. Implementación del Indicador de Fuerza de Contraseña**

- Crea un indicador visual que se actualice en tiempo real según la fuerza de la contraseña.
- Utiliza `useEffect` para observar los cambios en el campo de contraseña y actualizar el indicador.

#### **5. Obtención y Población de la Lista de Países**

- Utiliza `useEffect` y **Axios** para obtener la lista de países desde `/api/countries` al montar el componente.
- Maneja posibles errores en la solicitud y asegura que el usuario esté informado si ocurre algún problema.

#### **6. Envío y Manejo de Datos del Formulario**

- Al enviar el formulario, utiliza **Axios** para hacer una solicitud POST a `/api/register`.
- Maneja las respuestas de la API, mostrando mensajes de éxito o error según corresponda.
- Asegúrate de manejar el caso en que el email ya está en uso (`test@example.com`), mostrando el mensaje de error adecuado.

#### **7. Estilos y Experiencia de Usuario**

- Utiliza componentes y estilos de **shadcn/UI** para asegurar una interfaz atractiva y consistente.
- Asegúrate de que el formulario sea responsive y accesible.

#### **8. Git y commits**

- Realiza commits atómicos sobre tus cambios cuando creas necesario.
- Estos commits también sirven para poder seguir los pasos dados a lo largo del desarrollo.
-

---

### **Criterios de Evaluación**

- **Dominio de Next.js y el App Router**
  - Uso correcto de rutas y estructura de archivos.
- **Uso de React Hook Form y Zod**
  - Implementación eficiente de formularios y validaciones avanzadas.
  - Uso correcto de `refine` en Zod.
- **Manejo de Efectos y Estado con React Hooks**
  - Uso apropiado de `useEffect` para manejar efectos secundarios.
  - Gestión eficiente de estados asíncronos.
- **Integración de shadcn/UI**
  - Aplicación coherente y estética de componentes de interfaz de usuario.
- **Uso de Axios para Comunicaciones HTTP**
  - Configuración y manejo correcto de solicitudes GET y POST.
- **Buenas Prácticas de Código**
  - Código limpio, modular y bien estructurado.
  - Uso apropiado de TypeScript y linters.
- **Resolución de Problemas y Pensamiento Crítico**
  - Capacidad para depurar errores y encontrar soluciones efectivas.
  - Explicación clara del razonamiento detrás de las decisiones tomadas.

---

### **Recursos Adicionales**

- **Documentación de Next.js (App Router):** [Next.js Docs](https://nextjs.org/docs/app)
- **React Hook Form:** [React Hook Form Docs](https://react-hook-form.com/)
- **Zod:** [Zod Docs](https://zod.dev/)
- **Axios:** [Axios Docs](https://axios-http.com/docs/intro)
- **shadcn/UI:** [shadcn/UI Docs](https://ui.shadcn.com/)
- **TypeScript:** [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

### **Consideraciones Finales**

- **Comunicación:** Si tienes alguna duda durante la prueba, no dudes en preguntar.
- **Tiempo:** Administra tu tiempo de manera efectiva para cubrir todos los puntos solicitados.
- **Calidad sobre Cantidad:** Es preferible una implementación parcial pero bien hecha, que una completa pero descuidada.
- **Creatividad:** Siéntete libre de añadir mejoras que consideres oportunas, siempre y cuando cumplas con los requisitos mínimos.

---

¡Buena suerte!

---
