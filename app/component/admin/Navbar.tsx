// components/Navbar.jsx

export default function Navbar() {
  return (
    <div className="bg-white text-black shadow p-5 flex justify-between">
      <h2 className="font-bold text-xl">
        Dashboard
      </h2>

      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}