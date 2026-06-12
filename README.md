# Climate Resilience AI

A multi-agent climate intelligence system designed to predict climate-related risks (floods, droughts, heatwaves, resource shortages) and help governments, NGOs, and citizens prepare before disasters occur.

## Features

- **Global Risk Dashboard**: Built with Next.js, Tailwind CSS, and ShadCN UI. Provides real-time metrics on flood probability, heatwave stress, and drought onset.
- **FastAPI Backend**: Robust API Gateway orchestrating multiple intelligence engines (Flood, Drought, Heatwave).
- **ML Pipeline**: Includes predictive models (e.g., XGBoost for flood prediction) based on climate and hydrological data.
- **Microservices Ready**: Containerized with Docker and Docker Compose for easy deployment and scaling.

## Architecture

- **Frontend**: Next.js (App Router), React, Tailwind CSS
- **Backend**: FastAPI, Python 3.11, Pydantic, SQLAlchemy
- **Data & AI**: XGBoost, LightGBM, scikit-learn, Pandas
- **Infrastructure**: Docker, Docker Compose, PostgreSQL (PostGIS)

## Getting Started

### Prerequisites

- Docker
- Docker Compose
- Git

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ananthapadmanabhan333/Climate-Resilience-AI.git
   cd Climate-Resilience-AI
   ```

2. **Start the services using Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   - **Frontend Dashboard**: [http://localhost:3000](http://localhost:3000)
   - **Backend API Docs (Swagger)**: [http://localhost:8000/docs](http://localhost:8000/docs)

## Roadmap

- [ ] Integrate actual Data Ingestion pipelines (NASA EarthData, OpenWeather)
- [ ] Connect Neo4j for Knowledge Graph (GraphRAG) representations
- [ ] Implement actual PostGIS geospatial queries for the interactive Mapbox maps
- [ ] Complete the Explanable AI (XAI) engine using SHAP/LIME
- [ ] Deploy to Kubernetes


