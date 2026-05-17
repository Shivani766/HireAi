# 🚀 Hire AI - MERN Stack Job Portal with AI Assistant

Hire AI is a full-stack MERN job portal web application where students can search and apply for jobs while recruiters can post jobs and manage applicants.

---

## ✨ Key Features

### 👨‍🎓 Student Features
- 🔐 User Signup/Login with JWT Authentication
- 🔍 Browse and Search Jobs with Filters
- 📄 Apply for Jobs Seamlessly
- 👤 Complete Profile Management
- 📑 Resume Upload & Management
- 🤖 AI Career Assistant for Guidance

### 💼 Recruiter Features
- 📝 Post and Manage Job Listings
- 🏢 Manage Company Information
- 👥 View and Manage Applicants
- 📊 Admin Dashboard with Analytics

### 🤖 AI-Powered Features
- 💬 Interactive AI Chatbot
- 🎯 Interview Question Suggestions
- 📖 Resume Review & Improvement Tips
- 🛠️ Skill Recommendations

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### AI Integration
- OpenRouter API
- AI Chatbot Assistant

---

## 📸 Screenshots

### Project Structure - Backend Setup
![Project Structure](https://raw.githubusercontent.com/Shivani766/hire-ai/main/screenshots/project-structure.png)

### Homepage & Landing Page
![Homepage](https://raw.githubusercontent.com/Shivani766/hire-ai/main/screenshots/01-homepage.png)

### Job Search & Filtering
![Job Search](https://raw.githubusercontent.com/Shivani766/hire-ai/main/screenshots/02-job-search.png)

### Job Details Page
![Job Details](https://raw.githubusercontent.com/Shivani766/hire-ai/main/screenshots/03-job-details.png)

### Job Application Form
![Application Form](https://raw.githubusercontent.com/Shivani766/hire-ai/main/screenshots/04-application-form.png)

### Student Dashboard
![Student Dashboard](https://raw.githubusercontent.com/Shivani766/hire-ai/main/screenshots/05-student-dashboard.png)

### Recruiter Dashboard
![Recruiter Dashboard](https://raw.githubusercontent.com/Shivani766/hire-ai/main/screenshots/06-recruiter-dashboard.png)

### Job Posting Form
![Job Posting](https://raw.githubusercontent.com/Shivani766/hire-ai/main/screenshots/07-job-posting.png)

### AI Assistant Chatbot
![AI Assistant](https://raw.githubusercontent.com/Shivani766/hire-ai/main/screenshots/08-ai-assistant.png)

---

## 📁 Project Structure

```
hire-ai/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   ├── .env
│   ├── package.json
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
├── screenshots/
│   ├── project-structure.png
│   ├── 01-homepage.png
│   ├── 02-job-search.png
│   ├── 03-job-details.png
│   ├── 04-application-form.png
│   ├── 05-student-dashboard.png
│   ├── 06-recruiter-dashboard.png
│   ├── 07-job-posting.png
│   └── 08-ai-assistant.png
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account
- OpenRouter API Key

### Environment Variables

Create a `.env` file in the **backend** folder:

```env
PORT=4000
NODE_ENV=development
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hire-ai
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
OPENROUTER_API_KEY=your_openrouter_api_key_here
VITE_API_URL=http://localhost:4000/api
```

---

## 📥 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shivani766/hire-ai.git
cd hire-ai
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:4000`

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 🤖 AI Chatbot Setup

1. Visit [OpenRouter.ai](https://openrouter.ai)
2. Sign up for a free account
3. Create a new API key
4. Add it to your `.env` file as `OPENROUTER_API_KEY`

---

## 🔑 Key API Endpoints

### Authentication
```
POST   /api/auth/register      - User registration
POST   /api/auth/login         - User login
POST   /api/auth/logout        - User logout
```

### Jobs
```
GET    /api/jobs               - Get all jobs
GET    /api/jobs/:id           - Get specific job
POST   /api/jobs               - Post new job
PUT    /api/jobs/:id           - Update job
DELETE /api/jobs/:id           - Delete job
```

### Applications
```
POST   /api/applications       - Apply for job
GET    /api/applications       - Get user applications
PUT    /api/applications/:id   - Update application status
```

### AI
```
POST   /api/ai/chat            - Chat with AI
POST   /api/ai/resume-review   - Get resume feedback
POST   /api/ai/interview-prep  - Get interview questions
```

---

## 🔐 Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Protected routes with authorization middleware
- CORS configuration
- Input validation on all endpoints
- Comprehensive error handling

---

## 📊 Future Enhancements

- Real-time Notifications
- Video Interviews
- Mobile App (iOS/Android)
- Multi-language Support
- Advanced Analytics
- Payment Integration
- LinkedIn Integration

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 👨‍💻 Author

**Shivani Diwakar**

- **LinkedIn:** [Shivani Diwakar](https://www.linkedin.com/in/shivani-diwakar)
- **GitHub:** [@Shivani766](https://github.com/Shivani766)

---

## 🙏 Acknowledgments

- OpenRouter for AI API services
- MongoDB for reliable database
- React.js community for amazing tools
- Tailwind CSS for styling framework

---

## ⭐ Show Your Support

Give a ⭐ if you like this project!

---

**Made with ❤️ by [Shivani Diwakar](https://github.com/Shivani766)**
