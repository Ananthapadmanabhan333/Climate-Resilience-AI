import pandas as pd
import numpy as np
import os
import xgboost as xgb
from sklearn.model_selection import train_test_split

def generate_mock_data(samples=1000):
    np.random.seed(42)
    # Features: rainfall (mm), river_level (m), soil_moisture (%), elevation (m)
    data = {
        'rainfall': np.random.normal(50, 20, samples),
        'river_level': np.random.normal(5, 2, samples),
        'soil_moisture': np.random.uniform(10, 90, samples),
        'elevation': np.random.uniform(0, 500, samples)
    }
    
    df = pd.DataFrame(data)
    
    # Target: 1 if (rainfall > 80 and river_level > 7 and elevation < 50) else 0
    df['flood_risk'] = ((df['rainfall'] > 80) & 
                        (df['river_level'] > 7) & 
                        (df['elevation'] < 50)).astype(int)
    
    # Add some noise
    noise_idx = np.random.choice(samples, size=int(samples*0.05), replace=False)
    df.loc[noise_idx, 'flood_risk'] = 1 - df.loc[noise_idx, 'flood_risk']
    
    return df

def train_flood_model():
    print("Generating mock climate data...")
    df = generate_mock_data()
    
    X = df.drop('flood_risk', axis=1)
    y = df['flood_risk']
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    print("Training XGBoost Flood Prediction Model...")
    model = xgb.XGBClassifier(n_estimators=100, max_depth=3, learning_rate=0.1)
    model.fit(X_train, y_train)
    
    accuracy = model.score(X_test, y_test)
    print(f"Model trained with accuracy: {accuracy:.2f}")
    
    # Save the model
    os.makedirs('models_saved', exist_ok=True)
    model.save_model('models_saved/flood_xgb_model.json')
    print("Model saved to models_saved/flood_xgb_model.json")

if __name__ == "__main__":
    train_flood_model()
