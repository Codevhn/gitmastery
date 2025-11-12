## 🧩 Resolución de Conflicto Remoto — Rama `test`

**Contexto:**
El remoto (`origin/test`) presentaba commits dañados o desactualizados generados por Codex, mientras que la copia local contenía el código más reciente y estable. Se decidió **forzar la sincronización remota desde la versión local** para restablecer una línea de desarrollo limpia.

-----

### 🧱 1. Cancelar el rebase en curso

Se detiene el proceso de `git pull --rebase` para restaurar el estado local previo.

```bash
git rebase --abort
```

> 💡 Esto revierte el intento de rebase y devuelve la rama local al punto anterior al conflicto.

-----

### ⚙️ 2. Verificar estado actual

```bash
git status
```

**Ejemplo de salida esperada:**

```
On branch test
Your branch is ahead of 'origin/test' by 3 commits.
```

> ✅ Esto confirma que los commits locales son más recientes que los del remoto.

-----

### 🧩 3. Crear un commit de respaldo (opcional pero recomendado)

Antes de cualquier acción forzada, se crea un *snapshot* del estado actual:

```bash
git add .
git commit -m "backup: estado estable local antes de sincronización forzada"
```

> 💡 Permite tener un punto de recuperación en el historial local por si se requiere volver atrás.

-----

### 🚀 4. Forzar sincronización con el remoto

Dado que la **rama local es la fuente de verdad**, se actualiza el remoto utilizando `--force-with-lease` — una variante segura del clásico `--force`.

```bash
git push --force-with-lease origin test
```

> 📦 Esto **reemplaza el historial de `origin/test` con la versión actual local**.
> El *flag* `--with-lease` impide sobreescribir si el remoto cambió desde el último *fetch*, aumentando la seguridad.

-----

### 🧾 5. Comprobaciones posteriores

Verificar que todo quedó sincronizado correctamente:

```bash
git status
```

**Salida esperada:**

```
Your branch is up to date with 'origin/test'.
```

Visualizar los últimos commits:

```bash
git log --oneline --graph --decorate -5
```

> 🧠 Permite confirmar que el remoto refleja exactamente el estado local actual.

-----

### 🧭 Resultado final

  * `origin/test` fue **actualizado exitosamente**.
  * Los conflictos originados por commits remotos corruptos se eliminaron.
  * El **historial quedó limpio y lineal**.
  * La versión local de Codev se establece como referencia principal del proyecto.

-----

### 📚 Lección Aprendida

  * **Git nunca rompe nada sin avisar.** Si existe un conflicto o rechazo de *push*, siempre hay una razón legítima: Git protege la historia remota para evitar sobrescrituras accidentales.

  * **`--force-with-lease` es el escudo del desarrollador responsable.** Permite forzar un *push* sin riesgo de destruir *commits* ajenos, manteniendo control total.

  * **Evita usar `git pull` sin entender su comportamiento.** Siempre que trabajes solo o con bots, usa `git pull --rebase` o simplemente `git fetch` seguido de una revisión manual.

  * **Mantén el control del flujo.** Si un sistema automatizado (como Codex) hace *commits* incorrectos, tu rama local debe seguir siendo la **fuente de verdad**.

  * **Documentar las acciones y justificar el uso de *force push* protege la trazabilidad del proyecto.**

  * **Registra cada recuperación como lección técnica.** Estas incidencias enseñan a mantener disciplina, visibilidad y control en el ciclo de versionado.

-----

**Commit asociado:**

```bash
fix: sincronización forzada de rama test — limpieza de commits remotos dañados
```