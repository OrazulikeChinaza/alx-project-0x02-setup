import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border p-4 rounded-md shadow mb-4">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-600">{body}</p>
      <small className="text-gray-500">User ID: {userId}</small>
    </div>
  );
};

export default PostCard;
