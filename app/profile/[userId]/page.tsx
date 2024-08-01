import React from "react";

const getUserById = async (userId: string) => {
  const res = await fetch(
    `https://api.dimentorin.cloud/api/v1/users/${userId}`
  );
  const data = await res.json();
  return data;
};

export default async function DetailUser({
  params,
}: {
  params: { userId: string };
}) {
  const response = await getUserById(params.userId);

  console.log(response);

  return (
    <div className="p-5">
      <div className="bg-blue-600 text-white p-5">
        <h1 className="text-center text-3xl font-bold">
          Detail {response?.data?.name}
        </h1>
        <p>Role: {response?.data?.role}</p>
        <p>Email: {response?.data?.email}</p>
      </div>
    </div>
  );
}
