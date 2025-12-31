from flask import Blueprint, jsonify, request

from .exceptions import LicenseCategoryExistsError
from .services import create_license_category

license_category_bp = Blueprint(
    "license_category_bp_v1", __name__, url_prefix="/api/v1/license-categories"
)


@license_category_bp.post("/")
def create():
    data = request.get_json()

    # VALIDATION
    if not data or "name" not in data:
        return jsonify({"error": "El nombre es obligatorio"}), 400

    name = data["name"].strip()

    if not name:
        return jsonify({"error": "El nombre no puede estar vacío"}), 400

    # CREATE
    try:
        category = create_license_category(name)

    except LicenseCategoryExistsError:
        return jsonify({"error": "Categoría ya registrada"}), 409

    # OK
    return (
        jsonify(
            {
                "id": category.id,
                "name": category.name,
                "created_at": category.created_at.isoformat(),
            }
        ),
        201,
    )
