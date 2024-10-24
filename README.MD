
# TaskListApp

Este proyecto es una aplicación de tareas sencilla creada con **React Native** y **TypeScript**. La aplicación contiene dos secciones principales: una para gestionar tareas y otra para mostrar un listado de datos obtenidos de un endpoint remoto. Se ha utilizado **Redux** para el manejo de estado y **React Navigation** para la navegación entre pantallas.

## Requisitos previos

Asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/) (versión 14 o superior).
- [React Native CLI](https://reactnative.dev/docs/environment-setup).
- Emulador de Android o un dispositivo físico para probar la aplicación.

### Instalación de Node.js

Si no tienes Node.js instalado, puedes descargarlo [aquí](https://nodejs.org/).

### Instalación del entorno React Native

Si es la primera vez que configuras React Native, sigue los pasos de [configuración del entorno](https://reactnative.dev/docs/environment-setup) para Android.

## Inicialización del Proyecto

El proyecto fue inicializado utilizando el siguiente comando:

```bash
npx @react-native-community/cli init TaskListApp --template react-native-template-typescript
```

Este comando crea un nuevo proyecto de React Native con soporte para TypeScript.

## Instalación de dependencias

Para resolver la prueba, se instalaron las siguientes bibliotecas adicionales:

- **@reduxjs/toolkit** y **react-redux**: Para la gestión del estado global usando Redux.
- **@react-navigation/native** y **@react-navigation/stack**: Para la navegación entre pantallas.
- **axios**: Para hacer peticiones HTTP al endpoint remoto.

Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install @reduxjs/toolkit react-redux @react-navigation/native @react-navigation/stack axios
```

### Otras dependencias

Es posible que necesites instalar las siguientes bibliotecas de React Native para la navegación:

```bash
npm install react-native-screens react-native-safe-area-context
```

Asegúrate de correr este comando si es necesario.

## Estructura del Proyecto

El proyecto está dividido en varias carpetas:

- **src**: Contiene todo el código fuente.
  - **screens**: Las pantallas principales de la aplicación.
  - **store**: La configuración de Redux y el slice de tareas.
  - **navigation**: La configuración de la navegación entre pantallas.

## Funcionalidades

### Pantalla Principal

La aplicación tiene una pantalla principal con dos botones:

- Navegar a la sección de tareas.
- Navegar a la sección de listado.

### Sección de Tareas (Tasks)

- **Redux** se usa para gestionar el estado de las tareas. Las tareas son agregadas a través de un modal que se abre al presionar el botón "Agregar nueva tarea".
- Las tareas se guardan en **Redux** y se pueden consultar al regresar a la pantalla de tareas.
- El usuario no puede agregar tareas vacías.

### Sección de Listado

- Los datos se obtienen desde un **endpoint remoto** (<https://6172cfe5110a740017222e2b.mockapi.io/elements>) usando **Axios**.
- Los datos se muestran en un formato de lista que incluye el nombre del elemento y una imagen (similar a una lista de contactos).
- Mientras los datos se cargan, se muestra un indicador de **loading**.

## Estructura de Archivos

```
/src
  /screens
    HomeScreen.tsx     # Pantalla principal con botones de navegación.
    TaskScreen.tsx     # Pantalla de tareas con Redux y modal.
    ListScreen.tsx     # Pantalla de listado que obtiene y muestra datos remotos.
  /store
    index.ts           # Configuración de Redux store.
    taskSlice.ts       # Slice de Redux para gestionar tareas.
  /navigation
    index.tsx          # Configuración de la navegación de la aplicación.
App.tsx                # Componente principal que conecta Redux y navegación.
```

## Pruebas

Se han escrito pruebas unitarias básicas utilizando **Jest**. Un ejemplo de prueba se encuentra en \`**tests**/TaskScreen.test.tsx\`. Para correr las pruebas, utiliza el siguiente comando:

```bash
npm test
```

## Ejecución del Proyecto

Para ejecutar la aplicación en un emulador o dispositivo Android, sigue estos pasos:

1. **Iniciar el servidor Metro**:

```bash
npx react-native start
```

2. **Correr la aplicación en Android**:

```bash
npx react-native run-android
```

## Bibliotecas y Versiones

- **React Native**: \`0.72.0\`
- **TypeScript**: \`5.x\`
- **Redux Toolkit**: \`1.9.x\`
- **React Redux**: \`8.1.x\`
- **React Navigation**: \`6.x\`
- **Axios**: \`1.x\`

## Navegación entre pantallas

Se utiliza **React Navigation** para la navegación entre las pantallas de la aplicación. En el archivo \`src/navigation/index.tsx\` se configura un stack navigator que permite navegar entre la pantalla principal, la pantalla de tareas y la pantalla de listado.

## Unit Tests

Las pruebas se realizaron con **Jest** y **@testing-library/react-native**. Los tests cubren la correcta visualización de la pantalla de tareas.

## Endpoint de Datos Remotos

Los datos de la pantalla de listado se obtienen desde un API remoto utilizando el siguiente endpoint:

```bash
<https://6172cfe5110a740017222e2b.mockapi.io/elements>
```

## Conclusión

Este proyecto cumple con todos los requisitos de la prueba, utilizando **Redux** para la gestión del estado, **Axios** para las peticiones HTTP, y pruebas unitarias para garantizar el correcto funcionamiento de la lógica básica. El código es modular y escalable, siguiendo las mejores prácticas para proyectos de React Native con TypeScript.
