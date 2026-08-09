export interface NavChild {
  to: string;
  label: string;
}

export interface NavItem {
  to?: string;
  label: string;
  end?: boolean;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  // Trang chủ
  {
    to: "/",
    label: "TRANG CHỦ",
    end: true,
  },

  // Giới thiệu
  {
    to: "/about",
    label: "GIỚI THIỆU",
  },

  // Kho tài liệu
  {
    label: "KHO TÀI LIỆU",
    children: [
      {
        to: "/books/ebooks",
        label: "Sách & Tài liệu học tập",
      },
      {
        to: "/books/magazines",
        label: "Tạp chí & Báo khoa học",
      },
      {
        to: "/books/research",
        label: "Luận văn & Nghiên cứu khoa học",
      },
      {
        to: "/books/documents",
        label: "Văn bản chỉ đạo",
      },
      {
        to: "/books/regulations",
        label: "Điều lệnh & Hướng dẫn kỹ thuật",
      },
      {
        to: "/books/maps",
        label: "Bản đồ & Sơ đồ quân sự",
      },
      {
        to: "/books/military-history",
        label: "Lịch sử quân sự",
      },
      {
        to: "/books/literature",
        label: "Văn hóa - Văn nghệ",
      },
    ],
  },

  // Đa phương tiện
  {
    label: "ĐA PHƯƠNG TIỆN",
    children: [
      {
        to: "/multimedia/lectures",
        label: "Bài giảng & Hội thảo",
      },
      {
        to: "/multimedia/education",
        label: "Giáo dục chính trị & Truyền thống",
      },
      {
        to: "/multimedia/news",
        label: "Tin tức & Báo cáo",
      },
      {
        to: "/multimedia/documentary",
        label: "Phim tài liệu & Huấn luyện",
      },
      {
        to: "/multimedia/podcast",
        label: "Podcast & Sách nói",
      },
    ],
  },

  // Tin tức
  {
    to: "/news",
    label: "TIN TỨC",
  },
];
