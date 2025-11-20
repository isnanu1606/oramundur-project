import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "TopUp Game",
      desc: "Platform top-up cepat dan terpercaya dengan antarmuka sederhana.",
      link: "https://topup.oramundur.id",
       image: "/topup-game.png", 
    },
    {
      title: "Smart School System",
      desc: "Sistem sekolah digital — Absensi QR, e-Library, AI guru asisten.",
      link: "https://smartschool.oramundur.id",
      image: "/smart-school-system.png",
    },
  ];

  return (
    <>
      <Hero />
      <section id="projects" className="py-20 bg-[#fafafa]">
        <h2 className="text-center text-3xl font-bold text-navy mb-10">
          Proyek Unggulan Kami
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </section>
    </>
  );
}
