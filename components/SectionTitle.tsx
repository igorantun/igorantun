import { ReactNode } from "react";

const SectionTitle = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => (
  <h1 className={`mb-2 font-serif font-bold text-3xl ${className}`}>
    {children}
  </h1>
);

export default SectionTitle;
