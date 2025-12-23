from flask import Blueprint, request, jsonify
from .services import create_license_category

license_category_bp = Blueprint("license_category_bp_v1", __name__, url_prefix="/api/v1/license-categories")

@license_category_bp.post("/")
def create():
    data = request.get_json()

    # VALIDACIÓN
    if not data:
        return jsonify({"error": "El nombre es obligatorio"}), 400

    # DATOS
    name = data["name"]

    try:
        category = create_license_category(name)
    except ValueError as e:
        # ERROR
        if str(e) == "LICENSE_CATEGORY_EXISTS":
            return jsonify({"error": "Categoría ya registrada"}), 409
        raise

    # OK
    return jsonify({
        "id": category.id,
        "name": category.name,
        "created_at": category.created_at
        }), 201
