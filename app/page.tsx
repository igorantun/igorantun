import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";

import Profile from "@/components/Profile";

export default function Home() {
  return (
    <section>
      <Profile />
    </section>
  );
}
