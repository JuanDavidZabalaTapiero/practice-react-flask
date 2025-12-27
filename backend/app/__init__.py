import os

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
    from db import models  # noqa: F401

    # == BLUEPRINTS ==
    register_blueprints(app)

    # == CORS ==
    cors_origins = os.getenv("CORS_ORIGINS", "")  # ORIGINS IN .ENV
    origins = [
        origin.strip() for origin in cors_origins.split(",") if origin
    ]  # SEPARATE ORIGINS

    CORS(app, resources={r"/api/*": {"origins": origins}})

    return app
