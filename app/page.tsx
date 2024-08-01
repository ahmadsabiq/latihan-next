import ProfileCard from "@/components/profile";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Client Side</h1>
      <main className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
        <ProfileCard />
      </main>
    </>
  );
}
