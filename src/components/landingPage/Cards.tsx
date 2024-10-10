import { MdDescription } from "react-icons/md";

const Cards = () => {

  const cardContent = [
    {
      imageUrl: "/home.jpg",
      title: "Control your home",
      description: "Improve your living experience",
    },
    {
      imageUrl: "/home.jpg",
      title: "Control your home",
      description: "Improve your living experience",
    },
    {
      imageUrl: "/home.jpg",
      title: "Control your home",
      description: "Improve your living experience",
    },
    {
      imageUrl: "/home.jpg",
      title: "Control your home",
      description: "Improve your living experience",
    },
  ];
  const Card = ({
    imageUrl,
    title,
    description,
  }: {
    imageUrl: string;
    title: string;
    description: string;
  }) => (
    <div className="card bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h2 className="text-white text-xl font-bold">{title}</h2>
          <p className="text-white text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
  return (
    <section className=" cards-section px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardContent.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};
export default Cards;
