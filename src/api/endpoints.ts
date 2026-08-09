export const API_ENDPOINTS = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    me: "/auth/me",
  },

  books: {
    list: "/books",
    detail: (id: string) => `/books/${id}`,
  },

  categories: {
    list: "/categories",
  },

  news: {
    list: "/news",
    detail: (id: string) => `/news/${id}`,
  },

  borrow: {
    list: "/borrow",
  },
} as const;
