import Image from "next/image";
import Link from "next/link";
import React from "react";


type CardProps = {
  title: string;
  description: string;
  imagesrc: string;
  imagealt: string;
  href: string;
};
const Card = ({ title, description, imagesrc, imagealt, href, ...rest }: CardProps) => {
  return (
    <li className="w-[80%] hover:bg-[#f4f4f4] transition-[background-color] duration-300 rounded-3xl p-3">
      <Link href={href} className="flex">
        <div className="flex flex-col grow">
          <h2 className="text-4xl text-pretty">{title}</h2>
          <div className="flex h-[60%] items-center">
            <p className="text-lg text-balance">{description}</p>
          </div>
          <p className='mt-auto text-blue-400 text-center'>Read More</p>

        </div>

        <Image src={imagesrc} width={360} height={360} alt={imagealt} />
      </Link>
    </li>
  );
};


const Section2 = () => {
  return (
    <section className="mx-auto">
      <h1 className="text-5xl font-medium text-center mb-4">
        BI Built to Scale, Designed to Last
      </h1>

      <ul className="flex flex-col items-center gap-8">
        <Card
          href={"/longGame"}
          title="Not Just Dashboards: Building for the Long Game"
          description="Dashboards are the output—but long-term value comes from designing systems that evolve with the business. I prioritize solutions that scale over time, support multiple use cases, and reduce duplication across teams. My goal is to deliver not just answers, but a reporting foundation that grows alongside the organization."
          imagesrc="/selfie.JPG"
          imagealt="..."
        />

        <Card
          href={"/cleanModels"}
          title="Clean Models, Reusable Logic"
          description="A deep dive into how I design semantic models, create centralized measures, and avoid bloated, hard-to-maintain logic."
          imagesrc="/selfie.JPG"
          imagealt="..."
        />

        <Card
          href={"/"}
          title="Scalable BI by Design"
          description="How UX thinking meets data modeling—ensuring dashboards aren’t just functional, but intuitive and future-proof."
          imagesrc="/selfie.JPG"
          imagealt="..."
        />

        <Card
          href={"/"}
          title="Beyond the Dataset: APIs, Scraping & Automation"
          description="How I bring engineering into BI—pulling data from non-traditional sources, automating data prep, and building dynamic data pipelines."
          imagesrc="/selfie.JPG"
          imagealt="..."
        />
      </ul>
    </section>
  );
};

export default Section2;
