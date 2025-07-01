// components/TestimonialCard.tsx
import { Star } from "lucide-react";

type TestimonialCardProps = {
  backgroundImage: string;
  avatar: string;
  name: string;
  message: string;
  rating?: number;
};

export default function TestimonialCard({
  backgroundImage,
  avatar,
  name,
  message,
  rating = 4,
}: TestimonialCardProps) {
  return (
    <div
      className="flex w-full h-120 rounded-3xl overflow-hidden shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Card content */}
      <div className="bg-white backdrop-blur-sm mb-3 w-xs p-4 h-50 rounded-2xl shadow-md text-center self-end mx-4 flex flex-col z-10">
        {/* Avatar */}
        <div className="flex justify-center -mt-10">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full border-4 border-white object-cover"
          />
        </div>

        <h3 className="mt-2 font-semibold text-lg">{name}</h3>

        <p className="mt-3 text-sm text-gray-600 italic whitespace-pre-line break-words">
          “{message}”
        </p>
        {/* Stars */}
        <div className="mt-4 flex justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-orange-400 text-orange-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
