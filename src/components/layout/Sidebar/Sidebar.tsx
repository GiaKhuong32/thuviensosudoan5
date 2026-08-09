function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h2 className="font-semibold text-gray-900">Danh mục</h2>

        <p className="mt-2 text-sm text-gray-600">
          Danh mục sách sẽ được hiển thị tại đây.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
