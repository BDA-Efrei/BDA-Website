import Image from "next/image";

interface EventCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText?: string;
  buttonUrl?: string;
}

export default function EventCard({
  title,
  description,
  imageSrc,
  buttonText,
  buttonUrl,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#7f1623] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {buttonText && buttonUrl && (
          <a
            href={buttonUrl}
            className="inline-block px-4 py-2 bg-[#fcd82f] text-[#7f1623] font-medium rounded-md hover:bg-[#fcd82f]/90 transition-colors"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
