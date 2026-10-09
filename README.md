# Responsive Portfolio Website with Backend Integration

A modern, fully responsive personal portfolio website featuring smooth navigation, project showcases, and a full-stack contact form integrated with a Node.js/Express REST API and MongoDB Atlas.

---

## 🚀 Features

* **Responsive Design:** Mobile-first layout with clean CSS grid/flexbox and interactive hamburger menu navigation.
* **Dynamic Sections:** Includes About, Skills, Projects, and Contact sections.
* **Full-Stack Contact Form:** Asynchronous `fetch()` submission with real-time UI feedback.
* **RESTful API Backend:** Express.js backend handling form validation and database persistence.
* **Database Integration:** Persistent message storage using MongoDB Atlas and Mongoose schemas.
* **Production Deployed:** Hosted on Render (Frontend Static Site + Backend Web Service).

---

## 🛠️ Tech Stack

### Frontend
* **HTML5** – Semantic markup
* **CSS3** – Custom styling, CSS Grid, Flexbox, & Media Queries
* **JavaScript (ES6+)** – DOM manipulation and async API calls (`fetch`)

### Backend & Database
* **Node.js** – JavaScript runtime environment
* **Express.js** – Web application framework
* **MongoDB Atlas & Mongoose** – NoSQL Cloud database & ODM
* **CORS & dotenv** – Cross-Origin resource sharing & environment variable management

---

## 📁 Project Structure

```text
portfolio-project/
├── backend/
│   ├── models/
│   │   └── Contact.js       # Mongoose Contact Schema
│   ├── .env                 # Environment variables (Ignored in Git)
│   ├── .gitignore           # Git ignore configuration
│   ├── package.json         # Node.js dependencies & scripts
│   └── server.js            # Express server entry point
├── frontend/
│   ├── index.html           # Main HTML structure
│   ├── style.css            # Responsive layout & styling
│   └── script.js            # Mobile navbar toggle & form API integration
└── README.md                # Project documentation


💻 Local Setup Instructions
Prerequisites
Node.js (v18 or higher)

Git

MongoDB Atlas Account or local MongoDB server

1. Clone the Repository

2. Configure & Start Backend
Bash
cd backend
npm install
Create a .env file in the backend/ folder:

3. Run the Frontend
Open frontend/script.js and ensure the API fetch endpoint matches your local backend URL:

📡 API Endpoints
POST /api/contact
Stores a new message submitted through the portfolio contact form.

🌐 Deployment Overview
Backend: Deployed as a Web Service on Render with Root Directory set to backend.

Frontend: Deployed as a Static Site on Render pointing to frontend/index.html.

Database: Hosted on MongoDB Atlas.

📄 License
This project is open-source and available under the MIT License.
