# App práctica [Flask + React]

---

## Tecnologías

*Backend*
- **Framework API**: Flask
- **Base de datos**: PostgreSQL
- **ORM**: Flask-SQLAlchemy
  - **Migraciones**: Flask-Migrate
- **Calidad de código**:
    - black, isort, ruff
    - pre-commit

*Frontend*
- React + Vite

---

## Backend 

### Activar entorno virtual e instalar dependencias
Desde la carpeta `backend` del proyecto:
```bash
.venv\Scripts\activate
pip install -r requirements.txt
pip install -r requirements-dev.txt
```

### Ejecutar Flask
**Antes**: Tener el entorno virtual activo e instalar las dependencias.
En la carpeta `raíz` del proyecto:
```bash
python -m backend.run
```
La API quedará disponible por defecto en: http://localhost:5000

### Herramientas de calidad de código
Antes de realizar el primer commit, ejecutar:
```bash
pre-commit install
```

---

## Frontend

### Instalar dependencias
Desde la carpeta `frontend/app-react` del proyecto:
```bash
npm install
```

### Ejecutar React (modo Dev)
Desde la carpeta `frontend/app-react` del proyecto:
```bash
npm run dev
```
El frontend estará disponible normalmente en: http://localhost:5173
