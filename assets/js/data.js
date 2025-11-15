
export const NAV = {
  defaultRoute: '#/fundamentals/intro',
  
  
  modules: [  
    {
      id: 'fundamentals', 
      title: 'Fundamentos de Git', 
      icon: '<icon>',
    Description: 'Comprender la filosofía, la arquitectura interna y el modelo mental de Git antes de usarlo profesionalmente.',

    // Subtemas principales (panel central)

    sections:[
      { id: 'intro', title: 'Introducción general'},
      { id: 'vcs-problem', title: 'El problema que resolvió Git'},
      { id: 'git-architecture', title: 'Arquitectura de Git'},
      { id: 'snapshots', title: 'Snapshots vs deltas'},
      { id: 'architecture', title: 'Arquitectura interna de Git'},
      { id: 'objects', title: 'Objetos Git: blob, tree, commit, tag'},
      { id: 'hashing', title: 'SHA-1, SHA-256 y hashing de contenido'},
      { id: 'config', title: 'Instalación y configuración inicial'},
      { id: 'identity', title: 'Identidad, editor y archivo .gitconfig'},
      { id: 'first-repo', title: 'Primer repositorio local'},
      { id: 'staging-area', title: 'Working Directory, Staging Area y Repository'},
      { id: 'commit-anatomy', title: 'Anatomía de un commit'},
      { id: 'status-flow', title: 'Cómo Git detecta cambios internamente'},
    ],
    
    // Temas complementarios (sidebar derecho)
    extras:[
      // Extras globales (siempre visibles dentro del módulo)
      { id: 'common-errors', 
        title: 'Errores comunes al iniciar con Git',
        src: '/content/fundamentals/common-errors.html',
        badge: '⚠️'
      },
      {
        id: 'best-practices',
        title: 'Buenas prácticas del día 1',
        src: '/content/fundamentals/best-practices.html',
        badge: '✅'
      },
      
      // Extras vinculados a una sección específica (for = id del subtema)
      {
        id: 'sha-deep-dive',
        for: 'hashing',
        title: 'Comparación técnica: SHA-1 vs SHA-256',
        src: '/content/fundamentals/sha-deep-dive.html',
      },
      {
        id: 'cat-file-lab',
        for: 'objects',
        title: 'Laboratorio: inspeccionando objetos con git cat-file',
        src: '/content/fundamentals/cat-file-lab.html',
      },
      {
        if: 'init-anatomy',
        for: 'first-repo',
        title: 'Qué crea EXACTAMENTE git init (estructura interna)',
        src: '/content/fundamentals/init-anatomy.html'
      },
      {
        id: 'commit-lab',
        for: 'commit-anatomy',
        title: 'Laboratorio: creando commits manuales',
        src: '/content/fundamentals/commit-lab.html'
      }
    ]
  },
  {
    id: 'basics',
    title: 'Operaciones básicas de Git',
    icon: '📂',
    Description: 'Dominar el ciclo de vida de los archivos, los comandos fundamentales y la manipulación del historial',

    sections:[
      {id:'file-lifecycle', title: 'Ciclo de vida de un archivo en Git'},
      {id:'status', title: 'Estados: untracked, modified, staged, committed'},
      {id:'diffs', title: 'Comparar cambios con git diff'},
      {id: 'show', title: 'Inspeccionar cambios con git show'},
      {id: 'log', title: 'Explorar historial con git log'},
      {id: 'add', title: 'git add: índice y modos de adición'},
      {id: 'commit', title: 'git commit: mensajes efectivos, amend y atomicidad'},
      {id: 'restore', title: 'Deshacer cambios con git restore'},
      {id: 'rm-mv', title: 'Eliminar y renombrar archivos (git rm, git mv)'},
      {id: 'tags', title: 'Etiquetas: versiones ligeras y anotadas'},
      {id: 'blame', title: 'git blame: autoría y auditoría de líneas'},
      {id: 'shortlog', title: 'Resumen por autor con git shortlog'},
      {id: 'describe', title: 'git describe: identificadores legibles'},
      {id: 'file-history', title: 'Historial de un archivo específico'}  
    ],

    extras: [
      {
        id: 'index-deep-dive',
        for: 'add',
        title: 'Cómo funciona internamente la Staging Area',
        src: '/content/basics/index-deep-dive.html'
      },
      {
        id: 'diff-mode-lab',
        for: 'diffs',
        title: 'Laboratorio: word-diff, color-words y modos avanzados',
        src: '/content/basics/diff-mode-lab.html'
      },
      {
        id: 'log-filters',
        for: 'log',
        title: 'Guía avanzada de filtros con git log',
        src: '/content/basics/log-filters.html'
      },
      {
        id: 'undo-cheatsheet',
        for: 'restore',
        title: 'Cheat Sheet: undo seguro',
        src: '/content/basics/undo-cheatsheet.html',
        badge: '🛑'
      },
      {
        id: 'tag-usage',
        for: 'tags',
        title: 'Buenas prácticas de etiquetado semántico',
        src: '/content/basics/tag-usage.html'
      },
      {
        id: 'blame-ethics',
        for: 'blame',
        title: 'Ética del uso de git blame en equipos',
        src: '/content/basics/blame-ethics.html'
      }
    ]
  },  
]

}