interface ProfileCardProps {
  name?: string;
  description?: string;
}

export default function Card({ name, description }: ProfileCardProps) {
  return (
    <div className="bg-blue-600 text-white p-3  rounded-lg">
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="">{description}</p>
    </div>
  );
}
