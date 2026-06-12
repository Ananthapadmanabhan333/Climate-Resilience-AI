from fastapi import APIRouter

router = APIRouter()

@router.get("/global")
def get_global_risk():
    return {
        "overall_risk": "HIGH",
        "regions_at_risk": [
            {"region": "South Asia", "risk_type": "Flood", "score": 85},
            {"region": "Sub-Saharan Africa", "risk_type": "Drought", "score": 92}
        ]
    }
