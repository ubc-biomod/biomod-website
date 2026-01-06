import { StaticImageData } from "next/image";

// Import new profile pictures
import _Kevin from "./profile-pictures/Devin_Deng-Han.jpg";
import _Dorothy from "./profile-pictures/Dorothy_Ye.jpg";
import _Hazel from "./profile-pictures/Hazel_Leung.jpg";
import _Juanse from "./profile-pictures/Juanse_Becerra.jpg";
import _Yvette from "./profile-pictures/Yvette_Sin.jpg";
import _Bonnie from "./profile-pictures/Bonnie_Xing.jpg";
import _Lujine from "./profile-pictures/Lujine_Younis.jpg";
import _Sienna from "./profile-pictures/Sienna_Juco.png";
import _Anya from "./profile-pictures/Anya_Wongreantong.jpg";
import _Cooper from "./profile-pictures/Cooper_Nam.jpg";
import _Jessica from "./profile-pictures/Jessica_Song.jpg.png";
import _Selina from "./profile-pictures/Selina_Fu.jpg";
import _Charity from "./profile-pictures/Charity_Grey.jpg";
import _Nicole from "./profile-pictures/Nicole_Chan.jpg";
import _Dariga from "./profile-pictures/Dariga_Tanabayeva.jpg";
import _Sruthi from "./profile-pictures/Sruthi_Magesh-Shanmugaram.jpg";
import _Tianne from "./profile-pictures/Tianne_Kussat.jpg";
import _Emma from "./profile-pictures/Emma_Lo.jpg";
import _SongHa from "./profile-pictures/Song_Ha-Nguyen.jpg";
import _Joseph from "./profile-pictures/Joseph_Deng.jpg";
import _Angel from "./profile-pictures/Angel_Xu.jpg";
import _Julian from "./profile-pictures/Julian_Mark-Santos.jpg";
import _Jisong from "./profile-pictures/Jisong_Han.jpg";
import _Aieshini from "./profile-pictures/Aieshini_Udumullage.jpg";
import _Jueun from "./profile-pictures/Jueun_Woo.jpg";
import _Lecia from "./profile-pictures/Lecia_Zhu.jpg";
import _Hannah from "./profile-pictures/Hannah_Cheng.jpg";
import _David from "./profile-pictures/David_Yang.jpg";

export type MemberInfo = {
  name: string;
  description: string;
  photo: StaticImageData;
  teams: string[];
};

// Helper function to normalize subteam names to team array
function normalizeTeams(subteam: string): string[] {
  const subteamLower = subteam.toLowerCase().trim();
  const teams: string[] = [];

  if (subteamLower.includes("wetlab")) teams.push("wetlab");
  if (
    subteamLower.includes("computational") ||
    subteamLower.includes("computation")
  )
    teams.push("computational");
  if (subteamLower.includes("video")) teams.push("video");
  if (subteamLower.includes("website") || subteamLower.includes("web"))
    teams.push("web");
  if (subteamLower.includes("finance")) teams.push("finance");
  if (subteamLower.includes("marketing")) teams.push("marketing");

  // Check for lead positions in description or subteam
  if (subteamLower.includes("lead")) teams.push("lead");

  return teams.length > 0 ? teams : ["member"];
}

export const members: MemberInfo[] = [
  {
    name: "Kevin Deng-Han",
    description:
      "I'm a 4th year Honours in Biotechnology Major interested in researching all aspects of cancer development and therapies. I enjoy climbing, lifting, running, and drawing in my free time. My favourite book(s) are the three body problem trilogy. Did you know that orangutans have a 600lb grip strength? I wish I was built like that.",
    photo: _Kevin,
    teams: normalizeTeams("Wetlab"),
  },
  {
    name: "Dorothy Ye",
    description:
      "Hi, my name is Dorothy. I'm a first-year engineering student. I'm part of the computational sub-team and excited to meet more people.",
    photo: _Dorothy,
    teams: normalizeTeams("Computational"),
  },
  {
    name: "Hazel Leung",
    description:
      "Hi! My name is Hazel and I am a fourth year Biomedical Engineering Student at UBC.",
    photo: _Hazel,
    teams: normalizeTeams("Wetlab"),
  },
  {
    name: "Juanse Becerra",
    description:
      "Hello fellow innovator! A little bit about myself: I'm fascinated by how cells and living systems operate from the microscopic to nanoscopic scale. My curiosity often leads me to explore how the body can misfire and become its own enemy — and whether we can engineer ways to reverse it!? Outside the lab, you'll find me singing, playing tennis, or enjoying good food with friends. If you're ever up for a bite and a great conversation, count me in — science tastes better when shared.",
    photo: _Juanse,
    teams: normalizeTeams("Wetlab"),
  },
  {
    name: "Yvette Sin",
    description:
      "Hi! I'm a fourth-year Biochemistry student minoring in Commerce, and I'm the Finance Lead at BIOMOD. I'm passionate about drug design and clinical research, and I hope to pursue a career in this field. In my free time, I love working out and trying new restaurants around Vancouver!",
    photo: _Yvette,
    teams: ["finance", "lead"],
  },
  {
    name: "Bonnie Xing",
    description:
      "Hi, I'm Bonnie, a Biochemistry student at UBC. I love blending creativity and research, whether that's designing visuals, filming stories, or exploring new ideas in/out of the lab. Out of Science, you will find me journaling or drawing at random study spots at IKB! :))",
    photo: _Bonnie,
    teams: normalizeTeams("Video Team"),
  },
  {
    name: "Lujine Younis",
    description:
      "Hi I'm Lujine! I'm in my 4th year of Biomedical Engineering, with a focus in biomechanics/cellular engineering. I joined BIOMOD in my second year, where I am currently a member of the wetlab subteam.I enjoy being active (swim, run, gym), reading and occasionally playing the piano. I enjoy trying out new places to eat, especially when they have a good selection of sweet treats!",
    photo: _Lujine,
    teams: normalizeTeams("Wetlab"),
  },
  {
    name: "Sienna Juco",
    description:
      "Hi! My name is Sienna, and I am a 2nd year Neuroscience student. As part of the Wetlab subteam, I enjoy being able to apply innovative solutions to current scientific challenges. Outside of the lab, I love reading, spending time outdoors and learning about new discoveries.",
    photo: _Sienna,
    teams: normalizeTeams("Wetlab"),
  },
  {
    name: "Anya Wongreantong",
    description: "Member of the Wetlab and Computational subteams.",
    photo: _Anya,
    teams: normalizeTeams("Wetlab/Computation"),
  },
  {
    name: "Cooper Nam",
    description:
      "Hi! My name is Cooper and I'm a second year Biomedical Engineering student. I joined BIOMOD because I wanted to apply my skills and learn in an on hands environment. In my spare time I like to play sports, read, and cook. I love the work that we've been doing so far and I can't wait to contribute to more projects in the future.",
    photo: _Cooper,
    teams: normalizeTeams("Computational"),
  },
  {
    name: "Jessica Song",
    description:
      "Hi! I'm a 3rd year Neuroscience student. This is my third year being a part of BIOMOD and I'm really excited for the upcoming project and work ahead :) I'm on a quest to collect Eppendorf pipette pens. In the lab, you can find me picking worms under the microscope (I work with c elegans). And in my free time, I really enjoy reading, visiting new cafes, and going on motorcycle trips!",
    photo: _Jessica,
    teams: normalizeTeams("Wetlab + Video"),
  },
  {
    name: "Selina Fu",
    description:
      "Hi! I am Computational Subteam member in second year in Computer Science and Statistics.",
    photo: _Selina,
    teams: normalizeTeams("Computational"),
  },
  {
    name: "Charity Grey",
    description:
      "Charity is a 5th year student in CS and Biology. She's really interested in doing cool stuff with data and software, especially in life science fields. When she's not procrastinating, you can find her cooking up a new recipe that she's half-following or doing random rabbit holes- for example learning about the life cycle of ants or what on earth a JWT means.",
    photo: _Charity,
    teams: normalizeTeams("Computational"),
  },
  {
    name: "Nicole Chan",
    description:
      "Hello everyone my name is Nicole and I love Shrek and dogs and cows and running :DDD",
    photo: _Nicole,
    teams: normalizeTeams("Video/Wetlab"),
  },
  {
    name: "Dariga Tanabayeva",
    description:
      "Hi! My name is Dariga Tanabayeva, and I'm an undergraduate student studying Cellular, Anatomical, and Physiological Sciences at UBC. I'm passionate about biomedical research and fascinated by how synthetic biology and nanotechnology can be used to address global health challenges. I'm particularly interested in developing innovative therapeutic approaches that bridge biology, engineering, and medicine. Outside the lab, I love traveling and dancing.",
    photo: _Dariga,
    teams: normalizeTeams("Wetlab"),
  },
  {
    name: "Sruthi Magesh",
    description:
      "Hi! I'm Sruthi, a 4th year biomedical engineering student on the Wetlab subteam. I'm interested in immunotherapeutics and spinal cord repair. I am also an avid coffee drinker, and like to roller blade in my free time.",
    photo: _Sruthi,
    teams: normalizeTeams("Wetlab"),
  },
  {
    name: "Tianne Kussat",
    description:
      "Hi I'm Tianne! I'm a 4th year Microbiology and Immunology + Data Science student. I'm on the website team where I help make graphics for our super cool website. I like to spend my free time hiking/backpacking, reading, and baking!",
    photo: _Tianne,
    teams: normalizeTeams("Website"),
  },
  {
    name: "Emma Lo",
    description:
      "Hi, I'm Emma! I'm a fourth year Biochemistry student who is currently on co-op, and I'm one of the Wetlab Leads. I've been part of UBC BIOMOD since my first year, making this my fourth year on the team! I've really enjoyed all the interesting things I've had the chance to dive into and learn about, and the cool people I get to meet during my time with BIOMOD. In my free time I enjoy exploring new cafes, going on hikes, and taking a good nap :)",
    photo: _Emma,
    teams: ["wetlab", "lead"],
  },
  {
    name: "Song Ha Nguyen",
    description:
      '"Life is too short, and DNA is too long" by the Jurassic Park\'s author - Michael Crichton is my favorite quote. I love DNA. Did you know the telomere (non-coding DNA sequence) is hypothesized to be our molecular aging clock? Diet, sleep, and lifestyle can influence our telomere\'s length thus cells life span. As a picky eater, cool biological evidence really scares me (in a good way) into eating healthy, sleeping well, and grinding hours of badminton, my other biggest passion. Extracting the practicality of such beautiful molecules of life into BIOMOD\'s projects would also truly "lengthen" my telomere.',
    photo: _SongHa,
    teams: normalizeTeams("Wetlab"),
  },
  {
    name: "Joseph Deng",
    description:
      "Hi I'm Joseph and I'm in my third year in Computer Science and Physics 🤓! I don't know too much about biology stuff so I'm just here to work on the website, outside of biomod and school I also like rock climbing, running, guitar, clairo, and matcha!!!",
    photo: _Joseph,
    teams: normalizeTeams("Website"),
  },
  {
    name: "Angel Xu",
    description:
      "Hi, I'm Angel! I am a third year Pharmacology major. In my spare time I love working on BIOMOD (ofc), playing volleyball, reading Dan Brown novels, binging comedy sitcoms and playing with my dog Coco! I am interested in drug delivery mechanisms and clinical applications of DNA origami :)",
    photo: _Angel,
    teams: normalizeTeams("Wetlab"),
  },
  {
    name: "Julian Santos",
    description:
      "Hiiii I'm Julian but I also go by Juju :D ! I like doing science communication and video stuff. Two words to describe me would be funny and nonchalant. In my free time I like long walks at the beach and chasing people at night. I also play extreme sports like volleyball and badminton and league of legends. #JujuRulesJosephDrools",
    photo: _Julian,
    teams: normalizeTeams("Video"),
  },
  {
    name: "Jisong Han",
    description:
      "Hello! I'm Jisong. I'm a second year pharmacology student interested in drug delivery systems or nanotechnology in general. In my free time, I can be found watching random shows on Netflix with ice cream.",
    photo: _Jisong,
    teams: normalizeTeams("Video"),
  },
  {
    name: "Aieshini Udumullage",
    description:
      "Hello! My name is Aieshini and I am in the 3D Blender group of the Video Subteam. I am in my 3rd year studying Neuroscience and am most interested in genetic engineering research particularly related to neurodevelopmental disorders and therapeutics. One reason I joined BIOMOD is to expand my knowledge about bioengineering as it has always been in the back of my mind! In my free time I love to go backpacking, climbing and hiking, when I am not spending time outdoors, you'll probably find me playing with my pet rabbits or finding new tofu recipes!",
    photo: _Aieshini,
    teams: normalizeTeams("Video"),
  },
  {
    name: "Jueun Woo",
    description: "I'm studying Materials Engineering. I also go by John Woo.",
    photo: _Jueun,
    teams: normalizeTeams("Wetlab"),
  },
  {
    name: "Lecia Zhu",
    description:
      "Hello! I'm Lecia, studying Biochemistry and Forensic Science. When I am not stressed about school (which is almost 24/7 nowadays), I really enjoy doing puzzles, DIY model kits and crafts. Currently, I'm felting capybaras. I also like reading and playing games in my spare time.",
    photo: _Lecia,
    teams: normalizeTeams("Website"),
  },
  {
    name: "Hannah Cheng",
    description:
      "Hi I'm Hannah, I'm in my first year of pharmsci, and I'm on the marketing team! I like my cat and aquariums.",
    photo: _Hannah,
    teams: normalizeTeams("Marketing"),
  },
  {
    name: "David Yang",
    description:
      "Hi! I'm David, and I'm studying Computer Science and Math. I'm part of the website team at BIOMOD, where I help build and maintain our website.",
    photo: _David,
    teams: normalizeTeams("Website"),
  },
];
