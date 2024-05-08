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
        logo="/images/seriesfi.png"
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
        logo="/images/z1.png"
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
        logo="/images/pagarme.png"
      />
      <ExperienceCard
        slug="vitrineed"
        title="Vitrineed"
        role="Co-founder & Software Engineer"
        date="FEBRUARY 2017 - JANUARY 2018"
        location="Remote, Brazil"
        skills={[
          "Node.js",
          "MongoDB",
          "Restify",
          "Python",
          "Scrapy",
          "ElasticSearch",
          "Neo4J",
        ]}
        description="On Vitrineed, aside from being a co-founder, I was responsible for the development and maintenance of our main Node.js API and our proprietary web scraping software to extract and structure data from various brazilian e-commerces into our databases."
        logo="/images/vitrineed.jpg"
      />
      <ExperienceCard
        slug="syligo"
        title="Syligo"
        role="Contract Full-Stack Software Engineer"
        date="SEPTEMBER 2015 - OCTOBER 2017"
        location="Remote, Brazil"
        skills={[
          "Node.js",
          "MongoDB",
          "React",
          "Angular",
          "Webpack",
          "Gulp",
          "EJS",
          "SASS",
          "AWS",
        ]}
        description="I have worked with Syligo on multiple projects, ranging from responsive web applications and hotsites to backend APIs, refactoring, restructuring and documenting them."
        logo="/images/syligo.png"
      />
      <ExperienceCard
        slug="budbuds"
        title="BudBuds.us"
        role="Software Engineer"
        date="NOVEMBER 2016 - JANUARY 2017"
        location="Remote, Uruguay"
        skills={["Node.js", "MongoDB"]}
        description="On BudBuds.us I was responsible for documenting and writing setup tutorials, wikis and examples for their code base and development workflow, as well as working on improving their Node.js backend API."
        logo="/images/budbuds.png"
      />
      <ExperienceCard
        slug="homest"
        title="Homest"
        role="Contract Full-Stack Software Engineer"
        date="SEPTEMBER 2015 - OCTOBER 2017"
        location="Remote, Brazil"
        skills={["Node.js", "MongoDB", "Gulp", "EJS", "Angular", "SASS", "AWS"]}
        description="At Homest, I was responsible for building responsive hotsites, maintaining and refactoring their main Angularweb application and Node.js + MongoDB backend API."
        logo=""
      />
    </div>
  </section>
);

export default Experience;
