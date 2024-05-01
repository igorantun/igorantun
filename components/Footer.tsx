import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/divider";

const Footer = () => (
  <footer>
    <Divider className="md:hidden mt-4 mb-2" />
    <div className="md:px-16 flex justify-center md:items-end md:flex-col gap-4">
      {Object.entries(siteConfig.links).map(([name, href]) => (
        <Link
          isExternal
          key={name}
          href={href}
          showAnchorIcon
          color="secondary"
          className="md:pr-2 md:mr-1"
        >
          {name}
        </Link>
      ))}
    </div>
    <Divider className="md:hidden mt-2" />
  </footer>
);

export default Footer;
