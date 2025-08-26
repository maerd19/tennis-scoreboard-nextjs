# Tennis Scoreboard App

Aplicación de marcador de tenis desarrollada con Next.js, React y TypeScript.

## Estructura del Proyecto

```
app/
  components/         # Componentes de la aplicación
    tennis/           # Componentes específicos de tenis
    ui/               # Componentes de UI reutilizables
  hooks/              # Custom hooks de React
  types/              # Tipos TypeScript
  utils/              # Funciones de utilidad
  layout.tsx          # Layout principal de Next.js
  page.tsx            # Página principal
  scoreboard.tsx      # Componente de marcador (a refactorizar)
__tests__/            # Pruebas unitarias
  types/              # Pruebas para tipos
```

## Configuración de Pruebas

La aplicación está configurada para usar Jest y React Testing Library para pruebas unitarias. Para ejecutar las pruebas:

```bash
# Ejecutar pruebas
npm test

# Ejecutar pruebas con cobertura
npm run test:coverage
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tecnologías Utilizadas

- Next.js 14.1.0
- React 18.2.0
- TypeScript 5.2.2
- Tailwind CSS 3.3.3
- Jest y React Testing Library para pruebas

## Contribuir

1. Seguir la estructura de carpetas definida
2. Mantener la cobertura de pruebas por encima del 90%
3. Usar tipos TypeScript para todo el código

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
```
