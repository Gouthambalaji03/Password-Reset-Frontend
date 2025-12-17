# Password Reset Frontend

A modern, responsive password reset application built with React and Vite. Features a sleek dark theme with green accents and glassmorphism design.

## Live Demo

**[View Live Application](https://password-reset-frontend-xi.vercel.app)**

## Features

- **User Authentication** - Login and Register functionality
- **Password Recovery** - Forgot password and reset password flow via email
- **Modern UI** - Dark theme with green accents and glassmorphism effects
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Toast Notifications** - User-friendly feedback with react-toastify
- **JWT Authentication** - Secure token-based authentication

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM 7** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Toastify** - Toast notifications

## Project Structure

```
src/
├── Components/
│   └── Navbar.jsx          # Navigation bar component
├── Pages/
│   ├── Home.jsx            # Landing page
│   ├── Login.jsx           # User login page
│   ├── Register.jsx        # User registration page
│   ├── ForgotPassword.jsx  # Password recovery request
│   ├── ResetPassword.jsx   # Password reset form
│   └── PageNotFound.jsx    # 404 error page
├── Services/
│   └── api.js              # Axios instance with interceptors
├── App.jsx                 # Main app with routing
├── main.jsx                # Entry point
└── index.css               # Global styles and theme
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd Password-Reset-Frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## API Configuration

The app connects to a backend API. Update the base URL in `src/Services/api.js`:

```javascript
const api = axios.create({
  baseURL: "https://your-backend-url.com/api",
});
```

### API Endpoints Used

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth/register` | POST | Register new user |
| `/auth/login` | POST | User login |
| `/auth/forgot-password` | POST | Request password reset email |
| `/auth/reset-password/:id/:token` | POST | Reset password with token |

## Environment Variables

Create a `.env` file in the root directory if needed:

```env
VITE_API_URL=https://your-backend-url.com/api
```

## Design Features

- **Dark Theme** - Easy on the eyes with a dark background
- **Green Accents** - Modern green color palette (#22c55e, #16a34a)
- **Glassmorphism** - Frosted glass card effects
- **Smooth Animations** - Slide-up and fade-in transitions
- **Touch Feedback** - Active states for mobile interactions
- **Responsive Typography** - Scales across all device sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and not licensed for public use.
