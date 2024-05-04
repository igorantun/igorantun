import { ReactNode } from "react";

const Underline = ({
  section,
  children,
}: {
  section: string;
  children: ReactNode;
}) => (
  <span className={`underline decoration-2 decoration-${section}`}>
    {children}
  </span>
);

export default Underline;
