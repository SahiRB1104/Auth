
## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** (JSON Web Tokens) for authentication
- **bcrypt** for password hashing
- **dotenv** for environment variables

## ⚙️ Setup Instructions
### Register a new user
  ![Register a new user](./screenshots/Screenshot%20(175).png)
1. **Clone the repository:**
```bash
git clone https://github.com/SahiRB1104/Auth.git
cd Auth


-**Install** dependencies:
npm install express mongoose dotenv bcrypt jsonwebtoken joi

Start the server:
npm run dev

The API will run on http://localhost:5000
---------------------------------------------------------------
| Method | Endpoint                 | Description             |
| ------ | ------------------------ | ----------------------- |
| POST   | `/api/register`          | Register a new user     | 
| POST   | `/api/login`             | Login and get JWT       | 
| GET    | `/api/profile`           | Get user profile        | 
| PATCH  | `/api/profile`           | Update name or email    | 
| POST   | `/api/preferences`       | Save user preferences   | 
| GET    | `/api/preferences`       | Fetch saved preferences | 
| GET    | `/api/dashboard-summary` | Dummy dashboard data    | 
---------------------------------------------------------------



Register a new user:  
![Register a new user](./screenshots/Screenshot%20(175).png)

Login and get JWT:  
![Login](./screenshots/image.png)  
![Login JWT](./screenshots/Screenshot%20(176).png)

Get and update profile:  
![Profile](./screenshots/Screenshot%20(177).png)

Save and fetch preferences:  
![Save Preferences](./screenshots/Screenshot%20(178).png)  
![Fetch Preferences](./screenshots/Screenshot%20(179).png)

Dummy dashboard summary:  
![Dashboard Summary](./screenshots/Screenshot%20(180).png)

 