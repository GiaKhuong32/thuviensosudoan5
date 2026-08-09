import { Outlet } from "react-router-dom";

import { Banner, Footer, Header, Navbar, Sidebar } from "@/components/layout";

function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <Navbar />

      <Banner />

      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-4 py-6">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default PublicLayout;
