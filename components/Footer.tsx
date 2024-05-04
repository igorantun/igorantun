import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { GitHubIcon } from "@/icons/GitHub";
import { LinkedInIcon } from "@/icons/LinkedIn";

const Footer = () => (
  <footer className="flex pt-2 md:flex-col gap-2">
    <Button
      as={Link}
      size="lg"
      isExternal
      isIconOnly
      color="default"
      variant="light"
      aria-label="GitHub"
      className="fill-foreground"
      href={siteConfig.links.GitHub}
    >
      <GitHubIcon size={32} />
    </Button>
    <Button
      as={Link}
      size="lg"
      isExternal
      isIconOnly
      color="default"
      variant="light"
      aria-label="LinkedIn"
      className="fill-foreground"
      href={siteConfig.links.LinkedIn}
    >
      <LinkedInIcon size={32} />
    </Button>
  </footer>
);

export default Footer;
