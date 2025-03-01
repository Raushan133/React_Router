import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="bg-green-700 text-2xl p-3 text-white">User : {userId}</div>
  );
}
