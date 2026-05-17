# Hire AI - MERN Stack Job Portal with AI Assistant

Hire AI is a full-stack MERN job portal web application where students can search and apply for jobs while recruiters can post jobs and manage applicants.
The platform also includes an AI-powered chatbot assistant that helps users with:
- Resume guidance
- Interview preparation
- Skill suggestions
- Career advice

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## AI Integration
- OpenRouter API
- AI Chatbot Assistant

---

# Features

## User Features
- User Signup/Login
- Browse Jobs
- Apply for Jobs
- Profile Management
- Resume Upload
- AI Career Assistant

## Recruiter Features
- Post Jobs
- Manage Companies
- View Applicants
- Admin Dashboard

## AI Features
- AI Chatbot
- Interview Question Suggestions
- Resume Help
- Skill Recommendations

---

# Project Structure

```
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

---

# Environment Variables

Create a `.env` file inside backend folder.

```env
PORT=4000
MONGO_URI=your_mongodb_url
SECRET_KEY=your_secret_key
OPENROUTER_API_KEY=your_openrouter_key
```

---

# Installation

## Clone Repository
```bash
git clone your_repo_link
```

## Backend Setup
```bash
cd backend
npm install
npm run dev
```

## Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

# AI Chatbot Setup

This project uses OpenRouter AI API.

Get free API key:
https://openrouter.ai

Add your key inside backend `.env`.

---

# Screenshots

## Project Overview
This section shows the project structure and backend setup in VS Code.

![Job Finder Project Structure](./screenshots/project-structure.png)
*VS Code showing the Job Finder project structure with backend and frontend folders*

---

## How to Add Screenshots to Your Repository

To display screenshots properly in your README, follow these steps:

1. **Create a screenshots folder** in your repository root:
   ```bash
   mkdir screenshots
   ```

2. **Add your screenshot images** to this folder:
   - Rename your current screenshot: `Screenshots_job_finder.png` → `project-structure.png`
   - Add more screenshots for:
     - Home page/Dashboard
     - Job search page
     - Job posting page
     - Recruiter dashboard
     - AI assistant chat interface
     - User profile page

3. **Reference them in README** using markdown:
   ```markdown
   ![Feature Name](./screenshots/filename.png)
   *Brief description of the screenshot*
   ```

### Suggested Screenshots to Capture:

| Page/Feature | Description |
|---|---|
| **Homepage** | Main landing page showing featured jobs and navigation |
| **Job Search** | Job listing page with filters and search functionality |
| **Job Details** | Individual job posting with apply button |
| **Job Application** | Application form and submission process |
| **Student Dashboard** | User profile, applied jobs, and saved jobs |
| **Recruiter Dashboard** | Job postings, applicant management, and analytics |
| **AI Assistant** | Chatbot interface for resume help and career advice |
| **Admin Panel** | User management and platform statistics |

---

# Future Improvements

- Real-time Chat
- Video Interviews
- AI Resume Analyzer
- AI Mock Interviews
- Notifications
- Payment Integration

---

# Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

# License

This project is open source and available under the MIT License.

---

# Author

**Shivani Diwakar**

- **LinkedIn:** https://www.linkedin.com/in/shivani-diwakar
- **GitHub:** https://github.com/Shivani766

---

# Support

If you have any questions or need help, feel free to reach out or open an issue on GitHub.
