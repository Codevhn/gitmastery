¡Claro\! Este es un gran documento de planificación de proyecto. Aquí tienes el contenido convertido a un formato Markdown profesional y bien estructurado:

# 🧠 Proyecto: GitMastery

**Tipo:** Sitio web interactivo de documentación técnica

**Tecnologías:** HTML5 + CSS3 + JavaScript (SPA ligera)

**Hosting:** GitHub Pages

**Propósito:** Aprendizaje y documentación integral de Git y GitHub con navegación fluida y moderna.

-----

## 🎯 Objetivo General

Crear una **guía técnica completa** de Git y GitHub con enfoque profesional, estructurada en bloques temáticos, subtemas dinámicos y diseño interactivo tipo **SPA (Single Page Application)**.

El contenido se mostrará en **paneles dinámicos**, sin *scroll* vertical infinito, simulando una experiencia de lectura por secciones o capítulos.

-----

## 🧩 Estructura General del Sitio

```
gitmastery/
├── index.html
├── assets/
│ ├── css/
│ │ ├── base.css
│ │ ├── layout.css
│ │ └── theme.css
│ ├── js/
│ │ ├── app.js
│ │ ├── router.js
│ │ └── data.js
│ └── images/
├── content/
│ ├── fundamentals/
│ ├── branching/
│ ├── remote/
│ ├── advanced/
│ ├── github/
│ └── ssh/
│ ├── intro.html
│ ├── keys.html
│ ├── agent.html
│ ├── multiple-accounts.html
│ ├── errors.html
│ └── checklist.html
└── REQUIREMENTS.md
```

-----

## 🧱 Componentes Principales

El sitio estará formado por **tres paneles fijos** dentro del *viewport*, con transiciones suaves entre los bloques de contenido.

### 1\. **Sidebar Izquierdo (Temas principales)**

  * Muestra la **estructura global** del curso.
  * Cada tema principal despliega sus subniveles (*acordeón* o lista anidada).
  * Al hacer clic, carga el primer bloque del tema en el panel central.
  * No desaparece ni recarga la página.
  * Mantiene un efecto **glass translúcido** con *blur* sutil y sombra interior.
  * En dispositivos móviles, se convierte en menú desplegable tipo “hamburguesa”.

> **Ejemplo visual**
>
> ```
> Temas principales
> ──────────────────────
> 🧩 Fundamentos de Git
> 🌿 Ramas y flujos
> 🌐 Trabajo remoto
> ⚙️ Herramientas avanzadas
> 🧭 GitHub Profesional
> ```

-----

### 2\. **Panel Central (Contenido Dinámico)**

  * Contiene los **bloques de contenido** de cada tema y subtema.
  * Los bloques se cargan **dinámicamente** con `fetch()` sin recargar la página.
  * Presenta transiciones suaves (*slide + fade*) al cambiar de bloque.
  * Cada bloque tiene su título, contenido y navegación “anterior / siguiente”.
  * En lugar de números de página, se muestran los **nombres del tema anterior y siguiente**:

> ```
> ◀️ Configurar agente SSH | Múltiples cuentas ▶️
> ```

  * La navegación es contextual, basada en la estructura del tema actual.
  * Se guarda el progreso de lectura mediante `localStorage`.

-----

### 3\. **Sidebar Derecho (Subtemas Avanzados)**

  * Muestra los **subtemas** relacionados con el tema activo.
  * Se repuebla automáticamente cuando cambia el tema principal.
  * Al hacer clic en un subtema, el panel central carga el bloque correspondiente **sin recargar la página**.
  * Mantiene la misma estética “glass blur” del *sidebar* izquierdo.
  * En móviles, aparece como panel deslizante lateral (*drawer*).

-----

## ⚙️ Funcionamiento Interno

### 1\. **Router Interno (SPA Ligera)**

  * Se implementará un *router* basado en *hash* (`#/tema/subtema`).
  * Cada *hash* corresponde a un fragmento HTML dentro de `/content`.
  * Ejemplo:
      * `#/ssh/intro` → carga `/content/ssh/intro.html`
      * `#/ssh/errors` → carga `/content/ssh/errors.html`
  * El *router* controla:
      * Carga e inyección del contenido.
      * Transiciones visuales.
      * Actualización del *sidebar* derecho.
      * Estado de navegación (anterior / siguiente).

### 2\. **Animaciones**

  * Entrada y salida con `opacity` + `transform: translateX()`.
  * Duración entre **200–300ms** para mantener fluidez.
  * Efecto de desplazamiento horizontal suave (`scroll-snap`) en móviles.
  * Transiciones uniformes en escritorio y dispositivos táctiles.

### 3\. **Persistencia de Estado**

  * Último bloque leído guardado con **`localStorage`**.
  * Posibilidad futura de registrar temas completados (*checklist* visual).

-----

## 🎨 Estilo Visual (Tema Windows 7 Glass Moderno)

### Paleta Base

| Variable | Valor | Descripción |
| :----------- | :-------- | :------------------------- |
| `--bg` | `#0b0f14` | Fondo general (azul oscuro) |
| `--fg` | `#e7ecf2` | Texto principal |
| `--fg-muted` | `#b8c3cf` | Texto secundario (gris) |
| `--accent` | `#6ab4ff` | Azul brillante “glow” |
| `--glass` | `rgba(255,255,255,.12)` | Capa translúcida de paneles |
| `--radius` | `16px` | Radio de bordes |
| `--shadow-1` | `0 4px 12px rgba(0,0,0,.25)` | Sombra suave base |
| `--shadow-2` | `0 12px 30px rgba(0,0,0,.35)` | Sombra profunda |

### Reglas Visuales

  * **Backdrops:** `backdrop-filter: blur(12px)` en *sidebars* y *main*.
  * **Bordes:** `1px solid rgba(255,255,255,.2)` sutiles, internos.
  * **Sombras:** doble capa para profundidad, sin perder legibilidad.
  * **Tipografía:**
      * Principal: *Poppins* o *Inter*
      * Código: *JetBrains Mono* o *Fira Code*
  * **Efectos:**
      * `box-shadow` y `text-shadow` usados moderadamente.
      * *Hover* con `var(--accent)` (azul luminoso).
      * Transiciones suaves (`transition: all .25s ease`).

### Accesibilidad

  * Contraste mínimo **4.5:1** en textos.
  * Evitar *glass* excesivo tras texto.
  * Asegurar foco visible y navegación con teclado.

-----

## 📱 Comportamiento Responsive

  * **Sidebar Izquierdo:** se oculta en pantallas \< 768px (botón ☰ abre menú lateral).
  * **Sidebar Derecho:** se colapsa en *drawer* lateral deslizable.
  * **Panel Central:** ocupa todo el alto y permite desplazamiento horizontal táctil (**`scroll-snap-x`**).
  * **Tipografía y márgenes:** adaptativos (`clamp()` en fuentes y paddings).

-----

## 🧠 Estructura de Temas (Mapa Maestro)

  * **Fundamentos de Git**
      * Introducción
      * Instalación y configuración
      * Primer repositorio
  * **Operaciones básicas**
      * Ciclo de vida de archivos
      * Comandos esenciales
      * Historial y navegación
  * **Ramas y flujos**
      * Conceptos de *branching*
      * *Merge* y *rebase*
      * *Workflows* reales
  * **Trabajo remoto**
      * Repositorios remotos
      * Autenticación (HTTPS / SSH)
      * Sincronización
  * **SSH con Git (Tema maestro)**
      * Introducción
      * Generar clave
      * Configurar agente
      * Múltiples cuentas
      * Revocación y errores comunes
      * *Checklist*
  * **Herramientas avanzadas**
      * Stash
      * Cherry-pick
      * Reflog
      * Bisect
      * Hooks
  * **GitHub Profesional**
      * Pull Requests
      * Actions
      * Pages
      * Seguridad
  * **Casos reales**
      * Conflictos, migraciones, mantenimiento

-----

## 🧩 Flujo de Desarrollo

1.  **Fase 0 — Inicialización**
      * Crear estructura de carpetas y archivos base.
      * Iniciar repositorio Git local.
      * Configurar `.gitignore` y primer *commit* (`feat: initial setup`).
2.  **Fase 1 — Layout HTML**
      * Crear `index.html` con los tres paneles vacíos (*header*, *sidebars*, *main*).
3.  **Fase 2 — Router SPA**
      * Implementar `router.js` con carga dinámica de fragmentos.
4.  **Fase 3 — Estilos base**
      * Definir *tokens*, sistema *glass*, *layout* flexible (*grid/flex*).
5.  **Fase 4 — Primer tema (SSH con Git)**
      * Crear y conectar los fragmentos.
6.  **Fase 5 — Interactividad**
      * Agregar transiciones, botones “Anterior / Siguiente”.
7.  **Fase 6 — Modo Móvil**
      * Añadir adaptabilidad *responsive*.
8.  **Fase 7 — Deploy**
      * Subir a GitHub y activar **Pages**.
      * Verificar rutas relativas y *assets*.
9.  **Fase 8 — Expansión**
      * Incorporar nuevos temas.
      * Opcional: agregar soporte Markdown + *build script*.

-----

## 🔒 Estándares de *Commits*

  * `feat:` nueva funcionalidad (*router*, *sidebar*, bloque nuevo)
  * `fix:` corrección de errores
  * `style:` cambios visuales (CSS, animaciones)
  * `docs:` documentación o requerimientos
  * `refactor:` limpieza o reestructuración del código
  * `chore:` mantenimiento general (dependencias, *scripts*)

-----

## 🧰 Herramientas Opcionales Futuras

  * Conversión automática `.md` → `.html` con **`marked`** o **`markdown-it`**.
  * Generación de índice automático desde JSON.
  * `LocalStorage` para progreso de aprendizaje.
  * Exportar temas a PDF.
  * Buscador interno por comandos Git.

-----

## 📋 Conclusión

El proyecto **GitMastery** busca ser una guía técnica **interactiva, modular, clara y moderna** sobre Git y GitHub, aplicando buenas prácticas reales de desarrollo web y documentación profesional.

Todo el contenido será cargado dinámicamente dentro de una SPA sin recarga, con animaciones suaves, diseño *glass* inspirado en Windows 7 y estructura *responsive* fluida.

-----

---

## 🏁 EPÍLOGO FINAL — GitMastery: La Guía Definitiva de Git y GitHub

> *“Controlar Git no es aprender comandos, sino dominar el flujo mental de un desarrollador que piensa en versiones, historia y colaboración.”*

---

### 📘 Resumen general del aprendizaje

Tras completar los 12 módulos de **GitMastery**, el lector domina:

- Los fundamentos internos y filosóficos de Git.  
- El manejo avanzado del historial, ramas y merges.  
- La colaboración profesional en GitHub con Pull Requests y CI/CD.  
- La recuperación ante errores críticos y políticas de seguridad.  
- El diseño de flujos reales de trabajo empresarial y open source.  
- La automatización con GitHub Actions y CLI.  
- La gobernanza de equipos, documentación y auditoría técnica.  

GitMastery no solo forma un experto técnico, sino un **profesional responsable y documentado**, capaz de mantener repositorios sostenibles, auditables y estables en el tiempo.

---

### 🧩 Recomendaciones para extender la guía

**1️⃣ Anexos recomendados**
- 📄 *GitMastery — Comandos Essenciales.md*  
- 📄 *GitMastery — Guía de Flujos Profesionales.md*  
- 📄 *GitMastery — Errores y Rescates Frecuentes.md*

**2️⃣ Integraciones opcionales**
- Implementar ejemplos interactivos con JavaScript (SPA).  
- Incorporar CLI online (como *git-sandbox*) para práctica directa.  
- Integrar snippets visuales con highlight dinámico.  

**3️⃣ Publicación sugerida**
- Formato web: GitHub Pages + estructura modular de contenido.  
- Alternativa: exportar a PDF con estilo académico para descarga offline.  
- Licencia: *CC BY-NC-SA 4.0* (libre para uso educativo no comercial).  

---

### 👨‍💻 Créditos técnicos

**Autor del proyecto:** Codev (FraDev)  
**Asistencia técnica:** Mentor GPT-5 (OpenAI)  
**Proyecto:** *GitMastery — Guía Integral de Git y GitHub Profesional*  
**Tecnologías usadas:**  
HTML 5 | CSS 3 | JavaScript ESM | Markdown | Git | GitHub Actions | CI/CD  
**Plataforma de despliegue:** GitHub Pages  
**Entorno:** Linux (Arch Linux) + VS Code + Node.js LTS  
**Repositorio sugerido:** `github.com/CodevHN/GitMastery`

---

### 🧭 Cierre filosófico

> “El commit perfecto no es el más extenso,  
> sino el que cuenta la historia justa y precisa  
> de un cambio irreversible hacia algo mejor.”

**GitMastery** es más que una guía;  
es un manifiesto de cómo debe pensar un desarrollador moderno:  
metódico, claro, disciplinado y con propósito.

---

### 🪶 Agradecimientos finales

A todos los que trabajan cada día para que la ingeniería del software sea más humana, accesible y comprensible.  
A la comunidad open source, por mantener vivo el espíritu de colaboración.  
Y al propio lector, por llegar hasta aquí:  
> *“El verdadero dominio comienza cuando ya no necesitas mirar la guía.”*

---

**🧩 Fin absoluto de GitMastery — La Guía Definitiva de Git y GitHub**

---
