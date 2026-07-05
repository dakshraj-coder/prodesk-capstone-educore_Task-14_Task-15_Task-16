import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between bg-blue-600 px-6 text-white shadow">
      <h1 className="text-2xl font-bold">EduCore</h1>

      <div className="flex gap-6">
        <Link href="/dashboard" className="hover:text-blue-200">
          Dashboard
        </Link>

        <Link href="/courses" className="hover:text-blue-200">
          Courses
        </Link>

        <Link href="/profile" className="hover:text-blue-200">
          Profile
        </Link>

        <Link href="/instructor" className="hover:text-blue-200">
          Instructor
        </Link>
      </div>
    </nav>
  );
}