// components/Sidebar.jsx

"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
        Admin Panel
      </h1>

      <ul className="space-y-5">
        <li>
          <Link href="/admin">Dashboard</Link>
        </li>

        <li>
          <Link href="/admin/users">Users</Link>
        </li>

        <li>
          <Link href="/admin/products">Products</Link>
        </li>

        <li>
          <Link href="/admin/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}