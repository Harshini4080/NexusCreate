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
  !("<img width="1883" height="797" alt="Screenshot 2026-02-26 105301" src="https://github.com/user-attachments/assets/a9bced2b-d15d-4e85-8aae-ce58246e9fa6" />
")
!("<img width="1893" height="708" alt="Screenshot 2026-02-26 105336" src="https://github.com/user-attachments/assets/5c7d23c3-c44a-403a-bfb8-806ca1060fe3" />


")

###  AI Image Tools
- Text-to-image generation (Stable Diffusion XL)
- Background removal (Remove.bg API)
- Object removal (AI inpainting)
- Transparent PNG download
![(<![(<<img width="1871" height="807" alt="Screenshot 2026-02-26 105419" src="https://github.com/user-attachments/assets/67340ca4-1df9-487e-9588-c9cce98dc63f" />
 /> 
![(<img width="1871" height="743" alt="Screenshot 2026-02-26 105815" src="https://github.com/user-attachments/assets/068e69a0-8660-464e-97cd-278bd72bc47c" />
 />
![(<img width="1890" height="760" alt="Screenshot 2026-02-26 105748" src="https://github.com/user-attachments/assets/e4ee8f45-5c85-497d-abb1-f97fddf9fe3c" />

)

###  Resume Reviewer
- Upload PDF/DOCX resume
- AI-based improvement suggestions
- Bullet-point rewriting
![(<<img width="1872" height="779" alt="Screenshot 2026-02-26 105906" src="https://github.com/user-attachments/assets/2665a925-c4b2-4f54-8c15-85e48299116e" />
 />
)


### User Dashboard
- View all saved projects
- Track AI credit usage
- Manage profile & posts
![(<img width="1887" height="902" alt="Screenshot 2026-02-26 105224" src="https://github.com/user-attachments/assets/a36acf03-d4c3-4a0c-bd19-98f927b246a4" />

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



