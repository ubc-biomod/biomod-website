import amazonIcon from "@/assets/sponsors/amazon-text.png";
import googleIcon from "@/assets/sponsors/google-text.png";
import drracketIcon from "@/assets/sponsors/drracket-text.png";
import microsoftIcon from "@/assets/sponsors/microsoft-text.png";

type StaticImageData = {
  src: string;
};

export const PastSponsors: React.FC = () => {
  return (
    <div className="flex flex-col md:w-3/4 mx-auto">
      <h2 className="text-5xl md:text-7xl my-10 text-center text-primary">
        Past Sponsors
      </h2>
      <div className="flex overflow-hidden">
        <div className="flex space-x-2 ml-2 md:ml-8 md:space-x-8 animate-loop-scroll">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(amazonIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none filter grayscale hover:grayscale-0"
              alt="Amazon Logo Wide"
            />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(googleIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none mt-6 md:mt-12 filter grayscale hover:grayscale-0"
              alt="Google Logo Wide"
            />
          </a>
          <a
            href="https://racket-lang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(drracketIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none filter grayscale hover:grayscale-0"
              alt="DrRacket Logo Wide"
            />
          </a>
          <a
            href="https://www.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(microsoftIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none mt-6 md:mt-12 filter grayscale hover:grayscale-0"
              alt="Microsoft Logo Wide"
            />
          </a>
        </div>
        <div className="flex space-x-2 ml-2 md:ml-8 md:space-x-8 animate-loop-scroll">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(amazonIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none filter grayscale hover:grayscale-0"
              alt="Amazon Logo Wide"
            />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(googleIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none mt-6 md:mt-12 filter grayscale hover:grayscale-0"
              alt="Google Logo Wide"
            />
          </a>
          <a
            href="https://racket-lang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(drracketIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none filter grayscale hover:grayscale-0"
              alt="DrRacket Logo Wide"
            />
          </a>
          <a
            href="https://www.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(microsoftIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none mt-6 md:mt-12 filter grayscale hover:grayscale-0"
              alt="Microsoft Logo Wide"
            />
          </a>
        </div>
        <div
          className="flex space-x-2 ml-2 md:ml-8 md:space-x-8 animate-loop-scroll"
          aria-hidden="true"
        >
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(amazonIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none filter grayscale hover:grayscale-0"
              alt="Amazon Logo Wide"
            />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(googleIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none mt-6 md:mt-12 filter grayscale hover:grayscale-0"
              alt="Google Logo Wide"
            />
          </a>
          <a
            href="https://www.drracket.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(drracketIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none filter grayscale hover:grayscale-0"
              alt="DrRacket Logo Wide"
            />
          </a>
          <a
            href="https://www.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={(microsoftIcon as StaticImageData).src}
              className="h-12 md:h-14 max-w-none mt-6 md:mt-12 filter grayscale hover:grayscale-0"
              alt="Microsoft Logo Wide"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PastSponsors;
