import Image from "next/image";
import Header from "./components/Header/page";
import About from "./components/About/page";
import Contract from "./components/Contract/page";
import Footer from "./components/Footer/page";
import Skills from "./components/Skills/page";
import Works from "./components/Works/page";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <div className="">
          <div className=" pt-32  px-4 md:px-20 lg:px-40 xl:px-32 2xl:px-64">
            <About />
          </div>
        </div>

        <Skills />
        <Works />
        <Contract />
        <Footer />
      </div>
    </div>
  );
}
