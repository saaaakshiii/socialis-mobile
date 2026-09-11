# 🌍 e-KALP Mobile
<img width="720" height="1465" alt="WhatsApp Image 2026-09-11 at 23 48 55 (1)" src="https://github.com/user-attachments/assets/b7e04455-05bb-4186-b8b7-6aaf132ad476" /> <img width="720" height="1465" alt="WhatsApp Image 2026-09-11 at 23 48 56 (1)" src="https://github.com/user-attachments/assets/14ec5ae9-fd09-42b1-a011-fea860b068e4" />

<img width="720" height="1465" alt="WhatsApp Image 2026-09-11 at 23 48 58 (1)" src="https://github.com/user-attachments/assets/26d888fd-3376-4ee7-852a-1ddc16986ada" /> <img width="720" height="1465" alt="WhatsApp Image 2026-09-11 at 23 48 57 (1)" src="https://github.com/user-attachments/assets/895d7a43-db58-42e5-a61f-41f932d51514" />


> **A mobile platform for reporting, tracking, and managing community problems.**

e-KALP Mobile is an Expo + React Native application developed as part of the **Socialis** project. The platform allows citizens to report community issues, view reported problems, track their status, and access AI-powered features for problem analysis and assistance.

---

## 📱 Features

### 🏠 Home Dashboard
- User-friendly mobile interface
- Quick access to important platform features
- Community-focused problem reporting

### 📝 Report Problems
Users can report issues related to their community by providing:

- Problem title
- Detailed description
- Location
- Category information
- Additional problem details

### 📋 Community Problems

Users can:

- View all reported community problems
- See problem token numbers
- View problem descriptions
- Check locations
- Track problem status
- View problem categories
- Refresh the problem list

### 🤖 AI Analysis

The application includes an AI-powered problem analysis feature that can help with:

- Problem categorization
- Priority analysis
- Smart problem classification
- AI-assisted decision making

### 🎤 AI Voice Assistant

Socialis includes an AI Voice Assistant interface designed to improve accessibility and provide users with a more natural way to interact with the platform.

### 👤 User Profile

Users can access and manage their profile through the mobile application.

---

## 🛠️ Tech Stack

### Frontend

- React Native
- Expo
- Expo Router
- TypeScript

### UI & Icons

- React Native StyleSheet
- Expo Vector Icons
- React Native Safe Area Context

### Backend Integration

- FastAPI
- REST APIs
- PostgreSQL
- SQLAlchemy

---

## 📂 Project Structure

```text
socialis-mobile/
│
├── assets/
│   └── images/
│
├── constants/
│   └── theme.ts
│
├── services/
│   ├── api.ts
│   └── problems.ts
│
├── src/
│   ├── app/
│   │   ├── (tabs)/
│   │   │   ├── _layout.tsx
│   │   │   ├── index.tsx
│   │   │   ├── problems.tsx
│   │   │   ├── profile.tsx
│   │   │   └── report.tsx
│   │   │
│   │   ├── problem/
│   │   │   └── [id].tsx
│   │   │
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   ├── onboarding.tsx
│   │   ├── report-problem.tsx
│   │   ├── ai-analysis.tsx
│   │   └── voice-assistant.tsx
│   │
│   └── components/
│       ├── AIAnalysisCard.tsx
│       ├── ProblemCard.tsx
│       ├── StatusBadge.tsx
│       └── Timeline.tsx
│
├── app.json
├── eas.json
├── package.json
└── README.md
