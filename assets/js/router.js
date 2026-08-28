// assets/js/router.js
// Router SPA basado en hash — Parte 1: resolución de rutas

import { NAV, resolveRoute } from './data.js';

/**
 * Obtiene la ruta actual del hash y la normaliza.
 * Formato esperado: #/modulo/seccion
 */

function parseHash() {

  const hash = window.location.hash || '';

  // Elimina el "#/" inicial si existe
  const clean = hash.startsWith('#/') ? hash.slice(2) : hash.slice(1);

   // clean → "fundamentals/intro" o ""
   const [modId, secId] = clean.split('/');

   return {modId, secId};
}

/**
 * Garantiza que la ruta sea válida.
 * Si falta módulo o sección, usa defaultRoute.
 */

function normalizeRoute({ modId, secId}) {

  // Falta hash → usar ruta por defecto
  if(!modId || !secId){
    return NAV.defaultRoute;
  }

  // Revisar si el módulo existe
  const module = NAV.modules.find(m => m.id === modId);
  if(!module){
    return NAV.defaultRoute;
  }

   // Revisar si la sección existe
   const section = NAV.sections.find(s => s.id === secId);
   if(!sections){
    return NAV.defaultRoute;
   }

    // Todo correcto → mantener hash actual
    return `#/${modId}/${secId}`
}

/**
 * Punto de entrada del router.
 * Este método será ampliado en Parte 2 y Parte 3.
 */

export function router() {

  const parsed = parseHash();
  const normalized = normalizeRoute(parsed);

  // Si la ruta cambió por normalize → redirigir
  if(normalized !== window.location.hash){
    window.location.hash = normalized;
    return;
  }

  // Resolver ruta → obtener módulo, sección y src (archivo HTML)
  const {modId, secId} = parsed;
  const result = resolveRoute(modId, secId);

  /**
   * 
   * 
   * 
   *  En Parte 2: aquí cargaremos el HTML vía fetch()
   * 
   * 
   * 
   * */

 // Cargar el HTML dinámico (Parte 2 completa)
if(result?.src){
  loadContent(result?.src);
}else{
  console.log('[Router] Ruta válida pero sin archivo fuente SRC');
}

  /**
 * Carga un fragmento HTML desde /content y lo inyecta en el panel central
 */

  async function loadContent(src){

    const main = document.getElementById('content');

    if(!main){
      console.error('NO se encontró el <main id="content"> en index.html');
      return;
    }

    // Marcar estado de carga (accesibilidad)
    main.setAtribute('aria-busy', 'true');

    try{
      const response = await fetch(src);
      if(!response.ok){
        throw new Error(`Error al cargar ${src}: ${response.status}`);
      }
      const html = await response.text();

        // Inyectamos el contenido
        main.innerHTML = html;
    }catch(err){
      console.log('[Router] Error al cargar contenido:', err);

      // Fallback básico si algo falla
      main.innerHTML = `
      <div class="error"
      <h2>Error al cargar contenido</h2>
      <p>NO se pudo cargar: <code>${src}</code> </p>
      </div>
      `;
    }

    // Fin de la carga
    main.removeAttribute('aria-busy');
  }

}

/**
 * Inicialización del router
 */

export function initRouter(){
    // 1) Ejecutar al cargar la página
    window.addEventListener('DOMContentLoaded', router);

    // 2) Ejecutar cuando cambia el hash
    window.addEventListener('hashchange', router)
}