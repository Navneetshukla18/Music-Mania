🎵 Music Mania

Music Mania is a music streaming web application inspired by platforms like Spotify. It provides users with an interactive platform to explore music and enjoy a seamless listening experience through a modern and responsive interface.

🚀 Features

- 🎧 Music streaming and playback
- 🎵 Browse and explore songs
- 📱 Responsive user interface
- 🎨 Modern UI built with Tailwind CSS
- 🔐 Backend API integration
- 🗄️ MongoDB database integration
- ☁️ AWS integration for cloud services

🛠️ Tech Stack

Technology| Purpose
React.js| Frontend development
Tailwind CSS| Styling and responsive design
Node.js| Backend runtime
Express.js| REST API development
MongoDB| Database
AWS| Cloud infrastructure

📂 Project Structure

Music-Mania/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md

Note: Adjust the structure according to your actual project folders.

⚙️ Installation & Setup

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the project directory

cd Music-Mania

3. Install frontend dependencies

cd client
npm install

4. Install backend dependencies

cd ../server
npm install

5. Configure environment variables

Create a ".env" file inside the server directory.

PORT=5000
MONGO_URI=your_mongodb_connection_string

Add any additional API keys and AWS credentials required by your implementation. Never commit secrets to GitHub.

6. Run the backend

npm start

7. Run the frontend

Open another terminal:

cd client
npm run dev

Open the local development URL displayed in your terminal.

🔒 Environment Variables

Configure the following variables according to your backend implementation:

- "PORT" – Backend server port.
- "MONGO_URI" – MongoDB connection string.
- Additional API keys – If required by your integrations.

🎯 Project Objective

The main objective of Music Mania is to develop a user-friendly music streaming platform using modern web development technologies while gaining practical experience in full-stack development, database management, API integration and cloud technologies.

🔮 Future Enhancements

- Personalized music recommendations
- User authentication and profiles
- Playlist creation and management
- Search songs by title, artist and genre
- Recently played tracks
- Like and save favourite songs
- Improved music discovery

👨‍💻 Developer

Navneet Shukla

B.Tech – Computer Science and Engineering

📄 License

This project is developed for educational and learning purposes.
