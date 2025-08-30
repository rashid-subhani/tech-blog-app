# 📝 Tech Blog App 

A full-stack blogging platform where users can sign up, log in, and manage their own blog posts with secure authentication and category-based filtering.

## 🚀 Features

- User registration and login with password hashing and JWT authentication  
- Create, read, update, and delete blog posts  
- Posts linked to users; only post owners can edit/delete  
- Posts include title, content, and optional category  
- Frontend interacts with backend via RESTful API  
- Protected routes with token-based access control  

## 📦 Technologies Used

- **Backend:** Node.js, Express, Sequelize, MySQL  
- **Authentication:** JSON Web Token (JWT), bcryptjs  
- **Frontend:** HTML, CSS, JavaScript (Vanilla)  
- **Demo:** [📹 Watch Demo on Screencastify](https://app.screencastify.com/watch/jI65DfBYqWMc0cKbVLlY)  

---

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/tech-blog-app.git
cd tech-blog-app

````

### 2. Install dependencies
npm install
```

### 3. Setup your `.env` file

Create a `.env` file in the root with the following content:

```env
DB_NAME=your_db_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
JWT_SECRET=your_jwt_secret_key
```

### 4. Create and seed the database (optional)
mysql -u root -p
# Then inside MySQL:
CREATE DATABASE your_db_name;
```

### 5. Start the development server
npm start
```

Your backend server will run at:
📍 `http://localhost:3001`

---

## 🌐 API Endpoints

### Authentication

* `POST /api/users/register` – Create a new user
* `POST /api/users/login` – Authenticate and receive JWT token

### Blog Posts

* `GET /api/posts` – View all posts
* `POST /api/posts` – Create new post (requires token)
* `PUT /api/posts/:id` – Edit a post (requires token and ownership)
* `DELETE /api/posts/:id` – Delete a post (requires token and ownership)

---

## 🖥 Frontend (Optional Static HTML)

A basic frontend is included in `index.html` to:

* Sign up and log in
* Create, edit, and delete posts
* View all posts with dynamic updates

Open `index.html` directly in your browser.

---

📹 Demo

👉 Watch the Demo Video above

---

---

## 🙌 Credits

* Built with 💻 by Rashid Subhani
* Inspired by platforms like Medium & Dev.to

---

