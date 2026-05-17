# 🚀 Hire AI - MERN Stack Job Portal with AI Assistant

> A full-stack job portal web application powered by AI, designed for students to discover opportunities and for recruiters to find top talent.

Hire AI is a comprehensive MERN job portal web application where students can search and apply for jobs while recruiters can post jobs and manage applicants. The platform includes an **AI-powered chatbot assistant** that helps users with resume guidance, interview preparation, skill suggestions, and career advice.

---

## ✨ Key Features

### 👨‍🎓 Student Features
- 🔐 User Signup/Login with JWT Authentication
- 🔍 Browse and Search Jobs with Filters
- 📄 Apply for Jobs Seamlessly
- 👤 Complete Profile Management
- 📑 Resume Upload & Management
- 🤖 AI Career Assistant for Guidance
- 📚 View Application History
- ⭐ Save Favorite Jobs

### 💼 Recruiter Features
- 📝 Post and Manage Job Listings
- 🏢 Manage Company Information
- 👥 View and Manage Applicants
- 📊 Admin Dashboard with Analytics
- 📈 Track Job Performance
- 📧 Communicate with Applicants

### 🤖 AI-Powered Features
- 💬 Interactive AI Chatbot
- 🎯 Interview Question Suggestions
- 📖 Resume Review & Improvement Tips
- 🛠️ Skill Recommendations
- 💡 Career Guidance
- 📝 Cover Letter Assistance

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI Library
- **Tailwind CSS** - Styling & Responsive Design
- **Axios** - HTTP Client
- **React Router DOM** - Client-side Routing
- **Context API** - State Management

### Backend
- **Node.js** - JavaScript Runtime
- **Express.js** - Web Framework
- **MongoDB** - NoSQL Database
- **JWT** - Authentication & Authorization
- **Mongoose** - MongoDB ODM

### AI Integration
- **OpenRouter API** - LLM Provider
- **AI Chatbot** - Conversational AI Assistant

---

## 📁 Project Structure

```
hire-ai/
├── backend/
│   ├── models/
│   │   ├── userModel.js
│   │   ├── jobModel.js
│   │   ├── applicationModel.js
│   │   └── companyModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── jobRoutes.js
│   │   ├── applicationRoutes.js
│   │   └── aiRoutes.js
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── jobController.js
│   │   ├── applicationController.js
│   │   └── aiController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── config/
│   │   └── database.js
│   ├── .env
│   ├── package.json
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── JobCard.jsx
│   │   │   ├── AIAssistant.jsx
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── JobSearch.jsx
│   │   │   ├── JobDetails.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── ...
│   │   ├── context/
│   │   │   └── authContext.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
│   ├── 01-homepage.png
│   ├── 02-job-search.png
│   ├── 03-job-details.png
│   ├── 04-application-form.png
│   ├── 05-student-dashboard.png
│   ├── 06-recruiter-dashboard.png
│   ├── 07-job-posting.png
│   ├── 08-ai-assistant.png
│   └── project-structure.png
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 📸 Screenshots

### Project Structure - Backend Setup
![Project Structure](./screenshots/project-structure.png)
*VS Code showing the Job Finder project structure with backend, frontend, and screenshot folders*

---

### Homepage & Landing Page
![Homepage](./screenshots/01-homepage.png)
*Main landing page showcasing featured jobs, user login options, and platform features*

---

### Job Search & Filtering
![Job Search](./screenshots/02-job-search.png)
*Advanced job search interface with filters for location, salary, experience level, and job type*

---

### Job Details Page
![Job Details](./screenshots/03-job-details.png)
*Detailed job posting with company information, job description, requirements, and apply button*

---

### Job Application Form
![Application Form](./screenshots/04-application-form.png)
*Streamlined application process where students can apply with cover letter and resume upload*

---

### Student Dashboard
![Student Dashboard](./screenshots/05-student-dashboard.png)
*Personal dashboard showing applied jobs, saved positions, profile completeness, and application status*

---

### Recruiter Dashboard
![Recruiter Dashboard](./screenshots/06-recruiter-dashboard.png)
*Comprehensive recruiter panel for managing job postings, viewing applicants, and tracking metrics*

---

### Job Posting Form
![Job Posting](./screenshots/07-job-posting.png)
*Form for recruiters to create and publish new job listings with detailed requirements and benefits*

---

### AI Assistant Chatbot
![AI Assistant](./screenshots/08-ai-assistant.png)
*Interactive AI chatbot providing resume guidance, interview tips, and career advice in real-time*

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB
- OpenRouter API Key (for AI features)

### Environment Variables

Create a `.env` file in the **backend** folder:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hire-ai

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# AI Configuration
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=openai/gpt-3.5-turbo

# Frontend Configuration
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
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm run dev
```

The backend will run on `http://localhost:4000`

### 3️⃣ Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

---

## 🤖 AI Chatbot Setup

### Getting OpenRouter API Key

1. Visit [OpenRouter.ai](https://openrouter.ai)
2. Sign up for a free account
3. Go to **Keys** section
4. Create a new API key
5. Copy the key and paste it in your `.env` file as `OPENROUTER_API_KEY`

### Using the AI Assistant

The AI assistant is available throughout the platform:
- 💬 **Chat Interface** - Direct conversation with AI
- 🎯 **Interview Prep** - Get sample questions and answers
- 📝 **Resume Review** - Get feedback on your resume
- 🛠️ **Skill Assessment** - Identify skill gaps
- 💼 **Career Guidance** - Personalized career advice

---

## 🔑 Key Endpoints

### Authentication Endpoints
```
POST   /api/auth/register      - User registration
POST   /api/auth/login         - User login
POST   /api/auth/logout        - User logout
POST   /api/auth/refresh-token - Refresh JWT token
```

### Job Endpoints
```
GET    /api/jobs               - Get all jobs
GET    /api/jobs/:id           - Get specific job
POST   /api/jobs               - Post new job (Recruiter)
PUT    /api/jobs/:id           - Update job (Recruiter)
DELETE /api/jobs/:id           - Delete job (Recruiter)
GET    /api/jobs/search        - Search jobs with filters
```

### Application Endpoints
```
POST   /api/applications       - Apply for job
GET    /api/applications       - Get user applications
GET    /api/applications/:id   - Get application details
PUT    /api/applications/:id   - Update application status
```

### AI Endpoints
```
POST   /api/ai/chat            - Send message to AI
POST   /api/ai/resume-review   - Get resume feedback
POST   /api/ai/interview-prep  - Get interview questions
```

---

## 🗂️ Database Schema

### User Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String (hashed),
  phone: String,
  role: String (student/recruiter),
  resume: String (file path),
  profile: {
    bio: String,
    location: String,
    skills: [String],
    experience: String
  },
  applications: [ObjectId],
  savedJobs: [ObjectId],
  createdAt: Date,
  updatedAt: Date
}
```

### Job Model
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  company: ObjectId,
  location: String,
  salary: {
    min: Number,
    max: Number
  },
  jobType: String (full-time/part-time/contract),
  experienceLevel: String,
  requiredSkills: [String],
  applications: [ObjectId],
  postedBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 Authentication & Security

- **Password Hashing** - bcryptjs for secure password storage
- **JWT Tokens** - Secure token-based authentication
- **Protected Routes** - Authorization middleware on all protected endpoints
- **CORS Configuration** - Secure cross-origin requests
- **Input Validation** - Server-side validation on all inputs
- **Error Handling** - Comprehensive error handling and logging

---

## 🎨 Features in Detail

### For Students
✅ Create detailed profile with skills and experience
✅ Search jobs by location, salary, job type, and skills
✅ Apply directly to jobs with resume and cover letter
✅ Track application status in real-time
✅ Save favorite jobs for later
✅ Get personalized job recommendations
✅ Chat with AI for career guidance
✅ Upload and manage multiple resumes

### For Recruiters
✅ Create and manage job listings
✅ Review applicant profiles and resumes
✅ Track applicant progress through hiring pipeline
✅ Send messages to applicants
✅ Post multiple jobs simultaneously
✅ View analytics on job postings
✅ Filter applicants by skills and experience
✅ Schedule interviews

### AI Features
✅ Resume analysis and suggestions
✅ Interview question generator
✅ Skill gap identification
✅ Personalized career path recommendations
✅ Job description review
✅ Cover letter writing assistance
✅ 24/7 availability for guidance

---

## 📊 Future Enhancements

- 🔔 **Real-time Notifications** - Get instant updates on applications
- 📹 **Video Interviews** - Integrated video interview platform
- 🎬 **AI Video Resume** - AI-powered video interview analysis
- 💬 **Real-time Chat** - Direct messaging between recruiters and students
- 📱 **Mobile App** - Native iOS/Android applications
- 🌐 **Multi-language Support** - Support for multiple languages
- 🎯 **Advanced Analytics** - Detailed hiring analytics and insights
- 💳 **Payment Integration** - Premium features and services
- 🔗 **LinkedIn Integration** - Direct LinkedIn profile import
- 🎓 **Certification Tracking** - Skill verification and certifications

---

## 🐛 Known Issues & Limitations

- AI responses may occasionally take 2-3 seconds due to API latency
- Bulk job posting is limited to 10 jobs per day for free accounts
- Resume file size limited to 5MB
- Maximum 10 concurrent chat sessions

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes before submitting
- Update documentation if needed

---

## 📄 License

This project is open source and available under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙋 Support & Help

- **Documentation** - Check the [SCREENSHOT_GUIDE.md](SCREENSHOT_GUIDE.md) for more details
- **Issues** - Open an issue on GitHub for bugs or feature requests
- **Discussions** - Use GitHub Discussions for general questions
- **Email** - Contact Shivani Diwakar for support

---

## 👨‍💻 Author

**Shivani Diwakar**

Building amazing web applications with MERN stack 💻

- **LinkedIn** - [Shivani Diwakar](https://www.linkedin.com/in/shivani-diwakar)
- **GitHub** - [@Shivani766](https://github.com/Shivani766)
- **Portfolio** - [Coming Soon]

---

## 🙏 Acknowledgments

- **OpenRouter** - For providing excellent AI API services
- **MongoDB** - For the reliable NoSQL database
- **React.js Community** - For amazing tools and libraries
- **Tailwind CSS** - For beautiful styling framework
- All contributors and supporters of this project

---

## 📞 Contact & Social

Feel free to reach out for collaboration, questions, or just to say hi!

- 📧 Email - shivani.dev@example.com
- 💼 LinkedIn - [Shivani Diwakar](https://www.linkedin.com/in/shivani-diwakar)
- 🐙 GitHub - [@Shivani766](https://github.com/Shivani766)
- 🐦 Twitter - [@shivani_codes](https://twitter.com/shivani_codes)

---

## ⭐ Show Your Support

Give a ⭐ if you like this project!

---

**Made with ❤️ by [Shivani Diwakar](https://github.com/Shivani766)**

*Last updated: May 2024*
