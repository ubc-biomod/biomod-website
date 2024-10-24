import _Kshemaka from "./profile-pictures/Kshemaka.jpg";
import _Miguel from "./profile-pictures/Miguel.jpg";
import _MelanieCha from "./profile-pictures/Melanie_Chan.jpg";
import _Karina from "./profile-pictures/Karina_Akhmedove.jpg";
import _Paniz from "./profile-pictures/Paniz_Ghavimi.jpg";
import _Ethan from "./profile-pictures/Ethan_Rajkumar.jpg";
import _Maggie from "./profile-pictures/Maggie_Wang.jpg";
import _Laura from "./profile-pictures/female_empty_img.png";
import _Rosalie from "./profile-pictures/Rosalie_Zhou.jpg";
import _Talia from "./profile-pictures/Talia_Feng.jpg";
import _Tianne from "./profile-pictures/Tianne_Kussat.png";
import _TiffanyW from "./profile-pictures/female_empty_img.png";
import _Victoria from "./profile-pictures/female_empty_img.png";
import _Catherine from "./profile-pictures/Catherine_Zhu.png";
import _Christina from "./profile-pictures/female_empty_img.png";
import _Emma from "./profile-pictures/Emma_Lo.png";
import _Enda from "./profile-pictures/Enda_Çakmak.jpeg";
import _Grace from "./profile-pictures/Grace_Wang.jpeg";
import _Rowel from "./profile-pictures/Rowel_Sabahat.png";
import _Minh from "./profile-pictures/Minh_Au.jpg";
import { StaticImageData } from "next/image";

export type MemberInfo = {
  name: string;
  description: string;
  photo: StaticImageData;
  teams: string[];
};

export const members: MemberInfo[] = [
  {
    name: "Minh Au",
    description:
      "Hello!! I'm Minh, and I'm the other co-lead on the website team. You could find me mainly in the basement, though I don't play piano, sew or climb (or code :P). I'm the main reason why the website is late a few times.",
    photo: _Minh,
    teams: ["web", "lead"],
  },
  {
    name: "Grace Wang",
    description:
      "Hi! My name is Grace! I am the team lead for the dynamic video crew team. I’m currently a fourth year student studying Biology in the Faculty of Science. I love hiking and enjoying nature. I find beauty not just in the complexities in science but also in the great outdoors. Going on hikes and stargazing is a passion of mine since I cherish moments that nature offers. During my spare time, I tend to paint portraits or sceneries and make music. It’s a blend of my love for the arts and science.",
    photo: _Grace,
    teams: ["video", "lead"],
  },
  {
    name: "Enda Cakmak",
    description:
      "Hi! I'm Enda and I am a 4th year Biomedical Engineering student at UBC! I have been a part of the wet lab team at BIOMOD since my 2nd year because I was interested in learning more about nanotechnology, molecular biology and wet lab experiments. Being part of a research project fully ran by students is a very exciting and unique experience! In my free time, I like boxing, feeding my caffeine addiction, and watching F1!",
    photo: _Enda,
    teams: ["wetlab", "lead"],
  },
  {
    name: "Emma Lo",
    description:
      "Emma is a Biochemistry student whose true passion in life is to discover the scientific formula for the perfect nap. She shows up to BIOMOD meetings running on nothing but sushi, matcha, and a pinch of stardust, but is always ready to help out. In her free time she enjoys reading, drawing, or teaching herself a new musical instrument.",
    photo: _Emma,
    teams: ["wetlab"],
  },
  {
    name: "Christina Zhang",
    description:
      'Meet the Dilophosaurus, a carnivorous dinosaur from the Early Jurassic distinguished by its double-crested appearance. Despite its Hollywood portrayal in "Jurassic Park," there\'s no evidence that Dilophosaurus spat venom. Instead, its crests likely served a display or recognition function. With a lightweight build and long legs, it was likely a fast and agile predator. Dilophosaurus offers a glimpse into the varied forms and functions of crests in dinosaurs, showcasing the complexity of adaptations that evolved throughout the vast timeline of dinosaur existence on our planet.',
    photo: _Christina,
    teams: ["wetlab"],
  },
  {
    name: "Catherine Zhu",
    description:
      "Hi! I’m a 4th year biomedical engineering student in the systems and signals stream! I’m interested in learning about MEMS and nanotechnology. In my spare time, I enjoy playing computer games and reading Webtoons. I also like to figure skate and ski.",
    photo: _Catherine,
    teams: ["wetlab"],
  },
  {
    name: "Victoria Chong",
    description:
      "The Parasaurolophus, a herbivorous dinosaur of the Late Cretaceous, featured a distinctive cranial crest—a long, tubular structure extending backward from its skull. Recent studies suggest that this hollow crest acted as a resonating chamber, enabling Parasaurolophus to produce low-frequency sounds. This adaptation likely played a role in communication, helping these dinosaurs convey information or warn of potential threats. The intricate structures found in dinosaur anatomy continue to unravel, providing valuable insights into the behaviors and adaptations that allowed them to thrive in prehistoric environments.",
    photo: _Victoria,
    teams: ["wetlab", "finance"],
  },
  {
    name: "Tiffany Wai",
    description:
      "In the Late Cretaceous period, the Spinosaurus, one of the largest carnivorous dinosaurs, inhabited river systems and displayed a unique adaptation: a crocodile-like snout. This adaptation suggests a semi-aquatic lifestyle, with Spinosaurus possibly hunting fish. With an estimated length of up to 50-59 feet (15-18 meters), it surpasses even the Tyrannosaurus rex in size. The discovery of Spinosaurus fossils in North Africa provides insights into the incredible diversity and adaptations of dinosaurs in different environments during prehistoric times.",
    photo: _TiffanyW,
    teams: ["wetlab"],
  },
  {
    name: "Tianne Kussat",
    description:
      "Hi I'm Tianne, I'm a second year Microbiology and Immunology student. I'm on the website team where I make graphics. Outside of studying, I spend my time reading - my favourite book is The Tenth Muse by Catherine Chung.",
    photo: _Tianne,
    teams: ["web", "graphics"],
  },
  {
    name: "Talia Feng",
    description:
      "Hello, I'm Talia. I am a second year student studying computer science and microbiology and immunology. I am passionate about  drug delivery and immunology as well as software development. I joined BIOMOD because I enjoy the teamworking aspect and enjoy experimenting in labs. ",
    photo: _Talia,
    teams: ["wetlab"],
  },
  {
    name: "Rosalie Zhou",
    description:
      "Hello! My name is Rosalie Zhou and I am a 2nd year Science student studying Pharmacology. I am a part of the Social Media and Events sub-team and I post updates of our progress as well as share interesting findings by our team with UBC students.",
    photo: _Rosalie,
    teams: ["social media", "lead"],
  },
  {
    name: "Laura Siemens",
    description:
      "Did you know that the Stegosaurus, a herbivorous dinosaur from the Late Jurassic period, had a brain the size of a walnut, despite its massive size? Despite its relatively small brain, the Stegosaurus had large plates along its back and four sharp spikes on its tail, likely used for defense against predators. These distinct features make the Stegosaurus a fascinating example of the diverse adaptations that existed among dinosaurs during their reign on Earth.",
    photo: _Laura,
    teams: ["wetlab", "supervisor", "finance"],
  },
  {
    name: "Miguel Tsai",
    description:
      "Hi, I am Miguel and I also one of the co-captains for UBC BIOMOD this year.\
      I am very excited to be leading this team amazing team. It is unknown if I\
      have other interests outside of BIOMOD, I eat, live and breathe BIOMOD.  If\
      I could eat my DNA origami , I would. Maybe that is a future BIOMOD\
      project..... Well, I also love playing nintendo games.",
    photo: _Miguel,
    teams: ["advisor", "legend"],
  },
  {
    name: "Melanie Chan",
    description:
      "Melanie is a second year science student studying Microbiology\
      and Immunology. When she isn't invested in reading up on new advancements in\
      DNA technology and all its applications, she enjoys reading science fiction\
      and writing poetry.",
    photo: _MelanieCha,
    teams: ["wetlab", "lead"],
  },
  {
    name: "Karina Akhmedova",
    description:
      "I'm studying biomedical engineering and am very passionate about\
      stem cell research related to immunology and neurology. Studying these\
      subjects always makes me feel curious and intrigued, but also empty-headed\
      sometimes (you can never know enough!). In my free time, I exercise at the\
      gym, run, and learn to do an arm stand. cool fact: an active lifestyle\
      increases life expectancy. In biomod, I love the community of young and\
      passionate scientists we have, trying to solve modern problems in the field of\
      medicine.",
    photo: _Karina,
    teams: ["captain"],
  },
  {
    name: "Paniz Ghavimi",
    description:
      "Hiii everyone! My name is Paniz, and I am an incoming\
      fourth-year student in the Faculty of Science with a major focus on Molecular\
      and Cellular Biology. I am a member of the Wet Lab Team, where I help with\
      designing projects and performing experiments. In my free time, I enjoy\
      kayaking, playing tennis, and discovering new ice cream flavours with\
      friends!",
    photo: _Paniz,
    teams: ["captain"],
  },
  {
    name: "Maggie Wang",
    description:
      "Hi, I’m Maggie! I am a third year biomedical engineering student\
      and the finance team lead at UBC BIOMOD. I’m interested in 3D printing,\
      quantum physics, and microbiology. In my free time, I like to read, watch bad\
      reality TV, and go on hikes. My favourite book that I’ve read this year is\
      Breasts and Eggs by Mieko Kawakami.",
    photo: _Maggie,
    teams: ["wetlab", "finance", "lead"],
  },
];
