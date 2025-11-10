# 🧠 GitMastery — Mapa Maestro de Temas
## MÓDULO 1 — Fundamentos de Git

**Objetivo:** comprender la filosofía, arquitectura interna y comandos base del sistema Git antes de abordar flujos de trabajo o colaboración remota.

---

### 1️⃣ Introducción general
- ¿Qué es Git? historia y propósito  
- Git vs otros VCS (Subversion, Mercurial, CVS)  
- Filosofía de instantáneas (snapshots vs deltas)  
- Qué significa “distribuido”  
- Componentes del ecosistema Git (local, remoto, servidores)  
- Ventajas clave frente a otros métodos de control de versiones  
- Cuándo **NO** usar Git y por qué (escenarios atípicos)

---

### 2️⃣ Arquitectura interna de Git
- Objetos de Git: **Blob**, **Tree**, **Commit**, **Tag**  
- Identificadores **SHA-1 / SHA-256** y compresión *zlib*  
- Directorio `.git/` — estructura completa  
- `HEAD`, `refs`, `branches` y *pointers*  
- Qué almacena exactamente Git en cada commit  
- Cómo Git reconstruye la historia  
- Garbage collection (`git gc`) y *pack files*  
- Reflog interno (`git reflog`) como registro de movimientos  
- Cómo funciona `git status` y la *staging area* a nivel de archivos

---

### 3️⃣ Instalación y configuración inicial
- Instalación en **Linux** (`apt`, `pacman`, `dnf`)  
- Instalación en **macOS** (Homebrew)  
- Instalación en **Windows** (Git for Windows, WSL)  
- Verificar versión y entorno (`git --version`, `which git`)  
- Configuración global vs local vs de sistema  
- `git config --global user.name`, `user.email`  
- `core.editor`, `core.autocrlf`, `color.ui`, `pager`  
- Alias personalizados (`git config alias.lg "log --oneline"`)  
- Visualizar configuración (`git config --list`, `--show-origin`)  
- Copias de seguridad del archivo `.gitconfig`  
- Buenas prácticas de configuración por equipo

---

### 4️⃣ Primer repositorio local
- `git init` — qué crea exactamente  
- Estructura de carpetas tras la inicialización  
- Añadir archivos de ejemplo (`touch README.md`)  
- *Staging area* y *Working Directory* en acción  
- Primer commit (`git add`, `git commit -m`)  
- Explorar el historial (`git log`, `git show`)  
- Deshacer el último commit (`git reset --soft HEAD~1`)  
- `git status` en detalle (colores, mensajes, interpretación)  
- `.gitignore` — sintaxis, patrones y comentarios  
- `.gitattributes` — tipos de fin de línea, *merge drivers*, *diffs* personalizados  
- Estructura del primer commit (autor, fecha, hash)

---

### 5️⃣ Anatomía del commit
- Qué información contiene un commit  
- Autor vs *committer* — diferencias  
- Mensajes de commit efectivos y semántica convencional  
- `git commit --amend` para correcciones rápidas  
- Commits firmados (GPG / SSH) y verificación en GitHub  
- Buenas prácticas de frecuencia de commits  
- Commits de documentación vs funcionalidad  
- Commits atómicos y revisiones granulares

---

### 6️⃣ Archivos especiales y plantillas
- `.gitignore` avanzado (patrones globales, negaciones)  
- `.gitattributes` profundo (*merge strategies*, *binary flags*)  
- `COMMIT_EDITMSG` y `MERGE_MSG` — archivos de mensajes internos  
- Carpeta `hooks/` predefinida en repositorios nuevos  
- Uso de plantillas de commit (`commit.template`)  
- Archivos `.mailmap` para autores duplicados

---

### 7️⃣ Alias y personalización profesional
- Alias de línea simple vs alias de comando compuesto  
- Alias para logs (`lg`, `hist`, `graph`)  
- Alias para status compacto (`s`, `st`)  
- Alias con argumentos (`!f() { git diff $1; }; f`)  
- Alias globales vs de repositorio  
- Colores personalizados (`color.branch`, `color.status`)  
- Integración con terminales avanzados (*Oh My Zsh*, *Starship*, *Powerlevel10k*)

---

### 8️⃣ Mantenimiento básico del repositorio
- `git gc`, `git fsck`, `git prune` y su uso seguro  
- Limpieza de archivos no rastreables (`git clean -dfx`)  
- Reescritura de autoría (`git filter-branch`, `git rebase --root --exec`)  
- Comprensión de archivos PACK y *loose objects*  
- Cómo Git almacena deltas y optimiza espacio

---

### 9️⃣ Exploración de objetos y referencias
- `git cat-file -p` para inspeccionar objetos  
- `git hash-object`, `git rev-parse`, `git rev-list`  
- Cómo Git resuelve nombres de referencia (`HEAD^`, `HEAD~2`, `@{u}`)  
- Desambiguación de revisiones (sha abreviado vs completo)  
- Referencias simples (`refs/heads/`, `refs/tags/`)  
- Reflog y recuperación de commits perdidos

---

### 🔟 Prácticas profesionales y errores comunes
- Diferencia entre `init` y `clone`  
- Ignorar archivos globalmente (`~/.config/git/ignore`)  
- Configuraciones conflictivas entre niveles (global/local)  
- Errores frecuentes al hacer commit sin identidad  
- Pérdida de commits por mal uso de `reset` o `checkout`  
- Mejores hábitos para proyectos reales

---

**🧭 Fin del Módulo 1 – Fundamentos de Git**

## ⚙️ MÓDULO 2 — Operaciones básicas

**Objetivo:** dominar el ciclo de vida de los archivos, los comandos fundamentales y las técnicas para explorar, comparar y manipular el historial de Git con precisión profesional.

---

### 1️⃣ Ciclo de vida de un archivo en Git
- Estados de un archivo: *untracked*, *modified*, *staged*, *committed*  
- Cómo fluye la información entre Working Directory, Staging Area y Repository  
- Visualizar el estado actual (`git status`, `git diff`, `git diff --staged`)  
- Agregar cambios al índice (`git add archivo`, `git add .`, `git add -p`)  
- Quitar un archivo del índice (`git restore --staged`)  
- Descartar cambios del área de trabajo (`git restore archivo`)  
- Eliminar archivos del control de versiones (`git rm`)  
- Renombrar y mover archivos (`git mv`)  
- Manejo de archivos binarios y texto  
- Diferencias entre `git add -A`, `git add .`, `git add -u`

---

### 2️⃣ Comandos esenciales de trabajo diario
- `git diff` — comparaciones línea a línea  
  - Entre commits, ramas y *staging area*  
  - Opciones útiles: `--color-words`, `--name-only`, `--stat`, `--word-diff`  
- `git show` — inspeccionar commits individuales o etiquetas  
- `git log` — explorar el historial con estilo  
  - `git log --oneline --graph --decorate --all`  
  - Filtros: `--author`, `--grep`, `--since`, `--until`, `--no-merges`  
  - Personalización con formatos (`--pretty=format:"%h %an %s"`)  
- `git commit` — creación y edición de commits  
  - Mensajes multilínea, plantillas, `--amend`, `--allow-empty`  
  - *Signed commits* con GPG o SSH  
- `git tag` — marcadores de versiones  
  - Ligero vs anotado, firmado y eliminado  
  - Ver, listar y mover etiquetas  
- `git blame` — identificar autoría de líneas específicas  
- `git shortlog` — resumen por autor o por commit  
- `git describe` — generar identificadores legibles (versiones semánticas)

---

### 3️⃣ Navegación en el historial
- Identificadores y referencias relativas (`HEAD`, `HEAD^`, `HEAD~2`)  
- `git log` avanzado con rangos de commits (`A..B`, `A...B`)  
- Buscar cambios específicos (`git log -S`, `git log -L`)  
- Saltar entre versiones (`git checkout <hash>`, `git restore --source`)  
- Explorar cambios en un archivo a lo largo del tiempo  
- Ver diferencias entre dos ramas (`git diff main dev`)  
- `git grep` — búsqueda dentro del contenido versionado  
- Generar reportes personalizados (`git log --stat --summary`)

---

### 4️⃣ Recuperación y reversión
- Deshacer cambios recientes (`git restore`, `git checkout -- archivo`)  
- `git reset` — modos `--soft`, `--mixed`, `--hard`  
  - Cuándo usar cada uno y sus riesgos  
- `git revert` — crear un commit que deshace otro  
- `git reflog` — recuperar commits perdidos o *detached HEAD*  
- Restaurar archivos o commits por hash  
- Buenas prácticas de seguridad al deshacer cambios

---

### 5️⃣ Trabajo con versiones y etiquetas
- Crear etiquetas semánticas (v1.0.0, v1.0.1, etc.)  
- `git tag -a` con mensajes descriptivos  
- Firmar etiquetas con GPG (`git tag -s`)  
- Eliminar y mover etiquetas (`git tag -d`, `git push --delete origin`)  
- Listar y ordenar etiquetas (`git tag --sort=-creatordate`)  
- Relación entre etiquetas y lanzamientos en GitHub

---

### 6️⃣ Ignorar y limpiar archivos
- Patrones en `.gitignore` (comodines, negaciones, rutas absolutas)  
- `.gitignore_global` y exclusiones globales  
- Ver qué archivos ignora Git (`git check-ignore -v archivo`)  
- Archivos *tracked* que deberían dejar de serlo (`git rm --cached`)  
- Limpieza avanzada (`git clean -df`, `git clean -xdf`)  
- Precauciones y confirmaciones con `-n` o `--dry-run`

---

### 7️⃣ Comparación entre commits, ramas y etiquetas
- `git diff <commit1> <commit2>`  
- `git diff branch1..branch2`  
- `git diff tag1 tag2`  
- Visualización de nombres de archivos modificados (`--name-status`)  
- Exportar parches (`git diff > cambios.patch`)  
- Aplicar parches (`git apply`, `git am`)  
- Integración con herramientas visuales (`git difftool`)

---

### 8️⃣ Logs y auditoría profesional
- `git log --follow archivo` (rastrear renombres)  
- `git log --grep "texto"` (buscar en mensajes de commit)  
- Combinación de filtros (`--author`, `--since`, `--until`)  
- Generar resúmenes de contribuciones (`git shortlog -sn`)  
- Estadísticas de actividad (`git log --stat`)  
- Crear gráficos de commits (`git log --graph --pretty=oneline`)  
- Exportar historial a archivo (`git log > history.txt`)

---

### 9️⃣ Herramientas de verificación
- `git status --short` para estados compactos  
- `git diff --check` para detectar espacios y tabulaciones  
- `git ls-files` — lista completa de archivos rastreados  
- `git verify-commit` y `git verify-tag` para firmas  
- `git fsck` — comprobación de integridad  
- `git show-ref` — referencias completas  
- `git check-ignore` — diagnóstico de exclusiones

---

### 🔟 Mejores prácticas y errores comunes
- Confirmar siempre antes de `reset --hard`  
- Evitar `git add .` sin revisión previa  
- No editar directamente archivos dentro de `.git/`  
- Usar mensajes de commit significativos (no “update” o “fix”)  
- Revisar `git diff` antes de cada commit  
- Mantener `.gitignore` actualizado  
- Comprobaciones previas antes de `push` o `merge`  
- Cómo corregir “detached HEAD” de forma segura  
- Cómo recuperar un archivo borrado accidentalmente  
- Recomendaciones para un flujo de trabajo limpio

---

**🧭 Fin del Módulo 2 – Operaciones básicas**

## 🌿 MÓDULO 3 — Ramas y estrategias de branching

**Objetivo:** dominar la creación, gestión y fusión de ramas en Git, comprendiendo a fondo cómo se representan internamente y cómo aplicar estrategias profesionales de colaboración.

---

### 1️⃣ Conceptos clave de branching
- Qué es una **rama** en Git (referencia, puntero a un commit)  
- Cómo Git crea ramas sin duplicar archivos  
- Diferencia entre `HEAD`, `branch` y `commit`  
- Ramas locales vs ramas remotas  
- Cómo Git maneja los movimientos de `HEAD`  
- Visualización de ramas con `git log --graph`  
- Buenas prácticas de nomenclatura (`feature/login`, `hotfix/payment`)  
- Cuándo crear una nueva rama y cuándo no  
- Coste real de una rama (ligereza y ventajas)

---

### 2️⃣ Creación y gestión de ramas
- Crear una rama nueva (`git branch nueva-rama`)  
- Cambiar de rama (`git checkout`, `git switch`)  
- Crear y cambiar en un solo paso (`git checkout -b`)  
- Renombrar ramas (`git branch -m nombre-nuevo`)  
- Listar ramas (`git branch`, `git branch -a`, `git branch -vv`)  
- Ver última posición de cada rama  
- Eliminar ramas locales (`git branch -d`, `git branch -D`)  
- Restaurar una rama eliminada con `reflog`  
- Comparar ramas (`git diff rama1..rama2`)  
- Rastrear ramas remotas (`git branch --set-upstream-to`)

---

### 3️⃣ Fusión (Merge)
- Qué hace realmente `git merge`  
- Tipos de merge:
  - **Fast-forward**
  - **Three-way merge**
- Simulación paso a paso del proceso de fusión  
- Resolución manual de conflictos:
  - Archivos con `<<<<<<<`, `=======`, `>>>>>>>`
  - Comandos: `git status`, `git diff`, `git merge --abort`
- Confirmar la fusión (`git commit`)  
- Fusionar varias ramas en una sola operación  
- Evitar merges automáticos accidentales  
- Estrategias de merge (`--no-ff`, `--squash`, `--commit`)  
- Visualizar merges previos (`git log --merges`)

---

### 4️⃣ Rebase y reescritura de historia
- Qué es un **rebase** y en qué se diferencia de un **merge**  
- Cuándo usar `rebase` (historia lineal, limpieza)  
- `git rebase main` paso a paso  
- Conflictos durante un rebase y su resolución  
- `git rebase --continue`, `--abort`, `--skip`  
- Rebase interactivo (`git rebase -i`)  
  - *squash*, *fixup*, *reword*, *edit*  
- Limpieza del historial antes de un push (`git push --force-with-lease`)  
- Riesgos del rebase en ramas compartidas  
- Reescritura de commits antiguos (autor, mensaje, orden)  
- Combinación `rebase + autosquash` para commits de mantenimiento

---

### 5️⃣ Cherry-pick y selección de commits
- Qué hace realmente `git cherry-pick`  
- Extraer un commit específico a otra rama  
- Cherry-pick múltiple (`git cherry-pick A B C`)  
- Resolver conflictos durante cherry-pick  
- Aplicaciones prácticas:
  - Llevar un fix urgente a producción
  - Reutilizar cambios sin mezclar historia completa  
- `git revert` vs `git cherry-pick`: diferencias conceptuales

---

### 6️⃣ Reset, Restore y Checkout (profundo)
- Cuándo usar `reset` vs `restore` vs `checkout`  
- Efectos del `reset --soft`, `--mixed`, `--hard` sobre ramas  
- Cambiar archivos entre ramas sin hacer merge (`git restore --source`)  
- Saltar temporalmente a un commit antiguo (estado *detached HEAD*)  
- Recuperar una rama perdida tras un reset  
- Diferencias entre mover `HEAD` y mover una rama

---

### 7️⃣ Flujos de trabajo con ramas (Workflows)
- **Git Flow** clásico:
  - Ramas principales (`main`, `develop`)
  - Ramas de soporte (`feature`, `release`, `hotfix`)
  - Ventajas y desventajas
- **Feature Branch Workflow**
  - Ideal para equipos distribuidos
  - Pull Requests como punto de revisión
- **Forking Workflow**
  - Trabajo en proyectos open source
  - Ramas locales y remotos distintos
- **Trunk-Based Development**
  - Integración continua y pequeñas ramas de vida corta
- Cuándo conviene cada estrategia  
- Convenciones de nombres y reglas de protección en repositorios

---

### 8️⃣ Resolución de conflictos avanzada
- Causas típicas de conflictos:
  - Cambios simultáneos en la misma línea
  - Eliminaciones o renombres de archivos
- Detectar y comprender conflictos (`git status`, `git diff`)  
- Herramientas de apoyo (`git mergetool`)  
- Configurar herramientas gráficas (VS Code, Meld, Beyond Compare)  
- Conflictos durante merge, rebase y cherry-pick  
- Marcas de conflicto (`<<<<<<< HEAD`, etc.)  
- Confirmar resolución (`git add archivo` + `git merge --continue`)  
- Cómo evitar conflictos antes de tiempo (pull frecuente, comunicación, PRs cortos)

---

### 9️⃣ Ramas remotas y sincronización
- Ramas remotas (`origin/main`, `origin/dev`)  
- Clonar repositorios con múltiples ramas (`git clone -b`)  
- `git fetch` y `git pull` con control  
- Sincronizar rama local con la remota (`git pull --rebase`)  
- Eliminar ramas remotas (`git push origin --delete`)  
- Seguir la pista de una rama remota (`--set-upstream-to`)  
- `git remote show origin` para verificar estado  
- Sincronización forzada (`git push --force-with-lease`)  
- Cómo evitar divergencias entre local y remoto  
- Estrategia segura para actualizar ramas compartidas

---

### 🔟 Limpieza, mantenimiento y visualización
- Eliminar ramas locales ya fusionadas (`git branch --merged`)  
- Comprobar ramas obsoletas (`git fetch -p`)  
- Archivar ramas inactivas  
- Visualización del grafo (`git log --graph --oneline --decorate --all`)  
- Crear alias de visualización (`git config alias.tree`)  
- Auditoría del flujo de commits entre ramas  
- Automatizar limpieza periódica de ramas  
- Buenas prácticas de mantenimiento del historial

---

### 🧩 Temas avanzados y casos especiales
- Mover commits entre ramas sin perder contexto  
- Combinar `rebase` y `cherry-pick` en flujos mixtos  
- Fusionar solo ciertos archivos de una rama (`git checkout branch -- archivo`)  
- Proteger ramas principales con hooks o políticas (`pre-push`)  
- Cómo Git resuelve referencias simbólicas  
- Git internals: cómo se representan las ramas en `.git/refs/heads`  
- Análisis del grafo de commits (`git log --graph --decorate`)  
- Estrategias para ramas experimentales o temporales

---

### 🧠 Mejores prácticas y errores comunes
- No hacer `rebase` en ramas compartidas  
- Evitar `merge` de PRs antiguos sin *update* previo  
- Nombrar las ramas de forma consistente  
- Revisar conflictos antes de hacer commit  
- Mantener la historia limpia y lineal  
- Documentar en el mensaje del merge el contexto del cambio  
- Automatizar revisiones previas con hooks  
- No borrar ramas sin verificar su merge previo  
- Usar `--force-with-lease` en lugar de `--force`

---

**🧭 Fin del Módulo 3 – Ramas y estrategias de branching**

## 🌐 MÓDULO 4 — Trabajo remoto con Git y GitHub

**Objetivo:** aprender a conectar, sincronizar y colaborar entre repositorios locales y remotos, comprendiendo la autenticación, los flujos de trabajo colaborativos y las mejores prácticas profesionales en Git y GitHub.

---

### 1️⃣ Concepto de repositorio remoto
- Qué es un **remoto** en Git y cómo se define  
- Diferencia entre repositorio local y remoto  
- Qué significa “clonar”, “origin” y “upstream”  
- Cómo Git usa los remotos en `.git/config`  
- Direcciones HTTPS vs SSH  
- Agregar un remoto (`git remote add origin <url>`)  
- Ver remotos configurados (`git remote -v`)  
- Eliminar o renombrar remotos (`git remote remove`, `rename`)  
- Buenas prácticas al trabajar con múltiples remotos

---

### 2️⃣ Clonar y conectar proyectos
- `git clone <url>` — cómo funciona internamente  
- Clonar por HTTPS y por SSH  
- Clonar una rama específica (`git clone -b <rama>`)  
- Dónde se guardan los metadatos del remoto  
- Cambiar la URL remota (`git remote set-url origin <nueva-url>`)  
- Clonar con submódulos (`--recurse-submodules`)  
- Clonar en modo “bare” (repositorios sin working directory)  
- Ejemplos de clonación desde GitHub y servidores privados

---

### 3️⃣ Sincronización entre local y remoto
- `git fetch` — descargar sin fusionar  
- `git pull` — traer y fusionar cambios  
- `git pull --rebase` — historia lineal y actualizaciones limpias  
- `git push` — enviar cambios al remoto  
- Relación entre `fetch`, `merge`, `rebase` y `push`  
- Configurar seguimiento (`--set-upstream-to`)  
- Ver ramas remotas (`git branch -r`)  
- Eliminar ramas remotas (`git push origin --delete nombre`)  
- Actualizar ramas locales eliminadas en el remoto (`git fetch -p`)  
- Ver diferencias entre local y remoto (`git fetch` + `git log HEAD..origin/main`)  
- Evitar conflictos al sincronizar proyectos compartidos

---

### 4️⃣ Autenticación en GitHub
- Diferencias entre HTTPS y SSH  
- Tokens personales (PAT) — generación, permisos y uso  
- Cómo almacenar credenciales con `git-credential-manager`  
- Flujo de autenticación SSH  
- Agregar claves SSH en GitHub  
- Prueba de conexión (`ssh -T git@github.com`)  
- Seguridad: passphrases, agentes y renovación de tokens  
- Errores comunes: `Permission denied (publickey)`, `Authentication failed`  
- Buenas prácticas para entornos multiusuario o equipos compartidos

---

### 5️⃣ Flujo profesional de trabajo remoto
- Flujo local → remoto paso a paso:
  1. Crear repositorio local  
  2. Crear repositorio remoto (GitHub)  
  3. Agregar remoto (`origin`)  
  4. Sincronizar (`fetch`, `pull`, `push`)  
- Trabajo en equipo con ramas paralelas  
- “Push rejected” y cómo solucionarlo  
- `git pull --rebase` en colaboración continua  
- Repositorios *forkeados* y upstream remotos  
- Diferencias entre `origin`, `upstream` y remotos adicionales  
- Actualizar forks (`git fetch upstream` + `merge/rebase`)  
- Estructura ideal para contribuciones abiertas (PRs)

---

### 6️⃣ Pull Requests (GitHub)
- Qué es un **Pull Request** y por qué es importante  
- Crear un PR desde una rama local  
- Revisar, comentar y aprobar cambios  
- Merge de PRs (squash, rebase, merge normal)  
- Cierre automático de issues mediante PRs (`Fixes #12`)  
- Revisión de código (code review) y buenas prácticas  
- Revisiones múltiples y revisores asignados  
- Cómo mantener actualizado un PR (`git fetch upstream`, `rebase`)  
- PRs entre forks (repositorios distintos)  
- Políticas de PR en equipos profesionales

---

### 7️⃣ Colaboración en equipos y flujos reales
- Organización de equipos en GitHub  
- Configurar permisos de lectura/escritura  
- Reglas de protección de ramas (branch protection rules)  
- Revisiones obligatorias y *status checks*  
- Etiquetado automático de revisores (`CODEOWNERS`)  
- Uso de *issues*, *projects* y *discussions*  
- Integrar GitHub con Slack o Discord para notificaciones  
- Políticas de *merge* (solo squash, solo rebase, etc.)  
- Etiquetas de versión y *releases* en GitHub  
- Estrategias para trabajo remoto distribuido

---

### 8️⃣ GitHub CLI y herramientas integradas
- Instalar **GitHub CLI (`gh`)**  
- Iniciar sesión (`gh auth login`)  
- Crear repositorios desde la terminal (`gh repo create`)  
- Clonar proyectos (`gh repo clone`)  
- Crear y gestionar PRs (`gh pr create`, `gh pr view`)  
- Gestionar issues (`gh issue create`, `gh issue list`)  
- Revisar PRs directamente desde la línea de comandos  
- Integrar CLI con Git existente  
- Automatizar tareas rutinarias con scripts `gh`

---

### 9️⃣ Seguridad y buenas prácticas de autenticación
- Rotación de claves SSH y tokens cada cierto tiempo  
- Revocación inmediata en caso de exposición  
- GitHub Security → auditoría de tokens y accesos  
- Evitar subir tokens o claves al repositorio  
- Usar `.gitignore` para archivos sensibles (`.env`, claves, config)  
- Secretos cifrados en GitHub Actions  
- Limitación de accesos mediante roles y equipos  
- Uso de 2FA y llaves físicas (YubiKey, FIDO2)  
- Análisis de seguridad con **Dependabot** y **Code Scanning**

---

### 🔟 Buenas prácticas y errores comunes
- Siempre verificar el remoto antes de hacer push  
- Mantener sincronizado `main` antes de crear ramas  
- Evitar `force push` en ramas compartidas  
- Actualizar PRs frecuentemente para evitar conflictos  
- No usar `pull` sin entender qué rama está recibiendo  
- Confirmar URLs de remotos antes de operaciones críticas  
- No compartir claves SSH entre usuarios  
- Usar `git remote -v` regularmente para inspección  
- Documentar los flujos colaborativos en README o wiki del proyecto  
- Usar *draft PRs* para trabajo en progreso

---

**🧭 Fin del Módulo 4 – Trabajo remoto con Git y GitHub**

## ⚙️ MÓDULO 5 — Herramientas y funcionalidades avanzadas de Git

**Objetivo:** dominar las herramientas internas de Git para manipular, depurar y optimizar el historial; aprender técnicas de recuperación, automatización y mantenimiento profesional de repositorios complejos.

---

### 1️⃣ Git Stash — Guardar trabajo temporalmente
- Qué es el **stash** y cuándo usarlo  
- Flujo completo: `git stash push`, `pop`, `apply`, `drop`  
- Guardar solo ciertos archivos (`git stash push <ruta>`)  
- Nombrar stashes (`git stash save "mensaje"`)  
- Ver la lista (`git stash list`)  
- Mostrar contenido de un stash (`git stash show -p`)  
- Aplicar sin eliminar (`git stash apply`)  
- Eliminar stash (`git stash drop`)  
- Recuperar un stash específico (`git stash pop stash@{2}`)  
- Limpiar todos los stashes (`git stash clear`)  
- Casos de uso profesional:
  - Cambios urgentes sin perder progreso  
  - Cambio de rama rápida sin commit  
  - Pruebas temporales o refactors parciales  
- Riesgos y buenas prácticas

---

### 2️⃣ Cherry-pick y revert — Edición selectiva del historial
- Concepto de “extraer commits” (`git cherry-pick <hash>`)  
- Reutilizar commits desde otras ramas  
- Cherry-pick múltiple (`git cherry-pick A B C`)  
- Resolución de conflictos durante cherry-pick  
- Deshacer commits con `git revert`  
- `revert` vs `reset` — cuándo usar cada uno  
- `git revert --no-commit` para revertir varios cambios en un solo commit  
- Casos reales:  
  - Aplicar un hotfix urgente  
  - Deshacer commits erróneos en producción  
- Combinar `cherry-pick` y `rebase` para curar historias complejas

---

### 3️⃣ Reflog — Registro oculto de movimientos
- Qué es el **Reflog** y su importancia  
- Cómo Git rastrea todos los movimientos de HEAD  
- Visualizar el Reflog (`git reflog`)  
- Restaurar commits perdidos tras un reset  
- Recuperar ramas eliminadas accidentalmente  
- El ciclo de expiración del Reflog (90 días por defecto)  
- Mantenimiento (`git reflog expire --expire=30.days`)  
- Reflog local vs Reflog remoto  
- Integración con herramientas gráficas (GitKraken, GitLens)

---

### 4️⃣ Bisect — Depuración binaria de errores
- Qué hace `git bisect` y cómo funciona  
- Flujo general:
  1. `git bisect start`
  2. `git bisect bad`
  3. `git bisect good <hash>`
- Git selecciona automáticamente el punto medio  
- Proceso iterativo hasta encontrar el commit problemático  
- Uso con scripts automatizados (`git bisect run npm test`)  
- Terminar la sesión (`git bisect reset`)  
- Casos reales de debugging:
  - Localizar cuándo apareció un bug  
  - Analizar cambios graduales en proyectos grandes  
- Cómo automatizar pruebas de regresión

---

### 5️⃣ Hooks — Automatización de tareas
- Qué son los **Git hooks**  
- Ubicación (`.git/hooks/`)  
- Hooks principales:
  - `pre-commit`
  - `commit-msg`
  - `pre-push`
  - `post-merge`
  - `pre-rebase`
- Activar un hook (`chmod +x .git/hooks/pre-commit`)  
- Ejemplo: validar formato de mensajes de commit  
- Ejemplo: ejecutar tests antes del push  
- Hooks de servidor (repos “bare”)  
- Integración con herramientas modernas (Husky, Lefthook, pre-commit)  
- Buenas prácticas:
  - No abusar de hooks pesados  
  - Documentar los hooks del repositorio  
  - Mantenerlos portables entre entornos

---

### 6️⃣ Submódulos y monorepos
- Qué son los **submódulos** y cuándo usarlos  
- Agregar un submódulo (`git submodule add <url> <ruta>`)  
- Inicializar y actualizar (`git submodule init`, `git submodule update`)  
- Clonar repos con submódulos (`git clone --recurse-submodules`)  
- Eliminar un submódulo correctamente  
- Diferencia entre submódulos y monorepos  
- Configurar múltiples repos dentro de un mismo proyecto  
- Buenas prácticas en equipos con submódulos  
- Herramientas alternativas (Git Subtree, Nx, Lerna)

---

### 7️⃣ Rebase interactivo y limpieza de historia
- `git rebase -i HEAD~N` — interfaz interactiva  
- Comandos:
  - `pick`, `reword`, `edit`, `squash`, `fixup`, `drop`
- Reordenar commits  
- Unificar commits pequeños en uno limpio  
- Editar mensajes antiguos  
- Cambiar autoría (`exec git commit --amend --author`)  
- Historia lineal y legible  
- Usar `autosquash` para simplificar merges (`git rebase --autosquash`)  
- Reescritura avanzada con `filter-branch` y `git replace`  
- Riesgos y precauciones al modificar historia pública

---

### 8️⃣ Optimización y mantenimiento avanzado
- Limpieza de objetos (`git prune`, `git gc`)  
- Eliminación de archivos grandes del historial  
- Borrar commits con archivos sensibles (BFG Repo-Cleaner)  
- Comprimir repositorios grandes  
- Reducir tamaño de clones (`--depth`, `--filter=blob:none`)  
- Diagnóstico de rendimiento (`git count-objects -vH`)  
- Reparación de repos dañados (`git fsck`, `git gc --prune=now`)  
- Mover repos grandes a Git LFS  
- Limpieza de ramas inactivas  
- Políticas de backup y snapshot de repositorios críticos

---

### 9️⃣ Git Internals — Anatomía profunda
- Objetos y almacenamiento:
  - `git cat-file`, `git rev-list`, `git verify-pack`
- Cómo Git guarda blobs, árboles y commits  
- Estructura de un commit en texto plano  
- Packfiles y delta compression  
- Referencias (`refs/`, `HEAD`, `FETCH_HEAD`, `MERGE_HEAD`)  
- Base de datos de Git (`.git/objects`)  
- Funcionamiento del *index*  
- Cómo Git detecta cambios (hash de contenido, no timestamps)  
- Inspección manual de objetos SHA  
- Construcción manual de un commit desde cero (experimento interno)

---

### 🔟 Integración con herramientas externas
- Integración con IDEs (VS Code, IntelliJ, JetBrains Fleet)  
- Integración con terminales inteligentes (Git Bash, PowerShell, Zsh)  
- Git y Docker: manejo de repos dentro de contenedores  
- Git y CI/CD (GitHub Actions, Jenkins, GitLab CI)  
- Visualizadores de historial (GitLens, GitKraken, SourceTree)  
- Scripts personalizados (`.git/hooks`, shell scripting, npm scripts)  
- Automatización de versiones (`npm version`, `semantic-release`)  
- Exportación a otros sistemas (SVN bridge, Perforce import)

---

### 🧠 Buenas prácticas y errores comunes
- No abusar de `--force` en pushes  
- No hacer `rebase` sobre ramas públicas  
- Documentar commits significativos con *tags*  
- Mantener el historial legible  
- Realizar limpieza periódica de stashes y ramas  
- Validar integridad del repo antes de releases (`git fsck`)  
- No mezclar submódulos y monorepos sin control  
- Usar hooks livianos, auditables y compartidos  
- Hacer backup del `.git/` antes de tareas destructivas  
- Educar al equipo sobre comandos potencialmente peligrosos

---

**🧭 Fin del Módulo 5 – Herramientas y funcionalidades avanzadas de Git**

¡Absolutamente\! Aquí tienes el contenido que proporcionaste convertido a un **formato Markdown limpio y correcto**, listo para usar:


## 🧭 MÓDULO 6 — GitHub Profesional

**Objetivo:** dominar las herramientas y funciones avanzadas de GitHub, incluyendo **colaboración**, **automatización**, **seguridad**, despliegue con **Pages** y gestión profesional de proyectos.

-----

### 1️⃣ Introducción a GitHub profesional

  * Qué es **GitHub** en el ecosistema Git
  * Diferencias entre **Git** y **GitHub**
  * Estructura de un repositorio GitHub (código, PRs, issues, wiki, actions)
  * Planes gratuitos vs de organización
  * Qué significa “repositorio público” vs “privado”
  * Flujo profesional típico:
    1.  Clonar el repositorio
    2.  Crear una rama
    3.  Realizar commits
    4.  Abrir Pull Request
    5.  Revisar, aprobar y fusionar
    6.  Desplegar
  * Configuración del perfil profesional (`README.md`, bio, enlaces)
  * GitHub en entornos empresariales (Teams / Enterprise)

-----

### 2️⃣ Pull Requests (profundización)

  * Crear PRs desde ramas o forks
  * Títulos, descripciones y convenciones semánticas
  * Revisión de código colaborativa
  * Cambios solicitados y resolución de revisiones
  * **Draft Pull Requests** (borradores)
  * Tipos de merge al cerrar un PR:
      * **Merge commit**
      * **Squash merge**
      * **Rebase merge**
  * Sincronización de ramas durante revisiones (`git fetch`, `git rebase`)
  * Automatizar PRs con **GitHub Actions**
  * Políticas de aprobación y reglas de protección
  * Cierre automático de issues con PRs (`Fixes #123`)
  * Revisar y aprobar PRs desde la terminal (`gh pr review`)
  * Ejemplo de flujo corporativo completo con revisión por pares

-----

### 3️⃣ GitHub Actions — Automatización y CI/CD

  * Qué son las **GitHub Actions** y cómo funcionan
  * Directorio `.github/workflows/`
  * Archivos YAML y estructura básica de un workflow:
    ```yaml
    name: CI
    on: [push, pull_request]
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - name: Ejecutar tests
            run: npm test
    ```
  * Eventos que pueden disparar acciones: `push`, `pull_request`, `issue_comment`, `schedule`, `workflow_dispatch`
  * Variables de entorno y secretos: `${{ secrets.TOKEN }}`, `${{ github.actor }}`, `${{ github.ref }}`
  * Ejemplos prácticos:
      * Automatizar tests unitarios
      * Ejecutar linters y formateo automático
      * Desplegar proyectos a GitHub Pages o Vercel
      * Enviar notificaciones a Slack o Discord
  * Buenas prácticas:
      * Fijar versiones (`uses: actions/checkout@v4`)
      * Evitar `@master` o referencias dinámicas
      * No exponer secretos en los logs
  * Auditoría:
      * Revisar registros en la pestaña **Actions → Workflow runs**
      * Re-ejecutar workflows fallidos
      * Analizar tiempos de ejecución y consumo de *runners*

-----

### 4️⃣ GitHub Pages — Despliegue estático profesional

  * Qué es **GitHub Pages** y cómo funciona
  * Tipos de despliegue:
      * Desde rama `main` o carpeta `/docs`
      * Desde carpeta `/build` o `/dist`
  * Activar Pages en un repositorio
  * Configurar dominio personalizado (`CNAME`)
  * HTTPS automático con certificados integrados
  * Configurar `404.html` y rutas limpias
  * Diferencias entre:
      * Repositorios de usuario (`usuario.github.io`)
      * Repositorios de proyecto (`usuario.github.io/proyecto`)
  * Desplegar manualmente:
    ```bash
    git subtree push --prefix dist origin gh-pages
    ```
  * Integrar Pages con **GitHub Actions** (deploy automatizado)
  * Estrategias para **SPAs** y *frameworks* modernos
  * Medidas de seguridad y optimización (caché, minificación, CSP)

-----

### 5️⃣ Issues, Projects y gestión de tareas

  * Qué es un **Issue** y su propósito
  * Crear, asignar y etiquetar *issues*
  * Plantillas personalizadas (`.github/ISSUE_TEMPLATE/`)
  * Enlazar *commits* o PRs a *issues*
  * Boards de **Projects** (Kanban, automatizados, *timeline*)
  * Seguimiento de progreso con *milestones*
  * Uso de *labels* personalizados
  * Automatizar el cierre o movimiento de tareas con **Actions**
  * Menciones y discusiones internas (`@usuario`, `#issue`)
  * Buenas prácticas de comunicación y colaboración

-----

### 6️⃣ Seguridad en GitHub

  * Revisar dependencias con **Dependabot**
  * Alertas y *advisories* de seguridad
  * Escaneo de código automático (**CodeQL**)
  * Configurar **Branch Protection Rules**
  * Revisiones obligatorias antes del *merge*
  * Control de accesos por roles (Admin, Maintainer, Contributor)
  * Autenticación en dos pasos (**2FA**)
  * Administración de **Deploy Keys** y **Secrets**
  * Auditoría de accesos y *tokens* personales
  * Firmas de *commits* y verificación de autoría (**Verified**)
  * Eliminación segura de datos sensibles (**BFG**, `git-filter-repo`)
  * Políticas de seguridad en repositorios públicos y privados

-----

### 7️⃣ Wikis y documentación técnica

  * Activar y estructurar el **Wiki** integrado
  * Crear páginas y enlaces internos (`[[Página]]`)
  * Markdown extendido (tablas, listas, imágenes)
  * Versionado del Wiki con **Git**
  * Clonar el Wiki como repositorio independiente
  * Casos de uso:
      * Documentación de APIs
      * Guías de instalación y configuración
      * Manuales internos o historias de usuario
  * Integrar Wiki e Issues mediante referencias cruzadas
  * Exportar *wikis* a PDF o Markdown
  * Buenas prácticas de documentación técnica

-----

### 8️⃣ GitHub Codespaces y desarrollo en la nube

  * Qué son los **Codespaces**
  * Requisitos y planes disponibles
  * Configuración mediante `.devcontainer.json`
  * Personalizar el entorno de desarrollo remoto (VS Code Cloud)
  * Ejecutar comandos, pruebas y *commits* en la nube
  * Ventajas frente a entornos locales (velocidad, portabilidad)
  * Integración directa con **GitHub Actions**
  * Guardar configuraciones persistentes
  * Costos, límites y facturación
  * Alternativas: **GitPod**, **Replit**, **StackBlitz**

-----

### 9️⃣ Integraciones externas y APIs

  * Integrar GitHub con herramientas externas: Slack, Discord, Trello, Jira, etc.
  * **Webhooks** (`Settings → Webhooks`):
      * Eventos y *payloads* JSON
      * Validación de firmas y seguridad
  * Uso de la **GitHub REST API v3** y **GraphQL API v4**
  * Autenticación con **Tokens personales (PAT)**
  * Crear *bots* automatizados con Node.js o Python
  * Analizar repositorios y generar reportes de contribución
  * Integrar GitHub con sistemas CI externos (Jenkins, Travis, GitLab CI)

-----

### 🔟 Buenas prácticas y errores comunes

  * Mantener ramas principales **protegidas** (`main`, `dev`)
  * Revisar configuraciones antes de hacer público un repo
  * Evitar subir contraseñas o *tokens* al código
  * No forzar *merges* en PRs rechazados
  * Revisar *logs* de **Actions** antes de *merges*
  * Mantener **README** y **Wiki** siempre actualizados
  * Organizar *issues* desde el inicio con etiquetas
  * Validar versiones fijas en **Actions** (`@v4`)
  * Usar equipos y permisos granulares
  * Revisar la pestaña **Security** periódicamente
  * Archivar repositorios inactivos correctamente

-----
¡Con gusto\! Aquí tienes el **Módulo 7** convertido a un formato Markdown claro y estructurado, incluyendo la separación del módulo anterior:

-----

**🧭 Fin del Módulo 6 – GitHub Profesional**

-----

## 🚀 MÓDULO 7 — Casos reales y flujos avanzados de Git y GitHub

**Objetivo:** aplicar **Git** y **GitHub** en escenarios del mundo real, dominar flujos colaborativos profesionales, estrategias de rescate de errores y metodologías de integración continua reales.

-----

### 1️⃣ Flujo de trabajo profesional completo (*end-to-end*)

  * Creación de un repositorio profesional desde cero
  * Estructura recomendada de carpetas y archivos
  * Configuración de `.gitignore`, `.gitattributes` y `README.md`
  * Flujo de trabajo recomendado:
    1.  Crear rama `develop` desde `main`
    2.  Crear ramas de características (`feature/...`)
    3.  Hacer *commits* pequeños y claros
    4.  Fusionar con **Pull Request**
    5.  Realizar revisiones y *merges* controlados
    6.  Desplegar con **GitHub Actions**
  * Uso de **alias** personalizados para flujo rápido (`git s`, `git lg`, `git undo`)
  * Ejemplo: flujo completo de desarrollo hasta producción

-----

### 2️⃣ Estrategias de ramas en equipos grandes

  * Diferencias entre **Git Flow**, **GitHub Flow** y **Trunk-Based Development**
  * Cuándo usar ramas largas vs ramas cortas
  * Mantenimiento de ramas estables (`release/`, `hotfix/`)
  * Versionado semántico (v1.0.0 → v1.1.0 → v2.0.0)
  * Estrategias híbridas para equipos pequeños
  * Ejemplo práctico:
      * Rama `develop` → preproducción
      * Rama `main` → producción
      * Hotfix → parches urgentes directamente desde producción
  * Automatizar *merges* entre ramas estables con Actions

-----

### 3️⃣ Integración Continua y Entrega Continua (CI/CD)

  * Principios de **CI/CD** aplicados a GitHub
  * Ejecutar *tests* automáticos en cada *commit* (`npm test`, `pytest`)
  * Linter y formateo automático con Actions
  * Revisión automatizada de dependencias (Dependabot)
  * Despliegues automáticos:
      * GitHub Pages
      * Vercel / Netlify
      * VPS o servidor privado (SSH deploy)
  * Reglas de *branch protection* en flujos CI/CD
  * Uso de **entornos** (`staging`, `production`)
  * Control de versiones y *changelogs* automáticos
  * Ejemplo YAML de *pipeline* CI/CD completo

-----

### 4️⃣ Mantenimiento de proyectos a largo plazo

  * Cómo limpiar ramas antiguas y *commits* redundantes
  * Consolidar el historial (`git rebase -i`, `git filter-repo`)
  * Estrategias de respaldo (`git bundle`, *snapshots* automáticos)
  * Monitorear actividad y contribuciones (`git shortlog`, `git log --stat`)
  * Archivar repositorios inactivos
  * Versionado semántico y *releases* etiquetadas
  * Uso de *release notes* automatizadas
  * Auditoría de código y dependencias cada trimestre
  * Herramientas útiles: GitLens, GitHub Insights, CodeClimate

-----

### 5️⃣ Resolución de conflictos complejos

  * Tipos de conflictos:
      * Merge (contenido)
      * Rebase (reordenamiento)
      * Cherry-pick (duplicados)
  * Diagnóstico con `git diff`, `git mergetool`, `git log --merge`
  * Estrategias paso a paso para resolver conflictos
  * Uso de herramientas gráficas (**VS Code Merge Editor**)
  * Cómo abortar un *merge* o *rebase* sin perder progreso
  * Comprobación *post-merge* (`git status`, `git diff --check`)
  * Documentar la resolución en los mensajes de *commit*
  * Prevenir conflictos mediante comunicación y PRs pequeños

-----

### 6️⃣ Recuperación de errores críticos

  * Recuperar *commits* perdidos (`git reflog`, `git cherry-pick`)
  * Restaurar archivos borrados (`git restore`, `git checkout`)
  * Recuperar ramas eliminadas accidentalmente (`git reflog branch`)
  * Revertir *pushes* erróneos (`git push --force-with-lease`)
  * Reconstruir un repositorio dañado (`git fsck`, `git gc`, `git clone --mirror`)
  * Deshacer *merges* grandes (`git revert -m 1`)
  * Estrategia “plan de emergencia”:
    1.  Crear *backup* del `.git/`
    2.  Clonar espejo (`--bare`)
    3.  Analizar *reflog*
    4.  Restaurar *commit* exacto
  * Casos reales de recuperación en producción

-----

### 7️⃣ Repositorios grandes y optimización

  * Problemas comunes en *repos* con miles de *commits* o archivos
  * Técnicas de optimización:
      * `git gc`, `git repack`, `git prune`
      * `git clone --depth=1`
      * `git filter-repo` para limpiar peso histórico
  * Migrar *repos* pesados a **Git LFS** (Large File Storage)
  * Buenas prácticas de estructura (subcarpetas, modularización)
  * Ejemplo de limpieza y reducción de tamaño paso a paso
  * Evitar *commits* con archivos binarios
  * Automatizar limpieza semanal con *scripts* o *cron jobs*
  * Monitorear tamaño de objetos (`git count-objects -vH`)

-----

### 8️⃣ Casos reales de flujos corporativos

  * **Caso 1:** Empresa con ramas protegidas y CI obligatorio
  * **Caso 2:** Open Source con *Forking Workflow* y PRs externos
  * **Caso 3:** *Startups* con integración continua y *deploy* automático
  * **Caso 4:** Repositorio monolítico con **submódulos** compartidos
  * **Caso 5:** Migración de **SVN / Mercurial** a Git
  * **Caso 6:** Auditoría interna y *code ownership* (`CODEOWNERS`)
  * **Caso 7:** Proyecto educativo con ramas temporales de alumno
  * Para cada caso:
      * Descripción del contexto
      * Problema principal
      * Solución técnica aplicable
      * Riesgos y medidas preventivas

-----

### 9️⃣ Automatización y flujos personalizados

  * Crear *scripts* Shell o Node.js para tareas repetitivas
  * Automatizar versionado (`npm version`, `semantic-release`)
  * Integrar *bots* de mantenimiento (renovación de dependencias, etiquetado)
  * **Hooks** corporativos (`pre-commit`, `pre-push`, `post-merge`)
  * Uso de `gh api` para *scripts* avanzados
  * Publicar *releases* automáticas en GitHub
  * Desplegar automáticamente en producción tras PR aprobado
  * Ejemplo práctico:
    ```bash
    # Script de actualización automática
    git pull origin main
    npm install
    npm run build
    git add .
    git commit -m "chore: actualización automatizada"
    git push origin main
    ```

-----

### 🔟 Buenas prácticas avanzadas

  * Mantener ramas activas **sincronizadas** diariamente
  * Hacer *rebase* interactivo antes de fusionar
  * Comentar *commits* críticos y *merges* complejos
  * Etiquetar cada *release* con versión y fecha
  * Usar PR *templates* y *commit templates*
  * Evitar mezclar *commits* de configuración con código
  * Proteger `main` contra *pushes* directos
  * Aplicar revisiones de seguridad cada trimestre
  * Fomentar revisiones por pares y documentación
  * Automatizar reportes de actividad con *scripts* o *bots*

-----

**🧭 Fin del Módulo 7 – Casos reales y flujos avanzados de Git y GitHub**

-----
