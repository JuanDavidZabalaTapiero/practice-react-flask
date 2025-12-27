# 🌐 App práctica [Flask + React]

## ⚒️ Tecnologías

### Backend
- **Framework API**: Flask
- **Base de datos**: PostgreSQL
  - **ORM**: Flask-SQLAlchemy
  - **Migraciones**: Flask-Migrate
- **Calidad de código**:
    - black, isort, ruff
    - pre-commit

### Frontend
- **Framework**: React + Vite
- **CSS y JS**: Bootstrap
- **Rutas**: react-routes-dom
- **Calidad de código**:
  - Prettier, ESLint

---

## 🔧 Herramientas de calidad de código (Configuración)

### Backend

- **Inicializar pre-commit**: En la `raíz` del proyecto:
```bash
pre-commit install
```
Esto ejecuta automáticamente `black`, `isort` y `ruff` al hacer commit.


### Frontend

En la carpeta `frontend/app-react`:
- Ejecutar `ESLint`:
```bash
npx eslint --init # Inicializar
npx eslint . # Check
npx eslint . --fix # Fix
```

- Ejecutar `Prettier`:
```bash
npx prettier --check .  # Check
npx prettier --write .  # Fix
```

---

## 🖥️ Backend

### Activar entorno virtual e instalar dependencias
En la carpeta `backend`:
```bash
.venv\Scripts\activate
pip install -r requirements.txt
pip install -r requirements-dev.txt
```

### Ejecutar Flask
**Antes**: Tener el entorno virtual activo e instalar las dependencias.
En la `raíz` del proyecto:
```bash
python -m backend.run
```
La API quedará disponible por defecto en: http://localhost:5000

---

## 🎨 Frontend

### Instalar dependencias
En la carpeta `frontend/app-react`:
```bash
npm install
```

### Ejecutar React (Dev)
En la carpeta `frontend/app-react`:
```bash
npm run dev
```
El frontend estará disponible normalmente en: http://localhost:5173