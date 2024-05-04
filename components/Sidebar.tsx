import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";

const Sidebar = () => (
  <div className="h-full flex flex-col justify-between items-center">
    <Profile />
    <Menu />
    <Footer />
  </div>
);

export default Sidebar;
