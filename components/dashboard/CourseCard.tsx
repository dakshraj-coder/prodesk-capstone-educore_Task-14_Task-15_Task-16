import Image from "next/image";
import Link from "next/link";

type CourseCardProps = {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  image: string;
};

export default function CourseCard({
  id,
  title,
  instructor,
  duration,
  image,
}: CourseCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md hover:shadow-lg transition">
      <Image
      src={image}
      alt={title}
      width={400}
      height={200}
      className="mb-4 h-40 w-full rounded-lg object-cover"
    />

      {/* Course Title */}
      <h2 className="text-xl font-semibold">{title}</h2>

      {/* Category Badge */}
      <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
        Frontend
      </span>

      {/* Rating */}
      <p className="mt-3 text-yellow-500">⭐⭐⭐⭐⭐ 4.8</p>

      {/* Instructor */}
      <p className="mt-2 text-gray-600">
        <strong>Instructor:</strong> {instructor}
      </p>

      {/* Duration */}
      <p className="mt-1 text-gray-600">
        <strong>Duration:</strong> {duration}
      </p>

      {/* Button */}
      <Link
        href={`/courses/${id}`}
        className="mt-5 block rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
      >
        View Course
      </Link>
    </div>
  );
}