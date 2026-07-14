# 🛍️ Product Dashboard

A modern, responsive product dashboard built with **Next.js**, **TypeScript**, and **Tailwind CSS**. The application fetches product data from the DummyJSON API and provides an interactive dashboard to browse, search, filter, sort, and favorite products.

---

## 🚀 Live Features

- 🔍 Search products by title
- 🏷️ Filter by category
- ↕️ Sort by:
  - Newest
  - Price (Low → High)
  - Price (High → Low)
  - Rating
  - Name (A → Z)
  - Name (Z → A)
- ❤️ Favorite products (persisted using Local Storage)
- 📄 Product Details page
- 🏷️ Tags and pricing details
- 📱 Fully responsive design
- ⬆️ Scroll-to-top button
- 📊 Dashboard statistics
- 💀 Skeleton loading state
- 🔔 Toast notifications using Sonner
- 🧹 Active filter chips & Reset Filters
- 📄 Pagination

---

## 🛠️ Tech Stack

- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Sonner (Toast Notifications)
- DummyJSON API

---

## 📂 Folder Structure

```text
app/
├── product/
├── layout.tsx
├── page.tsx

components/
├── common/
├── filters/
├── product/

context/
├── FavoriteContext.tsx

hooks/
├── useScrolled.ts

types/
├── product.ts
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd frontend-dashboard
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## 🌐 API Used

DummyJSON Products API

```
https://dummyjson.com/products
```

---

## 🏗️ Architecture Decisions

- **Next.js App Router** for routing and server components.
- **TypeScript** for type safety and maintainability.
- **Reusable Components** to keep the code modular and scalable.
- **Context API** manages favorite products across the application.
- **Local Storage** persists favorite products between sessions.
- **Client-side filtering and sorting** for a smooth user experience after the initial data fetch.
- **Tailwind CSS** for rapid development and responsive UI.
- **Responsive-first approach** to ensure usability across desktop, tablet, and mobile devices.

---

## 📸 Highlights

- Premium dashboard UI
- Sticky search and filter section
- Interactive product cards
- Detailed product page
- Responsive pagination
- Skeleton loaders
- Toast notifications
- Smooth animations and hover effects

---

## 📄 Future Improvements

- Dark mode support
- Server-side pagination
- URL-based filters
- Debounced search
- Product comparison
- Unit and integration testing

---

## 👩‍💻 Author

**Shreya B**
