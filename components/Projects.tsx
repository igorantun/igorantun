import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => (
  <section id="projects" className="pt-8 md:pt-16">
    <SectionTitle section="projects">Projects</SectionTitle>
    <div className="flex flex-col gap-4">
      <ProjectCard
        title="Node Chat"
        slug="node-chat"
        skills={["Node.js", "Express", "Websockets", "Material Design"]}
        description="A chat application that supports emoji, links, and much more. It was my first project using Node.js and it quickly became a popular project for other beginners to learn Javascript as well."
      />
    </div>
  </section>
);

export default Projects;
