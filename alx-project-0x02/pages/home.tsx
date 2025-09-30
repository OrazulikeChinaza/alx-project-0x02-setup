// pages/home.tsx
import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { Post } from "@/interfaces";
import Header from "@/components/layout/Header";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Beautiful Villa",
      content: "A luxurious villa with a private pool and garden view.",
    },
    {
      title: "City Apartment",
      content: "Modern apartment located in the heart of the city.",
    },
    {
      title: "Cozy Cottage",
      content: "A small, warm cottage perfect for a peaceful getaway.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p>This is the home page of the Next.js project.</p>
        <button
          className="mt-4 mb-6 px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Add New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        {isModalOpen && (
          <PostModal
            isOpen={isModalOpen}
            onSubmit={handleAddPost}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </main>
    </>
  );
};

export default HomePage;
