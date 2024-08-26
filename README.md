# Servidor para un E-commerce

Este proyecto es un servidor de e-commerce desarrollado con Node.js, Express y MySQL. Proporciona funcionalidades para gestionar productos, usuarios, carritos de compra y más. El servidor utiliza Sequelize como ORM y está configurado para diferentes entornos.

## Requisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado:

- **Node.js** versión 20.17.0(LTS)
- **MySQL**
- **Git** (opcional, para clonar el repositorio)

## Clonación del Repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Fabian-17/e-commerceServer.git
```

## Instalación de Dependencias

Instala las dependencias del proyecto utilizando npm:

```bash
npm install
```

## Configuración del Entorno

Este proyecto utiliza diferentes archivos .env para manejar variables de entorno en función del entorno de ejecución. Por defecto, el proyecto está configurado para utilizar un archivo `.env.development` en desarrollo y `.env.production` en producción.

- Crea los archivos `.env.development` y `.env.production` en la raíz del proyecto si no existen.

- Asegúrate de agregar las siguientes variables en ambos archivos:

```bash
PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_DIALECT=
```

## Ejecución del Servidor

### Entorno de Desarrollo

Para correr el servidor en modo desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

Esto utilizará el archivo `.env.development` y ejecutará el servidor con reinicio automático en caso de cambios.

### Entorno de Producción

Para correr el servidor en modo producción:

```bash
npm start
```

Esto utilizará el archivo `.env.production`.