import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";

const Sidebar = () => (
  <div className="flex flex-col justify-between">
    <Profile />
    <Menu />
    <Footer />
  </div>
);

export default Sidebar;
