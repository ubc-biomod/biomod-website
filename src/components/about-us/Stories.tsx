import Image, { StaticImageData } from "next/image";
import blankImage from "@/assets/blankImage.png";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const stories: StoryInfo[] = [
  {
    name: "Septiana",
    position: "Wetlab Member",
    links: {
      linkedin: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instagram: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    content:
      "Septianna is a dedicated biology student known for her exceptional work ethic in the BIOMOD club. She frequently spends long hours in the lab, meticulously working on experiments and analyzing data. Her passion for understanding life at a cellular level drives her to explore innovative solutions to complex biological problems. Septianna's commitment goes beyond just academic performance, as she actively contributes to breakthroughs within the club. Her peers and mentors view her as a key player and a source of inspiration in their scientific endeavors.\nSeptianna’s dedication to curing cancer is a major focus of her research efforts. She invests countless hours into studying new treatment advancements, driven by a deep empathy for those affected by the disease. Her work involves staying abreast of the latest research developments, reading scholarly papers, and attending relevant conferences. Additionally, Septianna plays a vital role in community outreach, where she educates the public on cancer prevention and the importance of early detection. Her goal is to make significant contributions that could revolutionize cancer treatment and improve patient outcomes.\nOutside of her academic work, Septianna stays active through basketball, swimming, and hiking. These activities are crucial for maintaining her physical and mental well-being, helping her to balance the demands of her research. On the basketball court, she appreciates the teamwork and strategic elements, which mirror collaborative efforts in scientific research. Swimming offers her a peaceful escape, allowing her to clear her mind and recharge. Hiking connects her with nature and provides a broader perspective, reinforcing her commitment to studying and protecting the natural world.",
    picture: blankImage,
  },
  {
    name: "Septiana",
    position: "Wetlab Member",
    links: {
      linkedin: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      instagram: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    content:
      "Septianna is a dedicated biology student known for her exceptional work ethic in the BIOMOD club. She frequently spends long hours in the lab, meticulously working on experiments and analyzing data. Her passion for understanding life at a cellular level drives her to explore innovative solutions to complex biological problems. Septianna's commitment goes beyond just academic performance, as she actively contributes to breakthroughs within the club. Her peers and mentors view her as a key player and a source of inspiration in their scientific endeavors.\nSeptianna’s dedication to curing cancer is a major focus of her research efforts. She invests countless hours into studying new treatment advancements, driven by a deep empathy for those affected by the disease. Her work involves staying abreast of the latest research developments, reading scholarly papers, and attending relevant conferences. Additionally, Septianna plays a vital role in community outreach, where she educates the public on cancer prevention and the importance of early detection. Her goal is to make significant contributions that could revolutionize cancer treatment and improve patient outcomes.\nOutside of her academic work, Septianna stays active through basketball, swimming, and hiking. These activities are crucial for maintaining her physical and mental well-being, helping her to balance the demands of her research. On the basketball court, she appreciates the teamwork and strategic elements, which mirror collaborative efforts in scientific research. Swimming offers her a peaceful escape, allowing her to clear her mind and recharge. Hiking connects her with nature and provides a broader perspective, reinforcing her commitment to studying and protecting the natural world.",
    picture: blankImage,
  },
];

export default function Stories() {
  return (
    <div className="flex flex-col gap-y-6 w-full px-4 lg:px-16 items-center">
      <h1 className="text-primary font-bold text-center text-4xl md:text-6xl">
        Hear Some of Our Stories
      </h1>
      <h2 className="text-primary text-xl md:text-2xl text-center">
        These are a few of many success stories of the member of UBC Biomod
      </h2>
      {stories.map((s, i) => (
        <Story key={s.name + i} story={s} leftAligned={i % 2 == 0} />
      ))}
    </div>
  );
}

function Story({
  story,
  leftAligned,
}: {
  story: StoryInfo;
  leftAligned: boolean;
}) {
  return (
    <div
      className={
        "flex flex-col gap-x-14 px-4 " +
        (leftAligned ? "lg:flex-row" : "lg:flex-row-reverse")
      }
    >
      <Image
        className="w-full lg:w-4/6 h-[30rem] lg:h-[40rem]"
        src={story.picture}
        alt={story.name}
      />

      <div className="flex flex-col w-full text-primary gap-y-2">
        <h3
          className=" font-semibold text-2xl
                    md:text-4xl"
        >
          {story.name}
        </h3>
        <h4
          className="text-xl
                    md:text-2xl"
        >
          {story.position}
        </h4>
        <div className="flex flex-row gap-3">
          {story.links.linkedin && (
            <a href={story.links.linkedin} target="_blank">
              <FaLinkedinIn className="w-7 h-7 cursor-pointer hover:opacity-80" />
            </a>
          )}
          {story.links.instagram && (
            <a href={story.links.instagram} target="_blank">
              <FaInstagram className="w-7 h-7 cursor-pointer hover:opacity-80" />
            </a>
          )}
        </div>
        <div className="flex flex-col gap-y-6">
          {story.content.split(/\r?\n/).map((c, i) => (
            <p key={i}>{c}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

type StoryInfo = {
  name: string;
  position: string;
  links: {
    linkedin: string | null;
    instagram: string | null;
  };
  content: string;
  picture: StaticImageData;
};
