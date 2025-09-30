import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to ALX Project 2 🚀</h2>
        <p className="mt-2 text-gray-600">
          This is a Next.js project with TypeScript and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
