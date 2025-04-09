# 🔍 Quick Search App

This is a quick book search app built with **React**, **Redux Toolkit + RTK Query**, **styled-components**, and **TypeScript**, using the [OpenLibrary API](https://openlibrary.org/dev/docs/api/).

It features real-time search suggestions, smooth UX feedback, and Amazon linking per book result.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/quick-search-app.git
cd quick-search-app
```

### 2. Install dependencies (using pnpm)

```bash
pnpm install
```

> If you don’t have pnpm:
> ```bash
> npm install -g pnpm
> ```

### 3. Run the app

```bash
pnpm dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

---

## 🧲 Running Tests

This project uses **Vitest** + **React Testing Library**.

### Run tests:

```bash
pnpm test
```

### Run tests in UI mode (dev-friendly interface):

```bash
pnpm test:ui
```

---

## 🧰 Stack

- 🧩 **React**
- 🛠️ **Redux Toolkit + RTK Query**
- 💅 **styled-components**
- 🧠 **TypeScript**
- ⚡ **Vite**
- 🧲 **Vitest** + **@testing-library/react**

---

## 🗂️ Project Structure

```
src/
│
├── app/               # Redux store setup
├── components/        # UI components (Header, SearchBar, Results)
├── features/          # Redux slices and logic
├── __tests__/         # Unit/integration tests
└── types/             # Custom TS types
```

---

## 📖 Features

- 🔎 **Live search** with OpenLibrary API (starts after 3 characters)
- ⚡ **Instant feedback** (Loading, No results, Error, etc.)
- 📚 **Amazon search integration** for each result
- 🧲 Fully **typed** and tested with Vitest

---

## 🧼 Scripts

```json
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"test": "vitest",
"test:ui": "vitest --ui"
```

---

## 📌 Notes

- The search avoids unnecessary calls when input is shorter than 2 characters.
- The app uses `isFetching` from RTK Query to ensure loading indicators show properly even with cached data.

---

Feel free to reach out if you have any questions or feedback!