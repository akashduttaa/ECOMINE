"""
PyTorch Model Training Script
Trains a neural network on 1000+ e-waste device entries
"""

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader
import pandas as pd
import numpy as np
import os
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
import json

# Device categories for classification
DEVICE_CATEGORIES = {
    "smartphone": 0,
    "laptop": 1,
    "tablet": 2,
    "headphones": 3,
    "earbuds": 4,
    "camera": 5,
    "wearable": 6
}

DEVICE_MODELS = {
    "iPhone 12": 0, "iPhone 13": 1, "iPhone 14": 2,
    "Samsung Galaxy S21": 3, "Samsung Galaxy S22": 4,
    "Google Pixel 6": 5, "Google Pixel 7": 6,
    "OnePlus 10": 7,
    "ThinkPad T480": 8, "ThinkPad T490": 9, "ThinkPad T500": 10,
    "Dell XPS 13": 11,
    "MacBook Air M1": 12, "MacBook Pro 13": 13,
    "HP Pavilion 15": 14,
    "iPad Air": 15, "iPad Pro 11": 16,
    "Samsung Galaxy Tab S7": 17,
    "Sony WH-1000XM4": 18,
    "AirPods Pro": 19,
    "Canon EOS R5": 20, "Sony A7IV": 21,
    "Apple Watch Series 7": 22, "Fitbit Charge 5": 23,
}

class EWasteDataset(Dataset):
    """Custom Dataset for E-Waste Device Data"""
    def __init__(self, csv_file):
        self.df = pd.read_csv(csv_file)
        self.device_encoder = LabelEncoder()
        self.category_encoder = LabelEncoder()
        
        # Encode categorical columns
        self.df['device_model_encoded'] = self.device_encoder.fit_transform(self.df['device_model'])
        self.df['category_encoded'] = self.category_encoder.fit_transform(self.df['category'])
        
        # Normalize material values
        self.gold_mean = self.df['gold_g'].mean()
        self.gold_std = self.df['gold_g'].std()
        self.copper_mean = self.df['copper_g'].mean()
        self.copper_std = self.df['copper_g'].std()
        self.lithium_mean = self.df['lithium_g'].mean()
        self.lithium_std = self.df['lithium_g'].std()
        
        self.df['gold_normalized'] = (self.df['gold_g'] - self.gold_mean) / self.gold_std
        self.df['copper_normalized'] = (self.df['copper_g'] - self.copper_mean) / self.copper_std
        self.df['lithium_normalized'] = (self.df['lithium_g'] - self.lithium_mean) / self.lithium_std
    
    def __len__(self):
        return len(self.df)
    
    def __getitem__(self, idx):
        row = self.df.iloc[idx]
        
        features = torch.tensor([
            row['gold_normalized'],
            row['copper_normalized'],
            row['lithium_normalized'],
            row['confidence']
        ], dtype=torch.float32)
        
        device_label = torch.tensor(row['device_model_encoded'], dtype=torch.long)
        category_label = torch.tensor(row['category_encoded'], dtype=torch.long)
        
        return features, device_label, category_label


class EWasteClassifier(nn.Module):
    """Neural Network for E-Waste Device Classification"""
    def __init__(self, num_devices=24, num_categories=7):
        super(EWasteClassifier, self).__init__()
        
        # Input layer: 4 features (gold, copper, lithium, confidence)
        self.fc1 = nn.Linear(4, 64)
        self.relu1 = nn.ReLU()
        self.dropout1 = nn.Dropout(0.3)
        
        self.fc2 = nn.Linear(64, 128)
        self.relu2 = nn.ReLU()
        self.dropout2 = nn.Dropout(0.3)
        
        self.fc3 = nn.Linear(128, 64)
        self.relu3 = nn.ReLU()
        self.dropout3 = nn.Dropout(0.2)
        
        # Output layers
        self.device_output = nn.Linear(64, num_devices)
        self.category_output = nn.Linear(64, num_categories)
        self.confidence_output = nn.Linear(64, 1)
    
    def forward(self, x):
        x = self.fc1(x)
        x = self.relu1(x)
        x = self.dropout1(x)
        
        x = self.fc2(x)
        x = self.relu2(x)
        x = self.dropout2(x)
        
        x = self.fc3(x)
        x = self.relu3(x)
        x = self.dropout3(x)
        
        device_pred = self.device_output(x)
        category_pred = self.category_output(x)
        confidence_pred = torch.sigmoid(self.confidence_output(x))
        
        return device_pred, category_pred, confidence_pred


def train_model(csv_file="data/ecommerce_devices.csv", epochs=50, batch_size=32):
    """
    Train the E-Waste classification model
    
    Args:
        csv_file: Path to the CSV dataset
        epochs: Number of training epochs
        batch_size: Batch size for training
    """
    
    print("🚀 Starting Model Training...")
    print(f"📊 Loading dataset from {csv_file}")
    
    # Load dataset
    dataset = EWasteDataset(csv_file)
    
    # Split into train and validation
    train_size = int(0.8 * len(dataset))
    test_size = len(dataset) - train_size
    train_dataset, val_dataset = torch.utils.data.random_split(
        dataset, [train_size, test_size]
    )
    
    train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
    val_loader = DataLoader(val_dataset, batch_size=batch_size, shuffle=False)
    
    # Initialize model
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"🔧 Using device: {device}")
    
    model = EWasteClassifier().to(device)
    
    # Loss functions and optimizer
    device_loss_fn = nn.CrossEntropyLoss()
    category_loss_fn = nn.CrossEntropyLoss()
    confidence_loss_fn = nn.MSELoss()
    
    optimizer = optim.Adam(model.parameters(), lr=0.001)
    scheduler = optim.lr_scheduler.StepLR(optimizer, step_size=10, gamma=0.5)
    
    # Training loop
    print(f"\n📈 Training for {epochs} epochs...\n")
    
    best_val_loss = float('inf')
    
    for epoch in range(epochs):
        # Training phase
        model.train()
        train_loss = 0.0
        
        for features, device_labels, category_labels in train_loader:
            features = features.to(device)
            device_labels = device_labels.to(device)
            category_labels = category_labels.to(device)
            
            optimizer.zero_grad()
            
            device_pred, category_pred, confidence_pred = model(features)
            
            loss_device = device_loss_fn(device_pred, device_labels)
            loss_category = category_loss_fn(category_pred, category_labels)
            loss_confidence = confidence_loss_fn(
                confidence_pred.squeeze(),
                features[:, 3:4].squeeze()
            )
            
            total_loss = loss_device + loss_category + 0.5 * loss_confidence
            
            total_loss.backward()
            optimizer.step()
            
            train_loss += total_loss.item()
        
        avg_train_loss = train_loss / len(train_loader)
        
        # Validation phase
        model.eval()
        val_loss = 0.0
        device_correct = 0
        category_correct = 0
        total = 0
        
        with torch.no_grad():
            for features, device_labels, category_labels in val_loader:
                features = features.to(device)
                device_labels = device_labels.to(device)
                category_labels = category_labels.to(device)
                
                device_pred, category_pred, confidence_pred = model(features)
                
                loss_device = device_loss_fn(device_pred, device_labels)
                loss_category = category_loss_fn(category_pred, category_labels)
                loss_confidence = confidence_loss_fn(
                    confidence_pred.squeeze(),
                    features[:, 3:4].squeeze()
                )
                
                total_loss = loss_device + loss_category + 0.5 * loss_confidence
                val_loss += total_loss.item()
                
                _, device_preds = torch.max(device_pred, 1)
                _, category_preds = torch.max(category_pred, 1)
                
                device_correct += (device_preds == device_labels).sum().item()
                category_correct += (category_preds == category_labels).sum().item()
                total += device_labels.size(0)
        
        avg_val_loss = val_loss / len(val_loader)
        device_accuracy = 100 * device_correct / total
        category_accuracy = 100 * category_correct / total
        
        print(f"Epoch [{epoch+1}/{epochs}]")
        print(f"  Train Loss: {avg_train_loss:.4f}")
        print(f"  Val Loss: {avg_val_loss:.4f}")
        print(f"  Device Accuracy: {device_accuracy:.2f}%")
        print(f"  Category Accuracy: {category_accuracy:.2f}%")
        print()
        
        scheduler.step()
        
        # Save best model
        if avg_val_loss < best_val_loss:
            best_val_loss = avg_val_loss
            os.makedirs("models", exist_ok=True)
            torch.save(model.state_dict(), "models/ecocmine_model.pth")
            print(f"✅ Model saved! (Val Loss: {avg_val_loss:.4f})\n")
    
    print("🎉 Training completed!")
    print(f"📦 Model saved to: models/ecocmine_model.pth")
    
    return model, dataset


if __name__ == "__main__":
    # Generate dataset first
    from dataset_generator import generate_dataset
    
    print("📋 Checking if dataset exists...")
    if not os.path.exists("data/ecommerce_devices.csv"):
        print("Generating dataset...")
        generate_dataset(num_entries=1000)
    
    # Train model
    model, dataset = train_model(epochs=50, batch_size=32)
