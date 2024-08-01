import ProfileCard from "@/components/profile";
import Card from "@/components/card";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://api.dimentorin.cloud/api/v1/users");
  const data = await res.json();
  return data;
};

export default async function ServerSideDataFetching() {
  const response = await getData();

  console.log(response);

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Server Side</h1>
      <main className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
        {response &&
          response.data.map((pengguna: any) => (
            <Link
              className="cursor-pointer"
              href={`/profile/${pengguna.user_id}`}
              key={pengguna.user_id}
            >
              <Card name={pengguna.name} description={pengguna.email} />
            </Link>
          ))}
      </main>
    </>
  );
}
