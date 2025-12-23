from .license_category.routes import license_category_bp

def register_blueprints(app):
    app.register_blueprint(license_category_bp)