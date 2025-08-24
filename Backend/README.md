# Social Media App Backend (Instagram Clone)

This project is the backend for a social media application inspired by Instagram. It provides the core functionalities including user authentication, content creation (posts, reels, stories), and social interactions (likes, comments, follows).

## ✨ Features

*   **User Authentication**: Secure user registration and login using JWT (Access & Refresh Tokens).
*   **Password Hashing**: Passwords are securely hashed using `bcrypt`.
*   **User Profiles**: Manage user profiles with details like username, bio, profile picture, followers, and following.
*   **Content Creation**:
    *   **Posts**: Create, read, update, and delete standard image/video posts.
    *   **Reels**: Create and share short-form video content.
    *   **Stories**: Share ephemeral stories that automatically disappear after 24 hours.
*   **Social Interactions**:
    *   Follow / Unfollow users.
    *   Like posts, reels, and comments.
    *   Comment on posts and reels, with support for nested replies.
    *   Save posts for later viewing.
*   **Scalable Data Models**: Well-structured and normalized Mongoose schemas for scalability and maintainability.

## 🛠️ Tech Stack

*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB
*   **ODM**: Mongoose
*   **Authentication**: JSON Web Tokens (JWT)
*   **Password Hashing**: Bcrypt.js
*   **Environment Variables**: Dotenv
*   **CORS**: `cors`
*   **Cookie Parsing**: `cookie-parser`

## 🗂️ Data Models

The core of the application is built around a set of Mongoose models:

*   **`User`**: Manages user data, authentication tokens, and relationships (followers, following, posts, etc.).
*   **`Post`**: Represents a standard media post with a caption, likes, and comments.
*   **`Reel`**: Represents short-form video content.
*   **`Story`**: Represents ephemeral content that expires after 24 hours (using a MongoDB TTL index).
*   **`Comment`**: Manages comments on posts and reels, with support for replies.
*   **`Like`**: A polymorphic model to handle likes on different types of content (posts, reels, comments), enabling features like activity feeds.

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

*   Node.js (v18.x or higher recommended)
*   npm or yarn
*   MongoDB (local instance or a cloud service like MongoDB Atlas)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_REPOSITORY_URL>
    cd Backend
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the `Backend` directory. Copy the contents of `.env.example` (if available) or use the template below.

    ```env
    # Server Configuration
    PORT=8000
    CORS_ORIGIN=*

    # MongoDB Connection
    MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority

    # JWT Secrets
    ACCESS_TOKEN_SECRET=your-access-token-secret
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=your-refresh-token-secret
    REFRESH_TOKEN_EXPIRY=10d
    ```

4.  **Run the server:**

    *   For development with auto-reloading (if `nodemon` is configured):
        ```sh
        npm run dev
        ```

The server should now be running on the port specified in your `.env` file (e.g., `http://localhost:8000`).

## 📁 Project Structure

```
Backend/
├── controllers/      # Request handling logic
├── db/               # Database connection logic
├── middlewares/      # Custom Express middlewares (e.g., auth)
├── models/           # Mongoose data models (User, Post, etc.)
├── routes/           # API route definitions
├── utils/            # Utility functions (e.g., ApiResponse, ApiError)
├── .env              # Environment variables (ignored by git)
├── .gitignore        # Git ignore file
├── app.js            # Express app configuration
├── index.js          # Server entry point
├── package.json      # Project dependencies and scripts
└── README.md         # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---