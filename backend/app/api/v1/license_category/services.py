from db.models.license_category import LicenseCategory
from sqlalchemy.exc import IntegrityError

from app.extensions import db

from .exceptions import LicenseCategoryExistsError


# == CREATE ==
def create_license_category(name):
    category = LicenseCategory(name=name)

    try:
        # SAVE
        db.session.add(category)
        db.session.commit()
        return category

    except IntegrityError as err:
        # ERROR
        db.session.rollback()
        raise LicenseCategoryExistsError() from err
