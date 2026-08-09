# PROJECT RULES

## 1. Stack & Version

- React `18.2.0`
- TypeScript `5.4.5`
- Vite `5.4.19`
- Tailwind CSS `3.4.17`
- React Router `6.22.3`
- Axios `1.6.8`
- TanStack Query `5.59.20`
- Zustand `4.5.5`
- React Hook Form `7.51.5`
- Zod `3.22.4`
- React Icons `5.5.0`

**Rules:**

- Pin version cụ thể, không dùng `^`, `~`, `latest`.
- Commit `package-lock.json`.
- Không tự ý nâng version.

---

## 2. Browser

- Hỗ trợ **Chrome 80+**.
- Vite: `build.target = "chrome80"`.
- Browserslist: `Chrome >= 80`.
- Không dùng Web API mới nếu không có fallback/polyfill.

---

## 3. Architecture

```text
src/
├── api/              # Axios, interceptor, endpoints
├── assets/            # fonts, images, icons, styles
├── components/
│   ├── layout/        # Header, Navbar, Sidebar, Footer...
│   └── ui/            # Button, Input, Modal, Table...
├── features/          # Business/domain logic
├── hooks/             # Shared hooks
├── layouts/           # Compose layout + Outlet
├── pages/             # Page-level components
├── routes/
├── services/          # Shared non-API services
├── store/             # Global client state
├── types/             # Shared types only
├── utils/
├── App.tsx
└── main.tsx
```

- `components/layout` = UI pieces, không biết page/domain.
- `layouts` = ghép layout + `<Outlet />`.
- `features` = business/domain logic.
- `pages` = compose feature/components.
- Không over-engineering.

---

## 4. Feature Structure

```text
features/books/
├── api/book.api.ts
├── components/
├── hooks/
├── pages/
├── store/book.store.ts
└── book.types.ts
```

Mỗi feature tự quản lý API, components, hooks, types và UI state của nó.

---

## 5. Naming

```text
Component → BookCard.tsx
Hook      → useBook.ts
Store     → book.store.ts
API       → book.api.ts
Types     → book.types.ts
Service   → xxx.service.ts
```

---

## 6. State Management

### Server State → TanStack Query

- Books
- News
- Categories
- Borrow
- Users
- API data

**Không lưu server data vào Zustand.**

### Client/UI State → Zustand

- Auth
- Theme
- Sidebar
- Modal
- Filters
- View mode

Store phải nhỏ, không duplicate state.

---

## 7. API

```text
src/api/
├── axios.ts
├── interceptor.ts
└── endpoints.ts
```

Domain API:

```text
features/books/api/book.api.ts
features/news/api/news.api.ts
```

Không gọi Axios trực tiếp trong component/page.

---

## 8. Theme

```css
--color-primary: #d32029;
--color-primary-hover: #b71c1c;
--color-bg: #ffffff;
--color-text: #1a1a1a;
--font-size-base: 14px;
```

- Nền trắng.
- Đỏ chủ đạo.
- **Font-size tối thiểu 14px.**
- Không dùng `text-xs` mặc định 12px.

---

## 9. Routing

```text
PublicLayout
├── /
├── /about
├── /books
├── /books/:id
├── /books/search
├── /categories
├── /news
└── /profile

AuthLayout
└── /login

AdminLayout
├── /dashboard
├── /dashboard/books
├── /dashboard/categories
├── /dashboard/users
├── /dashboard/news
├── /dashboard/borrow
└── /dashboard/statistics
```

Dùng nested routes + `<Outlet />`.

---

## 10. TypeScript & Code Quality

- `strict: true`.
- Functional Components only.
- Không Class Component.
- Hạn chế `any`.
- Không `@ts-ignore` nếu không có lý do rõ ràng.
- ESLint + Prettier bắt buộc.
- Alias `@/`.
- Component một trách nhiệm.
- Tách UI và business logic.

---

## 11. Data UI

Data-driven page phải xử lý đủ:

```text
Loading
Success
Empty
Error
```

Form phức tạp:

```text
React Hook Form + Zod
```

---

## 12. Environment & Security

- Không hard-code API URL/secret.
- Dùng `.env`.
- Commit `.env.example`.
- Không commit `.env`, `node_modules`, `dist`.
- `VITE_*` không chứa secret backend.

---

## 13. Definition of Done

Trước khi hoàn thành feature:

```text
✓ TypeScript pass
✓ ESLint pass
✓ Build pass
✓ Chrome 80+
✓ Loading / Empty / Error
✓ Responsive
✓ Accessibility cơ bản
✓ Đúng architecture
✓ Không duplicate state
✓ Không dependency thừa
```

### Core Principle

> **Simple · Typed · Maintainable · Compatible**

> **TanStack Query = Server State**
> **Zustand = Client/UI State**
> **Features = Business Logic**
> **Components = UI**
> **Layouts = Page Structure**
