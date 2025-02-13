from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import timedelta
from .auth_schemas import UserCreate, UserResponse
from app.db_models.db import get_db
from app.db_models.models import User
from .auth_utills import verify_password, get_password_hash, create_access_token
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def check_user_exists(db: Session, email: str = None, username: str = None):
    if email:
        db_user = db.query(User).filter(User.email == email).first()
        if db_user:
            raise HTTPException(status_code=400, detail="Email already registered")
    if username:
        db_user = db.query(User).filter(User.username == username).first()
        if db_user:
            raise HTTPException(status_code=400, detail="Username already registered")

@router.post("/register/", response_model=UserResponse)
async def register(user: UserCreate, db: Session = Depends(get_db)):
    check_user_exists(db, email=user.email, username=user.username)
    
    if not user.agreed_to_terms:
        raise HTTPException(status_code=400, detail="You must agree to the terms of use and privacy policy")
    
    hashed_password = get_password_hash(user.password)
    
    new_user = User(
        email=user.email,
        username=user.username,
        hashed_password=hashed_password,
        how_to_use=user.how_to_use,
        about_registration=user.about_registration,
        agreed_to_terms=user.agreed_to_terms
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    # Generate a verification token
    token = create_access_token(data={"sub": user.email}, expires_delta=timedelta(minutes=30))
    
    
    return new_user


@router.post("/login/")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = None
    if "@" in form_data.username: 
        user = db.query(User).filter(User.email == form_data.username).first()
    else:  
        user = db.query(User).filter(User.username == form_data.username).first()
    
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect email/username or password")
    
    # # Check if the user's email is verified
    # if not user.is_verified:
    #     raise HTTPException(status_code=400, detail="Email not verified")
    # Generate an access token
    access_token_expires = timedelta(minutes=30)
    access_token = create_access_token(data={"sub": user.email}, expires_delta=access_token_expires)
    
    return {"access_token": access_token, "token_type": "bearer"}