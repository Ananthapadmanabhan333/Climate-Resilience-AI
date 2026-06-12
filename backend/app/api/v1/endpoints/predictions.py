from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class SimulationRequest(BaseModel):
    scenario: str
    parameters: dict

@router.get("/{region_id}")
def get_predictions(region_id: str):
    return {
        "region_id": region_id,
        "flood_risk": 0.85,
        "drought_risk": 0.20,
        "heatwave_risk": 0.60
    }

@router.post("/simulate")
def simulate_impact(request: SimulationRequest):
    return {
        "status": "success",
        "message": f"Simulation run for scenario: {request.scenario}",
        "projected_impact": "High agricultural loss"
    }
