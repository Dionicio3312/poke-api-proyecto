# 🔥 Práctica - Consumo y Optimización de la PokéAPI

> Proyecto realizado con Node.js para aprender a consumir, filtrar, paginar y optimizar datos de una API externa (PokéAPI).  
> Además se integraron conceptos de desarrollo ágil (Scrum), documentación de APIs y CI/CD.

---

## 📌 Objetivos del Proyecto

✅ Consumir datos desde la PokéAPI  
✅ Implementar paginación y filtros por tipo  
✅ Optimizar llamadas con cache en memoria  
✅ Estructurar código por módulos (MVC)  
✅ Documentar endpoints con Postman  
✅ Simular flujo Scrum (Kanban, roles, tareas)  
✅ Introducción a CI/CD con GitHub Actions  

---

## 🧠 Tecnologías usadas

- Node.js
- Express
- Axios
- Postman
- Git & GitHub
- GitHub Actions (para CI)
- JavaScript (ES6+)
- Visual Studio Code

---

## 🚀 Instalación del Proyecto

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
npm install
npm run dev
⚠️ Asegúrate de tener Node.js y npm instalados

🔗 Endpoints principales
GET /api/pokemons?page=1&type=fire
Obtiene una lista de 10 pokemones desde PokéAPI con soporte para paginación y filtro por tipo.

Parámetros
Parámetro	Tipo	Descripción
page	Number	Número de página (opcional)
type	String	Tipo de Pokémon (opcional)
Respuesta esperada
json
Copiar
Editar
[
  {
    "id": 4,
    "name": "charmander",
    "types": ["fire"],
    "image": "https://raw.githubusercontent.com/..."
  },
  ...
]
⚙️ Estructura del proyecto
go
Copiar
Editar
.
├── controllers/
│   └── pokemonController.js
├── routes/
│   └── pokemonRoutes.js
├── services/
│   └── getPokemonList.js
├── cache/
│   └── memoryCache.js
├── app.js
├── package.json
└── README.md
📄 Documentación en Postman
Se creó una colección llamada Pokémon API Local en Postman con ejemplos y descripciones detalladas.
Puedes importar el archivo Pokemon_API.postman_collection.json o ver la versión web:

🔗 Ver Documentación Pública en Postman

🧪 CI/CD - GitHub Actions
Incluye flujo simple de CI que corre en cada push:

Validación de formato con ESlint

Tests simulados con Jest

yaml
Copiar
Editar
# .github/workflows/nodejs.yml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run lint
      - run: npm test
👥 Simulación de Scrum
Se creó tablero Kanban en Trello con tareas por columnas: To Do, In Progress, Done.

Se definieron roles temporales: Scrum Master, Developer.

Las tareas se redactaron como historias de usuario:

"Como usuario, quiero ver 10 pokemones por página..."
