const members: MemberInfo[] = [
  {
    name: "John Cena",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
];

export default function Team() {
  return (
    <div className="flex flex-col gap-y-6 w-full items-center">
      <h1 className="text-primary font-bold text-4xl md:text-6xl">
        Some Cool Tagline about BIOMOD
      </h1>
      <h2 className="text-primary text-xl md:text-2xl">
        Meet some of the faces behind BIOMOD
      </h2>

      <div className="flex flex-row gap-x-6 w-full">
        {members.map((m, i) => (
          <MemberCard key={m.name + i} {...m} />
        ))}
      </div>
    </div>
  );
}

type MemberInfo = {
  name: string;
  description: string;
  photo: string;
  teams: string[];
};

function MemberCard(member: MemberInfo) {
  return (
    <div
      className="flex flex-col bg-gray-600 h-96 w-full justify-end rounded-3xl
            px-4 py-5"
    >
      <div className="flex flex-col gap-y-6">
        <div>
          <h4 className="text-white font-bold">{member.name}</h4>
          <p className="text-white">{member.description}</p>
        </div>
        <div className="flex flex-row gap-x-7 justify-end">
          {member.teams.map((t, i) => (
            <span
              key={member.name + t + i}
              className="text-white font-light px-3 h-6 border-2 rounded-2xl flex justify-center items-center"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
