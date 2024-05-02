import SectionTitle from "@/components/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard";

const Experience = () => (
  <section id="experience" className="pt-8 md:pt-16">
    <SectionTitle section="experience">Work experience</SectionTitle>
    <div className="flex flex-col gap-4">
      <ExperienceCard
        slug="series"
        title="Series"
        role="Senior Software Engineer"
        date="AUGUST 2023 - APRIL 2024"
        location="Remote @ US"
        skills={[
          "Typescript",
          "Node.js",
          "Nest.js",
          "React",
          "PostgreSQL",
          "Terraform",
          "AWS",
        ]}
        description="Series is an enterprise operating system that unifies your finances
        and operations.\nAt Series I worked as a Software Engineer on both the
        backend (Nest.js) and frontend (React.js) of their suite of products."
        logo="https://pbs.twimg.com/profile_images/1671212645784096768/agg34sLj_400x400.png"
      />
      <ExperienceCard
        slug="z1"
        title="Z1 (YCombinator W21)"
        role="Tech Lead"
        date="JUNE 2020 - JULY 2023"
        location="Remote @ São Paulo, Brazil"
        skills={[
          "Typescript",
          "Node.js",
          "React Native",
          "GraphQL",
          "DynamoDB",
          "Amazon SQS",
          "Terraform",
          "AWS",
        ]}
        description="Z1 is a digital bank from Brazil made for teenagers and young adults. At Z1, I was the very first empolyee and worked as a Tech Lead, responsible for architecting, developing, maintaining and monitoring critical business products such as Pix (instant bank transfers), card emitting and transaction processing. All of the tech stack is serverless and hosted on AWS."
        logo="https://play-lh.googleusercontent.com/Jp9BaaHSU1hRXDUQY0tE46sP-us45EPPORDuuePgHY6mND_G2ELg0wxHKVkXqr4h_wM"
      />
      <ExperienceCard
        slug="pagarme"
        title="Pagar.me"
        role="Software Engineer"
        date="JANUARY 2018 - MAY 2020"
        location="São Paulo, Brazil"
        skills={[
          "Node.js",
          "React",
          "PostgreSQL",
          "MongoDB",
          "Terraform",
          "AWS",
        ]}
        description="Pagar.me is a digital payment company based in Brazil. At Pagar.me, I was responsible for designing, developing, testing, deploying and maintaining scalable web services. We took care of the product from its conception to its deployment, including planning its infrastructure, continuously improving it through customer feedback, and monitoring its performance."
        logo="https://avatars.githubusercontent.com/u/3846050?s=280&v=4"
      />
    </div>
  </section>
);

export default Experience;
