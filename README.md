# MERN Backend API 🚀  

A scalable backend built using Node.js, Express, and MongoDB, designed to handle authentication, APIs, and real-world application logic.

---

## 📌 Overview
This project is the backend service for a MERN stack application.  
It provides RESTful APIs, authentication, and data management using MongoDB.

---

## ⚙️ Tech Stack
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT Authentication  

---

## 🧠 Architecture

src/
├── controllers/    # Business logic  
├── routes/         # API endpoints  
├── models/         # Database schemas  
├── config/         # DB connection  
└── middleware/     # Auth / error handling  

server.js → Entry point  

👉 Structured using separation of concerns (important for scalability)

---

## ✨ Features
- User authentication (JWT)  
- RESTful API design  
- Modular backend structure  
- MongoDB integration  

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|---------|------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/users | Get users |
| POST | /api/data | Create data |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/BarathArjun-B/Mern_backend.git
cd Mern_backend
