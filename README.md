# 🌍 ECOMINE 

An experimental full-stack platform combining **Web3, AI, and geospatial visualization** to create an interactive and decentralized ecosystem.





#  ECOMINE : Turning tomorrow's e-waste into today's digital assets.

---

## 🧠 Vision

ECOMINE explores the intersection of **blockchain technology, artificial intelligence, and real-world mapping** to build a system where digital intelligence meets physical geography.

> The goal is simple: turn complex technologies into intuitive, visual experiences.

---

## 🚀 Core Features

* 🌐 **3D Earth Visualization**
  Interactive globe powered by Three.js for immersive data representation

* 🗺️ **Real-time Map Integration**
  Built with Leaflet for geospatial interaction

* 🔗 **Web3 Wallet Connection**
  Blockchain-ready architecture using Ethers.js

* 🤖 **AI Service Layer**
  Python-based AI module for intelligent processing

* 🧱 **Modular Full-Stack Architecture**
  Clean separation between frontend, backend, contracts, and AI services

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

### 3D & Visualization

* Three.js
* React Three Fiber

### Maps

* Leaflet / React Leaflet

### Backend & AI

* Node.js
* Python (AI services)

### Blockchain

* Solidity
* Ethers.js

---

## 📁 Project Structure

```
ECOMINE/
├── frontend/                    # Next.js 16 React application
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx       # Root layout with navbar & footer
│   │   │   ├── page.tsx         # Home page with hero, scanner, modals
│   │   │   ├── globals.css      # Global styles & custom scrollbar
│   │   │   ├── privacy-policy/  # Privacy policy page
│   │   │   ├── terms-of-service/# Terms of service page
│   │   │   ├── cookie-policy/   # Cookie policy page
│   │   │   └── smart-contract/  # Smart contracts info page
│   │   └── components/
│   │       ├── EarthScene.tsx   # 3D Earth visualization (Three.js)
│   │       ├── Map.tsx          # Leaflet map with Kolkata drop zones
│   │       ├── ScannerModal.tsx # AI device scanning modal
│   │       ├── TokenomicsModal.tsx # Token allocation & vesting dashboard
│   │       ├── WalletConnect.tsx# Wallet connection component
│   │       └── Footer.tsx       # Footer with links & info
│   ├── public/                  # Static assets
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── tailwind.config.ts
│
├── backend/                     # Node.js/Express API server
│   ├── controllers/
│   │   └── scan.js             # E-waste scan analysis endpoint
│   ├── models/
│   │   ├── User.js             # User data model
│   │   └── ScanRecord.js        # Scan history model
│   ├── server.js               # Express server setup
│   ├── package.json
│   └── .env                    # API configuration
│
├── contracts/                  # Solidity smart contracts
│   ├── contracts/
│   │   └── EcoReward.sol       # ERC20 token + tokenomics
│   ├── ignition/
│   │   └── modules/
│   │       └── EcoReward.js    # Contract deployment script
│   ├── hardhat.config.js       # Hardhat configuration
│   └── package.json
│
└── ai-service/                 # Python AI/ML service
    ├── main.py                 # FastAPI server
    ├── model.py                # PyTorch model inference
    ├── train.py                # Model training script
    ├── dataset_generator.py    # Generate synthetic training data
    ├── models/
    │   └── ecocmine_model.pth  # Trained model checkpoint
    ├── data/
    │   └── ecommerce_devices.csv # Training dataset (1000+ entries)
    ├── requirements.txt        # Python dependencies
    └── .env                    # AI service configuration
```









---

## ⚙️ Getting Started

### 1. Clone the repository

git clone https://github.com/akashduttaa/ECOMINE.git

### 2. Navigate to frontend

cd frontend

### 3. Install dependencies

npm install

### 4. Start development server

npm run dev

---

## 🌐 Local Development

Open your browser:
http://localhost:3000

---

## 📸 Preview

<img width="1366" height="768" alt="Screenshot (315)" src="https://github.com/user-attachments/assets/013b2f26-737d-44fc-945e-7781f742f55d" />
<img width="1366" height="768" alt="Screenshot (317)" src="https://github.com/user-attachments/assets/60e55d82-7062-4cc8-8524-b59ba3b9fef1" />
<img width="1366" height="768" alt="Screenshot (319)" src="https://github.com/user-attachments/assets/985c5466-2c46-488e-8d34-549865c91165" />

<img width="1366" height="768" alt="Screenshot (333)" src="https://github.com/user-attachments/assets/6c6c5d60-8733-4a51-8e57-427e689ca5ed" />
<img width="1366" height="768" alt="Screenshot (332)" src="https://github.com/user-attachments/assets/2b77eac2-ac24-4db4-84cf-a0b5bc4ebec9" />
<img width="1366" height="768" alt="Screenshot (331)" src="https://github.com/user-attachments/assets/c21a7e8d-f02b-46b4-aa17-4aeb141c25b0" />
<img width="1366" height="768" alt="Screenshot (330)" src="https://github.com/user-attachments/assets/33f10dfc-d3ac-4c69-b0ab-7650c400cc67" />
<img width="1366" height="768" alt="Screenshot (329)" src="https://github.com/user-attachments/assets/a16a05b7-491c-4fee-9296-b2a8a31a9fc4" />
<img width="1366" height="768" alt="Screenshot (328)" src="https://github.com/user-attachments/assets/57f6690b-ffa5-40b0-b01f-076f9124d463" />
<img width="1366" height="768" alt="Screenshot (327)" src="https://github.com/user-attachments/assets/ff02d276-50cd-47a5-ace3-dc33fdd57aad" />
<img width="1366" height="768" alt="Screenshot (326)" src="https://github.com/user-attachments/assets/7abb7b06-9a69-4f61-961f-6ffbd164b707" />
<img width="1366" height="768" alt="Screenshot (325)" src="https://github.com/user-attachments/assets/5a01a080-383f-46b4-bc2c-656f5cbbfc7c" />
<img width="1366" height="768" alt="Screenshot (324)" src="https://github.com/user-attachments/assets/1032e94b-d652-49f4-beb4-9bc1134e17f8" />
<img width="1366" height="768" alt="Screenshot (323)" src="https://github.com/user-attachments/assets/b2285503-96d4-41d8-95bf-c03308c0fc99" />
<img width="1366" height="768" alt="Screenshot (321)" src="https://github.com/user-attachments/assets/dd0c49e4-1479-4fb8-85ca-8981f788bb26" />
<img width="1366" height="768" alt="Screenshot (320)" src="https://github.com/user-attachments/assets/4f27fbbc-85ea-4807-8c9b-18c760df1ef8" />



---

## 🔮 Future Roadmap

* 🚀 Smart contract deployment on testnet
* 🧠 Advanced AI integration
* 📊 Real-time data visualization layers
* 🔐 Authentication & user system
* 🌍 Production deployment

---

## 💡 Why This Project Matters

This project is a step toward building **next-generation applications** that combine:

* Decentralization (Web3)
* Intelligence (AI)
* Visualization (3D + Maps)

---

## 👨‍💻 Author

**Angela Bera & Akash Dutta**

---

## ⭐ Support

If you find this project interesting, consider giving it a star ⭐
