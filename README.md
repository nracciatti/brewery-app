# Brewery App

Aplicación web para explorar y descubrir cervecerías, desarrollada como parte de un ejercicio técnico utilizando Next.js, TypeScript y Tailwind CSS.

## 📋 Descripción

Brewery App es una aplicación que permite a los usuarios explorar cervecerías y ver sus detalles. La aplicación incluye un sistema de autenticación de usuarios, navegación entre páginas, y una interfaz adaptable para dispositivos móviles y de escritorio.

## 🚀 Características

- **Exploración de cervecerías**: Listado de cervecerías con información básica
- **Vista detallada**: Página individual para cada cervecería con información completa
- **Autenticación de usuarios**: Registro e inicio de sesión
- **Diseño responsive**: Adaptado para móviles y escritorio
- **Navegación intuitiva**: Barra de navegación inferior

## 🛠️ Tecnologías utilizadas

- **React 18** (Biblioteca principal para la interfaz de usuario)
- **Next.js 13+** (Framework React con App Router)
- **TypeScript** (Tipado estático para JavaScript)
- **Tailwind CSS** (Framework CSS utilitario)
- **Supabase** (Autenticación y base de datos)

## 🏗️ Estructura del proyecto

brewery-app/
  node_modules/           # Dependencias instaladas
  src/                    # Código fuente principal
    app/                  # Rutas y páginas (Next.js App Router)
      brewery/[id]/       # Página de detalle de cervecería
        page.tsx          # Componente de página de detalle
      login/              # Página de inicio de sesión
        page.tsx          # Componente de página de login
      register/           # Página de registro
        page.tsx          # Componente de página de registro
      globals.css         # Estilos globales
      layout.tsx          # Layout principal
      page.tsx            # Página principal
    components/           # Componentes reutilizables de React
      brewery/            # Componentes relacionados con cervecerías
      layout/             # Componentes de estructura
      ui/                 # Componentes de interfaz de usuario
    contexts/             # Contextos de React
      AuthContext.tsx     # Contexto de autenticación
    lib/                  # Utilidades y configuración
      supabase.ts         # Cliente de Supabase
    services/             # Servicios para lógica de negocio
      BreweryService.ts   # Servicio para operaciones con cervecerías
    types/                # Definiciones de tipos TypeScript
      auth.ts             # Tipos para autenticación
  .env.local              # Variables de entorno (no incluido en git)
  .gitignore              # Archivos ignorados por git
  eslint.config.mjs       # Configuración de ESLint
  next-env.d.ts           # Tipos para Next.js
  next.config.ts          # Configuración de Next.js
  package-lock.json       # Versiones exactas de dependencias
  package.json            # Dependencias y scripts
  postcss.config.js       # Configuración de PostCSS
  README.md               # Este archivo
  tailwind.config.js      # Configuración de Tailwind CSS
  tsconfig.json           # Configuración de TypeScript
\`\`\`

## 🔧 Instalación y configuración

### Requisitos previos

- Node.js 16.8.0 o superior
- npm o yarn
- Cuenta en Supabase

### Pasos de instalación

1. Clonar el repositorio:
   \`\`\`bash
   git clone https://github.com/tu-usuario/brewery-app.git
   cd brewery-app
   \`\`\`

2. Instalar dependencias:
   \`\`\`bash
   npm install

   # o

   yarn install
   \`\`\`

3. Configurar variables de entorno:

   - Crea un archivo `.env.local` en la raíz del proyecto
   - Añade las siguientes variables:
     \`\`\`
     NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
     NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
     \`\`\`

4. Configurar Supabase:

   - Crea un proyecto en Supabase
   - Habilita la autenticación por email
   - Configura las opciones de autenticación según tus necesidades

5. Iniciar el servidor de desarrollo:
   \`\`\`bash
   npm run dev

   # o

   yarn dev
   \`\`\`

6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📝 Características de autenticación

La aplicación utiliza Supabase para la autenticación de usuarios, con las siguientes características:

- Registro de usuarios con email y contraseña
- Inicio de sesión
- Cierre de sesión

### Configuración de autenticación en Supabase

En el panel de Supabase, se han configurado las siguientes opciones:

- **Email provider**: Habilitado
- **Confirm email**: Habilitado (los usuarios deben confirmar su email)
- **Secure email change**: Habilitado
- **Minimum password length**: 6 caracteres
- **Email OTP Expiration**: 86400 segundos (24 horas)

## 🔍 API de cervecerías

La aplicación utiliza la API pública de Open Brewery DB para obtener información sobre cervecerías:

- Endpoint principal: `https://api.openbrewerydb.org/breweries`
- Filtrado por estado: `https://api.openbrewerydb.org/breweries?by_state=california`
- Detalles de cervecería: `https://api.openbrewerydb.org/breweries/{id}`

### Validación de email

Al registrar usuarios, pueden aparecer errores de validación de email. Para solucionarlo:

- Asegúrate de usar un formato de email válido
- Utiliza dominios comunes (gmail.com, outlook.com, etc.)
