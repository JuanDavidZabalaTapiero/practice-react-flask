# 🌐 App práctica [Flask + React]

Aplicación web de práctica desarrollada con **Flask** como backend y **React** como frontend. El objetivo del proyecto es reforzar conceptos de **APIs REST**, **arquitectura frontend/backend**, **buenas prácticas de código** y **herramientas de calidad**.

## ⚒️ Tecnologías

### Backend
- **Framework API**: Flask
- **Base de datos**: PostgreSQL
  - **ORM**: Flask-SQLAlchemy
  - **Migraciones**: Flask-Migrate
- **Calidad de código**:
    - black
    - ruff
    - pre-commit

### Frontend
- **Framework**: React + Vite
- **Estilos e iconos**: Bootstrap / Bootstrap Icons
- **Rutas**: react-router-dom
- **Mensajería**: react-toastify
- **Formularios**: react-hook-form
- **Calidad de código**:
  - ESLint
  - Prettier

---

## 🔧 Herramientas de calidad de código

### Backend

- **Inicializar pre-commit**: En la `raíz` del proyecto, ejecutar (solo una vez)
```bash
pre-commit install
```
Esto ejecuta automáticamente `black` y `ruff` antes de cada commit.


### Frontend

En la carpeta `frontend/app-react`

- Ejecutar `ESLint`
```bash
npx eslint --init # Inicializar
npx eslint . # Check
npx eslint . --fix # Fix
```

- Ejecutar `Prettier`
```bash
npx prettier --check .  # Check
npx prettier --write .  # Fix
```

---

## 🖥️ Backend

### Crear y activar entorno virtual
En la carpeta `backend`

```bash
# Windows
python -m venv .venv
.venv\Scripts\activate

# Linux / macOS
python3 -m venv .venv
source .venv/bin/activate
```

### Instalar dependecias
```bash
pip install -r requirements.txt
pip install -r requirements-dev.txt
```

### Variables de entorno
Crear un archivo .env con las variables necesarias, por ejemplo:

```.env
FLASK_DEBUG=1 # Modo desarrollo
DATABASE_URL=postgresql://usuario:password@localhost/db_name
CORS_ORIGINS=http://localhost:5173
```

### Ejecutar API
En la carpeta `backend`, ejecutar

```bash
python run.py
```
La API quedará disponible por defecto en: http://localhost:5000

---

## 🎨 Frontend

### Instalar dependencias
En la carpeta `frontend/app-react`, ejecutar
```bash
npm install
```

### Ejecutar React (Dev)
En la carpeta `frontend/app-react`, ejecutar
```bash
npm run dev
```
El frontend estará disponible normalmente en: http://localhost:5173