from flask import Flask
from flask_cors import CORS

from .api.v1 import register_blueprints
from .config import Config
from .extensions import db, migrate


def create_app():
    app = Flask(__name__)

    # == CONFIG ==
    app.config.from_object(Config)

    # == INIT ==
    db.init_app(app)  # DB
    migrate.init_app(app, db)  # MIGRATE

    # == MODELOS ==
    from backend.db import models  # noqa: F401

    # == BLUEPRINTS ==
    register_blueprints(app)

    # == CORS ==
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

    return app
