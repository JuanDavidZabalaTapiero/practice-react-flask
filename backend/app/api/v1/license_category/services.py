from sqlalchemy.exc import IntegrityError

from backend.app.extensions import db
from backend.db.models.license_category import LicenseCategory


# == CREATE ==
def create_license_category(name):
    category = LicenseCategory(name=name)

    try:
        # GUARDAR
        db.session.add(category)
        db.session.commit()
        return category
    except IntegrityError as err:
        # ERROR
        db.session.rollback()
        raise ValueError("LICENSE_CATEGORY_EXISTS") from err
