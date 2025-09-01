# BlueBull Web - Development Log

## Septiembre 2025

### 01/09/2025 - Creación de Events Page

#### Componentes Creados:
1. **EventCard** - Componente reutilizable y customizable
   - Ubicación: `src/components/EventCard/`
   - Características:
     - Utiliza StandardSection para título y descripción
     - Carrusel de eventos (muestra 2, desliza para ver más)
     - Cards individuales con imagen, título, fecha y separador
     - Modal elegante para galería de fotos (16 imágenes por evento)
     - Navegación con flechas en carrusel y modal
     - Miniaturas en modal con navegación
     - Totalmente responsive y coherente con el diseño

2. **EventsPage** - Página completa
   - Ubicación: `src/screens/EventsPage/`
   - Sección: Past Events
   - 4 eventos ficticios creados:
     - BlueBull Tech Summit 2024 - Madrid
     - LATAM iGaming Conference - Buenos Aires
     - Digital Marketing Masterclass - Valencia
     - BlueBull Partner Meetup - Mexico City
   - Cada evento con 16 fotos de galería usando Lorem Picsum

#### Funcionalidades Implementadas:
- **Carrusel responsive**: 2 eventos visible, navegación con flechas
- **Modal de galería**: Vista principal + miniaturas + navegación
- **Animaciones suaves**: Hover effects, transiciones
- **Botón "Show More"**: Abre modal con galería completa
- **Separador custom**: Usa Separator2.png asset
- **Background consistente**: Mismo gradient del proyecto

#### Rutas Actualizadas:
- Agregada ruta `/events` en AppRouter.jsx
- Importado EventsPage component

#### Assets Utilizados:
- Separator2.png
- background-gradient.png
- Lorem Picsum para imágenes (eventos y galerías)

#### Patrones de Diseño Aplicados:
- Mobile-first responsive design
- Unidades relativas con clamp()
- Breakpoints estándar (xs, sm, md, lg, xl)
- Tipografía Montserrat consistente
- Colores del tema y glassmorphism
- Barrel exports para componentes
- Estructura de carpetas estándar

### 01/09/2025 - Creación de About Us Page

#### Componentes Creados:
1. **TitleAndImageCard** - Componente reutilizable
   - Ubicación: `src/components/TitleAndImageCard/`
   - Características:
     - Utiliza StandardSection para título y descripción
     - Grid responsivo de 2 columnas (1 columna en móvil)
     - Soporte para contenido mixto (imagen/texto)
     - Sigue patrones de diseño del proyecto
     - Utiliza medidas relativas con clamp()

2. **AboutUsPage** - Página completa
   - Ubicación: `src/screens/AboutUsPage/`
   - Estructura:
     - Sección 1: About us + imagen Lucasbb1 + texto descriptivo
     - Sección 2: Our mission + 2 imágenes (BbMission1, BbMission2)
     - Sección 3: Vision + 2 imágenes (BbVision1, BbVision2)
   - Background gradient consistente con el resto del proyecto
   - Animaciones flotantes sutiles

#### Rutas Actualizadas:
- Agregada ruta `/about` en AppRouter.jsx
- Importado AboutUsPage component

#### Assets Utilizados:
- Lucasbb1.png
- BbMission1.png
- BbMission2.png  
- BbVision1.png
- BbVision2.png
- background-gradient.png

#### Patrones de Diseño Aplicados:
- Mobile-first responsive design
- Uso exclusivo de unidades relativas (clamp, vw, vh)
- Breakpoints estándar del proyecto (xs, sm, md, lg, xl)
- Tipografía consistente (Montserrat)
- Colores del tema (#ffffff para texto)
- Barrel exports para componentes
- Estructura de carpetas estándar

#### Próximos Pasos:
- Testear responsividad en diferentes dispositivos
- Validar navegación desde el navbar
- Revisar internacionalización si es necesario