import Underline from "@/components/Underline";
import Paragraph from "@/components/Paragraph";
import SectionTitle from "@/components/SectionTitle";

const About = () => (
  <section id="about" className="pt-8 md:pt-16">
    <SectionTitle section="about">About me</SectionTitle>
    <Paragraph>
      👋 I&apos;m Igor, a <b>Senior Software Engineer</b> with over{" "}
      <Underline section="about">8 years of work experience</Underline>.
    </Paragraph>
    <Paragraph>
      Technology has been a significant part of my life since pretty much
      always. Stimulated by my father, my first contact with programming was at{" "}
      <Underline section="about">age 8</Underline>, back when webpages were just
      a lot of pretty tables and Adobe Flash (ActionScript) was all we had to
      make them interactive.
    </Paragraph>
    <Paragraph>
      Fast-forward to today and I&apos;ve had the priviledge of working at a
      diverse variety of projects and companies, ranging from seed stage
      startups to IPO&apos;d enterprises. Specialized in Node.js (Typescript),
      React, and AWS — but always open to using new stacks.
    </Paragraph>
    <Paragraph>
      As a <Underline section="about">Tech Lead</Underline> at{" "}
      <a href="#z1" className="text-experience">
        Z1
      </a>
      , I pioneered the development of a digital bank, architecting and leading
      critical business products that{" "}
      <Underline section="about">
        reliably handled hundreds of thousands of monthly transactions
      </Underline>{" "}
      using serverless technologies. I was their very first hire and worked
      together with the founders to build out and scale both the product and the
      engineering team.
    </Paragraph>
    <Paragraph>
      At{" "}
      <a href="#pagarme" className="text-experience">
        Pagar.me
      </a>{" "}
      (a StoneCo company), I contributed to large-scale financial
      infrastructure, responsible for processing a massive share of
      Brazil&apos;s ecommerce TPV. There, I contributed to core payment
      processing systems as well as got the opportunity to work on prototyping
      new products, ranging from mobile applications to external APIs and SDKs.
    </Paragraph>
    <Paragraph>
      I excel in remote and collaborative settings, delivering impactful
      solutions in software architecture, API design and infrastructure
      management. Passionate about innovation, I bring a unique blend of
      technical expertise, leadership, and business/product insights to every
      project.
    </Paragraph>
  </section>
);

export default About;
