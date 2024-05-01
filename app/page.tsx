import Menu from "@/components/Menu";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:w-2/5 md:sticky top-16 h-full">
        <div className="flex flex-col justify-between">
          <Profile />
          <Menu />
          <Footer />
        </div>
      </div>
      <div className="md:w-3/5 flex flex-col gap-16">
        <About />
        <Experience />
      </div>
    </div>
  );
};

export default Home;
