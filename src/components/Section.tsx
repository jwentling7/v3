import { ReactNode } from "react";

type SectionProps = { children: ReactNode };

const Section = ({ children }: SectionProps) => {
  return (
    <section className="flex flex-1 justify-center px-16">
      <div className="max-w-screen-2xl w-full py-48">
        <div className="flex flex-col gap-8">{children}</div>
      </div>
    </section>
  );
};

export default Section;
