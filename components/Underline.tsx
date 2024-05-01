import { ReactNode } from "react";

const Underline = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => <span className={`underline decoration-2 ${className}`}>{children}</span>;

export default Underline;
