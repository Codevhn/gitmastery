// assets/js/app.js
// Punto de entrada de la aplicación SPA GitMastery

import { initRouter } from './router.js';

/**
 * Inicialización general de la aplicación
 */

function initApp(){

  // Inicializar el router SPA
  initRouter();

  console.log('[App] inicialización correctamente');
}

// Iniciar la app cuando el documento esté listo

document.addEventListener('DOMContentLoaded', initApp);

