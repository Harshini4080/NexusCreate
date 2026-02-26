#  NexusCreate – AI-Powered Full-Stack Creator Suite
The all-in-one creator suite for writing, designing & editing — powered by AI.

##  Project Overview
NexusCreate is a full-stack AI-powered web application that helps creators generate articles, blog titles, images, edit visuals, review resumes, and share content — all from a single unified dashboard.

##  Tools & Technologies
### Frontend
- React 18 + Vite
- Tailwind CSS + DaisyUI
- Zustand (State Management)
- Axios

### Backend
- Node.js + Express.js
- Prisma ORM
- RESTful APIs
- JWT Authentication
- 
  ### Database
- PostgreSQL

  ### AI Integrations
- OpenAI GPT-4o-mini (Article, Titles, Resume Review)
- Replicate – Stable Diffusion XL (Image Generation)
- Remove.bg API (Background Removal)
- Cloudinary (Image Storage)
  
   ###  Deployment
 - Vercel (Frontend)
 - Render (Backend + Database)
 - GitHub Actions (CI/CD)

   ### Authentication
 - Email & Password Login
 - Google OAuth 2.0
 - JWT-based protected routes
 - Secure password hashing with bcrypt

---

##  Features

### AI Writing
- Full-length article generation with tone selection
- SEO-friendly blog title generator 
- Rich text editor
- Save & export functionality
  !("<img width="1308" height="737" alt="home" src="https://github.com/user-attachments/assets/11e578ef-5f44-4491-b391-e8ed755819ac" />
")

###  AI Image Tools
- Text-to-image generation (Stable Diffusion XL)
- Background removal (Remove.bg API)
- Object removal (AI inpainting)
- Transparent PNG download
![(<img width="1330" height="736" alt="Insurance" src="https://github.com/user-attachments/assets/5afde535-86c7-4f45-8c95-a449d83dfca6" />
)

###  Resume Reviewer
- Upload PDF/DOCX resume
- ATS score generation
- AI-based improvement suggestions
- Bullet-point rewriting
![(<img width="1320" height="736" alt="Loans" src="https://github.com/user-attachments/assets/f2e4f684-2522-48a0-8516-c6ad1c9ffa45" />
)

###  Community Hub
- Share creations
- Like & comment on posts
- Infinite scrolling feed
- Admin moderation support
![(<img width="1323" height="741" alt="Money-Transfer" src="https://github.com/user-attachments/assets/aee75d8f-eeaf-4a62-861c-199e2a9131a9" />
)

### User Dashboard
- View all saved projects
- Track AI credit usage
- Manage profile & posts
![(<img width="1327" height="733" alt="Recharge-Bills" src="https://github.com/user-attachments/assets/b86dfc2b-f7f8-477e-9c27-0c9b20141e53" />
)

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/nexuscreate.git

```
Navigate into the project:
```bash
cd nexuscreate
```
Install dependencies:
Frontend
```bash
cd client
npm install
```
Backend
```baseh
cd server
npm install
```
Configure Environment Variables:
Create a .env file inside server/:
```bash
DATABASE_URL=your_postgresql_url
CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
GROQ_API_KEY=your_groq_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret_key
```

Run the Project
Backend
```bash
npm run server
```

Frontend
```bash
npm run dev
```



