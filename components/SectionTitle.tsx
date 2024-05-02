import { ReactNode } from "react";

const SectionTitle = ({
  section,
  children,
}: {
  section: string;
  children: ReactNode;
}) => (
  <h1
    className={`mb-2 font-serif font-bold text-3xl underline decoration-2 decoration-wavy underline-offset-4 text-${section}`}
  >
    {children}
  </h1>
);

export default SectionTitle;
