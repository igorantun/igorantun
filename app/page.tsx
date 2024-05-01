import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:w-2/5 md:sticky top-0 pt-6 md:pt-16 h-full">
        <Sidebar />
      </div>
      <div className="md:w-3/5 flex flex-col">
        <About />
        <Experience />
      </div>
    </div>
  );
};

export default Home;
