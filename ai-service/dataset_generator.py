"""
E-Waste Device Dataset Generator
Creates a realistic dataset with 1000+ entries of e-waste devices and their material composition
"""

import csv
import random
import os
from datetime import datetime

# Device categories and their typical material compositions
DEVICE_DATA = {
    "iPhone 12": {
        "gold": (0.025, 0.045),
        "copper": (8, 15),
        "lithium": (2.5, 4),
        "category": "smartphone"
    },
    "iPhone 13": {
        "gold": (0.03, 0.05),
        "copper": (9, 16),
        "lithium": (3, 4.5),
        "category": "smartphone"
    },
    "iPhone 14": {
        "gold": (0.035, 0.055),
        "copper": (10, 17),
        "lithium": (3.2, 4.8),
        "category": "smartphone"
    },
    "Samsung Galaxy S21": {
        "gold": (0.02, 0.04),
        "copper": (7, 14),
        "lithium": (3.5, 5),
        "category": "smartphone"
    },
    "Samsung Galaxy S22": {
        "gold": (0.025, 0.045),
        "copper": (8, 15),
        "lithium": (3.7, 5.2),
        "category": "smartphone"
    },
    "Google Pixel 6": {
        "gold": (0.018, 0.038),
        "copper": (6, 12),
        "lithium": (3, 4.5),
        "category": "smartphone"
    },
    "Google Pixel 7": {
        "gold": (0.02, 0.04),
        "copper": (7, 13),
        "lithium": (3.2, 4.8),
        "category": "smartphone"
    },
    "OnePlus 10": {
        "gold": (0.015, 0.035),
        "copper": (6, 12),
        "lithium": (3.5, 5),
        "category": "smartphone"
    },
    "ThinkPad T480": {
        "gold": (0.15, 0.35),
        "copper": (35, 65),
        "lithium": (35, 55),
        "category": "laptop"
    },
    "ThinkPad T490": {
        "gold": (0.16, 0.38),
        "copper": (38, 68),
        "lithium": (40, 60),
        "category": "laptop"
    },
    "ThinkPad T500": {
        "gold": (0.18, 0.4),
        "copper": (40, 70),
        "lithium": (45, 65),
        "category": "laptop"
    },
    "Dell XPS 13": {
        "gold": (0.14, 0.34),
        "copper": (33, 63),
        "lithium": (38, 58),
        "category": "laptop"
    },
    "MacBook Air M1": {
        "gold": (0.2, 0.4),
        "copper": (45, 75),
        "lithium": (50, 70),
        "category": "laptop"
    },
    "MacBook Pro 13": {
        "gold": (0.25, 0.45),
        "copper": (50, 80),
        "lithium": (55, 75),
        "category": "laptop"
    },
    "HP Pavilion 15": {
        "gold": (0.12, 0.32),
        "copper": (30, 60),
        "lithium": (35, 55),
        "category": "laptop"
    },
    "iPad Air": {
        "gold": (0.08, 0.18),
        "copper": (15, 30),
        "lithium": (25, 40),
        "category": "tablet"
    },
    "iPad Pro 11": {
        "gold": (0.1, 0.2),
        "copper": (18, 35),
        "lithium": (28, 45),
        "category": "tablet"
    },
    "Samsung Galaxy Tab S7": {
        "gold": (0.07, 0.16),
        "copper": (14, 28),
        "lithium": (24, 38),
        "category": "tablet"
    },
    "Sony WH-1000XM4": {
        "gold": (0.005, 0.015),
        "copper": (2, 6),
        "lithium": (0.8, 1.5),
        "category": "headphones"
    },
    "AirPods Pro": {
        "gold": (0.002, 0.008),
        "copper": (0.5, 1.5),
        "lithium": (0.3, 0.8),
        "category": "earbuds"
    },
    "Canon EOS R5": {
        "gold": (0.08, 0.18),
        "copper": (20, 40),
        "lithium": (15, 30),
        "category": "camera"
    },
    "Sony A7IV": {
        "gold": (0.09, 0.19),
        "copper": (22, 42),
        "lithium": (16, 32),
        "category": "camera"
    },
    "Apple Watch Series 7": {
        "gold": (0.001, 0.005),
        "copper": (0.3, 1),
        "lithium": (0.2, 0.6),
        "category": "wearable"
    },
    "Fitbit Charge 5": {
        "gold": (0.0005, 0.003),
        "copper": (0.1, 0.5),
        "lithium": (0.1, 0.3),
        "category": "wearable"
    },
}

def generate_dataset(num_entries=1000, output_file="ecommerce_devices.csv"):
    """
    Generate a dataset of e-waste devices with material compositions
    
    Args:
        num_entries: Number of dataset entries to generate (default 1000)
        output_file: Output CSV filename
    """
    
    fieldnames = [
        "device_id",
        "device_model",
        "category",
        "gold_g",
        "copper_g",
        "lithium_g",
        "confidence",
        "total_value_estimate",
        "timestamp",
        "region"
    ]
    
    regions = ["Kolkata", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Ahmedabad"]
    
    # Create data directory if it doesn't exist
    os.makedirs("data", exist_ok=True)
    
    filepath = f"data/{output_file}"
    
    with open(filepath, 'w', newline='') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        
        for i in range(num_entries):
            device_name = random.choice(list(DEVICE_DATA.keys()))
            device_spec = DEVICE_DATA[device_name]
            
            # Generate material amounts with slight variation
            gold = round(random.uniform(*device_spec["gold"]), 4)
            copper = round(random.uniform(*device_spec["copper"]), 3)
            lithium = round(random.uniform(*device_spec["lithium"]), 3)
            
            # Confidence increases with more complete material data
            confidence = round(random.uniform(0.82, 0.99), 2)
            
            # Estimated value (arbitrary but based on materials)
            # Gold: ~60 per gram, Copper: ~0.01 per gram, Lithium: ~15 per gram
            total_value = round(
                (gold * 60) + (copper * 0.01) + (lithium * 15),
                2
            )
            
            writer.writerow({
                "device_id": f"DEV-{i+1:06d}",
                "device_model": device_name,
                "category": device_spec["category"],
                "gold_g": gold,
                "copper_g": copper,
                "lithium_g": lithium,
                "confidence": confidence,
                "total_value_estimate": total_value,
                "timestamp": datetime.now().isoformat(),
                "region": random.choice(regions)
            })
    
    print(f"✅ Dataset generated successfully!")
    print(f"📊 Location: {filepath}")
    print(f"📈 Total entries: {num_entries}")
    print(f"📋 Devices covered: {len(DEVICE_DATA)} different models")
    print(f"🌍 Regions: {', '.join(regions)}")

if __name__ == "__main__":
    # Generate 1000 entries
    generate_dataset(num_entries=1000)
