from app.extensions import db
from sqlalchemy import VARCHAR, BigInteger, DateTime, Identity, text


class LicenseCategory(db.Model):
    __tablename__ = "license_categories"

    id = db.Column(BigInteger, Identity(always=True), primary_key=True)
    name = db.Column(VARCHAR(50), nullable=False, unique=True)
    created_at = db.Column(
        DateTime(timezone=True), server_default=text("now()"), nullable=False
    )
