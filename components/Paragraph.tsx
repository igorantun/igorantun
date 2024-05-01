import { ReactNode } from "react";

const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className="mb-2 text-justify">{children}</p>
);

export default Paragraph;
