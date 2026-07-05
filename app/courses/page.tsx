"use client";

import CourseCard from "@/components/dashboard/CourseCard";
import { courses } from "@/data/courses";

import { useState } from "react";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");

const filteredCourses = courses.filter((course) =>
  course.title.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Course Catalog
      </h1>

      <div className="mb-6">
        <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg border border-gray-300 p-3"
      />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            image={course.image}
          />
        ))}
      </div>
    </main>
  );
}