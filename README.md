# Chameleon

[![View on GitHub](https://img.shields.io/badge/View%20on-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/kartiksharmakanu0507-afk/chameleon)

> **Local Dev:** [http://localhost:3001](http://localhost:3001)

A dynamic fashion brand website that adapts its visual theme based on the selected collection. Built with Next.js, MongoDB, and Tailwind CSS.

---

## Features

- Theme-switching UI — Forest, Danger, Night, Sun collections
- Dynamic hero section that changes color and imagery per theme
- Product detail page
- User authentication (MongoDB + bcrypt)
- Fully responsive design with Tailwind CSS

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | Next.js 16, React 19, TypeScript    |
| Styling    | Tailwind CSS v4                     |
| Backend    | Next.js API Routes                  |
| Database   | MongoDB + Mongoose                  |
| Auth       | bcryptjs                            |

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kartiksharmakanu0507-afk/chameleon.git
   cd chameleon
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3001](http://localhost:3001) in your browser.

---

## Project Structure

```
chameleon/
├── app/
│   ├── api/           # API routes
│   ├── product/       # Product detail page
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx       # Home page with theme switcher
├── components/
│   ├── AuthModal.tsx
│   ├── CollectionCard.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── models/
│   └── User.ts        # Mongoose User schema
├── lib/
└── context/
```

---

## Environment Variables

| Variable      | Description                  |
|---------------|------------------------------|
| `MONGODB_URI` | MongoDB connection string    |

> Never commit your `.env.local` file. It is already in `.gitignore`.

---

## Contributors

| Name          | GitHub                                                                 |
|---------------|------------------------------------------------------------------------|
| Kartik Sharma | [@kartiksharmakanu0507-afk](https://github.com/kartiksharmakanu0507-afk) |

---

## License

MIT
