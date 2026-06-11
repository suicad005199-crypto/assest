from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"status": "AI Sports System Running"}

@app.get("/predict")
def predict(home: str, away: str):
    return {
        "home": home,
        "away": away,
        "message": "Connect AI model here"
    }
