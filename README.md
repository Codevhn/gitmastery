# 🧠 GitMastery — Guía Interactiva de Git y GitHub Profesional

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub_Pages-2ea44f)](https://pages.github.com/)

**Tipo:** Sitio web interactivo de documentación técnica (SPA ligera)  
**Tecnologías:** HTML5 + CSS3 + JavaScript (ES Modules)  
**Propósito:** Aprendizaje y documentación integral de Git y GitHub con navegación fluida y moderna

> *"Controlar Git no es aprender comandos, sino dominar el flujo mental de un desarrollador que piensa en versiones, historia y colaboración."*

---

## 📖 Descripción

**GitMastery** es una guía técnica completa e interactiva sobre Git y GitHub, diseñada con un enfoque profesional y moderno. El sitio utiliza una arquitectura **Single Page Application (SPA)** ligera que proporciona una experiencia de lectura fluida sin recargas de página, con transiciones suaves y un diseño visual inspirado en el estilo *glass* de Windows 7 modernizado.

El contenido está estructurado en bloques temáticos organizados, con navegación contextual y persistencia de progreso de lectura.

---

## ✨ Características Principales

### 🎯 Experiencia de Usuario
- **Navegación SPA**: Carga dinámica de contenido sin recargar la página
- **Tres paneles fijos**: Sidebar izquierdo (temas), panel central (contenido), sidebar derecho (subtemas)
- **Transiciones suaves**: Animaciones fade + slide de 200-300ms
- **Persistencia de estado**: Guarda tu progreso de lectura con `localStorage`
- **Navegación contextual**: Botones "Anterior/Siguiente" basados en la estructura del tema

### 🎨 Diseño Visual
- **Tema Windows 7 Glass Moderno**: Backdrops translúcidos con blur sutil
- **Paleta oscura profesional**: Fondo azul oscuro (#0b0f14) con acentos azules brillantes (#6ab4ff)
- **Tipografía optimizada**: Poppins/Inter para texto, JetBrains Mono/Fira Code para código
- **Accesibilidad**: Contraste mínimo 4.5:1, foco visible, navegación por teclado

### 📱 Responsive Design
- **Desktop**: Tres paneles visibles simultáneamente
- **Tablet/Móvil**: Sidebars colapsables en menús laterales deslizantes
- **Touch-friendly**: Scroll horizontal táctil con scroll-snap en móviles

---

## 🏗️ Estructura del Proyecto

```
gitmastery/
├── index.html                 # Punto de entrada principal
├── package.json               # Dependencias y scripts npm
├── README.md                  # Documentación del proyecto
├── .gitignore                 # Archivos ignorados por Git
│
├── assets/                    # Recursos estáticos
│   ├── css/
│   │   ├── base.css          # Estilos base y tokens CSS
│   │   ├── layout.css        # Layout grid/flex
│   │   └── theme.css         # Tema visual glass
│   ├── js/
│   │   ├── app.js            # Lógica principal de la aplicación
│   │   ├── router.js         # Router SPA basado en hash
│   │   └── data.js           # Datos y configuración de temas
│   └── images/                # Recursos gráficos
│
├── content/                   # Fragmentos de contenido HTML
│   ├── fundamentals/         # Fundamentos de Git
│   ├── branching/            # Ramas y flujos
│   ├── remote/               # Trabajo remoto
│   ├── advanced/             # Herramientas avanzadas
│   ├── github/               # GitHub Profesional
│   └── ssh/                  # SSH con Git
│
└── docs/                      # Documentación interna
    ├── GitMastery_requerimientos.md
    ├── GitMastery_mapa_maestro_de_temas_git_github.md
    └── referencias/
```

---

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js LTS (v18 o superior recomendado)
- npm o yarn
- Git

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/CodevHN/GitMastery.git
   cd GitMastery
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```
   Esto iniciará `live-server` y abrirá automáticamente el navegador en `http://localhost:8080`

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con live-reload |
| `npm test` | Ejecuta tests (pendiente de implementación) |

---

## 📚 Mapa de Contenidos

El curso está organizado en **8 módulos principales**:

### 1. 🧩 Fundamentos de Git
- Introducción a Git
- Instalación y configuración
- Primer repositorio

### 2. 📝 Operaciones Básicas
- Ciclo de vida de archivos
- Comandos esenciales
- Historial y navegación

### 3. 🌿 Ramas y Flujos
- Conceptos de branching
- Merge y rebase
- Workflows reales

### 4. 🌐 Trabajo Remoto
- Repositorios remotos
- Autenticación (HTTPS / SSH)
- Sincronización

### 5. 🔐 SSH con Git (Tema Maestro)
- Introducción a SSH
- Generar claves
- Configurar agente SSH
- Múltiples cuentas
- Revocación y errores comunes
- Checklist de verificación

### 6. ⚙️ Herramientas Avanzadas
- Stash
- Cherry-pick
- Reflog
- Bisect
- Hooks

### 7. 💼 GitHub Profesional
- Pull Requests
- GitHub Actions (CI/CD)
- GitHub Pages
- Seguridad y políticas

### 8. 🧰 Casos Reales
- Resolución de conflictos
- Migraciones
- Mantenimiento de repositorios

---

## 🛠️ Arquitectura Técnica

### Router SPA Ligero
- Implementado con **hash routing** (`#/tema/subtema`)
- Carga dinámica de fragmentos HTML con `fetch()`
- Gestión de historial del navegador
- Actualización automática de sidebars

### Sistema de Temas CSS
```css
:root {
  --bg: #0b0f14;              /* Fondo general */
  --fg: #e7ecf2;              /* Texto principal */
  --fg-muted: #b8c3cf;        /* Texto secundario */
  --accent: #6ab4ff;          /* Azul brillante glow */
  --glass: rgba(255,255,255,.12); /* Capa translúcida */
  --radius: 16px;             /* Radio de bordes */
}
```

### Componentes Principales

1. **Sidebar Izquierdo**: Navegación global de temas principales
2. **Panel Central**: Contenido dinámico con transiciones
3. **Sidebar Derecho**: Subtemas contextuales del tema activo
4. **Header**: Branding y navegación anterior/siguiente
5. **Router**: Gestiona carga de contenido y estado

---

## 📋 Estándares de Commits

Este proyecto sigue la convención **Conventional Commits**:

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `feat:` | Nueva funcionalidad | `feat: agregar router SPA` |
| `fix:` | Corrección de errores | `fix: corregir navegación móvil` |
| `style:` | Cambios visuales/CSS | `style: ajustar paleta de colores` |
| `docs:` | Documentación | `docs: actualizar README` |
| `refactor:` | Refactorización de código | `refactor: modularizar componentes` |
| `chore:` | Mantenimiento general | `chore: actualizar dependencias` |

---

## 🔮 Roadmap

### ✅ Completado
- [x] Estructura base del proyecto
- [x] Configuración inicial de HTML y CSS
- [x] Definición de requerimientos y mapa de contenidos
- [x] Sistema de diseño glass theme

### 🚧 En Progreso
- [ ] Implementación del router SPA
- [ ] Creación de contenido del módulo SSH
- [ ] Sistema de navegación entre bloques

### 📅 Pendiente
- [ ] Conversión automática de Markdown a HTML
- [ ] Buscador interno de comandos Git
- [ ] Exportación a PDF
- [ ] Progreso de aprendizaje con checklist visual
- [ ] Soporte multi-idioma

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

Por favor, asegúrate de seguir los estándares de commits y mantener la coherencia con el diseño establecido.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT** - ver el archivo [LICENSE](LICENSE) para detalles.

El contenido educativo puede estar sujeto a licencias adicionales (CC BY-NC-SA 4.0 recomendado).

---

## 👨‍💻 Autor

**Francisco Vasquez (CodevHN / FraDev)**  
- GitHub: [@CodevHN](https://github.com/CodevHN)
- Email: codevhn@gmail.com

---

## 🙏 Agradecimientos

- A la comunidad open source por mantener vivo el espíritu de colaboración
- A todos los desarrolladores que contribuyen diariamente a hacer la ingeniería de software más accesible
- Al lector, por embarcarse en este viaje de aprendizaje

> *"El verdadero dominio comienza cuando ya no necesitas mirar la guía."*

---

## 📬 Contacto

Para preguntas, sugerencias o colaboraciones:
- Issues de GitHub: [Crear nuevo issue](https://github.com/CodevHN/GitMastery/issues)
- Email: codevhn@gmail.com

---

<div align="center">

**🧩 Fin absoluto de GitMastery — La Guía Definitiva de Git y GitHub**

*"El commit perfecto no es el más extenso, sino el que cuenta la historia justa y precisa de un cambio irreversible hacia algo mejor."*

</div>
