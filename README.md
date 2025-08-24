# Full-Stack Social Media App (Instagram Clone)

This is a full-stack social media application inspired by Instagram, featuring a React-based frontend and a robust Node.js/Express backend. The platform allows users to register, create profiles, share content like posts and reels, and interact with other users through follows, likes, and comments.

## ✨ Core Features

*   **Full User Authentication**: Secure user registration and login using JWT (Access & Refresh Tokens) with password hashing.
*   **Interactive Frontend**: A dynamic and responsive user interface built with React for a seamless user experience.
*   **Content Feeds**: Browse posts and reels from followed users in a central feed.
*   **Profile Management**: View and edit user profiles, including bio, profile picture, and follower/following counts.
*   **Content Creation & Interaction**:
    *   **Posts**: Create, read, and delete standard image/video posts.
    *   **Reels**: Share and watch short-form video content.
    *   **Stories**: Post ephemeral stories that automatically disappear after 24 hours.
    *   **Social Engagement**: Like, comment, and save posts.
*   **Scalable Backend**: Built with well-structured and normalized data models for performance and maintainability.

## 🛠️ Tech Stack

The application is built with modern web technologies, separated into two main components:

### Backend
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB with Mongoose ODM
*   **Authentication**: JSON Web Tokens (JWT)
*   **Password Hashing**: Bcrypt.js
*   **Middleware**: `cors`, `cookie-parser`

### Frontend
*   **Library**: React.js
*   **Routing**: React Router
*   **State Management**: Redux Toolkit or Context API
*   **API Communication**: Axios or Fetch API
*   **Styling**: Tailwind CSS, Material-UI, or Styled Components

## 📁 Project Structure

The repository is organized into two main directories, `Backend` and `Frontend`, to maintain a clean separation of concerns.

```
Social Media App/
├── Backend/          # All backend source code (Node.js/Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── ...
│   └── package.json
├── Frontend/         # All frontend source code (React)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── ...
│   └── package.json
└── README.md         # You are here!
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps. You will need to run the backend and frontend in two separate terminal sessions.

### Prerequisites

*   Node.js (v18.x or higher recommended)
*   npm (or yarn)
*   MongoDB (a local instance or a cloud service like MongoDB Atlas)

### 1. Backend Setup

First, set up and run the backend server.

```sh
# 1. Navigate to the backend directory
cd Backend

# 2. Install dependencies
npm install

# 3. Create a .env file in the Backend/ directory.
#    Copy the example below and fill in your values.

# 4. Start the backend server (with hot-reloading)
npm run dev
```

**`.env` file for Backend:**
```env
# Server Configuration
PORT=8000
CORS_ORIGIN=http://localhost:3000 # Your frontend URL

# MongoDB Connection String
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>

# JWT Secrets
ACCESS_TOKEN_SECRET=your-super-secret-access-token
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your-super-secret-refresh-token
REFRESH_TOKEN_EXPIRY=10d
```
The backend server will be running at `http://localhost:8000`.

### 2. Frontend Setup

Next, set up and run the React frontend.

```sh
# 1. Open a new terminal and navigate to the frontend directory
cd Frontend

# 2. Install dependencies
npm install

# 3. Create a .env file in the Frontend/ directory.
#    Add the backend API URL as shown below.

# 4. Start the React development server
npm start
```

**`.env` file for Frontend:**
```env
REACT_APP_API_URL=http://localhost:8000
```
The frontend application will open and run at `http://localhost:3000`.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---