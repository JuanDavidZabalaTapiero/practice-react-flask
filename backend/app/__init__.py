from flask import Flask
from .config import Config
from .extensions import db, migrate
from .api.v1 import register_blueprints
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    # == CONFIG ==
    app.config.from_object(Config)

    # == INIT ==
    db.init_app(app) # DB
    migrate.init_app(app, db) # MIGRATE

    # == MODELOS ==
    from backend.db import models

    # == BLUEPRINTS ==
    register_blueprints(app)

    # == CORS ==
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    return app