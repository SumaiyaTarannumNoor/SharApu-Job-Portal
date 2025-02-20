from pydantic import BaseModel, EmailStr, constr, validator
from enum import Enum
from typing import Annotated, Optional
from app.db_models.models import AboutRegistrationEnum, HowToUseEnum

UsernameConstr = Annotated[str, constr(min_length=4, max_length=30)]  
PasswordConstr = Annotated[str, constr(min_length=8)] 



class UserCreate(BaseModel):
    email: EmailStr
    username: UsernameConstr  
    password: PasswordConstr  
    how_to_use: HowToUseEnum
    about_registration: AboutRegistrationEnum
    agreed_to_terms: bool

class UserResponse(BaseModel):
    id: int
    email: str
    username: str
    is_verified: bool
    how_to_use: HowToUseEnum
    about_registration: AboutRegistrationEnum
    agreed_to_terms: bool

    class Config:
        orm_mode = True

class LoginSchema(BaseModel):
    identifier: str  
    password: PasswordConstr