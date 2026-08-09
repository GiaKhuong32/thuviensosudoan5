import { Outlet } from "react-router-dom";

import { Header } from "@/components/layout";

function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default PublicLayout;
