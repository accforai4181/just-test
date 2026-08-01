

import Sidebar from "../component/admin/Sidebar";
import Navbar from "../component/admin/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}