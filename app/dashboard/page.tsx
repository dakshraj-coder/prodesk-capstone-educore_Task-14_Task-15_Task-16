import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 bg-slate-100">
  <h1 className="text-3xl font-bold mb-6">
    Student Dashboard
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-lg font-semibold">Courses Enrolled</h2>
      <p className="mt-3 text-4xl font-bold text-blue-600">12</p>
    </div>

    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-lg font-semibold">Completed</h2>
      <p className="mt-3 text-4xl font-bold text-green-600">8</p>
    </div>

    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-lg font-semibold">Certificates</h2>
      <p className="mt-3 text-4xl font-bold text-purple-600">5</p>
    </div>
  </div>
</main>
      </div>

      <Footer />
    </>
  );
}