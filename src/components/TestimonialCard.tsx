import { StarIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string | StaticImageData;
  stars?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatar,
  stars = 5,
}) => {
  return (
    <div className="relative max-w-[594px] mx-auto mt-5 mb-10">
      {/* Outer gradient border wrapper */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-r from-[#F45B39] to-[#F8A73E]">
        {/* Inner card */}
        <div className="relative bg-[#0C0C0D] rounded-2xl px-6 pt-4 pb-16 space-y-6 text-white text-center">
          {/* Kutipan SVG */}
          <Image
            src="/icons/testimonial-icon.svg"
            alt="quote icon"
            width={80}
            height={80}
            className="absolute -top-10 left-6 z-10"
          />

          {/* Stars */}
          <div className="flex justify-center gap-1">
            {Array(stars)
              .fill(0)
              .map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 text-[#F3B64C] fill-[#F3B64C]"
                />
              ))}
          </div>

          {/* Quote */}
          <p className="text-lg font-medium leading-relaxed px-4">“{quote}”</p>

          {/* Name & Role */}
          <div className="space-y-1">
            <p className="font-semibold text-base">{name}</p>
            <p className="text-sm text-orange-500">{role}</p>
          </div>

          {/* Avatar (floating keluar bawah card) */}
          <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
            <div className="w-20 h-20 rounded-full border-2 border-white overflow-hidden">
              <Image
                src={avatar}
                alt={name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
