# Proyecto: Pokechat
Este es un chat para jeugadores del Pokemon GO. Está construido con React, TypeScript, Vite y Firebase. A continuación, encontrarás una guía sobre cómo configurarlo y ejecutarlo en desarrollo.

## Tecnologías Utilizadas
- React: Biblioteca para construir interfaces de usuario.
- TypeScript: Superconjunto de JavaScript que añade tipado estático.
- Vite: Herramienta de desarrollo para un proceso de compilación rápido.
- Firebase: Plataforma de desarrollo de aplicaciones que provee autenticación, base de datos y hosting.

## Requisitos Previos
Node.js instalado (recomendado: v18 o superior).  
Firebase CLI ( recomendado )

## Configuración del Proyecto en Firebase

Para comenzar, necesitas configurar un proyecto en Firebase:

1. Ve a Firebase Console y haz clic en Agregar Proyecto.
2. Nombra tu proyecto y completa los pasos de configuración. Al finalizar, serás redirigido al panel del proyecto.
3. En la sección Desarrollar > Authentication, activa el método de autenticación que prefieras (por ejemplo, correo electrónico y contraseña).
4. En Desarrollar > Firestore Database, crea una base de datos en modo de prueba (puedes cambiarlo más tarde).
5. Ve a Configuración del proyecto (ícono de engranaje) > Tus aplicaciones y selecciona Agregar app Web.
6. Sigue los pasos y debería verse algo como esto:

```javascript

    const firebaseConfig = {
      apiKey: "your-api-key",
      authDomain: "your-auth-domain",
      projectId: "your-project-id",
      storageBucket: "your-storage-bucket",
      messagingSenderId: "your-messaging-sender-id",
      appId: "your-app-id"
    };

```
## Instalación y Ejecución del Proyecto en Desarrollo
Sigue estos pasos para ejecutar el proyecto en tu máquina local:
1. Clona el repositorio
```javascript

    git clone https://github.com/jsemalvarez/pokechat-react-firebase.git
    cd pokechat-react-firebase

```
2. Instala las dependencias:
```javascript

    npm install

```
3. Configura las variables de entorno:  
Renombra el archivo __.env.template__ a __.env__ en la raíz del proyecto y copia las claves de Firebase que configuraste anteriormente.
```javascript

    # FIREBASE PUBLIC KEYS
    API_KEY=apiKey
    AUTH_DOMAIN=authDomain
    DATABASE_URL=databaseURL
    PROJECT_ID=projectId
    STORAGE_BUCKET=storageBucket
    MESSAGING_SENDER_ID=messagingSenderId
    APP_ID=appId

```
4. Inicia el servidor de desarrollo:
```javascript

    npm run dev

```
5. Abre el proyecto:
Accede a http://localhost:3000 en tu navegador para ver el proyecto en desarrollo.

## scripts
```

    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build

```
