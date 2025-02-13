from sqlalchemy import Column, Integer, String, Boolean, Enum
from sqlalchemy.ext.declarative import declarative_base
from enum import Enum as PyEnum
from .db import Base

class HowToUseEnum(PyEnum):
    PARTICIPATE_IN_WORK = "PARTICIPATE_IN_WORK"
    APPLY_FOR_JOB = "APPLY_FOR_JOB"

class AboutRegistrationEnum(PyEnum):
    INDIVIDUAL = "Individual"
    CORPORATION = "Corporation"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    username = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=False)
    
    # New fields
    how_to_use = Column(Enum(HowToUseEnum))
    about_registration = Column(Enum(AboutRegistrationEnum))
    agreed_to_terms = Column(Boolean, default=False)