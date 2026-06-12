from fastapi import APIRouter
from datetime import datetime

router = APIRouter()

@router.get("/active")
def get_active_alerts():
    return [
        {
            "alert_id": "1",
            "region": "Dhaka",
            "alert_level": "RED",
            "message": "Severe flood expected within 48 hours.",
            "issued_at": datetime.now().isoformat()
        },
        {
            "alert_id": "2",
            "region": "Cape Town",
            "alert_level": "ORANGE",
            "message": "Critical water shortage reaching threshold.",
            "issued_at": datetime.now().isoformat()
        }
    ]
