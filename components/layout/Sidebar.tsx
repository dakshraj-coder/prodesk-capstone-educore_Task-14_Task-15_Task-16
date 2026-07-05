import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 p-6 text-white">
      <h2 className="mb-8 text-xl font-bold">Menu</h2>

      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:text-blue-400">
          📊 Dashboard
        </Link>

        <Link href="/courses" className="block hover:text-blue-400">
          📚 Courses
        </Link>

        <Link href="/profile" className="block hover:text-blue-400">
          👤 Profile
        </Link>

        <Link href="/instructor" className="block hover:text-blue-400">
          🎓 Instructor
        </Link>
      </nav>
    </aside>
  );
}