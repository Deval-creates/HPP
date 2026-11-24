# House Price Prediction Web App

A full-stack machine learning web application that predicts house prices based on user inputs like location, number of rooms, population, and proximity to the ocean.

---

## Features

* Predict house prices using a trained ML model
* Location-based prediction 
* Machine Learning model built with Scikit-learn
* FastAPI backend for high performance APIs
* Clean and interactive frontend UI
* User authentication (Login & Signup)
* Add houses to favourites 

---

## Tech Stack

### Backend:

* FastAPI
* Python
* Scikit-learn
* NumPy
* SQLAlchemy
* SQLite

### Frontend:

* HTML
* CSS
* JavaScript
* React

### Other Tools:

* Joblib (for model loading)
* Uvicorn (server)

---

## Machine Learning Model

* Model Used: Random Forest Regressor
* Dataset: California Housing Dataset
* Features:
  * Total Rooms
  * Total Bedrooms
  * Population
  * Ocean Proximity

---

## Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/House-Price-Predictor.git

```

---

### 2. Create virtual environment

```
python -m venv venv
```

Activate it:

**Windows:**

```
venv\Scripts\activate
```

**Mac/Linux:**

```
source venv/bin/activate
```

---

### 3. Install dependencies

```
pip install -r requirements.txt
```

### 4. Train the model 
```
before training the model set path of housing.csv in line no. 7 in ML_Model
```
```
  cd ML_Model
  python model.py
```

### 5. Run the backend

```
cd Backend
uvicorn main:app --reload
```

---

### 5. Run frontend
```
cd Frontend/BuyHouse/vite-project 
```
```
npm i
```
```
npm run dev
```
After frontend server is running 
Only then open index.html inside Frontend folder.
```

---

## Authentication

* User Signup
* User Login
* Password hashing using bcrypt
* JWT-based authentication

---

## Future Improvements

* House listing with filters
* Favourites system
* Model improvement & accuracy tuning
* Deployment 

---

## Author

**Student name**
---

## License

This project is for educational purposes.
