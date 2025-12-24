from sqlalchemy import VARCHAR, BigInteger, DateTime, Identity, text

from backend.app.extensions import db


class LicenseCategory(db.Model):
    __tablename__ = "license_categories"

    id = db.Column(BigInteger, Identity(always=True), primary_key=True)
    name = db.Column(VARCHAR(50), nullable=False, unique=True)
    created_at = db.Column(
        DateTime(timezone=True), server_default=text("now()"), nullable=False
    )
