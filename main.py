from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from models import User
from passlib.hash import bcrypt

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI()
templates = Jinja2Templates(directory="templates")

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



from fastapi import Depends
@app.post("/signup", response_class=HTMLResponse)
def signup(request: Request, email: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    hashed_password = bcrypt.hash(password)
    user = User(email=email, password=hashed_password)
    db.add(user)
    db.commit()
    return HTMLResponse(f"<h2>Signup Successful for {email}</h2><a href='/login'>Go to Login</a>")
# Login Form Post
@app.post("/login", response_class=HTMLResponse)
def login(request: Request, email: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        return HTMLResponse("<h2>User not found</h2><a href='/signup'>Signup</a>")
    if not bcrypt.verify(password, user.password):
        return HTMLResponse("<h2>Incorrect password</h2><a href='/login'>Try Again</a>")
    return HTMLResponse(f"<h2>Login Successful! Welcome {email}</h2>")

