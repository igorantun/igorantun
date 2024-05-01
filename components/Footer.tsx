import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

const Footer = () => (
  <footer className="flex flex-col">
    {Object.entries(siteConfig.links).map(([name, href]) => (
      <Link
        isExternal
        key={name}
        href={href}
        showAnchorIcon
        color="success"
        className="w-min ml-4 mt-2"
      >
        {name}
      </Link>
    ))}
  </footer>
);

export default Footer;
