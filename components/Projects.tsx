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
        fallbackStars={754}
        fallbackForks={743}
      />
      <ProjectCard
        title="Node-Slack-IRC"
        slug="node-slack-irc"
        skills={["Node.js", "Slack API", "IRC"]}
        description="A NodeJS bridge for integrating Slack and IRC channels by allowing messages to be sent from both sides and integrating them seamlessly."
        fallbackStars={14}
        fallbackForks={3}
      />
      <ProjectCard
        title="Unsplashify"
        slug="unsplashify"
        skills={["Electron", "Unsplash API", "Material Design"]}
        description="A desktop app made with NodeJS and Electron that gets images from Unsplash and make them easily available for you to set as your desktop wallpaper."
        fallbackStars={10}
        fallbackForks={6}
      />
      <ProjectCard
        title="Card Games API"
        slug="card-games-api"
        skills={["Node.js", "Ramda", "Docker"]}
        description="API for managing card games."
        fallbackStars={5}
        fallbackForks={0}
      />
    </div>
  </section>
);

export default Projects;
