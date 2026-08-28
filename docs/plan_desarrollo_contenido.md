# 📚 GitMastery — Plan de Acción para Desarrollo de Contenido

**Versión:** 1.0  
**Fecha:** Noviembre 2025  
**Estado:** Planificación

---

## 🎯 1. Objetivo del Plan

Establecer una metodología clara, consistente y escalable para la creación de contenido educativo de cada tema de Git y GitHub, asegurando:
- Profundidad pedagógica adecuada
- Formato uniforme en todos los módulos
- Progresión lógica del aprendizaje
- Calidad técnica verificable

---

## 📐 2. Formato Estándar de Cada Tema

Cada subtema seguirá una **estructura template** consistente en archivos HTML dentro de `/content/{modulo}/{tema}.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>{Título del Tema} | GitMastery</title>
  <meta name="description" content="{Descripción SEO}">
  <meta name="difficulty" content="{básico|intermedio|avanzado}">
  <meta name="duration" content="{tiempo estimado en minutos}">
</head>
<body>
  <article class="doc-block" data-topic="{id-del-tema}">
    
    <!-- 1. Encabezado contextual -->
    <header class="topic-header">
      <span class="breadcrumb">Módulo {N} → {Tema}</span>
      <h1>{Título completo del tema}</h1>
      <p class="objective">{Objetivo de aprendizaje en 1-2 frases}</p>
    </header>

    <!-- 2. Introducción contextual -->
    <section class="intro">
      <h2>¿Por qué es importante esto?</h2>
      <p>Contexto práctico, problema que resuelve, relevancia profesional</p>
    </section>

    <!-- 3. Contenido teórico (profundidad según nivel) -->
    <section class="theory">
      <h2>Fundamentos</h2>
      <!-- Explicación conceptual con analogías si aplica -->
    </section>

    <!-- 4. Ejemplos prácticos -->
    <section class="examples">
      <h2>Ejemplos prácticos</h2>
      
      <div class="example">
        <h3>Ejemplo 1: {Escenario común}</h3>
        <pre><code class="language-bash">$ git comando --opciones
# Explicación del resultado esperado</code></pre>
      </div>

      <div class="example">
        <h3>Ejemplo 2: {Variante o caso alternativo}</h3>
        <pre><code class="language-bash">$ git otro-comando
# Resultado y explicación</code></pre>
      </div>
    </section>

    <!-- 5. Laboratorio / Práctica guiada (si aplica) -->
    <section class="lab" data-optional="false">
      <h2>🧪 Laboratorio práctico</h2>
      <ol class="steps">
        <li>Paso 1: Instrucción clara y verificable</li>
        <li>Paso 2: Comando específico</li>
        <li>Paso 3: Validación del resultado</li>
      </ol>
      <div class="expected-output">
        <h4>Resultado esperado:</h4>
        <pre><code>{Output esperado}</code></pre>
      </div>
    </section>

    <!-- 6. Errores comunes -->
    <section class="common-errors" data-badge="⚠️">
      <h2>Errores frecuentes y cómo resolverlos</h2>
      
      <div class="error-case">
        <h3>Error: {Mensaje de error típico}</h3>
        <p><strong>Causa:</strong> Explicación de por qué ocurre</p>
        <p><strong>Solución:</strong> Pasos para corregirlo</p>
        <pre><code class="language-bash">$ git comando-de-solucion</code></pre>
      </div>
    </section>

    <!-- 7. Buenas prácticas -->
    <section class="best-practices" data-badge="✅">
      <h2>Mejores prácticas profesionales</h2>
      <ul class="checklist">
        <li>Práctica recomendada #1 con justificación</li>
        <li>Práctica recomendada #2 con justificación</li>
        <li>Anti-patrón a evitar con explicación</li>
      </ul>
    </section>

    <!-- 8. Profundización opcional (para curiosos) -->
    <section class="deep-dive" data-optional="true">
      <h2>🔬 Para los curiosos: Profundización técnica</h2>
      <p>Detalles internos, arquitectura, implementación subyacente</p>
      <div class="technical-note">
        <h4>Nota técnica:</h4>
        <p>Información avanzada sobre cómo funciona internamente</p>
      </div>
    </section>

    <!-- 9. Referencias cruzadas -->
    <section class="related-topics">
      <h2>Temas relacionados</h2>
      <ul>
        <li><a href="#/modulo/tema-anterior">← Tema anterior recomendado</a></li>
        <li><a href="#/modulo/tema-siguiente">Siguiente tema en secuencia →</a></li>
        <li><a href="#/modulo/tema-complementario">Tema complementario</a></li>
      </ul>
    </section>

    <!-- 10. Resumen y checklist de aprendizaje -->
    <section class="summary">
      <h2>📝 Resumen y verificación</h2>
      
      <div class="key-takeaways">
        <h3>Puntos clave para recordar:</h3>
        <ul>
          <li>Concepto fundamental #1</li>
          <li>Comando o técnica #2</li>
          <li>Advertencia importante #3</li>
        </ul>
      </div>

      <div class="self-check">
        <h3>✅ Checklist de autoevaluación:</h3>
        <label><input type="checkbox"> Puedo explicar este concepto con mis palabras</label>
        <label><input type="checkbox"> He practicado los comandos en un repositorio de prueba</label>
        <label><input type="checkbox"> Entiendo cuándo aplicar esta técnica en proyectos reales</label>
        <label><input type="checkbox"> Sé cómo resolver los errores comunes asociados</label>
      </div>
    </section>

    <!-- 11. Navegación contextual -->
    <nav class="pager" aria-label="Navegación del tema">
      <a href="#/modulo/anterior" class="btn prev">◀️ {Nombre tema anterior}</a>
      <a href="#/modulo/siguiente" class="btn next">{Nombre tema siguiente} ▶️</a>
    </nav>

  </article>
</body>
</html>
```

---

## 📊 3. Niveles de Profundidad Pedagógica

Cada tema se clasificará en **3 niveles de profundidad**, determinando cuánto contenido incluir:

### Nivel 1: 🟢 Básico (Introducción)

**Objetivo:** Comprensión conceptual y primeros pasos prácticos

**Contenido mínimo:**
- ✅ Definición clara y propósito
- ✅ Analogía o ejemplo del mundo real
- ✅ 1-2 comandos esenciales con ejemplos básicos
- ✅ 1 laboratorio guiado paso a paso
- ✅ 2-3 errores comunes frecuentes
- ✅ Checklist de 3-4 puntos de autoevaluación

**Profundidad técnica:** Superficial — Qué hace y por qué usarlo

**Tiempo estimado de lectura:** 5-8 minutos

**Ejemplos de temas básicos:**
- ¿Qué es Git?
- Primer repositorio local
- `git add` y `git commit` iniciales
- ¿Qué es una rama?

---

### Nivel 2: 🟡 Intermedio (Dominio operacional)

**Objetivo:** Uso competente en escenarios reales de desarrollo

**Contenido requerido:**
- ✅ Todo lo del nivel básico, MÁS:
- ✅ Múltiples escenarios de uso (3-4 ejemplos variados)
- ✅ Opciones y flags comunes del comando
- ✅ Laboratorio con variante o caso complejo
- ✅ Integración con otros comandos (flujos de trabajo)
- ✅ 4-5 errores comunes con soluciones detalladas
- ✅ Buenas prácticas específicas del contexto
- ✅ Sección de profundización técnica (opcional)
- ✅ Checklist de 5-6 puntos de autoevaluación

**Profundidad técnica:** Media — Cómo funciona y cuándo aplicar cada variante

**Tiempo estimado de lectura:** 10-15 minutos

**Ejemplos de temas intermedios:**
- `git rebase` interactivo
- Resolución de conflictos de merge
- `git reset` vs `git restore`
- Ramas remotas y sincronización

---

### Nivel 3: 🔴 Avanzado (Maestría técnica)

**Objetivo:** Comprensión interna y resolución de problemas complejos

**Contenido requerido:**
- ✅ Todo lo del nivel intermedio, MÁS:
- ✅ Arquitectura interna y funcionamiento subyacente
- ✅ Casos límite y comportamientos no obvios
- ✅ Laboratorio de diagnóstico y recuperación
- ✅ Comparación técnica profunda (ej: SHA-1 vs SHA-256)
- ✅ Scripts o automatizaciones relacionadas
- ✅ 6+ errores complejos y técnicas de debugging
- ✅ Patrones profesionales de uso en equipos grandes
- ✅ Referencias a documentación oficial y RFCs
- ✅ Checklist de 7-8 puntos de autoevaluación exhaustiva

**Profundidad técnica:** Profunda — Por qué funciona así, internals, optimización

**Tiempo estimado de lectura:** 20-30 minutos

**Ejemplos de temas avanzados:**
- Arquitectura interna de objetos Git
- `git filter-branch` y reescritura de historia
- Estrategias de recovery con `reflog`
- Hooks personalizados y automatización CI/CD

---

## 🗺️ 4. Secuenciación Pedagógica por Módulo

Cada módulo seguirá una **progresión en espiral**:

### Fase 1: Introducción contextual (Nivel Básico)
- Historia y propósito del tema
- Problema que resuelve
- Conceptos fundamentales sin tecnicismos

### Fase 2: Operación básica (Nivel Básico-Intermedio)
- Comandos esenciales
- Primeros ejercicios guiados
- Errores comunes de principiante

### Fase 3: Dominio operacional (Nivel Intermedio)
- Flujos de trabajo completos
- Combinación de comandos
- Escenarios reales de uso

### Fase 4: Profundización técnica (Nivel Intermedio-Avanzado)
- Cómo funciona internamente
- Optimización y mejores prácticas
- Casos complejos y sus soluciones

### Fase 5: Maestría (Nivel Avanzado)
- Arquitectura interna detallada
- Personalización y automatización
- Contribución y enseñanza a otros

---

## 📝 5. Lineamientos de Redacción

### Tono y estilo

| Aspecto | Directriz |
|---------|-----------|
| **Tono** | Profesional pero accesible, como un senior mentor |
| **Persona** | Segunda persona ("tú", "puedes", "verás") |
| **Voz** | Activa, directa, orientada a acción |
| **Complejidad** | Acorde al nivel del tema (básico = simple, avanzado = técnico) |
| **Longitud de párrafos** | Máximo 4-5 líneas para legibilidad |

### Convenciones de código

```bash
# ✅ COMANDO CON COMENTARIO EXPLICATIVO
$ git commit -m "feat: agregar autenticación"
# El flag -m permite escribir el mensaje inline
```

```
# ❌ EVITAR: Comando sin contexto
$ git commit -m "feat: agregar autenticación"
```

### Estructura de ejemplos

1. **Contexto:** ¿Cuándo usarías esto?
2. **Comando:** Código ejecutable claro
3. **Resultado esperado:** Output o efecto visible
4. **Explicación:** Por qué funciona así

### Elementos visuales obligatorios

- [ ] Icono de nivel de dificultad (🟢/🟡/🔴)
- [ ] Badge de tipo de contenido (teoría, práctica, laboratorio, advertencia)
- [ ] Breadcrumbs de navegación jerárquica
- [ ] Syntax highlighting en todos los bloques de código
- [ ] Callouts para notas importantes (> **Nota:** ...)

---

## 🏷️ 6. Sistema de Metadatos

Cada archivo HTML incluirá metadatos en el `<head>` para:

```html
<meta name="difficulty" content="basico"> <!-- basico | intermedio | avanzado -->
<meta name="duration" content="8"> <!-- minutos estimados -->
<meta name="module" content="fundamentos"> <!-- ID del módulo padre -->
<meta name="prerequisites" content="intro,vcs-problem"> <!-- Temas previos requeridos -->
<meta name="learning-objectives" content="comprender-git,instalar-git,configurar-git">
<meta name="tags" content="git,historia,vcs,instalacion"> <!-- Para búsqueda -->
```

---

## 📋 7. Checklist de Calidad por Tema

Antes de publicar cada tema, verificar:

### Contenido técnico
- [ ] La información es precisa y actualizada (Git 2.x+)
- [ ] Los comandos fueron probados en Linux, macOS y Windows
- [ ] Las versiones mencionadas son vigentes
- [ ] No hay ambigüedades o contradicciones

### Pedagogía
- [ ] El objetivo de aprendizaje es claro y medible
- [ ] Hay al menos 1 ejemplo práctico por concepto
- [ ] Los laboratorios son reproducibles paso a paso
- [ ] La autoevaluación verifica comprensión real

### Accesibilidad
- [ ] Contraste de colores cumple WCAG AA
- [ ] Todo elemento interactivo tiene foco visible
- [ ] Imágenes tienen texto alternativo descriptivo
- [ ] El contenido es navegable solo con teclado

### UX/UI
- [ ] La navegación "Anterior/Siguiente" funciona correctamente
- [ ] Los enlaces a temas relacionados están activos
- [ ] El diseño responsive muestra bien en móvil
- [ ] El tiempo estimado de lectura es preciso

### SEO y descubribilidad
- [ ] Meta descripción es única y atractiva (150-160 caracteres)
- [ ] Tags relevantes están asignados
- [ ] El título sigue el patrón: "{Tema} | GitMastery"
- [ ] Hay al menos 3 enlaces internos a temas relacionados

---

## 📅 8. Cronograma Estimado de Producción

### Sprint 1: Fundamentos (Semana 1-2)
| Semana | Temas a producir | Horas estimadas |
|--------|------------------|-----------------|
| 1 | Módulo 1: Introducción, Arquitectura, Instalación | 12-15 hrs |
| 2 | Módulo 1: Primer repo, Commit, Configuración | 12-15 hrs |

### Sprint 2: Operaciones Básicas (Semana 3-4)
| Semana | Temas a producir | Horas estimadas |
|--------|------------------|-----------------|
| 3 | Módulo 2: Ciclo de vida, Comandos diarios | 12-15 hrs |
| 4 | Módulo 2: Historial, Recuperación, Etiquetas | 12-15 hrs |

### Sprint 3: Ramas y Flujos (Semana 5-7)
| Semana | Temas a producir | Horas estimadas |
|--------|------------------|-----------------|
| 5 | Módulo 3: Conceptos de branching, Creación y gestión | 15-18 hrs |
| 6 | Módulo 3: Merge, Rebase, Cherry-pick | 15-18 hrs |
| 7 | Módulo 3: Workflows, Conflictos, Ramas remotas | 15-18 hrs |

### Sprint 4: Trabajo Remoto y SSH (Semana 8-9)
| Semana | Temas a producir | Horas estimadas |
|--------|------------------|-----------------|
| 8 | Módulo 4: Remotos, Fetch/Pull, Sincronización | 12-15 hrs |
| 9 | Módulo 5: SSH completo (generar, configurar, múltiples cuentas) | 12-15 hrs |

### Sprint 5: Herramientas Avanzadas (Semana 10-12)
| Semana | Temas a producir | Horas estimadas |
|--------|------------------|-----------------|
| 10 | Módulo 6: Stash, Reflog, Bisect | 15-18 hrs |
| 11 | Módulo 6: Hooks, Filter-branch, Mantenimiento | 15-18 hrs |
| 12 | Módulo 7: GitHub PRs, Code Review, Protecciones | 15-18 hrs |

### Sprint 6: GitHub Profesional y Casos Reales (Semana 13-15)
| Semana | Temas a producir | Horas estimadas |
|--------|------------------|-----------------|
| 13 | Módulo 7: Actions, Pages, Security, CLI | 15-18 hrs |
| 14 | Módulo 8: Migraciones, Conflictos complejos, Auditoría | 15-18 hrs |
| 15 | Repaso general, testing, correcciones, deploy final | 15-18 hrs |

**Total estimado:** 15 semanas (~4 meses) para contenido completo  
**Horas totales:** ~210-270 horas de producción de contenido

---

## 🛠️ 9. Herramientas de Producción

### Software recomendado

| Propósito | Herramienta | Alternativa |
|-----------|-------------|-------------|
| Editor de código | VS Code | Sublime Text, Neovim |
| Terminal | Alacritty, iTerm2 | Windows Terminal, GNOME Terminal |
| Validación HTML | W3C Validator | HTMLHint (extensión VS Code) |
| Testing multiplataforma | GitHub Codespaces | VirtualBox con VMs |
| Capturas de pantalla | Flameshot, ShareX | Snipping Tool (Windows) |
| Diagramas | Draw.io, Excalidraw | Mermaid.js (inline) |

### Plantillas y snippets

Crear snippets de VS Code para:
- Template base de tema HTML
- Bloque de ejemplo con código bash
- Sección de errores comunes
- Checklist de autoevaluación
- Metadata head completo

### Automatización futura (roadmap)

- [ ] Script para convertir Markdown → HTML con template
- [ ] Validador automático de enlaces rotos
- [ ] Generador de índice desde `data.js`
- [ ] Linter de calidad de contenido (palabras clave, longitud, etc.)

---

## 📈 10. Métricas de Éxito

### Por tema individual

| Métrica | Objetivo mínimo | Objetivo ideal |
|---------|-----------------|----------------|
| Tiempo en página | > 3 minutos | > 8 minutos |
| Completitud de checklist | > 60% usuarios | > 85% usuarios |
| Rebote | < 40% | < 20% |
| Navegación a siguiente tema | > 50% | > 75% |

### Por módulo

| Métrica | Objetivo mínimo | Objetivo ideal |
|---------|-----------------|----------------|
| Tasa de completitud del módulo | > 40% | > 70% |
| Satisfacción (feedback) | > 4/5 estrellas | > 4.7/5 estrellas |
| Ejercicios completados | > 50% | > 80% |

### Globales del sitio

| Métrica | Objetivo 6 meses | Objetivo 12 meses |
|---------|------------------|-------------------|
| Usuarios mensuales | 1,000+ | 10,000+ |
| Temas más visitados | Top 10 con 100+ visitas/mes | Top 20 con 500+ visitas/mes |
| Contribuciones externas | 5+ PRs de mejora | 20+ PRs de comunidad |
| Forks del repo | 50+ | 200+ |

---

## 🔄 11. Proceso de Revisión y Actualización

### Antes de publicar (revisión interna)

1. **Auto-revisión del autor** — Checklist de calidad completada
2. **Revisión técnica** — Otro desarrollador prueba los comandos
3. **Revisión pedagógica** — Persona con nivel objetivo valida claridad
4. **QA de UI/UX** — Testing en desktop, móvil, diferentes navegadores
5. **Correcciones** — Iterar hasta cumplir todos los criterios
6. **Aprobación final** — Merge a main y deploy

### Después de publicar (mantenimiento continuo)

| Frecuencia | Actividad | Responsable |
|------------|-----------|-------------|
| Semanal | Revisar issues de GitHub reportando errores | Mantenedor principal |
| Mensual | Verificar vigencia de comandos y versiones | Equipo técnico |
| Trimestral | Actualizar screenshots y ejemplos si hubo cambios en Git | Equipo de contenido |
| Semestral | Revisar métricas de uso y priorizar mejoras | Product owner |
| Anual | Actualización mayor de contenido obsoleto | Equipo completo |

### Sistema de versionado de contenido

Cada tema llevará un badge de versión:
```html
<span class="version-badge" title="Última actualización">v1.2 • Nov 2025</span>
```

Historial de cambios en comentario HTML:
```html
<!--
CHANGELOG:
v1.2 (Nov 2025) - Agregado ejemplo con Git 2.40+
v1.1 (Ago 2025) - Corregido error en comando de recovery
v1.0 (Jun 2025) - Versión inicial
-->
```

---

## 🎓 12. Estrategia de Evaluación del Aprendizaje

### Autoevaluación integrada (por tema)

Al final de cada tema, el usuario completa:
- ✅ Checklist de competencias (4-8 ítems según nivel)
- 📝 Quiz rápido de 3-5 preguntas (opcional futuro)
- 🎯 Ejercicio práctico validable (entregar screenshot o output)

### Evaluación por módulo

Al completar cada módulo:
- 📋 Examen teórico de 10-15 preguntas
- 🧪 Proyecto práctico integrador (ej: crear repo, hacer branch, merge, resolver conflicto)
- 🏆 Badge de completitud descargable/compartible

### Certificación final (roadmap fase 2)

Al completar los 8 módulos:
- 📜 Certificado digital verificable
- 💼 Proyecto final: Portfolio con commits demostrando habilidades
- 🌟 Publicación en perfil de GitHub con badge GitMastery

---

## 📞 13. Canales de Feedback

Los usuarios podrán reportar:
- Errores técnicos → GitHub Issues (tag: `bug`)
- Mejoras sugeridas → GitHub Issues (tag: `enhancement`)
- Dudas conceptuales → GitHub Discussions o Discord
- Contribuciones de contenido → Pull Requests (tag: `content`)

**SLA de respuesta:**
- Bugs críticos: 48 horas
- Mejoras: 1 semana
- Dudas: 72 horas
- PRs: 2 semanas

---

## 🏁 14. Conclusión del Plan

Este plan establece las bases para producir contenido educativo de **alta calidad, consistente y escalable** para GitMastery.

**Principios rectores:**
1. **Claridad sobre completitud** — Mejor explicar bien 1 concepto que mencionar 10 superficialmente
2. **Práctica sobre teoría** — Cada concepto debe tener al menos 1 ejercicio aplicable inmediatamente
3. **Progresión sobre saturación** — Respetar la curva de aprendizaje del estudiante
4. **Accesibilidad sobre sofisticación** — Llegar a la mayor audiencia posible sin sacrificar rigor técnico

**Siguiente paso inmediato:** Comenzar producción del **Módulo 1, Tema 1: "Introducción general"** siguiendo este formato.

---

*Fin del Plan de Acción para Desarrollo de Contenido*
