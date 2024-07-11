import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  subtitle: string;
  body: string;
  href: string;
  img?: string;
};

function Card({ title, subtitle, body, href, img }: CardProps) {
  return (
    <div className="flex flex-col bg-[#F9F9F9] border shadow-sm rounded-xl">
      {img && (
        <img
          className="w-full h-auto rounded-t-xl"
          src={img}
          alt="Image Description"
        />
      )}
      <div className="p-4 md:p-5">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <p className="mt-1 text-sm text-gray-500 font-semibold">{subtitle}</p>
        <p className="mt-6 text-gray-500">{body}</p>
        <a
          href={href}
          className="w-fit mt-5 flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity duration-150"
        >
          Learn more
          <svg
            width="6"
            height="9"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5"
          >
            <path
              d="M1.25 7.5L4.75 4L1.25 0.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;
