// Sistema de preloading inteligente para mejorar UX
import { ROUTES } from '../routes/routes';

class RoutePreloader {
  constructor() {
    this.preloadedRoutes = new Set();
    this.preloadPromises = new Map();
  }

  // Precargar una ruta específica
  preload(routePath) {
    // Si ya está precargada, no hacer nada
    if (this.preloadedRoutes.has(routePath)) {
      return Promise.resolve();
    }

    // Si ya está en proceso de precarga, devolver la promesa existente
    if (this.preloadPromises.has(routePath)) {
      return this.preloadPromises.get(routePath);
    }

    // Mapeo de rutas a sus imports lazy - usando ROUTES para consistencia
    const routeImports = {
      [ROUTES.HOME]: () => import('../screens/BlueBullHomePage'),
      [ROUTES.ABOUT]: () => import('../screens/AboutUsPage'),
      [ROUTES.SOLUTIONS]: () => import('../screens/SolutionsPage'),
      [ROUTES.CASE_STUDIES]: () => import('../screens/CaseStudiesPage'),
      [ROUTES.EVENTS]: () => import('../screens/EventsPage'),
      [ROUTES.CAREERS]: () => import('../screens/CareersPage'),
      [ROUTES.CHARITY]: () => import('../screens/CharityPage'),
      [ROUTES.CONTACT]: () => import('../screens/ContactPage'),
    };

    const importFunction = routeImports[routePath];
    
    if (!importFunction) {
      return Promise.resolve(); // Ruta no encontrada
    }
    
    // Crear la promesa de precarga
    const preloadPromise = importFunction()
      .then(() => {
        this.preloadedRoutes.add(routePath);
        this.preloadPromises.delete(routePath);
      })
      .catch((error) => {
        this.preloadPromises.delete(routePath);
        console.error(`❌ Failed to preload ${routePath}:`, error);
      });

    this.preloadPromises.set(routePath, preloadPromise);
    return preloadPromise;
  }

  // Precargar múltiples rutas (para estrategias más avanzadas)
  preloadMultiple(routes) {
    return Promise.all(routes.map(route => this.preload(route)));
  }

  // Precargar rutas relacionadas basado en la ruta actual
  preloadRelated(currentRoute) {
    const relatedRoutes = {
      [ROUTES.HOME]: [ROUTES.ABOUT, ROUTES.SOLUTIONS], 
      [ROUTES.ABOUT]: [ROUTES.SOLUTIONS, ROUTES.CAREERS], 
      [ROUTES.SOLUTIONS]: [ROUTES.CASE_STUDIES, ROUTES.CONTACT], 
      [ROUTES.CASE_STUDIES]: [ROUTES.CONTACT, ROUTES.SOLUTIONS], 
      [ROUTES.EVENTS]: [ROUTES.CHARITY, ROUTES.ABOUT], 
      [ROUTES.CAREERS]: [ROUTES.ABOUT, ROUTES.CONTACT], 
      [ROUTES.CHARITY]: [ROUTES.EVENTS, ROUTES.ABOUT], 
      [ROUTES.CONTACT]: [ROUTES.ABOUT, ROUTES.SOLUTIONS], 
    };

    const related = relatedRoutes[currentRoute] || [];
    return this.preloadMultiple(related);
  }

  // Limpiar cache si es necesario (para desarrollo)
  clearCache() {
    this.preloadedRoutes.clear();
    this.preloadPromises.clear();
  }

  // Obtener estadísticas de precarga (para debugging)
  getStats() {
    return {
      preloaded: Array.from(this.preloadedRoutes),
      inProgress: Array.from(this.preloadPromises.keys()),
      totalPreloaded: this.preloadedRoutes.size
    };
  }
}

// Instancia singleton
export const routePreloader = new RoutePreloader();

// Hook personalizado para usar en componentes
export const useRoutePreloader = () => {
  return {
    preload: (route) => routePreloader.preload(route),
    preloadRelated: (currentRoute) => routePreloader.preloadRelated(currentRoute),
    getStats: () => routePreloader.getStats(),
  };
};

// Función helper para crear handlers de hover con preloading
export const createPreloadHandler = (route) => ({
  onMouseEnter: () => routePreloader.preload(route),
  onFocus: () => routePreloader.preload(route), // También en focus para accesibilidad
});
