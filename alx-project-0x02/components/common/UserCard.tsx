import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-md shadow mb-4">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>{email}</p>
      <small className="text-gray-500">
        {address.street}, {address.city}
      </small>
    </div>
  );
};

export default UserCard;
