from fastapi import APIRouter
from app.api.v1.endpoints import risk, predictions, alerts, copilot

api_router = APIRouter()
api_router.include_router(risk.router, prefix="/risk", tags=["risk"])
api_router.include_router(predictions.router, prefix="/predictions", tags=["predictions"])
api_router.include_router(alerts.router, prefix="/alerts", tags=["alerts"])
api_router.include_router(copilot.router, prefix="/copilot", tags=["copilot"])
